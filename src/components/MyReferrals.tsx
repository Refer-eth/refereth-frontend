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
			<Middle gap='64px'>
				<StyledTable>
					<TableHeader>
						<TableRow>
							<TableHeadCell>Top Invitee</TableHeadCell>
							<TableHeadCell>Points Earned</TableHeadCell>
							<TableHeadCell># of Transactions</TableHeadCell>
						</TableRow>
					</TableHeader>
					<tbody>
						{data.map((invitee, index) => (
							<TableRow key={index}>
								<TableCell>{invitee.address}</TableCell>
								<TableCell>{invitee.points}</TableCell>
								<TableCell>
									{invitee.noOfTransactions}
								</TableCell>
							</TableRow>
						))}
					</tbody>
				</StyledTable>
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
			</Middle>
			<Hr />
			<ButtonOutline title='Check My Invitees History' />
		</Wrapper>
	);
};

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-radius: 8px;
	overflow: hidden;
`;

const TableHeader = styled.thead`
	background-color: #4caf50;
`;

const TableRow = styled.tr`
	&:nth-child(odd) {
		background-color: #f9f9f9;
	}
	&:nth-child(even) {
		background-color: #e8e8e8;
	}
`;

const TableCell = styled.td`
	color: #747d8c;
	padding: 12px;
	text-align: left;
	border-bottom: 1px solid #ddd;
`;

const TableHeadCell = styled.th`
	padding: 12px;
	text-align: left;
	border-bottom: 1px solid #ddd;
	background-color: #e3e8f1;
	color: #747d8c;
`;

const Middle = styled(FlexCenter)`
	justify-content: space-between;
`;

const AccInvites = styled.div`
	display: flex;
	gap: 30px;
	> span:first-child {
		color: #2f3542;
		font-feature-settings: 'liga' off;
		font-size: 24px;
		font-style: normal;
		font-weight: 900;
		line-height: normal;
	}
	> span:last-child {
		color: #2f3542;
		font-feature-settings: 'liga' off;
		font-size: 24px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
`;

const You = styled.div`
	margin-bottom: 40px;
	color: #747d8c;
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
	width: 100%;
`;

export default MyReferrals;
