import { ChangeEventHandler, FunctionComponent, useState } from 'react';
import styles from '../styles/FormFieldText.module.scss';

type Props = {
	label: string
	value?: string
	onChange?: ChangeEventHandler<HTMLInputElement>
}

const FormFieldText: FunctionComponent<Props> = (props) => {
	const [value, setValue] = useState(props.value)

	const inputChanged: ChangeEventHandler<HTMLInputElement> = (event) => {
		setValue(event.target.value)
		if (props.onChange) {
			props.onChange(event)
		}
	}

	return (
		<label className={styles.formFieldText}>
				
			<span className={styles.label}>
			{
				value && value.trim().length > 0 &&
				<>{props.label}:</>
			}
			</span>
			<input
				onChange={inputChanged}
				placeholder={props.label}
				value={props.value}
			/>
		</label>
	)
}

export default FormFieldText