const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const express = require("express");
const cors = require("cors");

const router = express();
// Automatically allow cross-origin requests
router.use(cors({ origin: true }));

router.get("/patient/:id", async (req, res) => {
  const patient = await admin
    .firestore()
    .collection("patients")
    .doc(req.params.id)
    .get();
  res.send(patient);
});

router.get("/patients", async (req, res) => {
  const patients = await admin
    .firestore()
    .collection("patients")
    .get();
  var lista = [];
  patients.docs.forEach(doc => {
    lista.push({ id: doc.id, data: doc.data() });
  });
  res.send(lista);
});

router.post("/patient", async (req, res) => {
  const patient = await admin
    .firestore()
    .collection("patients")
    .add(req.body);
  res.send(patient);
});
router.put("/patient/:id", async (req, res) => {
  const patient = await admin
    .firestore()
    .collection("patients")
    .doc(req.params.id)
    .update(req.body);
  res.send(patient);
});
router.delete("/patient/:id", async (req, res) => {
  const patient = await admin
    .firestore()
    .collection("patients")
    .doc(req.params.id)
    .delete();
  res.send(patient);
});

exports.patients = functions.https.onRequest(router);
