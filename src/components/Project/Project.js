import styles from "./Project.module.scss";

const Project = () => {
	const heading = "Lorem ipsum";
	const subHeading =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

	return (
		<section className={styles.project}>
			<div className={styles.project__container}>
				<img
					src="assets/images/project.png"
					alt="project"
					className={styles.project__image}
				/>
				<div className={styles.project__text}>
					<h2 className={styles["project__text--id"]}>{heading}</h2>
					<h2 className={styles["project__text--heading"]}>{subHeading}</h2>
					<div className={styles["project__text--content"]}>
						<p className={styles["project__text--submit"]}>{heading}</p>
						<img
							src="assets/images/arrow.svg"
							alt="arrow"
							className={styles["project__text--submitlogo"]}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project;
