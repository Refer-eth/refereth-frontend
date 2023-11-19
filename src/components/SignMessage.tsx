import styled from 'styled-components';
import { FlexCenter } from '@/components/styled-components/Flex';
import Button from '@/components/Button';
import { getWalletClient } from '@wagmi/core';
import { postRequest } from '@/utils/request';
import { useAccount } from 'wagmi';

const SignMessage = () => {
	const { address } = useAccount();
	const handleSign = async () => {
		const walletClient = await getWalletClient();
		const sign = await walletClient?.signMessage({
			message: 'sign in to ReferEth',
		});
		console.log({ sign });
		const data = await postRequest(
			'http://localhost:3000/api/signIn',
			false,
			{ address, sign },
		);
		console.log({ data });
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
