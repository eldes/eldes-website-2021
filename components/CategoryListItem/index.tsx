import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import Category from '../../models/Category';
import { Localizer } from '../../models/Locale';
import styles from './styles.module.scss';

type Props = {
	category: Category
}

const CategoryListItem: FunctionComponent<Props> = (props) => {
	const localizer = Localizer.make(useRouter());

	return (
		<li className={ `${styles.categoryListItem} ${styles[`highlight-${props.category.highlight}`]}` }>
			<Link href={ `${props.category.slug}` }>
				<a>
					<span className={ styles.textLabel }>{ localizer.getValue(props.category.title) } <small>{ localizer.getValue(props.category.subtitle) }</small></span>
					<span className={ styles.thumbnails }>
					{
						props.category.thumbnails.map(thumbnail => <Image key={ thumbnail } src={ thumbnail } width={512} height={512} alt={ localizer.getValue(props.category.title) } layout="intrinsic"/>)
					}
					</span>
				</a>
			</Link>
		</li>
	)
}

export default CategoryListItem