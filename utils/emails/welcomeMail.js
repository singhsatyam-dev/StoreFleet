// Import the necessary modules here
import nodemailer from "nodemailer";

export const sendWelcomeEmail = async (user) => {
  // Write your code here
   const transporter = nodemailer.createTransport({
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.STORFLEET_SMPT_MAIL,
      pass: process.env.STORFLEET_SMPT_MAIL_PASSWORD,
    },
  });

  const message = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2 style="color: #2c3e50;">Welcome to StoreFleet 🚀</h2>
      <p>Hi <strong>${user.name}</strong>,</p>
      <p>We’re excited to have you onboard!</p>
      <p>Your account has been successfully created with email:</p>
      <p><strong>${user.email}</strong></p>
      <br/>
      <p>Happy Shopping! 🛒</p>
      <p><strong>StoreFleet Team</strong></p>
    </div>
  `;

  await transporter.sendMail({
    from: `"StoreFleet" <${process.env.STORFLEET_SMPT_MAIL}>`,
    to: user.email,
    subject: "Welcome to StoreFleet 🎉",
    html: message,
  });
};
