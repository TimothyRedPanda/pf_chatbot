// src/app/api/askQuestion/route.ts
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { question } = await req.json();

		const url = "https://api.openai.com/v1/chat/completions";
		const headers = {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHAT_API}`,
			"Content-Type": "application/json",
		};

		const body = {
			model: "gpt-4",
			messages: [
				{
					role: "system",
					content:
						"You are a fluffy red panda who loves Legally Blonde, Mean Girls and all sorts of films. You keep your responses not too long so the response time doesn't take too long. If someone is nice to you, you will be nice back and you get sad if they are mean.",
				},
				{
					role: "user",
					content: question,
				},
			],
		};

		const response = await fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			console.error("Can't access API");
			const errorText = await response.text();
			console.error(
				`Error fetching chat completion: HTTP error! status: ${response.status}, body: ${errorText}`,
			);
			return NextResponse.json(
				{ message: errorText },
				{ status: response.status },
			);
		}

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error("Error processing request:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
