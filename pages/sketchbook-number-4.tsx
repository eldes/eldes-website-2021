import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BeImage from '../components/BeImage'
import BePage from '../components/BePage'
import BeParagaph from '../components/BeParagaph'
import BePhotoGrid from '../components/BePhotoGrid'
import BeThanks from '../components/BeThanks'
import { PageSection } from '../components/Page'
import headerImage from '../public/content/sketchbook-number-4/header.jpg'
import mockup200802aImage from '../public/content/sketchbook-number-4/mockup-2008-02a.jpg'
import mockup200803aImage from '../public/content/sketchbook-number-4/mockup-2008-03a.jpg'
import mockup200803bImage from '../public/content/sketchbook-number-4/mockup-2008-03b.jpg'
import mockup200804aImage from '../public/content/sketchbook-number-4/mockup-2008-04a.jpg'
import mockup200804bImage from '../public/content/sketchbook-number-4/mockup-2008-04b.jpg'
import mockup200805aImage from '../public/content/sketchbook-number-4/mockup-2008-05a.jpg'
import mockup200807aImage from '../public/content/sketchbook-number-4/mockup-2008-07a.jpg'
import mockup200808aImage from '../public/content/sketchbook-number-4/mockup-2008-08a.jpg'
import mockup200904aImage from '../public/content/sketchbook-number-4/mockup-2009-04a.jpg'
import mockup201006aImage from '../public/content/sketchbook-number-4/mockup-2010-06a.jpg'
import mockup201807aImage from '../public/content/sketchbook-number-4/mockup-2018-07a.jpg'
import mockup201808bImage from '../public/content/sketchbook-number-4/mockup-2018-08b.jpg'
import mockup201910aImage from '../public/content/sketchbook-number-4/mockup-2019-10a.jpg'
import mockup202004aImage from '../public/content/sketchbook-number-4/mockup-2020-04a.jpg'
import mockup202004bImage from '../public/content/sketchbook-number-4/mockup-2020-04b.jpg'
import mockup202107Image from '../public/content/sketchbook-number-4/mockup-2021-07.jpg'
import mockup20210819image from '../public/content/sketchbook-number-4/mockup-2021-08-19.jpg'
import mockup202108aImage from '../public/content/sketchbook-number-4/mockup-2021-08a.jpg'
import mockup202202Image from '../public/content/sketchbook-number-4/mockup-2022-02.jpg'
import thanksImage from '../public/content/sketchbook-number-4/thanks.jpg'

const SketchbookNumber4Page: NextPage = () => {
	return (
		<BePage
			title='Sketchbook #4'
			section={PageSection.Portfolio}
			backgroundColor='#8A9342'
			foregroundColor='#fff'
		>
			<BeImage
				src={ headerImage }
				alt={ 'Sketchbook #4' }
			/>
			<BeParagaph>
				This 4th sketchbook of mine was made with sheets of satin coated paper. The drawings were made using a rechargeable technical pen, without a previous draft.
			</BeParagaph>
			<BePhotoGrid
				images={[
					{
						src: mockup20210819image,
						alt: 'Mockup of page'
					},
					{
						src: mockup202202Image,
						alt: 'Mockup of page'
					},
					{
						src: mockup20210819image,
						alt: 'Mockup of page'
					},
				]}
				cols={3}
			/>
			<BePhotoGrid
				images={[
					{
						src: mockup202107Image,
						alt: 'Mockup of page'
					},
					{
						src: mockup202108aImage,
						alt: 'Mockup of page'
					},
				]}
				cols={2}
			/>
			<BePhotoGrid
				images={[
					{
						src: mockup202004aImage,
						alt: 'Mockup of page'
					},
					{
						src: mockup201910aImage,
						alt: 'Mockup of page'
					},
					{
						src: mockup202004bImage,
						alt: 'Mockup of page'
					},
				]}
				cols={3}
			/>
			<BePhotoGrid
				images={[
					{
						src: mockup200807aImage,
						alt: 'Mockup of page'
					},
					{
						src: mockup200805aImage,
						alt: 'Mockup of page'
					},
					{
						src: mockup200804aImage,
						alt: 'Mockup of page'
					},
					{
						src: mockup200804bImage,
						alt: 'Mockup of page'
					},
				]}
				cols={4}
			/>
			<BePhotoGrid
				images={[
					{
						src: mockup200904aImage,
						alt: 'Mockup of page'
					},
					{
						src: mockup200803aImage,
						alt: 'Mockup of page'
					},
				]}
				cols={2}
			/>
			<BePhotoGrid
				images={[
					{
						src: mockup200803bImage,
						alt: 'Mockup of page'
					},
					{
						src: mockup200802aImage,
						alt: 'Mockup of page'
					},
					{
						src: mockup200808aImage,
						alt: 'Mockup of page'
					},
				]}
				cols={3}
			/>
			<BePhotoGrid
				images={[
					{
						src: mockup200904aImage,
						alt: 'Mockup of page'
					},
					{
						src: mockup201808bImage,
						alt: 'Mockup of page'
					},
				]}
				cols={2}
			/>
			<BePhotoGrid
				images={[
					{
						src: mockup201807aImage,
						alt: 'Mockup of page'
					},
					{
						src: mockup201006aImage,
						alt: 'Mockup of page'
					},
				]}
				cols={2}
			/>
			<BeThanks image={ thanksImage } />
		</BePage>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', ['common', 'Page'])),
		}
	}
}

export default SketchbookNumber4Page