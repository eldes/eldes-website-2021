import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import FontPrice from '../models/FontPrice';
import fontPricesRepository from '../repositories/font-prices-repository';
import fontsRepository from '../repositories/fonts-repository';
import styles from '../styles/BeLicenseTable.module.scss';
import BeComponent, { BeComponentProps } from './BeComponent';
import BeLicenseListItem, { beLicenseListItemI18n } from './BeLicenseListItem';

type Props = BeComponentProps

const beLicenseListI18n = [...beLicenseListItemI18n]

const BeLicenseList: FunctionComponent<Props> = (props) => {

	const { pathname } = useRouter()
	const slug = pathname.substring(1).split('#')[0]

	const font = fontsRepository.load(slug)

	const fontPrices: FontPrice[] = fontPricesRepository.loadAllByFont(slug)
	
	return (
		<BeComponent
			subClassName={styles.beLicenseTable}
			fill={props.fill}
			foregroundColor={props.foregroundColor}
			backgroundColor={props.backgroundColor}
			horizontalPadding={props.horizontalPadding}
			verticalPadding={props.verticalPadding}
		>
		{
			font &&
			<table>
				<thead>
					<tr>
						<th>License type</th>
						<th>Price</th>
						<th>Description</th>
						<th>Buy</th>
					</tr>
				</thead>
				<tbody>
					{
						fontPrices.map((fontPrice, index) =>
							<BeLicenseListItem key={index} fontPrice={fontPrice} />
						)
					}
				</tbody>
			</table>
		}
		</BeComponent>
	)
}

export {
	beLicenseListI18n
}
export default BeLicenseList