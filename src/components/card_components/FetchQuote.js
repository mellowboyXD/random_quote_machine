export async function FetchQuote(url) {
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"X-Api-Key": "5pWEW7364mVbnXeDX0tNHg==cfkSF3LMa9boIrQu",
			"Content-Type": "application/json",
		},
		// body: JSON.stringify(data)
	});
	return response;
}
