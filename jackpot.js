

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
    subject: `🎉 Jackpot Winner Notification`,

html:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🎉 Jackpot Winner Notification</title>
</head>
<body style="margin:0;padding:0;background-color:#f9fafb;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;margin:30px auto;background:#ffffff;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.05);overflow:hidden;">
    <tr>
      <td style="background-color:#0f172a;padding:20px;text-align:center;">
        <img src="https://softjovial.ltd/assets/logo.png" alt="SoftJovial Ltd" style="width:120px;margin-bottom:10px;" />
        <h2 style="color:#ffffff;margin:0;font-size:22px;">🎉 Congratulations, You Won the Jackpot!</h2>
      </td>
    </tr>

    <tr>
      <td style="padding:30px 25px;">
        <p style="color:#1e293b;font-size:15px;line-height:1.6;margin-bottom:16px;">
          Dear <strong>${userInfo.first_name} ${userInfo.last_name}</strong>,
        </p>

        <p style="color:#334155;font-size:15px;line-height:1.6;margin-bottom:20px;">
          We’re thrilled to announce that your trading activity has triggered one of our exclusive <strong>SoftJovial Jackpot Rewards!</strong> 
          This is part of our ongoing reward system for <strong>VIP Traders</strong> who demonstrate consistency and excellence in trading.
        </p>

        <table width="100%" style="border-collapse:collapse;margin:20px 0;">
          <tr>
            <td style="padding:8px 0;color:#6b7280;font-size:13px;">Transaction ID</td>
            <td style="padding:8px 0;font-weight:600;text-align:right;">SJTX-20251003-0001</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280;font-size:13px;">Date</td>
            <td style="padding:8px 0;font-weight:600;text-align:right;">October 5, 2025</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280;font-size:13px;">Reward Type</td>
            <td style="padding:8px 0;font-weight:600;text-align:right;">VIP Jackpot Bonus</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280;font-size:13px;">Amount Won</td>
            <td style="padding:8px 0;font-weight:600;text-align:right;color:#16a34a;">$52,962</td>
          </tr>
        </table>

        <p style="margin:0 0 12px;color:#475569;line-height:1.5;">
          <strong>Notice:</strong> Jackpot triggers are <strong>available exclusively to VIP traders only</strong>.always ensure your account is upgraded to VIP status and maintain active trading.
        </p>

        <div style="text-align:center;margin:25px 0;">
          <a href="https://softjovial.ltd/vip" style="display:inline-block;background-color:#2563eb;color:#fff;text-decoration:none;padding:12px 28px;border-radius:6px;font-weight:600;">
           Login to my account
          </a>
        </div>

        <p style="font-size:13px;color:#64748b;text-align:center;margin-top:30px;">
          Thank you for being a valued part of <strong>SoftJovial Ltd</strong>.<br>
          Keep trading, keep winning!
        </p>
      </td>
    </tr>

    <tr>
      <td style="background:#f1f5f9;text-align:center;padding:15px;font-size:12px;color:#94a3b8;">
        &copy; 2025 SoftJovial Ltd. All rights reserved.<br>
        <a href="https://softjovial.ltd" style="color:#2563eb;text-decoration:none;">www.softjovial.ltd</a>
      </td>
    </tr>
  </table>
</body>
</html>

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


