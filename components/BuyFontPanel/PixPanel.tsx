import { ChangeEventHandler, FunctionComponent, useState } from 'react';
import QRCode from 'react-qr-code';
import { PixPayment } from '../../models/FontOrder';
import styles from '../../styles/BuyFontPanel/PixPanel.module.scss';
import FormFieldFile from '../FormFieldFile';

type ChangeHandler = (pixPayment: PixPayment) => void

type Props = {
  code: string
  onChange?: ChangeHandler
}

const PixPanel: FunctionComponent<Props> = (props) => {

  const [codeCopied, setCodeCopied] = useState(false)

  const copyCodeButtonClicked = () => {
    setCodeCopied(false)
    navigator.clipboard.writeText(props.code ?? '')
    setTimeout(() => { setCodeCopied(true); }, 300); //animation
  }

  const receiptFileChanged: ChangeEventHandler<HTMLInputElement> = event => {
    if (event.target.files) {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.onload = () => {
        if (reader.result instanceof ArrayBuffer) {
          const buffer: ArrayBuffer = reader.result
          const bytes = new Uint8Array(buffer)
          let binary = ''
          for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i])
          }
          
          if (props.onChange) {
            props.onChange({
              receiptFile: {
                base64: window.btoa(binary),
                type: file.type,
              },
            });
          }
        }
      }
      reader.onerror = () => {
        console.error(reader.error)
      }
      reader.readAsArrayBuffer(file)
    }
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

export default PixPanel;
export type {
  ChangeHandler as PixPanelChangeDataHandler,
};