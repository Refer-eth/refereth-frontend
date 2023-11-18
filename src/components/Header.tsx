import styled from 'styled-components';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import Image from 'next/image';
import Link from 'next/link';
import { useAccount, useBalance, useNetwork } from 'wagmi';
import { shortenAddress } from '@/utils/helpers';

const Header = () => {
	const { open: openConnectModal } = useWeb3Modal();
	const { address } = useAccount();
	const { chain } = useNetwork();
	const { data } = useBalance({ address });
	const handleConnect = () => {
		openConnectModal && openConnectModal();
	};

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
				<Menu>Dashboard</Menu>
				<Menu>Rewards</Menu>
				<Menu>How it works</Menu>
			</Menus>
			{address && chain?.id ? (
				<Account>
					<div>
						{data?.formatted?.slice(0, 6)} {data?.symbol}
					</div>
					<Address onClick={handleConnect}>
						<Image
							width={24}
							height={24}
							src='/images/avatar.png'
							alt='avatar'
						/>
						{shortenAddress(address)}
					</Address>
				</Account>
			) : (
				<ConnectWallet onClick={handleConnect}>
					Connect Wallet
				</ConnectWallet>
			)}
		</Wrapper>
	);
};

const Account = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	color: #ff4757;
	font-family:
		Founders Grotesk,
		sans-serif;
	font-size: 20px;
	font-weight: 600;
`;

const Address = styled.div`
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

const Menu = styled.div`
	cursor: pointer;
	padding: 12px;
	color: #747d8c;
	font-size: 16px;
	font-weight: 500;
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
`;

export default Header;
