// const nodemailer = require('nodemailer');
import nodemailer from "nodemailer";

export function generateRandomOtp() {
  const digits = "0123456789";
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yatin300701@gmail.com",
    pass: "guyetrpqmyoulntz",
  },
});

export const mail = async (to, subject, txt) => {
  const mailOptions = {
    from: "yatin300701@gmail.com",
    to: to,
    subject: subject,
    text: txt,
  };
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
