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


const ContentEn: ReactNode = (
  <>
    <BeParagaph>
      To strengthen the management of water resources based on citizen training through education, ProfCiAmb (Professional Master&apos;s Course in the National Network for Teaching Environmental Sciences) decided to produce and publish pedagogical materials based on research and work carried out, thus appearing the ProfCiAmb Collection..
    </BeParagaph>
    <BeParagaph>
      The publication &quot;Água e Sustentabilidade&quot; (Water and Sustainability), comprising 4 volumes, was the first of the &quot;Guias Educacionais&quot; (Educational Guides) series in this collection.
    </BeParagaph>
    <BeParagaph>
      In addition to creating the ProfCiAmb logotype, to be used as a brand for this collection, our studio was also responsible for the graphic design, illustrations and layout of the covers of these 4 volumes.
    </BeParagaph>
    <BeImage
      src={ bookCoverMockupImage }
      alt="Book cover mockup"
    />
    <BeHeading>
      Process
    </BeHeading>
    <BeParagaph>
      The idea was to create a search and find cover illustration for each volume of the publication, consisting of several scenes of situations covered in the respective volume.
    </BeParagaph>
    <BeParagaph>
    Below is the initial color palette and rough of the illustration and cover design for volume 2:
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
    As the project progressed, the scenes and color palette were redefined:
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
      The title of the publication was also designed, with personalized lettering:
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
      Final artwork
    </BeHeading>
    <BePhotoGrid images={[
      {
        src: illustrationVolume1GirlsDrinking,
        alt: 'Illustration of volume 1 - Two girls drinking water'
      },
      {
        src: illustrationVolume2Teacher,
        alt: 'Illustration of volume 2 - Teacher and water cycle on the board'
      },
      {
        src: illustrationVolume3GirlAndBoy,
        alt: 'Illustration of volume 3 - Girl and boy'
      },
      {
        src: illustrationVolume4Foz,
        alt: 'Illustration of volume 4 - Foz do Iguaçu'
      },
      {
        src: illustrationVolume1Canoe,
        alt: 'Illustration of volume 1 - Indian in a canoe'
      },
      {
        src: illustrationVolume2Composter,
        alt: 'Illustration of volume 2 - Composter'
      },
      {
        src: illustrationVolume3Grab,
        alt: 'Illustration of volume 3 - Girl with a magnifying glass looking at a crab'
      },
      {
        src: illustrationVolume4Planting,
        alt: 'Illustration of volume 4 - Man planting'
      },
      {
        src: illustrationVolume1Animals,
        alt: 'Illustration of volume 1 - Frog, seagull, dog, manatee'
      },
      {
        src: illustrationVolume2Rain,
        alt: 'Illustration of volume 2 - Teacher and water cycle on the board'
      },
      {
        src: illustrationVolume3RainWatchers,
        alt: 'Illustration of volume 3 - Girl with a magnifying glass looking at a crab'
      },
      {
        src: illustrationVolume4Fertilizing,
        alt: 'Illustration of volume 4 - Man fertilizing'
      },
      {
        src: illustrationVolume1Coocks,
        alt: 'Illustration of volume 1 - Coocks'
      },
      {
        src: illustrationVolume2Ac,
        alt: 'Illustration of volume 2 - Girl taking a picture of a suspended vegetable garden watered with water coming out of the ac'
      },
      {
        src: illustrationVolume3WateringCan,
        alt: 'Illustration of volume 3 - Watering can'
      },

      {
        src: illustrationVolume4Recycle,
        alt: 'Illustration of volume 4 - Recycle'
      },
      {
        src: illustrationVolume1Ods,
        alt: 'Illustration of volume 1 - Teacher'
      },
      {
        src: illustrationVolume4Meeting,
        alt: 'Illustration of volume 4 - Meeting'
      },
    ]} cols={2} />
    <BeImage src={volume1Cover} alt={'Volume 1 cover artwork'} horizontalPadding verticalPadding />
    <BeImage src={volume2Cover} alt={'Volume 2 cover artwork'} horizontalPadding verticalPadding />
    <BeImage src={volume3Cover} alt={'Volume 3 cover artwork'} horizontalPadding verticalPadding />
    <BeImage src={volume4Cover} alt={'Volume 4 cover artwork'} horizontalPadding verticalPadding />
  </>
);

export default ContentEn;