import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import FormFieldText from '../FormFieldText';
import { useRouter } from 'next/router';
import SwitchLocale from '../SwitchLocale';
import Site from '../../models/Site';

type ChangeHandler = (site: Site) => void;

type Props = {
  onChange?: ChangeHandler
};

const SitePanel: FunctionComponent<Props> = (props) => {

  const router = useRouter();
  const [url, setUrl] = useState('');

  const fireChangeEvent = useCallback(() => {
    if (props.onChange) {
      props.onChange({url});
    }
  }, [url, props]);

  useEffect(() => {
    fireChangeEvent();
  }, [fireChangeEvent]);

  return (
    <>
      <SwitchLocale
        en={
          <FormFieldText label={'Site address'} onChangeText={setUrl} />
        }
        br={
          <FormFieldText label={'Endereço do site'} onChangeText={setUrl} />
        }
      />
      
    </>
  );
};

export default SitePanel;
export {
type ChangeHandler as SitePanelChangeHandler,
};