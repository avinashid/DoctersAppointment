const { Router } = require("express");
const { getDoctors, getDoctorsFees, getDoctorsSlot } = require("../controllers/doctorsControllers");

const router = Router();

router.get("/", getDoctors);
router.get("/fees",getDoctorsFees)
router.get("/slots",getDoctorsSlot)

module.exports = router;
