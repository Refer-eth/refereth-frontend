import styled from 'styled-components';
import Button from '@/components/Button';
import { Hr } from '@/components/styled-components/Hr';
import ButtonOutline from '@/components/ButtonOutline';

const JoinedReferral = () => {
	return (
		<Wrapper>
			<Title>Congratulations</Title>
			<Desc>
				You’ve joined the referral program! now you can share your own
				referral link to earn more rewards!
			</Desc>
			<br />
			<Blue>
				<div>
					https://Refereum.io/?referrer_id=TdRrTePJSwhgPVQn1ufY2kzTVTC2
				</div>
				<Button text='Copy Link' icon='/images/copy.png' />
			</Blue>
			<Hr />
			<ShareWrapper>
				<ShareOn>Share on social media</ShareOn>
				<Socials>
					<ButtonOutline icon='/images/x.png' title='Share On X' />
					<ButtonOutline
						icon='/images/facebook.png'
						title='Share On Facebook'
					/>
					<ButtonOutline
						icon='/images/linkedin.png'
						title='Share On Linekdin'
					/>
				</Socials>
			</ShareWrapper>
		</Wrapper>
	);
};

const Socials = styled.div`
	display: flex;
	gap: 16px;
	justify-content: center;
	align-items: center;
`;

const ShareWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ShareOn = styled.div`
	color: #747d8c;
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

const Blue = styled.div`
	color: #1e90ff;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
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

export default JoinedReferral;
