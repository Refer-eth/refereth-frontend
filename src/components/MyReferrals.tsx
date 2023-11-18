import styled from 'styled-components';
import ButtonOutline from '@/components/ButtonOutline';
import { FlexCenter } from '@/components/styled-components/Flex';
import Image from 'next/image';

const MyReferrals = () => {
	return (
		<Wrapper>
			<My>
				<div>My Referral Insights</div>
				<FlexCenterStyled>
					How To Earn More!
					<Circle>!</Circle>
				</FlexCenterStyled>
			</My>
			<Hr />
			<FlexCenter gap='64px'>
				<Table>
					<HeadRow>
						<Th>Top Invitees</Th>
						<Th>Points earned</Th>
						<Th># of transactions</Th>
					</HeadRow>
					{data.map(item => {
						return (
							<Tr key={item.address}>
								<Td>{item.address}</Td>
								<Td>{item.points}</Td>
								<Td>{item.noOfTransactions}</Td>
							</Tr>
						);
					})}
				</Table>
				<Accepted>
					<Next>
						<div>Next</div>
						<Image
							src={'/images/arrow-right.png'}
							alt='arrow-right'
							width={12}
							height={15}
						/>
						<div>Stellar Prodigy</div>
					</Next>
					<You>You need 23 more points</You>
					<AccInvites>
						<span>32</span>
						<span>Accepted Invites</span>
					</AccInvites>
				</Accepted>
			</FlexCenter>
			<Hr />
			<ButtonOutline title='Check My Invitees History' />
		</Wrapper>
	);
};

const AccInvites = styled.div``;

const You = styled.div`
	margin-bottom: 40px;
	color: #747d8c;
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;

const Next = styled(FlexCenter)`
	justify-content: space-between;
	width: 167px;
	margin-bottom: 16px;
	> * {
		flex-shrink: 0;
	}
	> div:first-child {
		color: #747d8c;
		text-align: center;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	> div:last-child {
		color: #2f3542;
		text-align: center;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
`;

const Accepted = styled.div``;

const data = [
	{
		address: '0x1234567890123456789012345678901234567890',
		points: 100,
		noOfTransactions: 10,
	},
	{
		address: '0x1234567890123456789012345678901234567890',
		points: 100,
		noOfTransactions: 10,
	},
	{
		address: '0x1234567890123456789012345678901234567890',
		points: 100,
		noOfTransactions: 10,
	},
	{
		address: '0x1234567890123456789012345678901234567890',
		points: 100,
		noOfTransactions: 10,
	},
];

const Circle = styled(FlexCenter)`
	width: 18px;
	height: 18px;
	border-radius: 50%;
	border: 2px solid #ff6b81;
`;

const FlexCenterStyled = styled(FlexCenter)`
	font-size: 12px;
	color: #ff6b81;
	gap: 8px;
`;

const Tr = styled.tr`
	margin: 10px 0;
	height: 37px;
`;

const Td = styled.td`
	color: #747d8c;
	margin: 10px 0;
`;

const Th = styled.th`
	color: #747d8c;
`;

const HeadRow = styled.tr`
	border-radius: 4px;
	background: #e3e8f1;
	color: #747d8c;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	padding: 10px 32px;
	height: 37px;
`;

const Table = styled.table`
	text-align: center;
`;

const My = styled.div`
	color: #747d8c;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Hr = styled.div`
	margin: 16px 0;
	width: 100%;
	height: 1px;
	background: #e3e8f1;
`;

const Wrapper = styled.div`
	border-radius: 24px;
	background: #fff;
	padding: 32px;
`;

export default MyReferrals;
