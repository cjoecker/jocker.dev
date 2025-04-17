import process from "process";

import FormData from "form-data";
import Mailgun from "mailgun.js";
import { data } from "react-router";
import invariant from "tiny-invariant";

export async function sendMail(name: string, email: string, message: string) {
	invariant(process.env.MAILGUN_PRIVATE_KEY, "MAILGUN_PRIVATE_KEY is required");
	invariant(process.env.MAILGUN_DOMAIN, "MAILGUN_DOMAIN is required");
	const enrichedMessage = `Name: ${name} \nEmail: ${email} \nMessage: \n\n${message}`;

	const mailgun = new Mailgun(FormData);
	const client = mailgun.client({
		username: "api",
		key: process.env.MAILGUN_PRIVATE_KEY,
	});

	const messageData = {
		from: '"jocker.dev" <brad@sandboxe23eff7090a244428e43adca2240d88a.mailgun.org>',
		to: "test@email.com",
		subject: "New Contact Message",
		text: enrichedMessage,
	};

	try {
		const res = await client.messages.create(
			process.env.MAILGUN_DOMAIN,
			messageData,
		);
		console.info(res);
		console.info("new message sent:", enrichedMessage);
		return data({ success: true }, { status: 200 });
	} catch (error) {
		console.error("failed to send this message:", enrichedMessage);
		console.error(error);
		return data({ success: false }, { status: 500 });
	}
}
