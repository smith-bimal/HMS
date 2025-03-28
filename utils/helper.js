const Admin = require("../src/models/adminModel");
const Doctor = require("../src/models/docModel");

//Function to fetch logged in doctor information
async function fetchAdminDetails(userEmail) {
    let user = await Admin.findOne({ email: userEmail });
    if (!user) {
        user = await Doctor.findOne({ email: userEmail });
    }
    return user;
};

//Function to fetch logged in doctor information
async function fetchDoctorDetails(userEmail) {
    const doctor = await Doctor.findOne({ email: userEmail });
    return doctor;
};

module.exports = { fetchAdminDetails, fetchDoctorDetails };