import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest){
    const {name, email, message} = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({message: "All fields are required"}, {status: 404});
    }

    try {
        //configure nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.PASSWORD_USER,
            },
        });

        //Email options
        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Message from ${name}`,
            text: message,
            html: `
                <p><strong>Name:</strong>${name}</p>
                <p><strong>Email:</strong>${email}</p>
                <p><strong>Message:</strong>${message}<p>
            `,
        };

        //Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({message: 'Email sent successfully'}, {status: 200});
        
    } catch (error) {
        console.error('Error sending email: ', error);
        return NextResponse.json({message: 'Internal server error'}, {status: 500});
    }
}