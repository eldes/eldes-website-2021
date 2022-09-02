import { Trans } from 'next-i18next';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import Font from '../models/Font';
import styles from '../styles/FontList.module.scss';
import LocaleLink from './LocaleLink';

type Props = {
	fonts: Font[]
}

const FontList: FunctionComponent<Props> = ({ fonts }) => {
	return (
		<ul className={ styles.fontList }>
		{
			fonts && (
				fonts.map( font =>
					<li key={font.slug} className={styles.item}>
						<LocaleLink href={ `/${font.slug}` }>
							<a>
								<span className={ styles.textLabel }><small><Trans i18nKey="fonts:fontNamePrefix">Font Eldes</Trans></small> { font.name }</span>
								<Image src={ font.thumbnail } width={512} height={512} alt={ font.name } layout="intrinsic" />
								
							</a>
						</LocaleLink>
					</li>
				)
			)
		}
		</ul>
	)
}

export default FontList