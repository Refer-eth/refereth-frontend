import React from 'react';
import styled from 'styled-components';
import { Absolute } from '@/components/styled-components/Position';

const ProgressIndicator = ({ progress }: { progress: number }) => {
	const radius = 90;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference - (progress / 100) * circumference;

	return (
		<ProgressWrapper>
			<Svg viewBox='0 0 200 200'>
				{' '}
				<BackgroundCircle cx='100' cy='100' r={radius} />
				<ProgressCircle
					cx='100'
					cy='100'
					r={radius}
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
				/>
			</Svg>
			<AbsoluteStyled>
				<Level>Journeyman</Level>
				<Points>Points 417</Points>
			</AbsoluteStyled>
		</ProgressWrapper>
	);
};

const AbsoluteStyled = styled(Absolute)`
	top: 55%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Level = styled.div`
	color: #2f3542;
	text-align: center;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	text-transform: uppercase;
	margin-bottom: 8px;
`;

const Points = styled.div`
	color: #747d8c;
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;

const ProgressWrapper = styled.div`
	position: relative;
	width: 200px;
	height: 200px;
	margin-top: 40px;
`;

const Svg = styled.svg`
	width: 100%;
	height: 100%;
	transform: rotate(90deg);
`;

const Circle = styled.circle`
	fill: none;
	stroke-width: 18;
	stroke-linecap: round;
`;

const BackgroundCircle = styled(Circle)`
	stroke: #e6e6e6;
`;

const ProgressCircle = styled(Circle)`
	stroke: #ff0000;
	transition: stroke-dashoffset 0.6s ease 0s;
`;

export default ProgressIndicator;
