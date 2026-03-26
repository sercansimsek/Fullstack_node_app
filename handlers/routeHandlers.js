import { addNewSighting } from "../utils/addNewSightings.js";
import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res) {
	const data = await getData();
	const stringifiedData = JSON.stringify(data);
	sendResponse(res, 200, "application/json", stringifiedData);
}

export async function handlePost(req, res) {
	try {
		const parsedBody = await parseJSONBody(req);
		const sanitizedBody = sanitizeInput(parsedBody);
		await addNewSighting(sanitizedBody);
		sendResponse(res, 201, "application/json", JSON.stringify(sanitizedBody));
	} catch (error) {
		sendResponse(
			res,
			400,
			"application/json",
			JSON.stringify({ error: error }),
		);
	}
}
