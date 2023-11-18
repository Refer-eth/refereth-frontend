import styled from 'styled-components';
import { FC } from 'react';
import Image from 'next/image';
import { Hr } from '@/components/styled-components/Hr';
import Button from '@/components/Button';
import { FlexCenter } from '@/components/styled-components/Flex';

interface IProps {
	round: any;
	user: any;
}

const RoundCard: FC<IProps> = props => {
	const { round, user } = props;
	return (
		<Wrapper>
			<Title>{round.name}</Title>
			<Chain>
				<span>On</span>
				<span>Polygon</span>
				<Image
					src='/images/polygon.png'
					alt='polygon'
					width={24}
					height={24}
				/>
			</Chain>
			<Flex>
				<Gray>Round</Gray>
				<Black>{round.number}</Black>
			</Flex>
			<Hr />
			<Flex>
				<Gray>Reward Pool</Gray>
				<Black>{round.reward}</Black>
			</Flex>
			<Flex>
				<Gray>Run By</Gray>
				<Black>{round.runBy}</Black>
			</Flex>
			<Flex>
				<Gray>Round Started</Gray>
				<Black>{round.startDate}</Black>
			</Flex>
			<Flex>
				<Gray>Finished On</Gray>
				<Black>{round.endDate}</Black>
			</Flex>
			<Flex>
				<Gray>Points Earned</Gray>
				<Black>{round.points}</Black>
			</Flex>
			<Flex>
				<Gray>My Position</Gray>
				<Black>{round.myPosition}</Black>
			</Flex>
			<View>View Round Details {' >'}</View>
			<Hr />
			<Flex>
				<Gray>{user.claimed ? 'Claimed' : 'Claimable'}</Gray>
				<BlackStyled>{user.claimable || user.claimed}</BlackStyled>
			</Flex>
			{user.claimed ? (
				<Claimed>
					Rewards Claimed{' '}
					<Image
						width={18}
						height={18}
						src='/images/checked.png'
						alt='checked'
					/>
				</Claimed>
			) : (
				<Button text='Claim Rewards' />
			)}
		</Wrapper>
	);
};

const Claimed = styled(FlexCenter)`
	color: #1dd1a1;
	text-align: center;
	margin: 40px 0 10px;
	gap: 8px;
`;

const BlackStyled = styled.div`
	font-weight: 900;
`;

const View = styled.div`
	margin: 16px 0 24px;
	color: #ff4757;
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 20px;
	cursor: pointer;
`;

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 16px 0;
`;

const Gray = styled.div`
	color: #747d8c;
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;

const Black = styled(Gray)`
	color: #2f3542;
`;

const Chain = styled(FlexCenter)`
	gap: 8px;
	margin: 16px 0 32px;
	> span:first-child {
		opacity: 0.54;
	}
`;

const Title = styled.div`
	color: #2f3542;
	text-align: center;
	font-feature-settings: 'liga' off;
	font-size: 18px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`;

const Wrapper = styled.div`
	padding: 24px 32px;
	border-radius: 24px;
	background: #fff;
	width: 400px;
`;

export default RoundCard;
