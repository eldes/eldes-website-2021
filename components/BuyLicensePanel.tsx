import { FunctionComponent, useState } from 'react'
import styles from '../styles/BuyLicensePanel.module.scss'

const BuyFontPanel: FunctionComponent = () => {

	const [opened, setOpened] = useState(false)

	const openButtonClicked = () => setOpened(true)
	const cancelButtonClicked = () => setOpened(false)

	return (
		<div className={ styles.buyLicensePanel }>
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
								<td>Font Eldes Cordel - Desktop License</td>
								<td>1 unit</td>
								<td>$ 12</td>
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