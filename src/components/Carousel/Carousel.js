import { useState, useEffect } from "react";

import styles from "./Carousel.module.scss";

const images = [
	{
		id: "01",
		src: "assets/images/carouselone.png",
		header: "Lorem ipsum dolor sit",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},
	{
		id: "02",
		src: "assets/images/carouseltwo.jpg",
		header: "Lorem ipsum dolor sit",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},
	{
		id: "03",
		src: "assets/images/carouselthree.png",
		header: "Lorem ipsum dolor sit",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},
];

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			// Generate a random index different from the current index
			let randomIndex = currentIndex;
			while (randomIndex === currentIndex) {
				randomIndex = Math.floor(Math.random() * images.length);
			}
			setCurrentIndex(randomIndex);
		}, 3000); // Rotate every 3 seconds

		// Clear the interval when the component unmounts
		return () => clearInterval(interval);
	}, [currentIndex]);

	const visibleImages = [
		images[currentIndex],
		images[(currentIndex + 1) % images.length],
		images[(currentIndex + 2) % images.length],
	];

	return (
		<section className={styles.carousel}>
			{visibleImages.map(({ id, src, header, content }) => (
				<div
					key={id}
					className={styles.carousel__item}
				>
					<img
						src={src}
						alt="carousel"
						className={styles.carousel__image}
					/>
					<div className={styles.carousel__text}>
						<h2 className={styles["carousel__text--id"]}>{id}</h2>
						<h2 className={styles["carousel__text--heading"]}>{header}</h2>
						<p className={styles["carousel__text--content"]}>{content}</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default Carousel;
