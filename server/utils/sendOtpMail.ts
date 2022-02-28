const nodemailer = require('nodemailer');

const sendMailOtp = async (to: string): Promise<string | null> => {
  try {
    const OTP: number = Math.floor(1000 + Math.random() * 9000);

    const transporter = await nodemailer.createTransport({
      port: 465, // true for 465, false for other ports
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.ADMIN_EMAIL, // sender address
      to, // list of receivers
      subject: 'Amaze shop otp',
      text: `${OTP}`,
      html: `<br>Otp for verifying you email ${OTP}<br/>`,
    };

    await transporter.sendMail(mailData);
    return `${OTP}`;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default sendMailOtp;
