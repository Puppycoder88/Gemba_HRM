const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/careersDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Career Submission Schema
const careerSchema = new mongoose.Schema({
  fullName: String,
  company: String,
  email: String,
  phone: String,
  message: String,
});

const Career = mongoose.model('Career', careerSchema);

// POST API - Form Submission
app.post('/submit-form', (req, res) => {
  const { fullName, company, email, phone, message } = req.body;

  // Create a new career document
  const newCareer = new Career({
    fullName,
    company,
    email,
    phone,
    message,
  });

  // Save to database
  newCareer.save()
    .then(() => {
      // Send Email (Optional)
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'jaingarima1795@gmail.com', // Replace with your email
          pass: '123abc@123', // Replace with your email password
        },
      });

      const mailOptions = {
        from: 'jaingarima1795@gmail.com',
        to: email,
        subject: 'Career Form Submission Received',
        text: 'Thank you for submitting your application!',
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.status(200).json({ message: 'Form submitted successfully!' });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Error while submitting the form' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
