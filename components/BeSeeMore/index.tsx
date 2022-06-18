import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { Localizer } from '../../models/Locale';
import Piece from '../../models/Piece';
import SeeMore from '../../models/SeeMore';
import piecesRepository from '../../repositories/pieces-repository';
import PieceList from '../PieceList';
import PieceListItem from '../PieceListItem';
import styles from './styles.module.scss';

type Props = {
  seeMore: SeeMore
};

const BeSeeMore: FunctionComponent<Props> = (props) => {
  const localizer = Localizer.make(useRouter());
  const pieces: Piece[] = [];
  props.seeMore.slugs.forEach(slug => {
    const piece = piecesRepository.load(slug);
    if (piece) {
      pieces.push(piece);
    }
  });
  
  return (
    <li className={styles.BeSeeMore}>
      <h4>{localizer.getValue(props.seeMore.title)}:</h4>
      <ul className={styles.Thumbnails}>
        {pieces.map(piece => 
          <li className={styles.Thumbnail} key={piece.slug}>
            <Link href={`/${piece.slug}`}>
              <a>
                <Image src={piece.thumbnail} alt={localizer.getValue(piece.title)} width={64} height={64} />
              </a>
            </Link>
          </li>
        )}
      </ul>
    </li>
  );
};

export default BeSeeMore;