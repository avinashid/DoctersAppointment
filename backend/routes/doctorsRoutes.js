const { Router } = require("express");
const {
  getDoctors,
  getDoctorsFees,
  getDoctorsSlot,
  setDoctorSlot,
} = require("../controllers/doctorsControllers");

const router = Router();

router.get("/", getDoctors);
router.get("/fees", getDoctorsFees);
router.get("/slots", getDoctorsSlot);
router.post("/slots", setDoctorSlot);

module.exports = router;
