require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Atlas Connected");

    const password = "admin123";
    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
      email: "admin@askmecredit.com",
      password: hashedPassword
    });

    console.log("Admin created");
    console.log("Email: admin@askmecredit.com");
    console.log("Password: admin123");

    process.exit();
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

createAdmin();
