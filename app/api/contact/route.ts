import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export async function POST(request: Request) {
    try {
        const { name, company, email, phone, course, message } = await request.json();

        const transporter = nodemailer.createTransport({
            host: "smtpout.secureserver.net", 
            secure: false, 
            port: 587, 
            tls: {
                ciphers:'SSLv3'
            },
            requireTLS:true,
            auth: {
                user,
                pass,
            },
        });

        const mailOptions = {
            from: user, 
            to: "support@hackademic.in",
            subject: `Enquiry: ${name}`,
            text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone No.: ${phone}\nCourse: ${course}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            msg: "Message sent successfully",
            status: 200,
        });
    } catch (error) {
        console.error("Error sending email:", error); 
        return new NextResponse("Failed to send message.", { status: 500 });
    }
}
