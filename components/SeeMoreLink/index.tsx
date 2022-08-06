import Link from 'next/link';
import styles from './styles.module.scss';

type Props = {
  href: string;
};

const SeeMoreLink: React.FC<Props> = function (props) {
  return (
    <Link href={ props.href }><a className={styles.seeMoreLink}><span className={styles.label}>see more</span></a></Link>
  );
};


export default SeeMoreLink;