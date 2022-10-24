const express = require("express");
require("./db/mongoose");
const Patient = require("./models/patient");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.post("/patients", (req, res) => {
  const patient = new Patient(req.body);

  patient
    .save()
    .then(() => {
      res.send(patient);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get("/patients", (req, res) => {
  Patient.find({})
    .then((patients) => {
      res.json(patients);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
