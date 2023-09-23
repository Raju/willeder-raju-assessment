import styles from "./Header.module.scss";

const Header = () => (
	<header className={styles.container}>
		<nav className={styles.navigation}>
			<ul className={styles.navigation__menu}>
				<li className={styles.navigation__item}>
					<img
						src="assets/images/logo.svg"
						alt="logo"
						className={styles.navigation__logo}
					/>
					<p className={styles.navigation__title}>LOGO</p>
				</li>

				<li className={styles.navigation__item}>
					<a
						href="#Home"
						className={styles.navigation__link}
					>
						Home
					</a>
				</li>

				<li className={styles.navigation__item}>
					<a
						href="#PageOne"
						className={styles.navigation__link}
					>
						Page 1
					</a>
				</li>

				<li className={styles.navigation__item}>
					<a
						href="#PageTwo"
						className={styles.navigation__link}
					>
						Page 2
					</a>
				</li>

				<li className={styles.navigation__item}>
					<img
						src="assets/images/menu.svg"
						alt="logo"
						className={styles.navigation__logo}
					/>
				</li>
			</ul>
		</nav>
	</header>
);
export default Header;
