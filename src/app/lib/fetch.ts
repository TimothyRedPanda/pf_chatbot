// src/app/lib/fetch.ts
async function askQuestion(question: string) {
	const response = await fetch("/api/askQuestions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ question }),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	return await response.json();
}

export default askQuestion;
