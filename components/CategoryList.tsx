import Link from 'next/link'
import { FunctionComponent } from 'react'
import Category from '../model/Category'
import styles from '../styles/CategoriesList.module.scss'
import CategoryListItem from './CategoryListItem'

type Props = {
	categories: Category[]
	highlight: CategoriesListHighlight
}

export enum CategoriesListHighlight {
	High = 'high',
	Medium = 'medium',
	Low = 'low',
}

const CategoryList: FunctionComponent<Props> = ({ categories, highlight }) => {
	return (
		<ul className={ styles.categoriesList }>
		{
			categories && (
				categories.map(category =>
					<CategoryListItem key={ category.slug } category={ category } highlight={ highlight }/>
				)
			)
		}
		</ul>
	)
}

CategoryList.defaultProps = {
	highlight: CategoriesListHighlight.Medium
}

export default CategoryList