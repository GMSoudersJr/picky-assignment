import styles from './Category.module.css';

interface CategoryProps {
  category: string
}

const Category = ({category}: CategoryProps) => {

  return (
    <p className={styles.category}>{category}</p>
  )
}

export default Category;


