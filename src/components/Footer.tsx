const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer__content">
				<h2 className="footer__content__heading">RECRUITMENT TASK</h2>

				<div className="footer__content__contact">
					<h3 className="footer__content__heading footer__content__heading--contact">
						Kontakt
					</h3>
					<p className="footer__content__contact__text">Kamil Gajewski</p>
					<p className="footer__content__contact__text">
						<a
							href="tel:+48452199552"
							className="footer__content__contact__phone-link"
						>
							+48 452 199 552
						</a>
					</p>
					<p className="footer__content__contact__text">
						kamil_gajewski1802@interia.pl
					</p>
				</div>
				<div className="footer__content__socials">
					<h3 className="footer__content__heading footer__content__heading--socials">
						Social media
					</h3>
					<a href="" className="footer__content__content__social-link">
						<i className="footer__content__content__social-icon fa-brands fa-facebook"></i>
					</a>
					<a href="" className="footer__content__content__social-link">
						<i className="footer__content__content__social-icon fa-brands fa-linkedin-in"></i>
					</a>
					<a href="" className="footer__content__content__social-link">
						<i className="footer__content__content__social-icon fa-brands fa-github"></i>
					</a>
				</div>
			</div>
			<p className="footer__year">© {year} | Kamil Gajewski</p>
		</footer>
	);
};

export { Footer };
