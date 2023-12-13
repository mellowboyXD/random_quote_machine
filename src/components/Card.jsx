import "../styles/Card.css";
import { useState } from "react";
import Category from "./card_components/Category";
import { FetchQuote } from "./card_components/FetchQuote";

// let quote = "Simplicity is the ultimate sophistication.";
// let author = "Steve Jobs";

function Card() {
	const [quote, setQuote] = useState(
		"Simplicity is the ultimate sophistication."
	);

	const [category, setCategory] = useState("");

	const [author, setAuthor] = useState("Steve Jobs");

	const changeQuote = () => {
		let url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
		FetchQuote(url)
			.then((data) => data.json())
			.then((data) => {
				setQuote(data[0]["quote"]);
				setAuthor(data[0]["author"]);
			})
			.catch((error) => {
				setQuote("ERROR");
				setAuthor(error);
			});
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
			<div className="category">
				<Category
					selection={(e) => setCategory(e.target.value)}
					category="happiness"
				/>
				<Category
					selection={(e) => setCategory(e.target.value)}
					category="friendship"
				/>
				<Category
					selection={(e) => setCategory(e.target.value)}
					category="success"
				/>
				<Category
					selection={(e) => setCategory(e.target.value)}
					category="knowledge"
				/>
				<Category
					selection={(e) => setCategory(e.target.value)}
					category="inspirational"
				/>
				<Category
					selection={(e) => setCategory(e.target.value)}
					category="dating"
				/>
				<Category
					selection={(e) => setCategory(e.target.value)}
					category="alone"
				/>
			</div>
		</main>
	);
}

export default Card;
