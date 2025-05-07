import { createReadableStreamFromReadable } from "@react-router/node";
import * as Sentry from "@sentry/react-router";
import { renderToPipeableStream } from "react-dom/server";
import { HandleErrorFunction, ServerRouter } from "react-router";

const handleRequest = Sentry.createSentryHandleRequest({
	ServerRouter,
	renderToPipeableStream,
	createReadableStreamFromReadable,
});

export default handleRequest;
export const handleError: HandleErrorFunction = (error, { request }) => {
	if (!request.signal.aborted) {
		Sentry.captureException(error);
		console.error(error);
	}
};
