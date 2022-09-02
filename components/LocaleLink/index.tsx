import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Localizer } from '../../models/Locale';

type Props = {
  href: string;
  locale?: string;
  children: ReactNode;
};

const LocaleLink: React.FC<Props> = function (props) {
  const localizer = Localizer.make(useRouter());
  return (
    <Link href={localizer.getRoute(props.href.toString(), props.locale)} locale={props.locale}>{props.children}</Link>
  );
};


export default LocaleLink;