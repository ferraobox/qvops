const nodemailer = require('nodemailer');
// const companymails = 'qvopsgroup@gmail.com, ferraobox@gmail.com, jjvallina@gmail.com';
const companymails = 'qvopsgroup@gmail.com, ferraobox@gmail.com';
export const sendMail = function (user, msg) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: 'qvopsgroup@gmail.com',
      pass: 'qvops1234',
    },
  });

  return new Promise((resolve, reject) => {
    const localize = JSON.parse(localStorage.getItem('localize'));
    const receiver = msg ? companymails : user;
    const mailtext = msg ? `${localize.mailtextcompany}${user}\n\n${localize.mailmodalmessage}\n\n${msg}` : localize.mailtext;

    transporter.sendMail(
      {
        from: '"QVOPS" <qvopsgroup@gmail.com>', // sender address
        to: receiver, // list of receivers
        subject: msg ? `${localize.mailsubjectcompany} ${user}` : localize.mailsubject,
        text: mailtext,
      },
      (error, info) => {
        if (error) {
          window.alert(error, info);
          reject();
        }
        window.alert(`Email sent to ${receiver} !!`);
        resolve();
      }
    );
  });
};

export default sendMail;
