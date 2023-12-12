import "../styles/Card.css";
import { useState } from "react";

// let quote = "Simplicity is the ultimate sophistication.";
// let author = "Steve Jobs";

function Card() {
	const [quote, setQuote] = useState(
		"Simplicity is the ultimate sophistication."
	);

	const [author, setAuthor] = useState("Steve Jobs");

	const changeQuote = () => {
		setQuote("This is new Quote");
		setAuthor("New Author");
	};

	return (
		<main>
			<div className="container">
				<p id="quote">
					&quot;
					{quote}
					&quot;
				</p>
				<div>
					<p id="author">{author}</p>
					<button onClick={changeQuote}>
						<i className="fa-solid fa-arrows-rotate"></i>
					</button>
				</div>
			</div>
		</main>
	);
}

export default Card;
