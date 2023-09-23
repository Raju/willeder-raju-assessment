import styles from "./App.module.scss";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import Carousel from "../components/Carousel/Carousel";
import Logo from "../components/Logo/Logo";
import Project from "../components/Project/Project";

const App = () => {
	const heading = "Lorem ipsum dolor sit amet";
	const subHeading =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

	return (
		<main>
			<article>
				<section className={styles.container}>
					<div className={styles.logo}>
						<img
							src="/assets/images/logo.svg"
							alt="logo"
							className={styles.logo__image}
						/>
						<p className={styles.logo__title}>LOGO</p>
					</div>

					<hgroup className={styles.heading}>
						<p className={styles.heading__strip}>{heading}</p>
						<p className={styles.heading__content}>{subHeading}</p>
					</hgroup>

					<hgroup className={styles.scroll}>
						<p className={styles.scroll__title}>scroll</p>
						<img
							src="/assets/images/line.svg"
							alt="logo"
							className={styles.scroll__logo}
						/>
					</hgroup>
				</section>

				<Header />
			</article>

			<article className={styles.secondary__container}>
				<span className={styles["secondary__container--heading"]}>Lorem</span>
				<span className={styles["secondary__container--subheading"]}>subtitle</span>

				<Carousel />
				<Project />
			</article>

			<Logo />
			<Footer />
		</main>
	);
};

export default App;
