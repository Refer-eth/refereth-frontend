'use client';

import { ReactNode } from 'react';
import { Web3Modal } from '@/context/Web3Modal';
import Header from '@/components/Header';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<Web3Modal>
					<Header />
					{children}
				</Web3Modal>
			</body>
		</html>
	);
}
