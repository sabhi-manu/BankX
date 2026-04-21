import sendMail from "../../services/nodemailer.js";


async function sendRegisterEmail({userName,email}) {
    console.log("check the email and user name in mail register ===>",userName, email)
    
    const subject = "Welcome to BankX !";
    const text = `Hello ${userName} , \n\nWelcome to BankX! We're thrilled to have you on board. If you have any questions or need assistance, feel free to reach out to our support team.\n\nBest regards,\nThe BankX Team`;
    const html = `<p>Hello ${userName} ,</p><p>Welcome to BankX! We're thrilled to have you on board. If you have any questions or need assistance, feel free to reach out to our support team.</p><p>Best regards,<br>The BankX Team</p>`;

    try {
        await sendMail({
            to:email,
            subject,
            text,
            html
        })
    } catch (error) {
        console.log("Failed to send registration email.", error);
    }
    
}


export default {
    sendRegisterEmail
}