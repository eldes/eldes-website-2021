import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import BeCredits from '../components/BeCredits';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagaph';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import Helpers from '../lib/Helpers';
import SeeMore from '../models/SeeMore';
import { TagSlug } from '../models/Tag';
import familiaMockupImage from '../public/content/ajudaris-17-childrens-book-illustrations/a-familia-mockup.jpg';
import familiaImage from '../public/content/ajudaris-17-childrens-book-illustrations/a-familia.jpg';
import aniversarioMockupImage from '../public/content/ajudaris-17-childrens-book-illustrations/aniversario-terrivel-mockup.jpg';
import aniversarioImage from '../public/content/ajudaris-17-childrens-book-illustrations/aniversario-terrivel.jpg';
import mockupImage from '../public/content/ajudaris-17-childrens-book-illustrations/mockup.jpg';


const HistoriasDaAjudaris17ChildrensBookIllustrationsPage: NextPage = () => {

	return (
		<PieceBePage seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
			TagSlug.CartoonStyle,
			TagSlug.Textbook,
		])}>
			<BeImage
				src={familiaImage}
				alt={'Illustration for "A família"'}
			/>
			<BeCredits fields={[
				{
					label: 'Ajudaris',
					value: {
						br: 'editora',
						en: 'publisher',
					}
				},
				{
					label: 'Eldes',
					value: {
						br: 'ilustrações',
						en: 'illustrations',
					}
				},
			]}/>
			<BeParagaph>
				&quot;Histórias da Ajudaris&quot; (<em>&quot;Ajudaris&apos;s Stories&quot;</em>) is a collaborative book with multiple stories written by children from many public schools around Portugal.
			</BeParagaph>
			<BeImage
				src={mockupImage}
				alt={'Digital mockup of book'}
			/>
			<BeParagaph>
			In this edition I illustrated 2 stories: &quot;A fam&iacute;lia&quot; (<em>&quot;The family&quot;</em>), and &quot;O anivers&aacute;rio terr&iacute;vel&quot; (<em>&quot;The terrible birthday&quot;</em>).
			</BeParagaph>
			<BeImage
				src={familiaMockupImage}
				alt={'Digital mockup of book'}
			/>
			<BeImage
				src={aniversarioMockupImage}
				alt={'Digital mockup of book'}
			/>
			<BeImage
				src={aniversarioImage}
				alt={'Illustration for "O aniversário terrível"'}
				horizontalPadding={ true }
			/>
			
			<BeThanks />
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

export default HistoriasDaAjudaris17ChildrensBookIllustrationsPage