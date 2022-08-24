import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import SeeMore from '../../models/SeeMore';
import BeSeeMore from '../BeSeeMore';
import styles from './styles.module.scss';

type Props = {
  seeMoreList?: SeeMore[]
}

const BeSeeMorePanel: FunctionComponent<Props> = (props) => {

  return (props.seeMoreList?.length) ? (
    <ul className={styles.BeSeeMorePanel}>
      {(props.seeMoreList) && (
        props.seeMoreList.map((seeMore, index) => (
          <BeSeeMore key={index} seeMore={seeMore} />
        )
      ))}
    </ul>
  ) : (
    <></>
  );
};

export {
  type Props as BeSeeMorePanelProps,
};
export default BeSeeMorePanel;