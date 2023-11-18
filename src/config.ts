import {
	celo,
	classic,
	gnosis,
	mainnet,
	optimism,
	polygon,
} from 'wagmi/chains';

const config = {
	CHAINS: [mainnet, gnosis, polygon, optimism, celo, classic],
};

export default config;
