'use server';

import nodemailer from 'nodemailer';
import { resolve } from 'path';

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

  await new Promise((resolve, reject) => {
    transporter.sendMail(emailMessage, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  })
    .then((info: any) =>
      JSON.parse(
        JSON.stringify({
          message: `Message delivered to ${info.accepted}`,
        })
      )
    )
    .catch((err) =>
      JSON.parse(
        JSON.stringify({
          error: `Connection refused`,
        })
      )
    );
};
