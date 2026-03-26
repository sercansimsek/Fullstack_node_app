import { getData } from "../getData.js";
import { sendResponse } from "../sendResponse.js";

export async function handleGet(res) {
	const data = await getData();
	const stringifiedData = JSON.stringify(data);
	sendResponse(res, 200, "application/json", stringifiedData);
}

export function handlePost(req, res) {
	console.log("POST request recieved!");
}
