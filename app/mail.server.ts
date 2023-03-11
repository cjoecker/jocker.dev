import process from 'process';

import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import invariant from 'tiny-invariant';

export async function sendMail(name: string, email: string, message: string) {
	invariant(process.env.MAILGUN_PRIVATE_KEY, 'MAILGUN_PRIVATE_KEY is required');
	invariant(process.env.MAILGUN_DOMAIN, 'MAILGUN_DOMAIN is required');
	const enrichedMessage = `Name: ${name} \nEmail: ${email} \nMessage: \n\n${message}`;

	const mailgun = new Mailgun(FormData);
	const client = mailgun.client({
		username: 'api',
		key: process.env.MAILGUN_PRIVATE_KEY,
	});

	const messageData = {
		from: `"jocker.dev" <brad@sandboxe23eff7090a244428e43adca2240d88a.mailgun.org>`,
		to: 'c.jocker@hotmail.com',
		subject: 'New Contact Message',
		text: enrichedMessage,
	};

	client.messages
		.create(process.env.MAILGUN_DOMAIN, messageData)
		.then(res => {
			console.info(res);
		})
		.catch(err => {
			console.error(err);
		});
}
