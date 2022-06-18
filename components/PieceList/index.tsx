import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { Localizer } from '../../models/Locale';
import Piece from '../../models/Piece';
import PieceListItem from '../PieceListItem';
import styles from './styles.module.scss';

type Props = {
	pieces: Piece[]
}

const PieceList: FunctionComponent<Props> = ({ pieces }) => {

	const router = useRouter();
	const localizer = Localizer.make(router);

	return (
		<ul className={ styles.pieceList }>
		{(pieces) && (
				pieces.map( piece =>
					<PieceListItem piece={piece} key={piece.slug} />
				)
		)}
		</ul>
	)
}

export default PieceList