import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res) {
	const data = await getData();
	const stringifiedData = JSON.stringify(data);
	sendResponse(res, 200, "application/json", stringifiedData);
}

export async function handlePost(req, res) {
	const rawBody = await parseJSONBody(req)
	console.log(rawBody);
	
}
