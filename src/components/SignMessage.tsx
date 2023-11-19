import styled from 'styled-components';
import { FlexCenter } from '@/components/styled-components/Flex';
import Button from '@/components/Button';
import { getWalletClient } from '@wagmi/core';

const SignMessage = () => {
	const handleSign = async () => {
		const walletClient = await getWalletClient();
		const signature = await walletClient?.signMessage({
			message: 'sign in to ReferEth',
		});
		console.log({ signature });
	};
	return (
		<Wrapper>
			<Button onClick={handleSign} text='Sign In' />
		</Wrapper>
	);
};

const Wrapper = styled(FlexCenter)`
	width: 100%;
	height: 500px;
`;

export default SignMessage;
