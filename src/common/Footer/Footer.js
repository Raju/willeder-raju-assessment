import styles from "./Footer.module.scss";

const Footer = () => (
	<footer className={styles.footer}>
		<nav className={styles.navigation}>
			<ul className={styles.navigation__menu}>
				<li className="">
					<a
						href="#Home"
						className=""
					>
						Home
					</a>
				</li>

				<li className="">
					<a
						href="#PageOne"
						className=""
					>
						Page 1
					</a>
				</li>

				<li className="">
					<a
						href="#PageTwo"
						className=""
					>
						Page 2
					</a>
				</li>
			</ul>
		</nav>

		<hr className={styles.divider} />

		<section className={styles.social}>
			<a
				href="#facebook"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="/assets/images/facebook.svg"
					alt="facebook"
					className={styles.social__icon}
				/>
			</a>

			<a
				href="#twitter"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="/assets/images/twitter.svg"
					alt="twitter"
					className={styles.social__icon}
				/>
			</a>

			<a
				href="#instagram"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="/assets/images/instagram.svg"
					alt="instagram"
					className={styles.social__icon}
				/>
			</a>

			<a
				href="#tiktok"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="/assets/images/tiktok.svg"
					alt="youtube"
					className={styles.social__icon}
				/>
			</a>
		</section>

		<p className={styles.copyright}>© Logo, Inc.</p>
	</footer>
);

export default Footer;
