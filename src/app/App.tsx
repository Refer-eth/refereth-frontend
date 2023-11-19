import { ReactNode } from 'react';
import { useAccount } from 'wagmi';
import ConnectWallet from '@/components/ConnectWallet';
import SignMessage from '@/components/SignMessage';
import { isSSRMode } from '@/utils/helpers';

const App = ({ children }: { children: ReactNode }) => {
	const { address } = useAccount();
	const token = isSSRMode() ? '' : localStorage.getItem('token');
	if (!address) return <ConnectWallet />;
	if (!token) return <SignMessage />;
	return <>{children}</>;
};

export default App;
