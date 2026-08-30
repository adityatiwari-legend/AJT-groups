import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: "recruitment" | "study" | "general" | string;
  message: string;
}

const CATEGORY_NAMES: Record<string, string> = {
  recruitment: "Corporate Recruitment Solutions",
  study: "Study Abroad Consulting",
  general: "Visa & General Enquiries",
};

const CATEGORY_EMAILS: Record<string, string> = {
  recruitment: "hr@ajtoverseas.com",
  study: "recruiter@ajtoverseas.com",
  general: "info@ajtoverseas.com",
};

/**
 * Creates and returns a Nodemailer SMTP transporter.
 */
function createTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for 587 or 25
    auth: {
      user: user || "",
      pass: pass || "",
    },
  });
}

/**
 * Sends a query submission email.
 */
export async function sendQueryEmail(data: ContactFormData) {
  const transporter = createTransporter();

  const categoryLabel = CATEGORY_NAMES[data.inquiryType] || data.inquiryType || "General Enquiry";
  
  // Determine recipient email: custom override from env > category specific > default info
  const defaultRecipient = process.env.CONTACT_RECIPIENT_EMAIL;
  const recipientEmail = defaultRecipient || CATEGORY_EMAILS[data.inquiryType] || "info@ajtoverseas.com";
  
  const rawFrom = process.env.SMTP_FROM || process.env.SMTP_USER || "info@ajtoverseas.com";
  const fromAddress = rawFrom.includes("<") && rawFrom.includes(">")
    ? rawFrom
    : `"AJT Overseas Web Form" <${rawFrom}>`;

  const subject = `[New Website Lead] ${categoryLabel} - ${data.name}`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f1f5f9; margin: 0; padding: 20px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
          .header { background: #173F7A; color: #ffffff; padding: 30px 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px; }
          .header p { margin: 6px 0 0 0; font-size: 13px; color: #D4AF37; font-weight: 600; text-transform: uppercase; tracking: 1px; }
          .body-content { padding: 32px 28px; }
          .badge { display: inline-block; background-color: #eff6ff; color: #173F7A; font-weight: 700; font-size: 12px; padding: 6px 14px; border-radius: 20px; border: 1px solid #bfdbfe; margin-bottom: 24px; }
          .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .info-table td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
          .info-table td.label { font-weight: 700; color: #64748b; width: 35%; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }
          .info-table td.value { font-weight: 600; color: #0f172a; }
          .message-box { background: #f8fafc; border-left: 4px solid #173F7A; border-radius: 0 12px 12px 0; padding: 16px 20px; margin-top: 8px; }
          .message-box h4 { margin: 0 0 8px 0; font-size: 12px; color: #64748b; text-transform: uppercase; }
          .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
          .footer { background: #f8fafc; padding: 20px 24px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>AJT Overseas</h1>
            <p>New Query Form Submission</p>
          </div>
          <div class="body-content">
            <div class="badge">Category: ${categoryLabel}</div>
            
            <table class="info-table">
              <tr>
                <td class="label">Full Name</td>
                <td class="value">${data.name}</td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${data.email}" style="color: #173F7A; text-decoration: none;">${data.email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone Number</td>
                <td class="value"><a href="tel:${data.phone}" style="color: #173F7A; text-decoration: none;">${data.phone}</a></td>
              </tr>
              <tr>
                <td class="label">Submission Date</td>
                <td class="value">${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST</td>
              </tr>
            </table>

            <div class="message-box">
              <h4>Message / Requirements</h4>
              <p>${data.message}</p>
            </div>
          </div>
          <div class="footer">
            This inquiry was submitted from the official AJT Overseas website contact section.
          </div>
        </div>
      </body>
    </html>
  `;

  const textContent = `
New Query Submission - AJT Overseas
==================================
Category: ${categoryLabel}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Date: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST

Message:
${data.message}
  `;

  const mailOptions = {
    from: fromAddress,
    to: recipientEmail,
    replyTo: data.email,
    subject,
    text: textContent,
    html: htmlContent,
  };

  return await transporter.sendMail(mailOptions);
}
