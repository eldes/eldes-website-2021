import { ReactNode } from 'react';
import BeHeading from '../../components/BeHeading';
import BeImage from '../../components/BeImage';
import BeParagaph from '../../components/BeParagraph';
import BePhotoGrid from '../../components/BePhotoGrid';
import colorPalette2Image from '../../public/content/water-sustainability-textbook-cover-illustration/color-palette-2.png';
import colorPaletteImage from '../../public/content/water-sustainability-textbook-cover-illustration/color-palette.png';
import coverDesignRoughImage from '../../public/content/water-sustainability-textbook-cover-illustration/cover-design-rough.jpg';
import bookCoverMockupImage from '../../public/content/water-sustainability-textbook-cover-illustration/covers-mockup.jpg';
import illustrationRough from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-rough.jpg';
import illustrationVolume1Animals from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-1-animals.png';
import illustrationVolume1Canoe from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-1-canoe.png';
import illustrationVolume1Coocks from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-1-coocks.png';
import illustrationVolume1GirlsDrinking from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-1-girls-drinking.png';
import illustrationVolume1Ods from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-1-ods.png';
import illustrationVolume2Ac from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-2-ac.png';
import illustrationVolume2Composter from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-2-composter.png';
import illustrationVolume2Rain from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-2-rain.png';
import illustrationVolume2Teacher from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-2-teacher.png';
import illustrationVolume3Grab from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-3-crab.png';
import illustrationVolume3GirlAndBoy from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-3-girl-and-boy.png';
import illustrationVolume3RainWatchers from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-3-rain-watchers.png';
import illustrationVolume3WateringCan from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-3-watering-can.png';
import illustrationVolume4Fertilizing from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-4-fertilizing.png';
import illustrationVolume4Foz from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-4-foz.png';
import illustrationVolume4Meeting from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-4-meeting.png';
import illustrationVolume4Planting from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-4-planting.png';
import illustrationVolume4Recycle from '../../public/content/water-sustainability-textbook-cover-illustration/illustration-volume-4-recycle.png';
import logotypeArtworkImage from '../../public/content/water-sustainability-textbook-cover-illustration/logotype-artwork.png';
import logotypeRoughImage from '../../public/content/water-sustainability-textbook-cover-illustration/logotype-rough.jpg';
import volume1CoverIllustrationRoughimage from '../../public/content/water-sustainability-textbook-cover-illustration/volume-1-cover-illustration-rough.jpg';
import volume1Cover from '../../public/content/water-sustainability-textbook-cover-illustration/volume-1-cover.png';
import volume2And3CoverIllustrationRoughimage from '../../public/content/water-sustainability-textbook-cover-illustration/volume-2-and-3-cover-illustration-rough.jpg';
import volume2Cover from '../../public/content/water-sustainability-textbook-cover-illustration/volume-2-cover.png';
import volume3Cover from '../../public/content/water-sustainability-textbook-cover-illustration/volume-3-cover.png';
import volume4CoverIllustrationRoughimage from '../../public/content/water-sustainability-textbook-cover-illustration/volume-4-cover-illustration-rough.jpg';
import volume4Cover from '../../public/content/water-sustainability-textbook-cover-illustration/volume-4-cover.png';


const ContentBr: ReactNode = (
  <>
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
      alt="Mockup das capas"
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
      alt="Rascunho da ilustração"
      verticalPadding
    />
    <BeImage
      src={ coverDesignRoughImage }
      alt="Rascunho do layout da capa"
      verticalPadding
    />
    <BeImage
      src={ colorPaletteImage }
      alt="Paleta de cores"
      verticalPadding
    />
    <BeParagaph>
      Com o avanço do projeto, foram redefinidas as cenas e a paleta de cores.
    </BeParagaph>
    <BePhotoGrid images={[
      {
        src: volume1CoverIllustrationRoughimage,
        alt: 'Rascunho da ilustração de capa do volume 1'
      },
      {
        src: volume2And3CoverIllustrationRoughimage,
        alt: 'Rascunho da ilustração de capa do volumes 2 e 3'
      },
      {
        src: volume4CoverIllustrationRoughimage,
        alt: 'Rascunho da ilustração de capa do volume 4'
      },
      {
        src: colorPalette2Image,
        alt: 'Paleta de cores'
      },
      
    ]} cols={4} />
    <BeParagaph>
      Foi elaborado também o desenho do título da publicação, com lettering personalizado.
    </BeParagaph>
    <BePhotoGrid images={[
      {
        src: logotypeRoughImage,
        alt: 'Rascunho do lettering do título'
      },
      {
        src: logotypeArtworkImage,
        alt: 'AArte-final do lttering do título'
      },
    ]} cols={1} />

    <BeHeading>
      Arte-final
    </BeHeading>
    <BePhotoGrid images={[
      {
        src: illustrationVolume1GirlsDrinking,
        alt: 'Ilustração do volume 1 - Duas garotas bebendo água'
      },
      {
        src: illustrationVolume2Teacher,
        alt: 'Ilustração do volume 2 - Professor e o ciclo da água na lousa'
      },
      {
        src: illustrationVolume3GirlAndBoy,
        alt: 'Ilustração do volume 3 - Garota e garota'
      },
      {
        src: illustrationVolume4Foz,
        alt: 'Ilustração do volume 4 - Foz do Iguaçu'
      },
      {
        src: illustrationVolume1Canoe,
        alt: 'Ilustração do volume 1 - Indígena numa canoa'
      },
      {
        src: illustrationVolume2Composter,
        alt: 'Ilustração do volume 2 - Composteira'
      },
      {
        src: illustrationVolume3Grab,
        alt: 'Ilustração do volume 3 - Garota com uma lupa examinando um caranguejo'
      },
      {
        src: illustrationVolume4Planting,
        alt: 'Ilustração do volume 4 - Homem plantando uma muda'
      },
      {
        src: illustrationVolume1Animals,
        alt: 'Ilustração do volume 1 - Rã, gaivota, cachorro e peixe-boi'
      },
      {
        src: illustrationVolume2Rain,
        alt: 'Ilustração do volume 2 - Aluno obsrvando e fazendo anotações sobre a chuva'
      },
      {
        src: illustrationVolume3RainWatchers,
        alt: 'Ilustração do volume 3 - Alunos observando a chuva'
      },
      {
        src: illustrationVolume4Fertilizing,
        alt: 'Ilustração do volume 4 - Homeme fertilizando o solo'
      },
      {
        src: illustrationVolume1Coocks,
        alt: 'Ilustração do volume 1 - Cozinheiros'
      },
      {
        src: illustrationVolume2Ac,
        alt: 'Ilustração do volume 2 - Garota tirando foto de uma horta suspensa, regada pela água saindo de um ar condicionado'
      },
      {
        src: illustrationVolume3WateringCan,
        alt: 'Ilustração do volume 3 - Garoto regando uma planta'
      },

      {
        src: illustrationVolume4Recycle,
        alt: 'Ilustração do volume 4 - Homem levando caixa para reciclagem'
      },
      {
        src: illustrationVolume1Ods,
        alt: 'Ilustração do volume 1 - Professor'
      },
      {
        src: illustrationVolume4Meeting,
        alt: 'Ilustração do volume 4 - Pessoas reunidas em volta de uma mesa discutindo sobre as bacias hidrográficas'
      },
    ]} cols={2} />
    <BeImage src={volume1Cover} alt={'Arte-final da capa do volume 1'} horizontalPadding verticalPadding />
    <BeImage src={volume2Cover} alt={'Arte-final da capa do volume 2'} horizontalPadding verticalPadding />
    <BeImage src={volume3Cover} alt={'Arte-final da capa do volume 3'} horizontalPadding verticalPadding />
    <BeImage src={volume4Cover} alt={'Arte-final da capa do volume 4'} horizontalPadding verticalPadding />
  </>
);

export default ContentBr;