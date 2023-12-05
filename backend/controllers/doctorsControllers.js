const pool = require("../config/db");

const getDoctors = async (req, res) => {
  try {
    const doctors = await pool.query("select * from doctors_information");
    res.status(200).json(doctors.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ Message: "Something went wrong" });
  }
};

const getDoctorsFees = async (req, res) => {
  const doctor = req.body.doctor;
  if (!doctor) return res.status(402).json({ message: "Invalid Data" });
  try {
    const fees = await pool.query(
      "SELECT * FROM doctors_fees WHERE doctor_name = $1",
      [doctor]
    );
    res.status(200).json(fees.rows);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getDoctorsSlot = async (req, res) => {
  const doctor = req.body.doctor;
  if (!doctor) return res.status(402).json({ message: "Invalid Data" });
  try {
    const slots = await pool.query(
      "SELECT * FROM doctors_slots WHERE doctor_name = $1",
      [doctor]
    );
    res.status(200).json(slots.rows);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const setDoctorSlot = async (req, res) => {
  const { doctor, time, date, type } = req.body;
  if (!doctor || !time || !date || !type)
    return res.status(402).json({ message: "Invalid Data" });
  try {
    const slots = await pool.query(
      "insert into doctors_slots where docter_name = $1  (doctor_name,time,date,type) values ($2,$3,$4,$5) Returning *",
      [doctor, time, date, type]
    );
    res.status(201).json(slots.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { getDoctors, getDoctorsFees, getDoctorsSlot, setDoctorSlot };
