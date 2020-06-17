const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");

admin.initializeApp(functions.config().firebase);
const cors = require("cors");
const router = express();

router.use(cors({ origin: true }));

// Obtener todos los pacientes
router.get("/", async (req, res) => {
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

// Obtener paciente por ID
router.get("/patient/:patientId", async (req, res) => {
  const patient = await admin
    .firestore()
    .collection("patients")
    .doc(req.params.patientId)
    .get()
    .then(doc => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        console.log("No such document!");
        return {};
      }
    });
  res.send(patient);
});

// Agregar paciente
router.post("/patient", async (req, res) => {
  const patient = await admin
    .firestore()
    .collection("patients")
    .add(req.body)
    .then(docRef => {
      return docRef.id;
    });
  res.send(patient);
});

// Editar paciente por ID
router.put("/patient/:patientId", async (req, res) => {
  const patient = await admin
    .firestore()
    .collection("patients")
    .doc(req.params.patientId)
    .update(req.body)
    .then(doc => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        console.log("No such document!");
        return {};
      }
    });
  res.send(patient);
});

// Eliminar paciente por ID
router.delete("/patient/:patientId", async (req, res) => {
  const patient = await admin
    .firestore()
    .collection("patients")
    .doc(req.params.patientId)
    .delete();
  res.send(patient);
});

exports.patients = functions.https.onRequest(router);
