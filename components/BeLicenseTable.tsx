import { FunctionComponent } from 'react'
import styles from '../styles/BeLicenseTable.module.scss'
import BeComponent, { BeComponentProps } from './BeComponent'

type Props = BeComponentProps & {
}

const BeLicenseTable: FunctionComponent<Props> = (props) => {
	
	return (
		<BeComponent
			subClassName={styles.beLicenseTable}
			fill={props.fill}
			foregroundColor={props.foregroundColor}
			backgroundColor={props.backgroundColor}
			horizontalPadding={props.horizontalPadding}
			verticalPadding={props.verticalPadding}
		>
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
					<tr>
						<td>Desktop License</td>
						<td>$ 12</td>
						<td>You can install the Font software in your own computer to create graphical designs (logos, signs, etc.) and products (mugs, t-shirts, hats, etc.) for yourself or your client. <a href="">See more details...</a></td>
						<td><button>Buy</button></td>
					</tr>
					<tr>
						<td>Logo License</td>
						<td>$ 6</td>
						<td>You can use the font to create a single logotype. <a href="">See more details...</a></td>
						<td><button>Buy</button></td>
					</tr>
					<tr>
						<td>Site License</td>
						<td>$ 6</td>
						<td>You can embed the font in the HTML/CSS of your single site allowing your viewers to see your custom typography. <a href="">See more details...</a></td>
						<td><button>Buy</button></td>
					</tr>
					<tr>
						<td>E-Book License</td>
						<td>$ 6</td>
						<td>You can embed the font in your single e-book allowing your readers to see your custom typography. <a href="">See more details...</a></td>
						<td><button>Buy</button></td>
					</tr>
				</tbody>
			</table>
		</BeComponent>
	)
}

export default BeLicenseTable