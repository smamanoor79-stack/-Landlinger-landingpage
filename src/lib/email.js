import nodemailer from "nodemailer";

export function getTransporter() {
  const { EMAIL_USER, EMAIL_PASS } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error("Missing EMAIL_USER or EMAIL_PASS environment variable");
  }

  return nodemailer.createTransport({
    service: "gmail", // change if using a different provider
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS, // Gmail: use an "App Password", not your normal password
    },
  });
}

export async function sendContactEmail({ name, email, message }) {
  const transporter = getTransporter();

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // where you want to receive contact form messages
    replyTo: email,
    subject: `New contact form message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });
}
