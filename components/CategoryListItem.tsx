import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import Category from '../model/Category'
import styles from '../styles/CategoryListItem.module.scss'
import { CategoriesListHighlight } from './CategoryList'

type Props = {
	category: Category
	highlight: CategoriesListHighlight
}

const CategoryListItem: FunctionComponent<Props> = ({ category, highlight }) => {
	return (
		<li className={ `${styles.categoryListItem} ${styles[`highlight-${highlight}`]}` }>
			<Link href={ `${category.slug}` }>
				<a>
					<span className={ styles.textLabel }>{ category.title }</span>
					<span className={ styles.thumbnails }>
					{
						category.thumbnails.map(thumbnail => <Image key={ thumbnail } src={ thumbnail } width={512} height={512} alt={ category.title } layout="intrinsic"/>)
					}
					</span>
				</a>
			</Link>
		</li>
	)
}

export default CategoryListItem