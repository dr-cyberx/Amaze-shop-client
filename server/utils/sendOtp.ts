// const accountSid = process.env.TWILLIO_ACCOUNT_SID;
// const authToken = process.env.TWILLIO_AUTH_TOKEN;
const client = require('twilio')(
  'AC95f351d2bdff3e4060d39c391b1d6894',
  '4f9eed297e6d62e1950d0582c401f1cc',
);

const sendOtp = async (phoneNumber: number): Promise<string | null> => {
  try {
    const OTP: number = Math.floor(1000 + Math.random() * 9000);
    await client.messages
      .create({
        body: `${OTP}`,
        messagingServiceSid: process.env.MESSAGING_SERVICE,
        to: `91${phoneNumber}`,
      })
      .then((message: any) => console.log(message.sid))
      .done();
    return `${OTP}`;
  } catch (error: any) {
    return null;
  }
};

export default sendOtp;
