import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { Localizer } from '../../models/Locale';
import Piece from '../../models/Piece';
import styles from './styles.module.scss';

type Props = {
  piece: Piece
}

const PieceListItem: FunctionComponent<Props> = (props) => {
  const localizer = Localizer.make(useRouter());

  return (
    <li className={ styles.PieceListItem }>
      <Link href={ `${props.piece.slug}` }>
        <a>
          <span className={ styles.textLabel }>{  localizer.getValue(props.piece.title) } <small>{ localizer.getValue(props.piece.subtitle) }</small></span>
          <Image src={ props.piece.thumbnail } width={512} height={512} alt={ localizer.getValue(props.piece.title) } layout="intrinsic" />
        </a>
      </Link>
    </li>
  );
};

export default PieceListItem;