import "../styles/Footer.css";

const year = new Date().getFullYear();

function Footer() {
	return (
		<footer>
			<p id="credits">
				Copyright &copy;{year} mellowboy{" "}
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Ishfaq253951"
				>
					<i className="fa-brands fa-github"></i>
				</a>
			</p>
		</footer>
	);
}

export default Footer;
