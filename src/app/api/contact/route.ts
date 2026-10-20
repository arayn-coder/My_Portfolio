
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";



export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  timestamp: string;
  userAgent?: string;
  ip?: string;
}

function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return value.replace(/[&<>"']/g, (char) => entities[char]);
}

export async function POST(req: NextRequest) {
  try {
    let body: Record<string, unknown>;

    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload provided." },
        { status: 400 }
      );
    }

    const { name, email, projectType, budget, message } = body;

    // Validate required fields
    if (
      typeof name !== "string" ||
      name.trim().length < 2 ||
      name.trim().length > 100
    ) {
      return NextResponse.json(
        { success: false, error: "Name must be between 2 and 100 characters." },
        { status: 400 }
      );
    }

    const normalizedEmail =
      typeof email === "string" ? email.trim().toLowerCase() : "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      normalizedEmail.length > 254 ||
      !emailRegex.test(normalizedEmail)
    ) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (
      typeof message !== "string" ||
      message.trim().length < 10 ||
      message.trim().length > 5000
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Message must be between 10 and 5000 characters.",
        },
        { status: 400 }
      );
    }

    const validProjectTypes = [
      "Web Development",
      "Website",
      "Web App",
      "E-commerce",
      "Portfolio",
      "Other",
    ];

    const safeProjectType =
      typeof projectType === "string" &&
      validProjectTypes.includes(projectType)
        ? projectType
        : "Web Development";

    const safeBudget =
      typeof budget === "string" && budget.trim().length > 0
        ? budget.trim().slice(0, 100)
        : "Not specified";

    const submission: ContactSubmission = {
      id: `inq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      name: name.trim(),
      email: normalizedEmail,
      projectType: safeProjectType,
      budget: safeBudget,
      message: message.trim(),
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || undefined,
      // Forwarded IP headers may be supplied by proxies.
      // Avoid storing IP addresses unless you actually need them.
    };

    // Check email configuration before accepting the inquiry.
    const { SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

    if (!SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      console.error("Missing SMTP_USER, SMTP_PASS, or CONTACT_TO.");

      return NextResponse.json(
        {
          success: false,
          error: "The email service is temporarily unavailable. Please try again later.",
        },
        { status: 503 }
      );
    }

    // Configure Gmail SMTP.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const safeName = escapeHtml(submission.name);
    const safeEmail = escapeHtml(submission.email);
    const safeProject = escapeHtml(submission.projectType);
    const safeBudgetHtml = escapeHtml(submission.budget);
    const safeMessage = escapeHtml(submission.message).replace(/\n/g, "<br>");

    // Send the email before reporting success.
    await transporter.sendMail({
      from: `"Portfolio Inquiries" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: submission.email,
      subject: `New Portfolio Inquiry: ${submission.projectType}`,
      text: [
        "New inquiry received from your portfolio.",
        "",
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Project Type: ${submission.projectType}`,
        `Budget: ${submission.budget}`,
        `Submitted: ${submission.timestamp}`,
        `Inquiry ID: ${submission.id}`,
        "",
        "Message:",
        submission.message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#222">
          <h2 style="color:#6d28d9">New Portfolio Inquiry</h2>
          <p>You have received a new project inquiry from your portfolio.</p>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px;border:1px solid #ddd"><b>Name</b></td>
              <td style="padding:10px;border:1px solid #ddd">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:10px;border:1px solid #ddd"><b>Email</b></td>
              <td style="padding:10px;border:1px solid #ddd">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding:10px;border:1px solid #ddd"><b>Project</b></td>
              <td style="padding:10px;border:1px solid #ddd">${safeProject}</td>
            </tr>
            <tr>
              <td style="padding:10px;border:1px solid #ddd"><b>Budget</b></td>
              <td style="padding:10px;border:1px solid #ddd">${safeBudgetHtml}</td>
            </tr>
            <tr>
              <td style="padding:10px;border:1px solid #ddd"><b>Date</b></td>
              <td style="padding:10px;border:1px solid #ddd">${escapeHtml(submission.timestamp)}</td>
            </tr>
          </table>
          <h3>Project Message</h3>
          <div style="padding:15px;background:#f5f3ff;border-radius:8px;line-height:1.6">
            ${safeMessage}
          </div>
          <p style="font-size:12px;color:#666">Inquiry ID: ${escapeHtml(submission.id)}</p>
        </div>
      `,
    });

    // Best-effort local persistence.
    // Serverless deployments may not preserve this file.
    try {
      const dataDir = path.join(process.cwd(), "data");
      fs.mkdirSync(dataDir, { recursive: true });

      const filePath = path.join(dataDir, "inquiries.json");

      let existingInquiries: ContactSubmission[] = [];

      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf8");
        const parsed: unknown = JSON.parse(fileContent || "[]");

        if (Array.isArray(parsed)) {
          existingInquiries = parsed as ContactSubmission[];
        }
      }

      existingInquiries.push(submission);

      fs.writeFileSync(
        filePath,
        JSON.stringify(existingInquiries, null, 2),
        "utf8"
      );
    } catch (storageError) {
      console.error("Inquiry email sent, but local persistence failed:", storageError);
    }

    console.log(`[Contact API] Inquiry email sent: ${submission.id}`);

    return NextResponse.json(
      {
        success: true,
        message:
          "Your inquiry has been sent successfully! I'll review it and reply within 24 hours.",
        inquiryId: submission.id,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[Contact API Error]:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to send your inquiry right now. Please try again or email aryan.builds@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      status: "online",
      service: "Portfolio Inquiry Email API",
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}
