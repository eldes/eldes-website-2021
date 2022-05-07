import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { Localizer } from '../models/Locale';
import Piece from '../models/Piece';
import styles from '../styles/PieceList.module.scss';

type Props = {
	pieces: Piece[]
}

const PieceList: FunctionComponent<Props> = ({ pieces }) => {

	const router = useRouter();
	const localizer = Localizer.make(router);

	return (
		<ul className={ styles.pieceList }>
		{
			pieces && (
				pieces.map( piece =>
					<li key={ piece.slug } className={ styles.item }>
						<Link href={ `${piece.slug}` }>
							<a>
								<span className={ styles.textLabel }>{  localizer.getValue(piece.title) } <small>{ localizer.getValue(piece.subtitle) }</small></span>
								<Image src={ piece.thumbnail } width={512} height={512} alt={ localizer.getValue(piece.title) } layout="intrinsic" />
								
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