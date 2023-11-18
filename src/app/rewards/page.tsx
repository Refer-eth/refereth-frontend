'use client';

import styled from 'styled-components';
import ActiveRound from '@/components/ActiveRound';
import RoundCard from '@/components/RoundCard';

const RewardsPage = () => {
	return (
		<Wrapper>
			<Title>Active & Upcoming rounds</Title>
			<Rounds>
				<ActiveRound />
				<ActiveRound />
			</Rounds>
			<Title>Ready to Claim</Title>
			<Rounds>
				{claimCards.map((card, index) => (
					<RoundCard
						key={index}
						round={card.round}
						user={card.user}
					/>
				))}
			</Rounds>
			<Title>Claimed Rewards</Title>
			<Rounds>
				{claimedCards.map((card, index) => (
					<RoundCard
						key={index}
						round={card.round}
						user={card.user}
					/>
				))}
			</Rounds>
		</Wrapper>
	);
};

const claimedCards = [
	{
		round: {
			name: 'Mantle House',
			number: '1',
			reward: '15K OP ~ 10 K USD',
			runBy: 'Polygon',
			startDate: '10 Nov 2023',
			endDate: '10 Nov 2023',
			points: '10',
			myPosition: '10',
			chainId: '1',
		},
		user: {
			claimed: '1.273 k OP ~ 670.00 USD',
		},
	},
	{
		round: {
			name: 'Gnosis Beta Round',
			number: '1',
			reward: '15K OP ~ 10 K USD',
			runBy: 'Polygon',
			startDate: '10 Nov 2023',
			endDate: '10 Nov 2023',
			points: '10',
			myPosition: '10',
			chainId: '1',
		},
		user: {
			claimed: '1.273 k OP ~ 670.00 USD',
		},
	},
	{
		round: {
			name: 'Alfa Reward Pool',
			number: '1',
			reward: '15K OP ~ 10 K USD',
			runBy: 'Polygon',
			startDate: '10 Nov 2023',
			endDate: '10 Nov 2023',
			points: '10',
			myPosition: '10',
			chainId: '1',
		},
		user: {
			claimed: '1.273 k OP ~ 670.00 USD',
		},
	},
];

const claimCards = [
	{
		round: {
			name: 'Polygon Alpha Round',
			number: '1',
			reward: '15K OP ~ 10 K USD',
			runBy: 'Polygon',
			startDate: '10 Nov 2023',
			endDate: '10 Nov 2023',
			points: '10',
			myPosition: '10',
			chainId: '1',
		},
		user: {
			claimable: '1.273 k OP ~ 670.00 USD',
		},
	},
	{
		round: {
			name: 'One Noun, Every Day, Forever',
			number: '1',
			reward: '15K OP ~ 10 K USD',
			runBy: 'Polygon',
			startDate: '10 Nov 2023',
			endDate: '10 Nov 2023',
			points: '10',
			myPosition: '10',
			chainId: '1',
		},
		user: {
			claimable: '1.273 k OP ~ 670.00 USD',
		},
	},
];

const Rounds = styled.div`
	display: flex;
	gap: 24px;
	margin-top: 40px;
`;

const Title = styled.div`
	color: #2f3542;
	font-feature-settings: 'liga' off;
	font-size: 24px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
	margin: 40px 0;
`;

const Wrapper = styled.div`
	max-width: 1248px;
	margin: 150px auto;
`;

export default RewardsPage;
