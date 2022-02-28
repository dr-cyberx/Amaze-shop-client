import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

// async..await is not allowed in global scope, must use a wrapper
async function sendMailOtp(email: string): Promise<string | null> {
  try {
    const OTP: number = Math.floor(1000 + Math.random() * 9000);

    const transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo> =
      nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'drcyberx@gmail.com', // generated ethereal user
          pass: '@#ItsMeVishalDr.CyberXYt7986577135@#', // generated ethereal password
        },
      });

    // send mail with defined transport object
    const info: SMTPTransport.SentMessageInfo = await transporter.sendMail({
      from: '"Amaze Shop" drcyberx@gmail.com', // sender address
      to: `${email}`, // list of receivers
      subject: 'This is test mail', // Subject line
      text: 'This is test body',
      html: '<b>Hello world?</b>', // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    return `${OTP}`;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default sendMailOtp;
