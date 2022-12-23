var express = require('express');
var router = express.Router();
var Razorpay = require('razorpay');
var nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
var smtpTransport = require('nodemailer-smtp-transport');




var instance = new Razorpay({
  key_id: 'rzp_test_2W7iyVeDpzGsDO',
  key_secret: 't3VsISY7rwgY3y8vF25XNykL'
});

/* Post users Email. */
router.post('/orderid', function (req, res, next) {

  var options = {
    amount: req.body.amount,
    currency: 'INR',
    payment_capture: 0
  };
  console.log(JSON.stringify(options));
  instance.orders.create(options, (err, order) => {
    if (err) {
      console.log(err);
      next(err);
    }
    if (order) {
      res.json({ success: true, status: 'Order Created Successfully', value: order, key: 'rzp_test_2W7iyVeDpzGsDO' });
    }
  });
});


router.post('/email', function (req, res, next) {
// const oauth2Client = new OAuth2(
//     "172708659579-biku41tgjdifian2qn0eh7oki5mhb7ei.apps.googleusercontent.com", // ClientID
//     "D3OXfJ1K_ViHkvwO_F7PAi7e", // Client Secret
//     "https://developers.google.com/oauthplayground" // Redirect URL
// );
// oauth2Client.setCredentials({
//     refresh_token: "1//04jt5I457D8jyCgYIARAAGAQSNwF-L9IrJsvwUIanxgvL5RKNeQ75S_vhKn-bvQRFUJg9tm6SQl7-VfebKG_hqUg15n3E68djc-E"
// });
// const accessToken = oauth2Client.getAccessToken();
var smtptransport = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'katakamravishankar@gmail.com', // generated ethereal user
    pass: '9848640520', // generated ethereal password
  },
}));


// let smtpTransport = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: 'katakamravishankar@gmail.com', // generated ethereal user
//     pass: '9848640520', // generated ethereal password
//   },
// });
// const smtpTransport = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//          type: "OAuth2",
//          user: "katakamravishankar@gmail.com", 
//          clientId: "172708659579-biku41tgjdifian2qn0eh7oki5mhb7ei.apps.googleusercontent.com",
//          clientSecret: "D3OXfJ1K_ViHkvwO_F7PAi7e",
//          refreshToken: "1//04jt5I457D8jyCgYIARAAGAQSNwF-L9IrJsvwUIanxgvL5RKNeQ75S_vhKn-bvQRFUJg9tm6SQl7-VfebKG_hqUg15n3E68djc-E",
//          accessToken: accessToken
//     }
// });

const mailOptions = {
    from: "katakamravishankar@gmail.com",
    to: `${req.body.userEmail}`,
    subject: "Testing Mail",
    generateTextFromHTML: true,
    html: `<h1>Contact details</h1>
    <h2> name:${req.body.userName} </h2><br>
    <h2> email:${req.body.userEmail} </h2><br>
    <h2> phonenumber:${req.body.userMobile} </h2><br>`
};

smtptransport.sendMail(mailOptions, (error, response) => {
    if(error) next(error);
    res.json({"success": true, Data: response})
    smtptransport.close();
});
});

module.exports = router;

