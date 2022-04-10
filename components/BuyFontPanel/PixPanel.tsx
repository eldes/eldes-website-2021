import Image from 'next/image';
import { FunctionComponent, useState } from 'react';
import qrcodeDesktopBrImage from '../../public/content/font-eldes-cordel/qrcode-desktop-br.png';
import styles from '../../styles/BuyFontPanel/PixPanel.module.scss';
import FormFieldFile from '../FormFieldFile';

type Props = {
  pixCode?: string
}

const PixPanel: FunctionComponent<Props> = (props) => {

  const [pixCodeCopied, setPixCodeCopied] = useState(false)

  const copyCodeButtonClicked = () => {
    setPixCodeCopied(false)
    navigator.clipboard.writeText(props.pixCode ?? '')
    setTimeout(() => { setPixCodeCopied(true); }, 300); //animation
  }

  return (
    <div className={styles.pixPanel}>
      <p>Use o QR Code a seguir para pagar via Pix:</p>
      <Image src={qrcodeDesktopBrImage} alt='' layout='intrinsic' />
      {
        props.pixCode &&
        <>
          <p>Se preferir, você também pode pagar usando o <strong>Pix Copia e Cola</strong>:</p>
          <button type='button' onClick={copyCodeButtonClicked}>Copiar código {pixCodeCopied && <span className='material-icons'>done</span>}</button>
          <FormFieldFile label='Comprovante' />
        </>
      }
    </div>
  )
}

export default PixPanel