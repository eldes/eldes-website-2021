import { ChangeEventHandler, FunctionComponent, useState } from 'react';
import styles from '../styles/FormFieldFile.module.scss';

type Props = {
	label: string
	onChange?: ChangeEventHandler<HTMLInputElement>
}

const FormFieldFile: FunctionComponent<Props> = (props) => {

	const inputChanged: ChangeEventHandler<HTMLInputElement> = (event) => {
		if (props.onChange) {
			props.onChange(event)
		}
	}

	return (
		<label className={styles.formFieldFile}>
				
			<span className={styles.label}>
			{props.label}:
			</span>
			<input
				type='file'
				onChange={inputChanged}
				placeholder={props.label}
			/>
		</label>
	)
}

export default FormFieldFile