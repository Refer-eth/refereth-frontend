import {
	celo,
	classic,
	gnosis,
	mainnet,
	optimism,
	polygon,
	mantle,
	chiliz,
	arbitrum,
} from 'wagmi/chains';

const config = {
	CHAINS: [
		mainnet,
		gnosis,
		polygon,
		optimism,
		celo,
		classic,
		mantle,
		chiliz,
		arbitrum,
	],
};

export default config;
