import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BeCredits from '../components/BeCredits';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagaph';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import lutraMockupImage from '../public/content/historias-da-ajudaris-19-childrens-book-illustrations/a-viagem-da-lutra-mockup.jpg';
import lutraIllustraImage from '../public/content/historias-da-ajudaris-19-childrens-book-illustrations/a-viagem-da-lutra.jpg';
import choooroMockupImage from '../public/content/historias-da-ajudaris-19-childrens-book-illustrations/chooo-ro-esperanca-mockup.jpg';
import choooroIllustraImage from '../public/content/historias-da-ajudaris-19-childrens-book-illustrations/chooo-ro-esperanca.jpg';
import mockupImage from '../public/content/historias-da-ajudaris-19-childrens-book-illustrations/mockup.jpg';
import vigilantesMockupImage from '../public/content/historias-da-ajudaris-19-childrens-book-illustrations/os-vigilantes-da-floresta-mockup.jpg';
import vigilantesIllustraImage from '../public/content/historias-da-ajudaris-19-childrens-book-illustrations/os-vigilantes-da-floresta.jpg';

const HistoriasDaAjudaris17ChildrensBookIllustrationsPage: NextPage = () => {

	return (
		<PieceBePage>
			<BeImage
				src={vigilantesIllustraImage}
				alt={'Illustration for "Os vigilantes da floresta"'}
			/>
			<BeCredits
				clientName="Ajudaris"
				work="illustrations"
			/>
			<BeParagaph>
				&quot;Histórias da Ajudaris&quot; (<em>&quot;Ajudaris&apos;s Stories&quot;</em>) is a collaborative book with multiple stories written by children from many public schools around Portugal.
			</BeParagaph>
			<BeImage
				src={mockupImage}
				alt={'Digital mockup of book'}
			/>
			<BeParagaph>
			In this edition I illustrated 3 stories: &quot;Os vigilantes da floresta&quot; (<em>&quot;The forest watchers&quot;</em>), &quot;A viagem da Lutra&quot; (<em>&quot;The Journey of the Lutra&quot;), and &quot;CHOOOooo..ro esperan&ccedil;a&quot;</em> (<em>&quot;CRRRrrr...y hope &quot;</em>).
			</BeParagaph>
			<BeImage
				src={vigilantesMockupImage}
				alt={'Digital mockup of book'}
			/>
			<BeImage
				src={lutraMockupImage}
				alt={'Digital mockup of book'}
			/>
			<BeImage
				src={choooroMockupImage}
				alt={'Digital mockup of book'}
			/>
			<BeImage
				src={lutraIllustraImage}
				alt={'Illutration for "A viagem da Lutra"'}
				horizontalPadding={true}
			/>
			<BeImage
				src={choooroIllustraImage}
				alt={'Illutration for "CHOOOooo...ro esperança"'}
				horizontalPadding={true}
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