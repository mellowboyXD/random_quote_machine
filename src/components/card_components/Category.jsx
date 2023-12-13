import "./Category.css";

function Category({ category, selection }) {
	// return <button>{category}</button>;

	return (
		<label>
			<input
				type="radio"
				value={category}
				name="categories"
				id={category}
				onChange={selection}
			/>
			{category}
		</label>
	);
}

export default Category;
