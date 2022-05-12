import { ChangeEventHandler, FunctionComponent, useEffect, useState } from 'react';
import Logotype from '../../models/Logotype';
import FormFieldText from '../FormFieldText';

type ChangeHandler = (logotype: Logotype) => void;

type Props = {
  onChange?: ChangeHandler
};

const LogotypePanel: FunctionComponent<Props> = (props) => {

  const [name, setName] = useState('');

  const fireChangeEvent = () => {
    if (props.onChange) {
      props.onChange({name});
    }
  };

  useEffect(() => {
    fireChangeEvent()
  }, [name]);

  return (
    <>
      <FormFieldText label={'Nome da marca'} onChangeText={setName} />
    </>
  );
};

export default LogotypePanel;
export {
type ChangeHandler as LogotypePanelChangeHandler,
};
