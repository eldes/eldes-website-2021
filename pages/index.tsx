import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Page, { PageSection } from '../components/Page'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
return (
	<Page title="Homepage" section={ PageSection.Home } />
)
}

export default Home