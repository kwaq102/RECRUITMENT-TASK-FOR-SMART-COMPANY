import { MyLink } from "./MyLink";
import { Paragraph } from "./Paragraph";

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
					<Paragraph
						classNameText="footer__content__contact__text"
						children="Kamil Gajewski"
					/>
					<Paragraph
						classNameText="footer__content__contact__text"
						children={
							<MyLink
								href="tel:+48452199552"
								classNameText="footer__content__contact__phone-link"
								children="+48 452 199 552"
							/>
						}
					/>
					<Paragraph
						classNameText="footer__content__contact__text"
						children="kamil_gajewski1802@interia.pl"
					/>
				</div>
				<div className="footer__content__socials">
					<h3 className="footer__content__heading footer__content__heading--socials">
						Social media
					</h3>
					<MyLink
						href="#"
						classNameText="footer__content__content__social-link"
						children={
							<i className="footer__content__content__social-icon fa-brands fa-facebook"></i>
						}
					/>
					<MyLink
						href="#"
						classNameText="footer__content__content__social-link"
						children={
							<i className="footer__content__content__social-icon fa-brands fa-linkedin-in"></i>
						}
					/>
					<MyLink
						href="#"
						classNameText="footer__content__content__social-link"
						children={
							<i className="footer__content__content__social-icon fa-brands fa-github"></i>
						}
					/>
				</div>
			</div>
			<p className="footer__year">© {year} | Kamil Gajewski</p>
		</footer>
	);
};

export { Footer };
