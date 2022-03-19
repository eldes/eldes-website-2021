import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import Font from '../models/Font'
import FontPrice from '../models/FontPrice'
import fontPricesRepository from '../repositories/font-prices-repository'
import fontsRepository from '../repositories/fonts-repository'
import licensesRepository from '../repositories/licenses-repository'
import styles from '../styles/BeLicenseTable.module.scss'
import BeComponent, { BeComponentProps } from './BeComponent'
import BeLicenseListItem from './BeLicenseListItem'
import BuyFontPanel from './BuyFontPanel'

type Props = BeComponentProps

const BeLicenseTable: FunctionComponent<Props> = (props) => {

	const { asPath } = useRouter()
	const slug = asPath.substring(1)

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

export default BeLicenseTable