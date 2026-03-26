import sanitizeHTML from "sanitize-html";

export function sanitizeInput(data) {
	const sanitizedData = {};

	for (const [key, value] of Object.entries(data)) {
		if (typeof value === "string") {
			sanitizedData[key] = sanitizeHTML(value, {
				allowedAttributes: {},
				allowedTags: ["b"],
			});
		} else {
			sanitizedData[key] = value;
		}
	}

	return sanitizedData;
}
