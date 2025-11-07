

const Users=require("./model/user")
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");



let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});


let create_mail_options = (userInfo) => {
  return (mailOptions = {       
    from: process.env.mail,
    to: userInfo.reciever,
    subject: `Loan Disbursement Receipt`,

html:`<h2 style="margin:0 0 8px;font-size:20px;color:#0b1226;">Loan Disbursement Receipt</h2>
<p style="margin:0 0 16px;color:#475569;line-height:1.5;">
  Hello <strong>Anthony Beyda</strong>,<br>
  This is an automated receipt from <strong>Softjovial</strong> confirming that we have successfully transferred your requested loan.
</p>

<table role="presentation" style="width:100%;border-collapse:collapse;margin-bottom:14px;">
  <tr>
    <td style="padding:8px 0;color:#6b7280;font-size:13px;">Amount transferred</td>
    <td style="padding:8px 0;font-weight:700;color:#16a34a;text-align:right;">$ 2,100</td>
  </tr>
  <tr>
    <td style="padding:8px 0;color:#6b7280;font-size:13px;">Recipient</td>
    <td style="padding:8px 0;font-weight:600;text-align:right;">Anthony Beyda</td>
  </tr>
  <tr>
    <td style="padding:8px 0;color:#6b7280;font-size:13px;">Wallet address</td>
    <td style="padding:8px 0;font-family:monospace;font-size:13px;text-align:right;">bc1qx9wwfegx9mcszzhasssj4ps2elucjh3nt8mmmu</td>
  </tr>
  <tr>
    <td style="padding:8px 0;color:#6b7280;font-size:13px;">Loan source</td>
    <td style="padding:8px 0;font-weight:600;text-align:right;">Softjovial</td>
  </tr>
  <tr>
    <td style="padding:8px 0;color:#6b7280;font-size:13px;">Interest rate</td>
    <td style="padding:8px 0;font-weight:600;text-align:right;">10% monthly interest</td>
  </tr>
 
  <tr>
    <td style="padding:8px 0;color:#6b7280;font-size:13px;">Transaction ID</td>
    <td style="padding:8px 0;font-weight:600;text-align:right;">SJTX-20251003-0001</td>
  </tr>
  <tr>
    <td style="padding:8px 0;color:#6b7280;font-size:13px;">Date</td>
    <td style="padding:8px 0;font-weight:600;text-align:right;">October 3, 2025</td>
  </tr>
</table>

<p style="margin:0 0 12px;color:#475569;line-height:1.5;">
  <strong>Notice:</strong> This receipt confirms a completed transfer.
`
  });
}




transporter.sendMail(
      create_mail_options({
        first_name: "Anthony", 
        last_name: "Beyda",
        reciever: "anthonybeyda@gmail.com",

        // reciever: "softcp226@gmail.com",
      }),
      (err, info) => {
        if (err) {
          console.log(`❌ Error sending email ${err.message}`);
          return reject(err);
        }
        console.log(`✅ Email sent email ${info.response}`);
        // resolve(info);
      }
    );


