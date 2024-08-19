interface ButtonProps {
	onClick: () => void;
	loading: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, loading }) => {
	return (
		<button
			className={`text-slate-50 bg-blue-900 hover:bg-blue-400 transition-all duration-1000 px-4 py-2 rounded-md ${loading ? "animate-bounce animate-infinite animate-duration-1000 animate-ease-in-out animate-normal animate-fill-forwards" : ""}`}
			type="button"
			// When the button is clicked, we call the dataset function.
			onClick={onClick}
		>
			{/* If loading is true, we display "Thinking...", otherwise we display "Submit". */}
			{loading ? "Hmm..." : "Submit"}
		</button>
	);
};

export default Button;
