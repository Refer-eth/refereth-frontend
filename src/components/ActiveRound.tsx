import styled from 'styled-components';
import Image from 'next/image';
import { FlexCenter } from '@/components/styled-components/Flex';

const ActiveRound = () => {
	return (
		<Wrapper>
			<Active>Active Round</Active>
			<div>
				<Round>Polygon Alpha Round</Round>
				<On>
					<div>On</div>
					<div>Polygon</div>
					<Image
						src='/images/polygon.png'
						alt='polygon'
						width={24}
						height={24}
					/>
				</On>
				<Details>
					<Row>
						<Column>Reward Pool</Column>
						<div>15K OP ~ 10 K USD</div>
					</Row>
					<Row>
						<Column>Run By</Column>
						<FlexCenter gap='4px'>
							<Image
								src='/images/polygon.png'
								alt='polygon'
								width={24}
								height={24}
							/>
							Polygon
						</FlexCenter>
					</Row>
					<Row>
						<Column>Remaining Time</Column>
						<div>2D 17H 38M</div>
					</Row>
					<Row>
						<Column>Round Started</Column>
						<div>10 Nov 2023</div>
					</Row>
				</Details>
			</div>
		</Wrapper>
	);
};

const Column = styled.div``;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Details = styled.div`
	color: #747d8c;
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	display: flex;
	gap: 12px;
	flex-direction: column;
`;

const On = styled(FlexCenter)`
	color: #2f3542;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 150%;
	margin-bottom: 16px;
	gap: 4px;
	> div:first-child {
		opacity: 0.54;
	}
`;

const Round = styled.div`
	color: #2f3542;
	text-align: center;
	font-size: 18px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
	margin-bottom: 8px;
`;

const Active = styled.div`
	color: #747d8c;
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	margin-bottom: 16px;
`;

const Wrapper = styled.div`
	padding: 24px;
	border-radius: 24px;
	background: #fff;
	width: 400px;
`;

export default ActiveRound;
