import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import Piece from '../models/Piece'
import styles from '../styles/PieceList.module.scss'

type Props = {
	pieces: Piece[]
}

const PieceList: FunctionComponent<Props> = ({ pieces }) => {
	console.log(pieces)
	return (
		<ul className={ styles.pieceList }>
		{
			pieces && (
				pieces.map( piece =>
					<li key={ piece.title } className={ styles.item }>
						<Link href={ `${piece.slug}` }>
							<a>
								<span className={ styles.textLabel }>{ piece.title } <small>{ piece.subtitle }</small></span>
								<Image src={ piece.thumbnail } width={512} height={512} alt={ piece.title } layout="intrinsic" />
								
							</a>
						</Link>
					</li>
				)
			)
		}
		</ul>
	)
}

export default PieceList