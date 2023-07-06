import Link from 'next/link';
import bookCoverMockupImage from '../../../public/content/water-sustainability-textbook-illustrations/covers-mockup.jpg';
import detailBeesImage from '../../../public/content/water-sustainability-textbook-illustrations/detail-bees.jpg';
import detailDragonflyImage from '../../../public/content/water-sustainability-textbook-illustrations/detail-dragonfly.jpg';
import detailFish1Image from '../../../public/content/water-sustainability-textbook-illustrations/detail-fish-1.jpg';
import detailFish2Image from '../../../public/content/water-sustainability-textbook-illustrations/detail-fish-2.jpg';
import detailGrowImage from '../../../public/content/water-sustainability-textbook-illustrations/detail-heron.jpg';
import detailLetuceImage from '../../../public/content/water-sustainability-textbook-illustrations/detail-letuce.jpg';
import detailMacrofitasImage from '../../../public/content/water-sustainability-textbook-illustrations/detail-macrofitas.jpg';
import detailQueroQueroImage from '../../../public/content/water-sustainability-textbook-illustrations/detail-quero-quero.jpg';
import detailRiverImage from '../../../public/content/water-sustainability-textbook-illustrations/detail-river.jpg';
import detailTreeImage from '../../../public/content/water-sustainability-textbook-illustrations/detail-tree.jpg';
import detailTurtleImage from '../../../public/content/water-sustainability-textbook-illustrations/detail-turtle.jpg';
import detailWaterfallImage from '../../../public/content/water-sustainability-textbook-illustrations/detail-waterfall.jpg';
import illustrationEnvironmentsImage from '../../../public/content/water-sustainability-textbook-illustrations/illustration-environments.jpg';
import illustrationFrogImage from '../../../public/content/water-sustainability-textbook-illustrations/illustration-frog.jpg';
import illustrationServicesImage from '../../../public/content/water-sustainability-textbook-illustrations/illustration-services.jpg';
import illustrationSystemsImage from '../../../public/content/water-sustainability-textbook-illustrations/illustration-systems.jpg';
import illustrationWaterPercentImage from '../../../public/content/water-sustainability-textbook-illustrations/illustration-water-percent.jpg';
import processFrog1Image from '../../../public/content/water-sustainability-textbook-illustrations/process-frog-1.jpg';
import processFrog2Image from '../../../public/content/water-sustainability-textbook-illustrations/process-frog-2.jpg';
import volume1MockupPart1Image from '../../../public/content/water-sustainability-textbook-illustrations/volume-1-mockup-part-1.jpg';
import volume1MockupPart2Image from '../../../public/content/water-sustainability-textbook-illustrations/volume-1-mockup-part-2.jpg';
import volume1MockupPart3Image from '../../../public/content/water-sustainability-textbook-illustrations/volume-1-mockup-part-3.jpg';
import BeImage from '../../BeImage';
import BeParagaph from '../../BeParagraph';
import BePhotoGrid from '../../BePhotoGrid';

export default function ContentBr() {
  return (
    <>
      <BeParagaph>
        Para fortalecer a gestão de recursos hídricos a partir da base da formação do cidadão por meio da educação, o ProfCiAmb (Curso de Mestrado Profissional em Rede Nacional para Ensino das Ciências Ambientais) decidiu produzir e publicar materiais pedagógicos a partir das pesquisas e trabalhos realizados, surgindo assim a <strong>Coleção ProfCiAmb</strong>.
      </BeParagaph>

      <BeParagaph>
        A publicação <em>Água e Sustentabilidade</em>, composta por 4 volumes, foi a primeira da <em>Série Guias Educacionais</em> dessa coleção.
      </BeParagaph>
      <BeImage
        src={ bookCoverMockupImage }
        alt="Mockup das capas dos 4 volumes"
        verticalPadding
      />
      <BeParagaph>
        Além da criação do <em>Selo ProfCiAmb</em>, para ser usado como marca dessa coleção, e das <Link href={'/water-sustainability-textbook-cover-illustration'}>ilustrações das capas dos 4 volumes</Link>, nosso estúdio também foi responsável por algumas das ilustrações do texto do primeiro volume:
      </BeParagaph>
      <BeImage
        src={ volume1MockupPart1Image }
        alt="Mockup do interior do livro"
      />
      <BeImage
        src={ volume1MockupPart2Image }
        alt="Mockup do interior do livro"
      />
      <BeImage
        src={ volume1MockupPart3Image }
        alt="Mockup do interior do livro"
      />
      
      <BePhotoGrid images={[
        {
          src: processFrog1Image,
          alt: ''
        },
        {
          src: processFrog2Image,
          alt: ''
        },
      ]} cols={2} />
      <BeImage src={illustrationFrogImage} alt={''} horizontalPadding verticalPadding />
      <BeImage src={illustrationWaterPercentImage} alt={''} horizontalPadding verticalPadding />
      <BePhotoGrid images={[
        {
          src: detailLetuceImage,
          alt: ''
        },
        {
          src: detailBeesImage,
          alt: ''
        },
        {
          src: detailWaterfallImage,
          alt: ''
        },
        {
          src: detailTreeImage,
          alt: ''
        },
      ]} cols={2} />
      <BeImage src={illustrationServicesImage} alt={''} horizontalPadding verticalPadding />
      <BePhotoGrid images={[
        {
          src: detailTurtleImage,
          alt: ''
        },
        {
          src: detailGrowImage,
          alt: ''
        },
        {
          src: detailRiverImage,
          alt: ''
        },
        {
          src: detailFish1Image,
          alt: ''
        },
      ]} cols={2} horizontalPadding />
      <BeImage src={illustrationEnvironmentsImage} alt={''} horizontalPadding verticalPadding /><BePhotoGrid images={[
        {
          src: detailQueroQueroImage,
          alt: ''
        },
        {
          src: detailFish2Image,
          alt: ''
        },
        {
          src: detailMacrofitasImage,
          alt: ''
        },
        {
          src: detailDragonflyImage,
          alt: ''
        },
      ]} cols={2} horizontalPadding />
      <BeImage src={illustrationSystemsImage} alt={''} horizontalPadding verticalPadding />

      
    </>
  )
}