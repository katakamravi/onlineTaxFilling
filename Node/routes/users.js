var express = require('express');
var router = express.Router();
var Razorpay = require('razorpay');
var nodemailer = require('nodemailer');
const { google } = require("googleapis");
const { gmail } = require('googleapis/build/src/apis/gmail');
const OAuth2 = google.auth.OAuth2;

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

// router.post('/email', function (req, res, next) {
//   const response = userEmail(req);
//   res.send(response);
// });


router.post('/email', function (req, res, next) {
  const clientId = '996320987644-6a1fdc8tbvftoudbuf3st7pt6dlfk1hu.apps.googleusercontent.com';
  const clientSecret = 'QSy3IhQblfYsZ-sukWBgm6Kf';
  const refresh = '1//0g7Jug2SA3r6vCgYIARAAGBASNwF-L9Ir2VDaj-6McDiI3GXmud73C-4eTUmh0BWpthA_uQUsXFLQyr0HG4WteAGP8I1SsuYHaPU';
//   const oauth2Client = new OAuth2(
//     clientId,
//     clientSecret
//   );
//   oauth2Client.setCredentials({
//     refresh_token: refresh
// });
// console.log(re);
  // const newAccessToken = oauth2Client.getAccessToken();
  // var transporter = nodemailer.createTransport({
  //   service: 'Gmail',
  //   auth: {
  //     type: 'OAuth2',
  //     user: 'katakamravishankar@gmail.com',
  //     clientId: clientId,
  //     clientSecret: clientSecret,
  //     refreshToken: refresh,
  //     accessToken: "ya29.a0AfH6SMC9vNOet-tVCob6Fn__kdg1oSvZQpHXgTHeIIag11n7ndGzj0IpzHGE0EhQb6jJ8meHNFX3YP1R7GZKhnoJrIpCfgTZ5CNRXfy8jx7Yw-wwd-i12wD8PHayxnhryaSyjyQQF2PFTlU2Xof_C42vA5yx"
  //   }
  // });
 
  const oauth2Client = new OAuth2(
    clientId,
    clientSecret,
);

oauth2Client.setCredentials({
    refresh_token: refresh
});
const newAccessToken = oauth2Client.getAccessToken()
let transporter = nodemailer.createTransport(
    {
        service: 'Gmail',
        auth: {
            type: 'OAuth2',
            user: 'katakamravishankar@gmail.com',
            clientId: clientId,
            clientSecret: clientSecret,
            refreshToken: refresh,
            accessToken: newAccessToken
        }
    },
    {
        // default message fields

        // sender info
        from: 'RaviShankar Katakam <katakamravishankar@gmail.com>'
    }
);
var mailOptions = {
  from: 'katakamravishankar@gmail.com',
  to: req.body.userEmail,
  subject: `Contact name: ${req.body.userName}`,
  html: `<h1>Contact details</h1>
<h2> name:${req.body.userName} </h2><br>
<h2> email:${req.body.userEmail} </h2><br>
<h2> phonenumber:${req.body.userMobile} </h2><br>`
};
transporter.sendMail(mailOptions, function (error, response) {
  if (error) {
    console.log(error);
    next(error); // if error occurs send error as response to client
  }
  else {
    console.log('Email sent: ' +response);
    res.send({ message: 'Email Sent Successfully', value: response })//if mail is sent successfully send Sent successfully as response
  }
});
});

module.exports = router;

