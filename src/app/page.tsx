"use client";
import { Suspense } from "react";
import askQuestion from "./lib/fetch";
import sanitizeInput from "./utils/sanitizeInput";
import { useState, useEffect, useRef } from "react";
import Response from "./components/Response/Response";
import Button from "./components/Button/Button";

const App = () => {
	// The inputVal is storing our users input which we can then send to the API.
	const [inputVal, setInputVal] = useState("");
	// This is storing our memory, allowing us a list of the questions and responses.
	const [memory, setMemory] = useState<{ text: string; response: string }[]>(
		[],
	);
	// If this is set to true, our Button will display "Thinking..." instead of "Submit".
	const [loading, setLoading] = useState(false);
	// This is referencing the memoryRef so we can scroll to the bottom of the memory.
	const memoryRef = useRef(null);

	async function dataset() {
		// When the dataset function is called, setLoading is set to true, the API is called, and then setLoading is set to false.
		setLoading(true);
		const response = await askQuestion(inputVal);
		console.log(response);
		setLoading(false);
		// If the response is undefined, we set the response to "Apologies, I can't respond right now. Please try again later."
		const newMemory =
			response.choices[0].message.content === undefined
				? {
						text: inputVal,
						response:
							"Apologies, I can't respond right now. Please try again later.",
					}
				: // Otherwise, we set the response to the response from the API.
					{ text: inputVal, response: response.choices[0].message.content };
		// We then add the newMemory to the memory array.
		setMemory((prevMemory) => [...prevMemory, newMemory]);
	}

	// This function is used to handle the change in the input value.
	function handleChange(e: { target: { value: string } }) {
		const sanitizedInput = sanitizeInput(e.target.value);
		setInputVal(sanitizedInput);
	}

	// This useEffect is used to scroll to the bottom of the memoryRef when the memory changes.
	// biome-ignore lint/correctness/useExhaustiveDependencies: Needs to run on memory change
	useEffect(() => {
		if (memoryRef.current) {
			(memoryRef.current as HTMLDivElement).scrollTop = (
				memoryRef.current as HTMLDivElement
			).scrollHeight;
		}
	}, [memory]);

	// This is the welcome message that is displayed when the user first loads the page.
	const welcomeMessage = "Welcome, feel free to have a chat!"
	return (
		<main className="w-screen h-screen bg-slate-800 overflow-x-hidden grid grid-rows-auto-1fr text-slate-50 gap-2">
			<section className="w-full p-4 flex flex-col gap-2 items-center">
				<p className="font-bold text-size-sm w-full md:w-1/2 text-center">
					{welcomeMessage}
				</p>
				<br />
				{(!loading && (
					<Response memory={memory} memoryRef={memoryRef} loading={loading} />
				)) || (
					<div className="w-full md:w-1/2 font-bold text-center rounded-md h-[35em] whitespace-pre-line overflow-y-auto p-5">
						Just having a think...
					</div>
				)}

				<br />
				<section className="flex flex-row gap-5 justify-center w-3/4">
					<input
						type="text"
						value={inputVal}
						onChange={handleChange}
						onFocus={(e) => e.target.select()}
						className="border-blue-200 px-4 py-2 border-2 rounded-md w-1/2 bg-slate-900"
					/>
					<Button onClick={() => dataset()} loading={loading} />
				</section>
			</section>
		</main>
	);
};

export default App;
