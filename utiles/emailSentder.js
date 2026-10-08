const nodemailer = require("nodemailer");

const emailSender = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "salmanfarshidevel@gmail.com",
      pass: "gyyayfwactdntkap",
    },
  });

  const info = await transporter.sendMail({
    from: '"Qelviro" <salmanfarshidevel@gmail.com>',
    to: email,
    subject: "Verify Your Email — Qelviro",

    text: `Welcome to Qelviro!

Please verify your email address to complete your registration.

Your verification code is: ${otp}

This code will expire in 10 minutes.

If you didn't create a Qelviro account, you can safely ignore this email.`,

    html: `<div style="margin:0;padding:40px 15px;background:#f1f5f9;font-family:Arial,sans-serif"><div style="max-width:560px;margin:auto;background:#fff;border-radius:18px;overflow:hidden"><div style="padding:35px;text-align:center;background:#0f172a;color:#fff"><h1 style="margin:0;font-size:32px">Qelviro</h1><p style="margin:8px 0 0;color:#94a3b8;font-size:13px">SHOP SMART. LIVE BETTER.</p></div><div style="padding:40px;text-align:center"><h2 style="color:#0f172a">Verify Your Email</h2><p style="color:#64748b;line-height:1.7">Thanks for creating an account with <b style="color:#0f172a">Qelviro</b>. Please use the verification code below.</p><div style="display:inline-block;padding:20px 35px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px"><small style="color:#64748b;letter-spacing:1px">VERIFICATION CODE</small><div style="margin-top:8px;color:#2563eb;font-size:34px;font-weight:800;letter-spacing:8px">${otp}</div></div><p style="color:#64748b;font-size:14px">This code will expire in <b>10 minutes</b>.</p><hr style="border:0;border-top:1px solid #e2e8f0;margin:30px 0"><p style="color:#94a3b8;font-size:13px">If you didn't create a Qelviro account, you can safely ignore this email.</p></div><div style="padding:25px;text-align:center;background:#f8fafc;color:#94a3b8;font-size:12px">© ${new Date().getFullYear()} Qelviro. All rights reserved.</div></div></div>`,
  });

  console.log("Email sent:", info.messageId);
};

module.exports = emailSender;
