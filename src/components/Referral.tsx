import Button from '@/components/Button';
import ButtonOutline from '@/components/ButtonOutline';
import styled from 'styled-components';
import { FlexCenter } from '@/components/styled-components/Flex';

const Referral = () => {
	return (
		<Wrapper>
			<Up>
				<div>Here’s your unique referral link</div>
				<FlexCenterStyled>
					Learn More!
					<Circle>!</Circle>
				</FlexCenterStyled>
			</Up>
			<Hr />
			<Middle>
				<Link>
					https://Refereum.io/?referrer_id=TdRrTePJSwhgPVQn1ufY2kzTVTC2
				</Link>
				<Button text='Copy Link' icon='/images/copy.png' />
			</Middle>
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

const Middle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

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

const Link = styled.div`
	color: #1e90ff;
`;

const FlexCenterStyled = styled(FlexCenter)`
	font-size: 12px;
	color: #ff6b81;
	gap: 8px;
`;

const Circle = styled(FlexCenter)`
	width: 18px;
	height: 18px;
	border-radius: 50%;
	border: 2px solid #ff6b81;
`;

const Up = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #747d8c;
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;

const Hr = styled.div`
	margin: 16px 0;
	width: 100%;
	height: 1px;
	background: #e3e8f1;
`;

const Wrapper = styled.div`
	padding: 32px;
	border-radius: 24px;
	background: white;
	width: 800px;
`;

export default Referral;
