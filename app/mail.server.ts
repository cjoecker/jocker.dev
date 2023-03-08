import process from 'process';

import nodemailer from 'nodemailer';

export async function sendMail(name: string, email: string, message: string) {
	try {
		const transporter = nodemailer.createTransport({
			host: 'smtp-mail.outlook.com',
			port: 587,
			secure: false,
			auth: {
				user: process.env.EMAIL_SENDER,
				pass: process.env.EMAIL_PASSWORD,
			},
		});

		const enrichedMessage = `Name: ${name} \n Email: ${email} \n Message: \n\n${message}`;

		const info = await transporter.sendMail({
			from: `"Jocker Dev" <${process.env.EMAIL_SENDER}`,
			to: 'test@email.com',
			subject: 'New Contact Message',
			text: enrichedMessage,
		});

		console.info('Message sent: %s', info.messageId);
		console.info('Email Message: \n', enrichedMessage);
	} catch (err) {
		console.error(err);
	}
}
