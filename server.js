const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

// Middleware
// app.use(express.static(path.join(__dirname, './build/static')))
app.use(express.static(path.join(__dirname + 'public')))
app.use(express.json());



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contactform.html');
    // res.send('Hello!')
})

app.post('/', (req, res) => {
    const transporter = nodemailer.createTransport({
        service:  'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: process.env.USER_EMAIL,
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.send('error');
        } else {
            console.log('email sent: ' )
            console.log(info.response)
            res.send('success')
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})