const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const Patient = require('./Model/Patient');
const Doctor = require('./Model/doctor');
const Notification = require('./Model/notification');

//Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/IT6203', { useNewUrlParser: true })
    .then(() => console.log('Connected'))
    .catch(() => console.log('Error Connecting'));

const baseAPI = '/api/v1/';


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())



// PRESCRIPTION START
app.post(baseAPI + "prescription/add", (req, res) => {
    const patient = new Patient({
      patient: req.body.patient,
      prescription: req.body.prescription,
      dosage: req.body.dosage,
      usageInterval: req.body.usageInterval,
      pharmacy: req.body.pharmacy,
      manufacturer: req.body.manufacturer,
      presidingDoctor: req.body.presidingDoctor
    });


    patient.save()
        .then(() => console.log('Successfully Added Patient'))
      .then(res.status(200).send("DONE"))
        .catch(err => console.log(err))
});

app.get(baseAPI + "prescription/get", (req, res) => {
    Patient.find()
        //if data is returned, send data as a response
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
});

app.delete(baseAPI + 'prescription/delete/:id', (req, res, next) => {
  // console.log("AM HERE")
    Patient.deleteOne({ _id: req.params.id })
        .then(result => {
            console.log(result);
            res.status(200).json("Deleted!");
        })
})

app.put(baseAPI + 'prescription/update/:id', (req, res, next) => {
  // Patient.update
  console.log("ID:" + req.params.id)

  if (mongoose.isValidObjectId(req.params.id)) {
    Patient.findOneAndUpdate({_id: req.params.id},
      {$set: {
          patient: req.body.patient,
          prescription: req.body.prescription,
          dosage: req.body.dosage,
          usageInterval: req.body.usageInterval,
          pharmacy: req.body.pharmacy,
          manufacturer: req.body.manufacturer,
          presidingDoctor: req.body.presidingDoctor
      }}, {new: true}
    )
      .then((patient) => {
        if (patient)
          console.log(patient);
        else
          console.log('No data exist for this ID');
      })
      .catch((err) => {
        console.log(err);
        res.status('400').send('ERROR')
      })
  } else {
    console.log("Invalid Id")
  }
})

app.get(baseAPI + 'prescription/find/:searchItem', (req, res) => {
  Patient.find({prescription: req.params.searchItem})
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
})

// PRESCRIPTION END


// DOCTOR START
app.get( baseAPI + 'doctors/get', (req, res, next) => {
  //call mongoose method find (MongoDB db.Students.find())
  Doctor.find()
    //if data is returned, send data as a response
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
});


//Find Doctors
app.get(baseAPI + 'doctor/find/:search', (req, res) => {
  // console.log(req.params.search)
  Doctor.find({lastName: req.params.search})
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
})


// serve incoming post requests to /students
app.post( baseAPI + 'doctors/add', (req, res, next) => {
  const doctor = new Doctor({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    city: req.body.city,
    specialty: req.body.specialty
  });
  //send the document to the database
  doctor.save()
    //in case of success
    .then(() => { console.log('Success');})
    //if error
    .catch(err => {console.log('Error:' + err);});
});

app.delete( baseAPI + "doctors/delete/:id", (req, res, next) => {
  Doctor.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});


// serve incoming put requests to /students
app.put( baseAPI + 'doctors/update/:id', (req, res, next) => {
  console.log("id: " + req.params.id)// check that the parameter id is valid
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set new first and last names
    Doctor.findOneAndUpdate({_id: req.params.id},
      {$set:{firstName : req.body.firstName,
          lastName : req.body.lastName,
          phoneNumber: req.body.phoneNumber,
          city: req.body.city,
          specialty: req.body.specialty}},{new:true})
      .then((doctor) => {
        if (doctor) { //what was updated
          console.log(doctor);
        } else {
          console.log("no data exist for this id");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("please provide correct id");
  }
});

// DOCTOR END



// NOTIFICATION START
app.post(baseAPI + "notification/add", (req, res) => {
  const notification = new Notification({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    type: req.body.type,
    enableNotification: req.body.enableNotification,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    date: req.body.date,
    doctor: req.body.doctor
  });


  notification.save()
    .then(() => console.log('Successfully Added new Notification'))
    .catch(err => console.log(err))
});

app.get(baseAPI + "notification/get", (req, res) => {
  Notification.find()
    //if data is returned, send data as a response
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
});

app.delete(baseAPI + 'notification/delete/:id', (req, res, next) => {
  // console.log("AM HERE")
  Notification.deleteOne({ _id: req.params.id })
    .then(result => {
      console.log(result);
      res.status(200).json("Deleted!");
    })
})

app.put(baseAPI + 'notification/update/:id', (req, res, next) => {
  // Patient.update
  console.log("ID:" + req.params.id)

  if (mongoose.isValidObjectId(req.params.id)) {
    Patient.findOneAndUpdate({_id: req.params.id},
      {$set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          type: req.body.type,
          enableNotification: req.body.enableNotification,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
          doctor: req.body.doctor,
          date: req.body.date
        }}, {new: true}
    )
      .then((patient) => {
        if (patient)
          console.log(patient);
        else
          console.log('No data exist for this ID');
      })
      .catch((err) => {
        console.log(err);
        res.status('400').send('ERROR')
      })
  } else {
    console.log("Invalid Id")
  }
})
module.exports = app;
