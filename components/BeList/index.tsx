import { FC, ReactNode } from 'react';
import BeComponent, { beComponentDefaultProps, BeComponentProps } from '../BeComponent';
import styles from './styles.module.scss';

type Props = BeComponentProps & {
	children: ReactNode;
};

const BeList: FC<Props> = (props) => {

	return (
		<BeComponent
			subClassName={ styles.beList }
			fill={ props.fill }
			foregroundColor={ props.foregroundColor }
			backgroundColor={ props.backgroundColor }
			horizontalPadding={ props.horizontalPadding }
			verticalPadding={ props.verticalPadding }
		>
			<ul style={{ color: props.foregroundColor }}>
				{ props.children }
			</ul>
		</BeComponent>
	)
};

BeList.defaultProps = {
	...beComponentDefaultProps,
};

export default BeList;