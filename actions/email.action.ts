'use server';

import nodemailer from 'nodemailer';

export const sendEmail = async (
  email: string,
  name: string,
  message: string
) => {
  const emailMessage = {
    from: email,
    to: process.env.SMTP_EMAIL,
    subject: 'Cooperation Inquiry - Frontend Development',
    text: message,
    html:
      `<p>Name : ` +
      name +
      `
      </br>Mail : ` +
      email +
      `
      </br>Message : ` +
      message +
      `
      </br>
      </p>`,
  };

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PWD,
    },
  });

  transporter.sendMail(emailMessage, (err, info) => {
    console.log(err);
    if (err) {
      return JSON.parse(
        JSON.stringify({
          error: `Connection refused`,
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          message: `Message delivered to ${info.accepted}`,
        })
      );
    }
  });
};
