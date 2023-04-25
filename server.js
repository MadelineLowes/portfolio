// const express = require("express");
// var http = require("http");
// const path = require("path")
// const nodemailer = require("nodemailer");
// // const router = express.Router();
// // const cors = require("cors");
// // "use strict";

// const app = express();
// const server = http.Server(app);
// const port = 5000;

// app.set("port", port);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "src/components/Contact.js")))

// // routing
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "src/components/Contact.js"))
// })



const nodemailer = require("nodemailer");
// Import NodeMailer (after npm install)

async function main() {
// Async function enables allows handling of promises with await

  // First, define send settings by creating a new transporter: 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
    port: 465, // Port for SMTP (usually 465)
    secure: true, // Usually true if connecting to port 465
    auth: {
      user: process.env.USER, // Your email address
      pass: process.env.PASS // Password (for gmail, your app password)
      // ⚠️ For better security, use environment variables set on the server for these values when deploying
    },
  });
  
  // Define and send message inside transporter.sendEmail() and await info about send from promise:
  let info = await transporter.sendMail({
    from: `Madeline Lowes <${process.env.USER}>`,
    to: "madeline.e.lowes@gmail.com", // Your email address
    subject: "Testing, testing, 123",
    html: `
    <h1>Hello there</h1>
    <p>Isn't NodeMailer useful?</p>
    `,
  });

  console.log("message sent");
  console.log(info.messageId); // Random ID generated after successful send (optional)
}

main()
.catch(err => console.log(err));



// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
// //   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "madeline.e.lowes@gmail.com", // generated ethereal user
//       pass: "koBteh-2girso-kubqoq", // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);
