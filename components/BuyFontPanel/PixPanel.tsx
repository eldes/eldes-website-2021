import Image from 'next/image';
import { ChangeEventHandler, FunctionComponent, useState } from 'react';
import QRCode from 'react-qr-code';
import styles from '../../styles/BuyFontPanel/PixPanel.module.scss';
import FormFieldFile from '../FormFieldFile';

type Props = {
  code?: string
  receiptOnChange?: ChangeEventHandler<HTMLInputElement>
}

const PixPanel: FunctionComponent<Props> = (props) => {

  const [codeCopied, setCodeCopied] = useState(false)

  const copyCodeButtonClicked = () => {
    setCodeCopied(false)
    navigator.clipboard.writeText(props.code ?? '')
    setTimeout(() => { setCodeCopied(true); }, 300); //animation
  }

  return (
    <div className={styles.pixPanel}>
      <div className={styles.qrCode}>
        <QRCode value={props.code ?? ''} />
      </div>
      {
        props.code &&
        <>
          <button className={styles.copyCodeButton} type='button' onClick={copyCodeButtonClicked}>
            Copiar código
            {codeCopied && <span className='material-icons'>done</span>}
          </button>
          <FormFieldFile
            label='Comprovante de pagamento Pix'
            accept={['image/png', 'image/jpeg', 'application/pdf']}
            onChange={receiptFileChanged}
          />
        </>
      }
    </div>
  )
}

export default PixPanel