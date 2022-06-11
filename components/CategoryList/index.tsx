import Link from 'next/link';
import { FunctionComponent } from 'react';
import Category from '../../models/Category';
import CategoryListItem from '../CategoryListItem';
import styles from './styles.module.scss';

type Props = {
	categories: Category[]
}

const CategoryList: FunctionComponent<Props> = (props) => {
	return (
		<ul className={ styles.categoriesList }>
		{(props.categories) && (
			props.categories.map(category =>
				<CategoryListItem key={ category.slug } category={ category } />
			)
		)}
		</ul>
	)
}

export default CategoryList