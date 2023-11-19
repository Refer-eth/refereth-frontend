import { ReactNode } from 'react';

const App = ({ children }: { children: ReactNode }) => {
	// const { address } = useAccount();
	// const token = isSSRMode() ? '' : localStorage.getItem('token');
	// if (!address) return <ConnectWallet />;
	// if (!token) return <SignMessage />;
	return <>{children}</>;
};

export default App;
