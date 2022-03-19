import { useRouter } from 'next/router'
import { FunctionComponent, useState } from 'react'
import Font from '../models/Font'
import FontPrice from '../models/FontPrice'
import License from '../models/License'
import styles from '../styles/BuyFontPanel.module.scss'

type Props = {
	font: Font
	license: License
	fontPrice: FontPrice
}

const BuyFontPanel: FunctionComponent<Props> = (props) => {

	const [opened, setOpened] = useState(false)

	const openButtonClicked = () => setOpened(true)
	const cancelButtonClicked = () => setOpened(false)

	const font = props.font
	const license = props.license
	const price = props.fontPrice

	const { locale } = useRouter()

	return (
		<div className={ styles.buyFontPanel }>
			{
				(! opened) && <button onClick={ openButtonClicked }>Buy</button>
			}
			{
				opened &&
				<form>
					<span className={styles.formTitle}>Buy</span>
					<input placeholder='Full name' />
					<input placeholder='Email' />
					<table className={ styles.resume }>
						<caption>Resume</caption>
						<thead>
							<tr>
								<th>Product</th>
								<th>Quantity</th>
								<th>Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Font Eldes {font?.name} - {license?.name} License</td>
								<td>1 unit</td>
								<td>$ {locale === 'br' ? price.amount.br : price.amount.en}</td>
							</tr>
						</tbody>
						

					</table>
					<div className={ styles.formFooter }>
						<button className={ styles.secundary } onClick={ cancelButtonClicked }>Cancel</button>
					</div>
					
				</form>
			}
		</div>
	)
}

export default BuyFontPanel