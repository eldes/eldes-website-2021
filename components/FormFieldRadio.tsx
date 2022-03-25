import { ChangeEvent, ChangeEventHandler, FunctionComponent } from 'react'
import styles from '../styles/FormFieldRadio.module.scss'

type Props = {
	label: string
	name?: string
	value?: string
	disabled?: boolean
	onChange?: ChangeEventHandler<HTMLInputElement>
}

const FormFieldRadio: FunctionComponent<Props> = (props) => {
	return (
		<span className={styles.formFieldRadio}>
			<label className={props.disabled ? styles.disabled : ''}>
				<input
					type='radio'
					name={props.name}
					value={props.value}
					disabled={props.disabled}
					onChange={props.onChange}
				/>
				{props.label}
			</label>
		</span>
	)
}

FormFieldRadio.defaultProps = {
	disabled: false,
}

export {
	type Props as FormFieldRadioProps
}
export default FormFieldRadio