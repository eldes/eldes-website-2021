import Image from 'next/image';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import Category from '../../models/Category';
import { Localizer } from '../../models/Locale';
import LocaleLink from '../LocaleLink';
import styles from './styles.module.scss';

type Props = {
	category: Category
}

const CategoryListItem: FunctionComponent<Props> = (props) => {
	const localizer = Localizer.make(useRouter());

	return (
		<li className={ `${styles.categoryListItem} ${styles[`highlight-${props.category.highlight}`]}` }>
			<LocaleLink href={ `/${props.category.slug}` }>
				<a>
					<span className={ styles.textLabel }>{ localizer.getValue(props.category.title) } <small>{ localizer.getValue(props.category.subtitle) }</small></span>
					<span className={ styles.thumbnails }>
					{
						props.category.thumbnails.map((thumbnail, index) => <Image key={ index } src={ thumbnail } width={512} height={512} alt={ localizer.getValue(props.category.title) } layout="intrinsic"/>)
					}
					</span>
				</a>
			</LocaleLink>
		</li>
	)
}

export default CategoryListItem