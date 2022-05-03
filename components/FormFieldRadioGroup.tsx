import { ChangeEventHandler, FunctionComponent } from 'react';
import styles from '../styles/FormFieldRadioGroup.module.scss';
import FormFieldRadio, { FormFieldRadioProps } from './FormFieldRadio';

type Props = {
	name: string
	formFieldProps: (FormFieldRadioProps & {value: string})[]
	value?: string
	onChange: (value: string) => void
}

const FormFieldRadioGroup: FunctionComponent<Props> = (props) => {

	const formFieldRadioChanged: ChangeEventHandler<HTMLInputElement> = (event) => {
		props.onChange(event.target.value)
	}

	return (
		<span className={styles.formFieldRadioGroup}>
		{
			props.formFieldProps.map((formFieldProp, index) => 
				<FormFieldRadio
					key={index}
					label={formFieldProp.label}
					name={props.name}
					value={formFieldProp.value}
					onChange={formFieldRadioChanged}
					checked={(props.value !== undefined) && (props.value === formFieldProp.value)}
					disabled={formFieldProp.disabled}
				/>
			)
		}
		</span>
	)
}

export default FormFieldRadioGroup