import Image from 'next/image';
import styled from 'styled-components';
import { FlexCenter } from '@/components/styled-components/Flex';

const Button = (props: { text: string; icon: string }) => {
	const { text, icon } = props;
	return (
		<Wrapper>
			<Image src={icon} alt='copy' width={18} height={18} />
			{text}
		</Wrapper>
	);
};

const Wrapper = styled(FlexCenter)`
	background: #ff4757;
	padding: 10px 24px;
	border-radius: 100px;
	color: white;
	gap: 8px;
	cursor: pointer;
`;

export default Button;
