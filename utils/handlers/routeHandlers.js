import { getData } from "../getData";
import { sendResponse } from "../sendResponse";

export async function handleGet(res) {
	const data = await getData();
	const stringifiedData = JSON.stringify(data);
	sendResponse(res, 200, "application/json", stringifiedData);
}
