import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import Localized, { Localizer } from '../../models/Locale';
import BeComponent, { BeComponentProps } from '../BeComponent';
import styles from './styles.module.scss';

type Field = {
	label: string
	value: Localized<string>
}

type Props = BeComponentProps & {
	fields: Field[]
}

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
					{(props.children) && (
						<tr>
							<td colSpan={2} className={styles.notes}>
								<span className={ styles.notes }>{ props.children }</span>
							</td>
						</tr>
					)}
				</tbody>
				</table>
			</div>
		</BeComponent>
	)
}

export default BeCredits