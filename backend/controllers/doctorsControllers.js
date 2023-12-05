const pool = require("../config/db");

const getDoctors = async (req, res) => {
  try {
    const doctors = await pool.query("select * from doctors_information");
    res.status(200).json(doctors);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ Message: "Something went wrong" });
  }
};

const getDoctorsFees = async (req, res) => {
  const doctor = "Dr. Manik Dalvi";
  const fees = await pool.query(
    "SELECT * FROM doctors_fees WHERE doctor_name = $1",
    [doctor]
  );
  res.status(200).json(fees.rows);
};

const getDoctorsSlot = async (req, res) => {
  const doctor = "Dr. Manik Dalvi";
  const slots = await pool.query(
    "SELECT * FROM doctors_slots WHERE doctor_name = $1",
    [doctor]
  );
  res.status(200).json(slots.rows);
};

module.exports = { getDoctors, getDoctorsFees,getDoctorsSlot };
