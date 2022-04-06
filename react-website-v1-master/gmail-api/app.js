const nodemailer = require("nodemailer");
const { google } = require("googleapis");
import SignUp from "../src/components/pages/SignUp";

const GOOGLE_CLIENT_ID =
  "671238950123-5ufuh132hfgvtk31btm7gk7moi63n75l.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const GOOGLE_REFRESH_TOKEN =
  "1//045wHb2PfGc_iCgYIARAAGAQSNwF-L9IrntEmv85ayE5D9BhRlmU-adbRF1H8h9P6H2tYZgERM6UPb29eujs2kOLlsYASPBIO44I";

const oAuth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: "yashgadia36@gmail.com",
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        refreshToken: GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "Yash Gadia 👍 <yashgadia36@gmail.com>",
      to: document.getElementById("email"),
      subject: "Trying GOOGLE API",
      text: "Hello I hope u receive this mail",
      html: "<h1>Hello I hope u receive this mail</h1>",
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log("Email is sent", result))
  .catch((error) => console.log(error.message));