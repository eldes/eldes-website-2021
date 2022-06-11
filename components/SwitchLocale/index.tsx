import { useRouter } from 'next/router';
import { FunctionComponent, ReactNode } from 'react';
import { LocaleCode, Localizer } from '../../models/Locale';

type Props = {
  [Property in LocaleCode]: ReactNode
};

const SwitchLocale: FunctionComponent<Props> = (props) => {
  const localizer = Localizer.make(useRouter());
  return (
    <>
      {props[localizer.getLocale().code as LocaleCode]}
    </>
  );
};

export default SwitchLocale;