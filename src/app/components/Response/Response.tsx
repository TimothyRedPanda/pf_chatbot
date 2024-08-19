interface MemoryItem {
	text: string;
	response: string;
}

interface ResponseProps {
	memory: MemoryItem[];
	memoryRef: React.RefObject<HTMLDivElement>;
	loading: boolean;
}

const Response: React.FC<ResponseProps> = ({ memory, memoryRef, loading }) => {
	return (
		<div
			ref={memoryRef}
			className="w-full md:w-1/2 rounded-md h-[35em] whitespace-pre-line overflow-y-auto p-5"
		>
			{/* This maps over the memory array and displays the questions and responses. */}
			{memory.map((memory, index) => {
				const key = Math.random() * index + 1;
				return (
					<span className="h-3/4" key={key}>
						<span className="flex flex-col gap-2">
							<span className="font-bold px-4 py-2 bg-blue-900 text-slate-50 rounded-full w-fit self-end">
								{memory.text}
							</span>{" "}
							<span className="px-4 py-2 text-slate-50 rounded-full">
								{memory.response}
							</span>
						</span>
						<br />
					</span>
				);
			})}
		</div>
	);
};

export default Response;
