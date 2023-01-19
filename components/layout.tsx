import Head from 'next/head';
import Link from 'next/link';
import NavBar from './navbar';
import Footer from './footer';

import type { ReactElement } from 'react';
// import NestedLayout from '../components/nested-layout'

export default function Layout({ children, home }) {
	return (
		<>
			<p>this is layout</p>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
