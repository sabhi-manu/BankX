import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

console.log(process.env.SMTP_PASS)
console.log(process.env.SMTP_USER)

const transporter = nodemailer.createTransport({
    service: "gmail",

    port: 587,
    secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
})


async function sendMail({ to, subject, text, html }) {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject,
            text,
            html
        })

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error("Error while sending mail:", error);
        throw error; 
    }
}

export default sendMail

