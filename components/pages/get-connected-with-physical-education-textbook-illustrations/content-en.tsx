import illustrationBreakDanceBackSpinPart1Image from '../../../public/content/get-connected-with-physical-education-textbook-illustrations/illustration-break-dance-back-spin-part-1.jpg';
import illustrationBreakDanceBackSpinPart2Image from '../../../public/content/get-connected-with-physical-education-textbook-illustrations/illustration-break-dance-back-spin-part-2.jpg';
import illustrationBreakDanceFloorRockingPart1Image from '../../../public/content/get-connected-with-physical-education-textbook-illustrations/illustration-break-dance-floor-rocking-part-1.jpg';
import illustrationBreakDanceFloorRockingPart2Image from '../../../public/content/get-connected-with-physical-education-textbook-illustrations/illustration-break-dance-floor-rocking-part-2.jpg';
import illustrationBreakDanceUpRockingImage from '../../../public/content/get-connected-with-physical-education-textbook-illustrations/illustration-break-dance-up-rocking.jpg';
import mockpImage from '../../../public/content/get-connected-with-physical-education-textbook-illustrations/mockup.jpg';
import BeImage from '../../BeImage';
import BeParagaph from '../../BeParagraph';

export default function ContentEn() {
  return (
    <>
      <BeImage src={mockpImage} alt={''} />
      <BeParagaph>
        In order to inspire meaningful reflections and practices for educators, the collection &quot;Se Liga na Educação Física&quot; (<em>Get Connected with Physical Education</em>) aims to provide motivating learning situations that enable the expansion and deepening of knowledge about cultural manifestations related to the thematic units proposed in the BNCC (Games and Play, Sports, Gymnastics, Dance, Martial Arts, and Adventure Physical Activities).
      </BeParagaph>
      <BeParagaph>
        In the 7th-grade volume, I created illustrations for the chapter dedicated to the hip-hop universe, specifically focusing on breaking. These illustrations depict step-by-step instructions for various types of breaking moves, including floor rocking, up rocking, and backspin.
      </BeParagaph>
      <BeParagaph>
        <small>Note: BNCC refers to Base Nacional Comum Curricular, which is the national common curriculum framework in Brazil. I have translated the title of the collection while maintaining a similar meaning and tone.</small>
      </BeParagaph>
      <BeImage src={illustrationBreakDanceUpRockingImage} alt={''} horizontalPadding verticalPadding />
      <BeImage src={illustrationBreakDanceFloorRockingPart1Image} alt={''} horizontalPadding verticalPadding />
      <BeImage src={illustrationBreakDanceFloorRockingPart2Image} alt={''} horizontalPadding verticalPadding />
      <BeImage src={illustrationBreakDanceBackSpinPart1Image} alt={''} horizontalPadding verticalPadding />
      <BeImage src={illustrationBreakDanceBackSpinPart2Image} alt={''} horizontalPadding verticalPadding />
    </>
  );
}