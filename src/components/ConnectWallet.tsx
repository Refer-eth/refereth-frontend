import styled from 'styled-components';
import { FlexCenter } from '@/components/styled-components/Flex';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import Button from '@/components/Button';

const ConnectWallet = () => {
	const { open: openConnectModal } = useWeb3Modal();
	const handleConnect = () => {
		openConnectModal && openConnectModal();
	};
	return (
		<Wrapper>
			<Button onClick={handleConnect} text='Connect Wallet' />
		</Wrapper>
	);
};

const Wrapper = styled(FlexCenter)`
	width: 100%;
	height: 500px;
`;

export default ConnectWallet;
