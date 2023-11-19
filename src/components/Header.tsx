import styled from 'styled-components';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import Image from 'next/image';
import Link from 'next/link';
import { useAccount, useNetwork } from 'wagmi';
import { shortenAddress } from '@/utils/helpers';
import { usePathname } from 'next/navigation';

const Header = () => {
	const { open: openConnectModal } = useWeb3Modal();
	const { address } = useAccount();
	const { chain } = useNetwork();
	const handleConnect = () => {
		openConnectModal && openConnectModal();
	};
	const router = usePathname();
	const isDashboard = router === '/';
	const isRewards = router === '/rewards';

	return (
		<Wrapper>
			<Link href='/'>
				<Logo>
					<Image
						width={60}
						height={67}
						src='/images/logo.png'
						alt='logo'
					/>
				</Logo>
			</Link>
			<Menus>
				<Link href='/'>
					<Menu isActive={isDashboard}>Dashboard</Menu>
				</Link>
				<Link href='/rewards'>
					<Menu isActive={isRewards}>Rewards</Menu>
				</Link>
				<Menu>How it works</Menu>
			</Menus>
			{address && chain?.id ? (
				<Address onClick={handleConnect}>
					<Image
						width={24}
						height={24}
						src='/images/avatar.png'
						alt='avatar'
					/>
					{shortenAddress(address)}
				</Address>
			) : (
				<ConnectWallet onClick={handleConnect}>
					Connect Wallet
				</ConnectWallet>
			)}
		</Wrapper>
	);
};

const Address = styled.div`
	color: #ff4757;
	font-family:
		Founders Grotesk,
		sans-serif;
	font-size: 20px;
	font-weight: 600;
	border-radius: 100px;
	border: 2px solid #ff4757;
	padding: 13px 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	cursor: pointer;
	img {
		border-radius: 50%;
	}
`;

const Menu = styled.div<{ isActive?: boolean }>`
	cursor: pointer;
	padding: 12px;
	color: ${({ isActive }) => (isActive ? '#FF4757' : '#747d8c')};
	font-size: 16px;
	font-weight: 700;
	line-height: normal;
`;

const Logo = styled.div`
	cursor: pointer;
`;

const Menus = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 40px;
`;

const ConnectWallet = styled.div`
	cursor: pointer;
	padding: 13px 24px;
	border-radius: 100px;
	background: #ff4757;
	font-family:
		Founders Grotesk,
		sans-serif;
	font-size: 20px;
	font-weight: 600;
	color: #f9f9fa;
`;

const Wrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 80px;
	background: white;
	color: black;
	width: 100%;
	height: 107px;
	top: 0;
	position: fixed;
	z-index: 1050;
`;

export default Header;
