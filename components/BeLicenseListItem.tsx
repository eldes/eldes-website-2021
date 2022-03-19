import Link from 'next/link'
import { FunctionComponent } from 'react'
import FontPrice from '../models/FontPrice'
import fontsRepository from '../repositories/fonts-repository'
import licensesRepository from '../repositories/licenses-repository'
import BuyFontPanel from './BuyFontPanel'

type Props = {
	fontPrice: FontPrice
}

const BeLicenseListItem: FunctionComponent<Props> = (props) => {
	const fontPrice = props.fontPrice
	const font = fontsRepository.load(fontPrice.fontSlug)
	const license = licensesRepository.load(fontPrice.licenseSlug)
	
	return (
		<>
		{
			font && license &&
			<tr>
				<td>{license?.name} License</td>
				<td>$ {fontPrice.amount.en}</td>
				<td>{license?.resume} <Link href={`/${license?.slug}-details`}><a>See more details...</a></Link></td>
				<td>
					<BuyFontPanel font={font} license={license} fontPrice={fontPrice} />
				</td>
			</tr>
		}
		</>
		
	)
}

export default BeLicenseListItem