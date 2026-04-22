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

async function sendTransactionEmail({userName,email,amount,fromAccount,toAccount}) {
    const subject = "Transaction Alert from BankX";
    const text = `Hello ${userName} , \n\nA transaction has been made on your account. Please review the details below:\n\nAmount: ${amount}\nFrom: ${fromAccount}\nTo: ${toAccount}\n\nIf you did not authorize this transaction, please contact our support team immediately.\n\nBest regards,\nThe BankX Team`;
    const html = `<p>Hello ${userName} ,</p><p>A transaction has been made on your account. Please review the details below:</p><ul><li>Amount: ${amount}</li><li>From: ${fromAccount}</li><li>To: ${toAccount}</li></ul><p>If you did not authorize this transaction, please contact our support team immediately.</p><p>Best regards,<br>The BankX Team</p>`;


    try {
        await sendMail({
            to:email,
            subject,
            text,
            html
        })
    } catch (error) {
        console.log("Failed to send transaction email.", error);

    }
    
}

async function sendReversalEmail({userName,email,amount,fromAccount,toAccount}) {
    const subject = "Transaction Reversal Alert from BankX";
    const text = `Hello ${userName} , \n\nA transaction reversal has been processed on your account. Please review the details below:\n\nAmount: ${amount}\nFrom: ${fromAccount}\nTo: ${toAccount}\n\nIf you did not authorize this reversal, please contact our support team immediately.\n\nBest regards,\nThe BankX Team`;
    const html = `<p>Hello ${userName} ,</p><p>A transaction reversal has been processed on your account. Please review the details below:</p><ul><li>Amount: ${amount}</li><li>From: ${fromAccount}</li><li>To: ${toAccount}</li></ul><p>If you did not authorize this reversal, please contact our support team immediately.</p><p>Best regards,<br>The BankX Team</p>`;          

    try {   
        await sendMail({
            to:email,
            subject,    
            text,
            html
        })
    }   catch (error) {
        console.log("Failed to send reversal email.", error);
    }   
}



export default {
    sendRegisterEmail,
    sendTransactionEmail,
    sendReversalEmail
}
