import styled from 'styled-components';
import Image from 'next/image';
import { FlexCenter } from '@/components/styled-components/Flex';

const ButtonOutline = (props: { icon?: string; title: string }) => {
	const { icon, title } = props;
	return (
		<Wrapper>
			{icon && <Image src={icon} alt={title} width={18} height={18} />}
			<div>{title}</div>
		</Wrapper>
	);
};

const Wrapper = styled(FlexCenter)`
	width: fit-content;
	border-radius: 100px;
	border: 1px solid #ff6b81;
	padding: 10px 20px;
	color: #ff6b81;
	gap: 8px;
	cursor: pointer;
	> div:last-child {
		text-align: center;
		font-family: Inter, sans-serif;
		font-size: 14px;
		font-weight: 600;
		line-height: 20px;
	}
`;

export default ButtonOutline;
