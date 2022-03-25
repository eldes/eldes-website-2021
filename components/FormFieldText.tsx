import { ChangeEventHandler, FunctionComponent, useState } from 'react'
import styles from '../styles/FormFieldText.module.scss'

type Props = {
	label: string
	onChange?: ChangeEventHandler<HTMLInputElement>
}

const FormFieldText: FunctionComponent<Props> = (props) => {
	const [value, setValue] = useState('')

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
				value.trim().length > 0 &&
				<>{props.label}:</>
			}
			</span>
			<input
				onChange={inputChanged}
				placeholder={props.label}
			/>
		</label>
	)
}

export default FormFieldText