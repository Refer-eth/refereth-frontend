'use client';
import styles from './page.module.css';
import styled from 'styled-components';

export default function Home() {
	return (
		<main className={styles.main}>
			<Wrapper>Hello World!</Wrapper>
		</main>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 40px 0 0;
`;
