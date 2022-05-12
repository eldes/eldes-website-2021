import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Page, { PageSection } from '../../components/Page';
import eldesPhotoImage from '../../public/content/about/eldes.jpg';
import styles from './styles.module.scss';

const AboutPage: NextPage = () => {
	const { t } = useTranslation()
	
	return (
		<Page title={ t('common:Sections.about', 'About') } section={PageSection.About}>
			<div className={styles.about}>
				<div className={styles.resume}>
					
					<p className={styles.text}>
						<strong>Combination of creative talent in visual arts and technological insight:</strong> <em>graphic designer</em> and <em>illustrator</em>, with over 18 years experience in Editorial, Literature and Advertising, and <em>software engineer</em>, with over 24 years experience in full-stack Web and Mobile development.
					</p>
					<div className={styles.photo}>
						<Image
							src={ eldesPhotoImage }
							alt={ 'Eldes' }
							layout="responsive"
						/>
					</div>
				</div>
				<section>
					<h2>Currently</h2>
					<p>
						He works at his illustration studio/design office/creative agency, Frux, developing several illustration, graphic design and multimedia projects.
					</p>
					<p>
						He is a professor at Senac, teaching system development, graphic design and drawing classes.
					</p>
					<p>
						He helps organize sketching meetups like Urban Sketchers and World Wide SketchCrawl.
					</p>
					<p>
						He teaches courses, workshops and lectures about techniques and the illustration market.
					</p>
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

export default AboutPage