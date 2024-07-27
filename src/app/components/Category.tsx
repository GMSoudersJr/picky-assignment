import { lato } from "@/fonts";
import styles from './Category.module.css';

interface CategoryProps {
  category: string
}

const Category = ({category}: CategoryProps) => {

  return (
    <p
      className={styles.category}
      style={lato.style}
    >
      {category}
    </p>
  )
}

export default Category;


