import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import Page, { PageSection } from '../components/Page';
import SeeMoreLink from '../components/SeeMoreLink';
import iconAboutImage from '../public/content/home/icon-about.svg';
import iconFontsImage from '../public/content/home/icon-fonts.svg';
import iconPortfolioImage from '../public/content/home/icon-portfolio.svg';
import styles from './home/styles.module.scss';
import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Page title="" section={ PageSection.Home }>
			<div className={styles.home}>
				<section className={styles.intro}>
					<p className={styles.text}>
						<strong>Combination of creative talent in visual arts and technological insight:</strong> <em>graphic designer</em> and <em>illustrator</em>, with over {(new Date().getFullYear() - 2004)} years experience in Editorial, Literature and Advertising, and <em>software engineer</em>, with over {(new Date().getFullYear() - 2000)} years experience in full-stack Web and Mobile development.
						<SeeMoreLink href='/about' />
					</p>
				</section>
				<section className={styles.mainSections}>
					<Link href='/portfolio'>
						<a className={styles.link}>
							<Image src={iconPortfolioImage} width={512} height={512} alt='Portfolio'/>
							<span className={styles.label}>Portfolio</span>
						</a>
					</Link>
					<Link href='/fonts'>
						<a className={styles.link}>
							<Image src={iconFontsImage} width={512} height={512} alt='Fonts'/>
							<span className={styles.label}>Fonts</span>
						</a>
					</Link>
					<Link href='/about'>
						<a className={styles.link}>
							<Image src={iconAboutImage} width={512} height={512} alt='About'/>
							<span className={styles.label}>About</span>
						</a>
					</Link>
				</section>
			</div>
		</Page>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', ['common', 'Page'])),
		}
	}
}

export default Home