import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BeCredits from '../components/BeCredits'
import BeImage from '../components/BeImage'
import BeParagaph, { BeParagaphAlign } from '../components/BeParagaph'
import BePhotoGrid from '../components/BePhotoGrid'
import BeThanks from '../components/BeThanks'
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage'
import coverImage from '../public/content/ajudaris-20-childrens-book-illustrations/cover.jpg'
import giraffeImage from '../public/content/ajudaris-20-childrens-book-illustrations/giraffe.jpg'
import animaisCacadorImage from '../public/content/ajudaris-20-childrens-book-illustrations/os-animais-e-o-cacador.jpg'
import roughImage from '../public/content/ajudaris-20-childrens-book-illustrations/rough.jpg'
import forestImage from '../public/content/ajudaris-20-childrens-book-illustrations/the-forest.jpg'


const HistoriasDaAjudaris20ChildrensBookIllustrationsPage: NextPage = () => {

	return (
		<PieceBePage>
			<BeImage
				src={animaisCacadorImage}
				alt={'Illustration for "Os animais e o caçador"'}
			/>
			<BeCredits
				clientName="Ajudaris"
				work="illustrations"
			/>
			<BeParagaph>
				&quot;Histórias da Ajudaris&quot; (<em>&quot;Ajudaris&apos;s Stories&quot;</em>) is a collaborative book with multiple stories written by children from many public schools around Portugal.
			</BeParagaph>
			<BeImage
				src={coverImage}
				alt={'Digital mockup of book'}
			/>
			<BeParagaph>
			In this edition I illustrated 2 stories.
			</BeParagaph>
			<BeImage
				src={forestImage}
				alt={'Illustration for "A florestas"'}
				horizontalPadding={ true }
			/>
			<BePhotoGrid images={[
				{
					src: roughImage,
					alt: 'Rough'
				},
				{
					src: animaisCacadorImage,
					alt: 'Illustration for "Os animais e o caçador"	'
				},
			]} cols={2}>
				
			</BePhotoGrid>
			
			<BeThanks image={giraffeImage} />
		</PieceBePage>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', pieceBePageI18nNamespace )),
		}
	}
}

export default HistoriasDaAjudaris20ChildrensBookIllustrationsPage