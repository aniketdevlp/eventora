const dotenv = require('dotenv');
dotenv.config();

// Helper function to hit Brevo's HTTP API
const sendViaBrevo = async (toEmail, subject, htmlContent) => {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'api-key': process.env.BREVO_API_KEY,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            sender: { 
                email: process.env.EMAIL_USER, 
                name: 'Eventora' 
            },
            to: [{ email: toEmail }],
            subject: subject,
            htmlContent: htmlContent
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Brevo API Error: ${JSON.stringify(errorData)}`);
    }

    return await response.json();
};

const sendBookingEmail = async (userEmail, userName, eventTitle) => {
    try {
        const subject = `Booking Confirmed: ${eventTitle}`;
        const html = `
            <h2>Hi ${userName}!</h2>
            <p>Your booking for the event <strong>${eventTitle}</strong> is successfully confirmed.</p>
            <p>Thank you for choosing Eventora.</p>
        `;
        
        await sendViaBrevo(userEmail, subject, html);
        console.log('Email sent successfully to', userEmail);
    } catch (error) {
        console.error('Error sending booking email:', error);
        throw error;
    }
};

const sendOTPEmail = async (userEmail, otp, type) => {
    try {
        const title = type === 'account_verification' 
            ? 'Verify your Eventora Account' 
            : 'Eventora Booking Verification';
            
        const msg = type === 'account_verification'
            ? 'Please use the following OTP to verify your new Eventora account.'
            : 'Please use the following OTP to verify and confirm your event booking.';

        const html = `
            <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
                <h2 style="color: #111;">${title}</h2>
                <p style="color: #555; font-size: 16px;">${msg}</p>
                <div style="margin: 20px auto; padding: 15px; font-size: 24px; font-weight: bold; background: #f4f4f4; width: max-content; letter-spacing: 5px;">
                    ${otp}
                </div>
                <p style="color: #999; font-size: 12px;">This code expires in 5 minutes. If you didn't request this, please ignore this email.</p>
            </div>
        `;

        await sendViaBrevo(userEmail, title, html);
        console.log(`OTP sent to ${userEmail} for ${type}`);
    } catch (error) {
        console.error('Error sending OTP email:', error);
        throw error;
    }
};

module.exports = { sendBookingEmail, sendOTPEmail };