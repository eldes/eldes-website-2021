import Image from 'next/image';
import LocaleLink from '../LocaleLink';
import styles from './styles.module.scss';

type Props = {
  slug: string;
  title: string;
  subtitle: string;
  thumbnail: string;
};

const ThumbnailListItem: React.FC<Props> = function (props) {
  return (
    <li className={styles.thumbnailListItem}>
      <LocaleLink href={`/${props.slug}`}>
        <a>
          <span className={styles.textLabel}>{props.title} <small>{props.subtitle}</small></span>
          <Image src={props.thumbnail} width={512} height={512} alt={`${props.title} ${props.subtitle}`} layout="intrinsic" />
        </a>
      </LocaleLink>
    </li>
  );
};


export default ThumbnailListItem;