import illustrationBreakDanceBackSpinPart1Image from '../../../public/content/get-connected-with-physical-education-textbook-illustrations/illustration-break-dance-back-spin-part-1.jpg';
import illustrationBreakDanceBackSpinPart2Image from '../../../public/content/get-connected-with-physical-education-textbook-illustrations/illustration-break-dance-back-spin-part-2.jpg';
import illustrationBreakDanceFloorRockingPart1Image from '../../../public/content/get-connected-with-physical-education-textbook-illustrations/illustration-break-dance-floor-rocking-part-1.jpg';
import illustrationBreakDanceFloorRockingPart2Image from '../../../public/content/get-connected-with-physical-education-textbook-illustrations/illustration-break-dance-floor-rocking-part-2.jpg';
import illustrationBreakDanceUpRockingImage from '../../../public/content/get-connected-with-physical-education-textbook-illustrations/illustration-break-dance-up-rocking.jpg';
import mockpImage from '../../../public/content/get-connected-with-physical-education-textbook-illustrations/mockup.jpg';
import BeImage from '../../BeImage';
import BeParagaph from '../../BeParagraph';

export default function ContentBr() {
  return (
    <>
      <BeImage src={mockpImage} alt={''} />
      <BeParagaph>
      Com o objetivo de inspirar reflexões e práticas significativas para os educadores, a coleção &quot;Se Liga na Educação Física&quot; busca oferecer situações de aprendizagem motivadoras que possibilitem a expansão e aprofundamento do conhecimento sobre manifestações culturais relacionadas às unidades temáticas propostas na BNCC (Brincadeiras e Jogos, Esportes, Ginástica, Danças, Lutas e Práticas Corporais de Aventura).
      </BeParagaph>
      <BeParagaph>
        No volume do 7º ano, elaborei as ilustrações para o capítulo dedicado ao universo do hip-hop, especificamente focando no breaking. Essas ilustrações mostram passo a passo diferentes tipos de movimentos de breaking, como up rocking, floor rocking e backspin.
      </BeParagaph>
      <BeImage src={illustrationBreakDanceUpRockingImage} alt={''} horizontalPadding verticalPadding />
      <BeImage src={illustrationBreakDanceFloorRockingPart1Image} alt={''} horizontalPadding verticalPadding />
      <BeImage src={illustrationBreakDanceFloorRockingPart2Image} alt={''} horizontalPadding verticalPadding />
      <BeImage src={illustrationBreakDanceBackSpinPart1Image} alt={''} horizontalPadding verticalPadding />
      <BeImage src={illustrationBreakDanceBackSpinPart2Image} alt={''} horizontalPadding verticalPadding />
    </>
  );
}