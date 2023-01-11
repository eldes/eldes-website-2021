import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import BeCredits from '../components/BeCredits';
import BeEmbed from '../components/BeEmbed';
import BeImage from '../components/BeImage';
import BeParagaph from '../components/BeParagraph';
import BeThanks from '../components/BeThanks';
import PieceBePage, { pieceBePageI18nNamespace } from '../components/PieceBePage';
import SwitchLocale from '../components/SwitchLocale';
import Helpers from '../lib/Helpers';
import SeeMore from '../models/SeeMore';
import { TagSlug } from '../models/Tag';
import highlightImage from '../public/content/protest-whiteboard-animation/highlight.jpg';
import fullIllustrationImage from '../public/content/protest-whiteboard-animation/whiteboard-animation-full-illustration.png';
import illustrationFlavorsSmellsImage from '../public/content/protest-whiteboard-animation/whiteboard-animation-illustration-flavors-and-smells.jpg';
import illustrationMaterializationOfFeelingsImage from '../public/content/protest-whiteboard-animation/whiteboard-animation-illustration-materialization-of-feelings.jpg';
import thanksImage from '../public/content/protest-whiteboard-animation/whiteboard-animation-thanks.png';

const ProtestWhiteboardAnimationPage: NextPage = () => {

	return (
		<PieceBePage
      seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
        TagSlug.Whiteboard,
        TagSlug.CartoonStyle,
      ])}
		>
			<BeImage src={highlightImage} alt={'Detail of illutration'}></BeImage>
			<BeCredits fields={[
				{
					label: 'Mindroads/Sense Envirossel',
					value: {
						br: 'cliente',
						en: 'client',
					}
				},
				{
					label: 'Eldes',
					value: {
						br: 'ilustrações e direção de arte',
						en: 'illustrations and art direction',
					}
				},
			]}/>
			<SwitchLocale
					en={
						<>
							<BeParagaph>
								Mindroads/Sense Envirossel, Grupo Resulta&apos;s market research agency and specialist in unconscious research and biometrics, used its U-lens technique to explore people&apos;s unconscious, asking them to describe the 2013 protests through flavors and smells.
							</BeParagaph>
							<BeParagaph>
								Our studio was in charge of designing and producing a whiteboard animation to present the result of this research.
							</BeParagaph>
						</>
						
					} br={
						<>
							<BeParagaph>
								A Mindroads/Sense Envirossel, agência de pesquisa de mercado do Grupo Resulta e especialista em pesquisa do inconsciente e biometria, usou sua técnica U-lens para explorar o inconsciente das pessoas, pedindo para que elas descrevessem os protestos de 2013 por meio de sabores e cheiros.
							</BeParagaph>
							<BeParagaph>
								Nosso estúdio ficou encarregado de elaborar e produzir uma animação whiteboard para apresentar o resultado dessa pesquisa.
							</BeParagaph>
						</>
						}
			/>
			<BeEmbed aspectRatioPercent={56.25} horizontalPadding={true} verticalPadding={true}>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/ArIjbvW1a7c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</BeEmbed>
			<BeImage src={illustrationFlavorsSmellsImage} alt={'Illustration detail (flavors and smells)'} />
			<BeImage src={illustrationMaterializationOfFeelingsImage} alt={'Illustration detail (materialization of feelings)'} />
			<BeImage src={fullIllustrationImage} alt={'Full illustration'} />
			<BeThanks image={thanksImage} />
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

export default ProtestWhiteboardAnimationPage