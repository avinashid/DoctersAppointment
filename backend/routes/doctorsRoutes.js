const { Router } = require("express");
const {
  getDoctors,
  getDoctorsFees,
  getDoctorsSlot,
  setDoctorSlot,
} = require("../controllers/doctorsControllers");

const router = Router();

router.get("/", getDoctors);
router.post("/fees", getDoctorsFees);
router.post("/getSlots", getDoctorsSlot);
router.post("/slots", setDoctorSlot);

module.exports = router;
