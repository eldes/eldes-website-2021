import { ChangeEventHandler, FunctionComponent, useState } from 'react';
import Logotype from '../../models/Logotype';
import FormFieldText from '../FormFieldText';

type ChangeHandler = (logotype: Logotype) => void;

type Props = {
  onChange?: ChangeHandler
};

const LogotypePanel: FunctionComponent<Props> = (props) => {

  const [name, setName] = useState('');

  const fireChange = () => {
    if (props.onChange) {
      props.onChange({name});
    }
  };
  
  const nameChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
    fireChange()
  }

  return (
    <>
      <FormFieldText label={'Nome da marca'} onChange={nameChanged} />
    </>
  );
};

export default LogotypePanel;
export {
type ChangeHandler as LogotypePanelChangeHandler,
};
