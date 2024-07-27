"use client"
import Image from "next/image";
import styles from "./Carousel.module.css";

interface CarouselProps {
  image_urls: string[];
}

const Carousel = ({image_urls}: CarouselProps) => {

  return (
    <div className={styles.carousel}>
      {image_urls.map(( image_url, i ) => (
        <Image
          key={`${image_url}-${i}`}
          src={image_url}
          alt="carousel image"
          height={200}
          width={200}
        />
      )
      )}
    </div>
  )
}

export default Carousel;

