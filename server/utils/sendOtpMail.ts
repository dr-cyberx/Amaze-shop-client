const SibApiV3Sdk = require('sib-api-v3-sdk');

const sendEmailotp = (): string => {
  const defaultClient = SibApiV3Sdk.ApiClient.instance;

  // Configure API key authorization: api-key
  const apiKey =
    defaultClient.authentications[`${process.env.SEND_IN_BLUE_API_KEY}`];
  apiKey.apiKey = process.env.SEND_IN_BLUE_API_KEY;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail = {
    to: [
      {
        email: 'testmail@example.com',
        name: 'John Doe',
      },
    ],
    templateId: 59,
    params: {
      name: 'John',
      surname: 'Doe',
    },
    headers: {
      'X-Mailin-custom':
        'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
    },
  };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data: any) {
      console.log(`API called successfully. Returned data: ${data}`);
    },
    function (error: any) {
      console.error(error);
    },
  );
  return '0000';
};

export default sendEmailotp;
