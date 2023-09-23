import styles from "./Logo.module.scss";

const Logo = () => (
	<section className={styles.square}>
		<div className={styles.square__container}>
			<div className={styles["square__top--color"]} />
			<div className={styles["square__right--color"]} />
			<div className={styles["square__bottom--color"]} />
			<div className={styles["square__left--color"]} />
		</div>
	</section>
);

export default Logo;
