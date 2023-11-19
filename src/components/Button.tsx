import Image from 'next/image';
import styled from 'styled-components';
import { FlexCenter } from '@/components/styled-components/Flex';

const Button = (props: {
	text: string;
	icon?: string;
	fullWidth?: boolean;
	onClick?: () => void;
}) => {
	const { text, icon, fullWidth, onClick } = props;
	return (
		<Wrapper onClick={() => onClick && onClick()} fullWidth={fullWidth}>
			{icon && <Image src={icon} alt='copy' width={18} height={18} />}
			{text}
		</Wrapper>
	);
};

const Wrapper = styled(FlexCenter)<{ fullWidth?: boolean }>`
	background: #ff4757;
	padding: 10px 24px;
	border-radius: 100px;
	color: white;
	gap: 8px;
	cursor: pointer;
	width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
`;

export default Button;
