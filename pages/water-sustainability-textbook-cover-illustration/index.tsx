import { NextPage } from 'next';
import { useRouter } from 'next/router';
import BeCredits from '../../components/BeCredits';
import BeHeading from '../../components/BeHeading';
import BeImage from '../../components/BeImage';
import BeParagaph from '../../components/BeParagraph';
import BePhotoGrid from '../../components/BePhotoGrid';
import BeThanks from '../../components/BeThanks';
import PieceBePage from '../../components/PieceBePage';
import Helpers from '../../lib/Helpers';
import { TagSlug } from '../../models/Tag';
import colorPalette2Image from '../../public/content/water-sustainability-textbook-cover-illustration/color-palette-2.png';
import colorPaletteImage from '../../public/content/water-sustainability-textbook-cover-illustration/color-palette.png';
import coverDesignRoughImage from '../../public/content/water-sustainability-textbook-cover-illustration/cover-design-rough.jpg';
import bookCoverMockupImage from '../../public/content/water-sustainability-textbook-cover-illustration/covers-mockup.jpg';
import headerImage from '../../public/content/water-sustainability-textbook-cover-illustration/header.png';
import illustrationRough from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-rough.jpg';
import logotypeArtworkImage from '../../public/content/water-sustainability-textbook-cover-illustration/logotype-artwork.png';
import logotypeRoughImage from '../../public/content/water-sustainability-textbook-cover-illustration/logotype-rough.jpg';
import thanksImage from '../../public/content/water-sustainability-textbook-cover-illustration/thanks.png';
import volume1CoverIllustrationRoughimage from '../../public/content/water-sustainability-textbook-cover-illustration/volume-1-cover-illustration-rough.jpg';
import volume1Cover from '../../public/content/water-sustainability-textbook-cover-illustration/volume-1-cover.png';
import volume2And3CoverIllustrationRoughimage from '../../public/content/water-sustainability-textbook-cover-illustration/volume-2-and-3-cover-illustration-rough.jpg';
import volume2Cover from '../../public/content/water-sustainability-textbook-cover-illustration/volume-2-cover.png';
import volume3Cover from '../../public/content/water-sustainability-textbook-cover-illustration/volume-3-cover.png';
import volume4CoverIllustrationRoughimage from '../../public/content/water-sustainability-textbook-cover-illustration/volume-4-cover-illustration-rough.jpg';
import volume4Cover from '../../public/content/water-sustainability-textbook-cover-illustration/volume-4-cover.png';
import piecesRepository from '../../repositories/pieces-repository';

const TextbookAguaSustentabilidadePage: NextPage = function () {

  const router = useRouter();
  const slug = Helpers.getCurrentPageSlug(router);
  const piece = piecesRepository.load(slug);

  const blueColorSchema = {
    backgroundColor:'#1b76bc',
    foregroundColor:'#fff',
  };

  const whiteColorSchema = {
    backgroundColor:'#fff',
    foregroundColor:'#000',
  };

  return (
    <PieceBePage seeMoreList={Helpers.makeSeeMoreListForPieceBePage(useRouter(), [
			TagSlug.Textbook,
			TagSlug.CartoonStyle,
		])} {...blueColorSchema}>
      <BeImage
				src={ headerImage }
				alt="Água e sustentabilidade"
			/>
      <BeCredits fields={[
				{
					label: 'COM-ARTE',
					value: {
						br: 'editora',
						en: 'publisher',
					}
				},
				{
					label: 'Eldes',
					value: {
						br: 'ilustrações e design de capa',
						en: 'book cover illustrations and design',
					}
				},
			]} {...blueColorSchema} title={piece?.description}/>
      <BeParagaph>
        Para fortalecer a gestão de recursos hídricos a partir da base da formação do cidadão por meio da educação, o ProfCiAmb (Curso de Mestrado Profissional em Rede Nacional para Ensino das Ciências Ambientais) decidiu produzir e publicar materiais pedagógicos a partir das pesquisas e trabalhos realizados, surgindo assim a <strong>Coleção ProfCiAmb</strong>.
      </BeParagaph>
      <BeParagaph>
        A publicação <em>Água e Sustentabilidade</em>, composta por 4 volumes, foi a primeira da <em>Série Guias Educacionais</em> dessa coleção.
      </BeParagaph>
      <BeParagaph>
        Além da criação do <em>Selo ProfCiAmb</em>, para ser usado como marca dessa coleção, nosso estúdio também foi responsável pelo projeto gáfico, ilustrações e diagramação das capas desses 4 volumes.
      </BeParagaph>
      <BeImage
				src={ bookCoverMockupImage }
				alt="Book cover mockup"
			/>

      <BeHeading>
        Processo
      </BeHeading>
      <BeParagaph>
        A ideia foi criar uma ilustração de capa do tipo <em>search and find</em> para cada volume da publicação, composta por várias cenas de situações abordadas no respectivo volume.
      </BeParagaph>
      <BeParagaph>
        Abaixo a paleta de cores e o rascunho iniciais da ilustração e do design da capa do volume 2.
      </BeParagaph>
      <BeImage
				src={ illustrationRough }
				alt="Illustration rough"
        verticalPadding
			/>
      <BeImage
				src={ coverDesignRoughImage }
				alt="Cover design rough"
        verticalPadding
			/>
      <BeImage
				src={ colorPaletteImage }
				alt="Color palette"
        verticalPadding
			/>
      <BeParagaph>
        Com o avanço do projeto, foram redefinidas as cenas e a paleta de cores.
      </BeParagaph>
      <BePhotoGrid images={[
        {
          src: volume1CoverIllustrationRoughimage,
          alt: 'Rough of cover illustration for volume 1'
        },
        {
          src: volume2And3CoverIllustrationRoughimage,
          alt: 'Rough of cover illustration for volumes 2 and 3'
        },
        {
          src: volume4CoverIllustrationRoughimage,
          alt: 'Rough of cover illustration for volume 4'
        },
        {
          src: colorPalette2Image,
          alt: 'Color palette'
        },
        
      ]} cols={4} />
      <BeParagaph>
        Foi elaborado também o desenho do título da publicação, com lettering personalizado.
      </BeParagaph>
      <BePhotoGrid images={[
        {
          src: logotypeRoughImage,
          alt: 'Rough of logotype'
        },
        {
          src: logotypeArtworkImage,
          alt: 'Artwork of logotype'
        },
      ]} cols={1} />

      <BeHeading>
        Arte-final
      </BeHeading>
      <BeImage src={volume1Cover} alt={'Volume 1 cover artwork'} horizontalPadding verticalPadding />
      <BeImage src={volume2Cover} alt={'Volume 2 cover artwork'} horizontalPadding verticalPadding />
      <BeImage src={volume3Cover} alt={'Volume 3 cover artwork'} horizontalPadding verticalPadding />
      <BeImage src={volume4Cover} alt={'Volume 4 cover artwork'} horizontalPadding verticalPadding />
      <BeThanks image={thanksImage} />
    </PieceBePage>
  );
};


export default TextbookAguaSustentabilidadePage;