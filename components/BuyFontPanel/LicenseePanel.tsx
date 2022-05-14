import { buyFontPanelI18nKey } from '.';
import { useTranslation } from 'next-i18next';
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import FormFieldText from '../FormFieldText';

class Data {
  fullName: string
  email: string

  private constructor(fullName: string, email: string) {
    this.fullName = fullName
    this.email = email
  }

  static make(fullName: string, email: string) {
    return new Data(fullName, email)
  }

  isValid() {
    const fullNamePattern = /^[A-zÀ-ÿ']{3,}\s([A-zÀ-ÿ']\s?)+$/i
	  const emailPattern = /^[a-z0-9.\-_]+@([a-z0-9\-_]+\.)+[a-z]{2,}$/i

    return (fullNamePattern.test(this.fullName) && emailPattern.test(this.email))
  }

  isInvalid() {
    return !this.isValid()
  }
}

type ChangeDataHandler = (data: Data) => void

type Props = {
  onChange?: ChangeDataHandler
}

const LicenseePanel: FunctionComponent<Props> = (props) => {

  const { t } = useTranslation(buyFontPanelI18nKey)

  const [fullName, setFullName] = useState('')
	const [email, setEmail] = useState('')

  const fireChangeEvent = useCallback(() => {
    if (props.onChange) {
      props.onChange(Data.make(fullName, email))
    }
  }, [email, fullName, props]);

  useEffect(() => {
    fireChangeEvent()
  }, [fireChangeEvent]);

  return (
    <>
      <FormFieldText label={t('fieldNameLabel', 'Full name')} onChangeText={setFullName} />
			<FormFieldText label={t('fieldEmailLabel', 'Email')} onChangeText={setEmail}  />
    </>
  )
}

export default LicenseePanel;
export type {
  Data as LicenseePanelData,
  ChangeDataHandler as LicenseePanelChangeDataHandler,
};