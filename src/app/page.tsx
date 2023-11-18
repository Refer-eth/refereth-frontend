'use client';
import styles from './page.module.css';
import styled from 'styled-components';
import Referral from '@/components/Referral';
import ActiveRound from '@/components/ActiveRound';
import MyReferrals from '@/components/MyReferrals';

export default function Home() {
	return (
		<main className={styles.main}>
			<Wrapper>
				<Up>
					<Referral />
					<ActiveRound />
				</Up>
				<MyReferrals />
			</Wrapper>
		</main>
	);
}

const Up = styled.div`
	display: flex;
	gap: 40px;
`;

const Wrapper = styled.div`
	max-width: 1240px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 40px 0 0;
	flex-direction: column;
	gap: 40px;
`;
