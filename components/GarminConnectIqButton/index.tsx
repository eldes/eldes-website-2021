import Image from 'next/image';
import SwitchLocale from '../SwitchLocale';
import styles from './styles.module.scss';
import badgeImage from './garmin-connect-iq-badge.svg';
import { CSSProperties } from 'react';

type Props = {
  appId: string;
  style?: CSSProperties;
};

const GarminConnectIqButton: React.FC<Props> = function (props) {
  return (
    <SwitchLocale
      en={
        <a className={styles.garminConnectIqButton} style={props.style} href={`https://apps.garmin.com/en-US/apps/${props.appId}`}>
          <Image src={badgeImage}  width={420} height={89} alt='Available on Garmin Connect IQ' />
        </a>
      }
      br={
        <a className={styles.garminConnectIqButton} style={props.style} href={`https://apps.garmin.com/pt-BR/apps/${props.appId}`}>
          <Image src={badgeImage} width={420} height={89} alt='Disponível em Garmin Connect IQ' />
        </a>
      }
    />
  );
};


export default GarminConnectIqButton;