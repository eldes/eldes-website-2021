import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import Category from '../models/Category';
import { Localizer } from '../models/Locale';
import styles from '../styles/CategoryListItem.module.scss';
import { CategoriesListHighlight } from './CategoryList';

type Props = {
	category: Category
	highlight: CategoriesListHighlight
}

const CategoryListItem: FunctionComponent<Props> = ({ category, highlight }) => {
	const localizer = Localizer.make(useRouter());

	return (
		<li className={ `${styles.categoryListItem} ${styles[`highlight-${highlight}`]}` }>
			<Link href={ `${category.slug}` }>
				<a>
					<span className={ styles.textLabel }>{ localizer.getValue(category.title) } <small>{ localizer.getValue(category.subtitle) }</small></span>
					<span className={ styles.thumbnails }>
					{
						category.thumbnails.map(thumbnail => <Image key={ thumbnail } src={ thumbnail } width={512} height={512} alt={ localizer.getValue(category.title) } layout="intrinsic"/>)
					}
					</span>
				</a>
			</Link>
		</li>
	)
}

export default CategoryListItem