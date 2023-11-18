import styled from 'styled-components';
import Input from '@/components/styled-components/Input';
import Button from '@/components/Button';

const ReadyToJoin = () => {
	return (
		<Wrapper>
			<Title>Ready to Join?</Title>
			<Desc>
				You need to enter the referral ID to join this referral round!
			</Desc>
			<InputWrapper>
				<Input placeholder='Enter referral ID' />
			</InputWrapper>
			<br />
			<Button text='Join and Earn Rewards' />
		</Wrapper>
	);
};

const InputWrapper = styled.div`
	max-width: 584px;
	margin: 0 auto;
`;

const Desc = styled.div`
	color: #747d8c;
	text-align: center;
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	margin: 24px 0;
`;

const Title = styled.div`
	color: #2f3542;
	font-feature-settings: 'liga' off;
	font-size: 24px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`;

const Wrapper = styled.div`
	padding: 80px 32px;
	border-radius: 24px;
	background: #fff;
	text-align: center;
`;

export default ReadyToJoin;
