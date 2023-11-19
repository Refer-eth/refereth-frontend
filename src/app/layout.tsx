'use client';

import { ReactNode } from 'react';
import { Web3Modal } from '@/context/Web3Modal';
import Header from '@/components/Header';
import './globals.css';
import App from '@/app/App';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<Web3Modal>
					<Header />
					<App>{children}</App>
				</Web3Modal>
			</body>
		</html>
	);
}
