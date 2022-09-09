import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import Localized, { Localizer } from '../../models/Locale';
import BeComponent, { BeComponentProps } from '../BeComponent';
import styles from './styles.module.scss';

type Field = {
	label: string;
	value: Localized<string>;
};

type Props = BeComponentProps & {
	fields: Field[];
	image?: StaticImageData;
};

const BeCredits: FunctionComponent<Props> = (props) => {
	const router = useRouter();
	const localizer = Localizer.make(router);
	
	return (
		<BeComponent
			subClassName={ props.subClassName }
			fill={ props.fill }
			foregroundColor={ props.foregroundColor }
			backgroundColor={ props.backgroundColor }
			horizontalPadding={ props.horizontalPadding }
			verticalPadding={ props.verticalPadding }
		>
			<div className={ styles.beCredits }>
				<table>
					<caption>Credits</caption>
					<tbody>
					{props.fields.map((field, index) => (
						<tr key={index}>
							<th className={styles.label}>{field.label}:</th>
							<td className={styles.value}>{localizer.getValue(field.value)}</td>
						</tr>
					))}
					</tbody>
				</table>
				{(props.children) && (
					<div className={styles.notes}>
						{(props.image) && (
							<span className={styles.image}><Image src={props.image} layout='responsive' alt=''/></span>
						)}
						<span className={styles.text}>{ props.children }</span>
					</div>
				)}
			</div>
		</BeComponent>
	)
}

export default BeCredits