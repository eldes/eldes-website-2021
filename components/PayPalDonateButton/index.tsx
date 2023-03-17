import Image from 'next/image';
import SwitchLocale from '../SwitchLocale';
import styles from './styles.module.scss';
import markImage from './paypal-mark-color.svg';
import { CSSProperties } from 'react';

type Props = {
  buttonId: string;
  style?: CSSProperties;
};


const PayPalDonateButton: React.FC<Props> = function (props) {
  return (
    <SwitchLocale
      en={
        <a className={styles.payPalDonateButton} style={props.style} href={`https://www.paypal.com/donate/?hosted_button_id=${props.buttonId}`}>
          <Image src={markImage}  width={24} height={24} alt='PayPal' /> Donate with PayPal
        </a>
      }
      br={
        <a className={styles.payPalDonateButton} style={props.style} href={`https://www.paypal.com/donate/?hosted_button_id=${props.buttonId}`}>
          <Image src={markImage} width={24} height={24} alt='PayPal' /> Doar com PayPal
        </a>
      }
    />
  );
};


export default PayPalDonateButton;