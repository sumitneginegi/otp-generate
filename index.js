const otpGen = require("otp-generator")
let otp = otpGen.generate(6, { digits: true, upperCaseAlphabets: false, lowerCaseAlphabets:
     false, specialChars: false })

var sid = "AC0f17e37b275ea67e2e66d289b3a0ef84";
var auth_token = "76f3c4ddee9f25ca0cc8906a54bff318";
var twilio = require("twilio")(sid, auth_token);

twilio.messages
    .create({
        from: "+16086846227",
        to: "+918859066597",
        body: `this is testing otp is ${otp}`,
    })
    .then(function (res) { console.log("message has sent!") })
    .catch(function (err) {
        console.log(err);
    });