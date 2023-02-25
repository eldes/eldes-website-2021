import { NextPage } from 'next';
import BePage from '../../components/BePage';
import { PageSection } from '../../components/Page';
import { Localizer } from '../../models/Locale';
import { useRouter } from 'next/router';
import BeHeading from '../../components/BeHeading';
import BeCredits from '../../components/BeCredits';
import BeImage from '../../components/BeImage';
import coverImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-cover.jpg';
import photoImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-photo.jpg';
import essentialImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-essential-watch-information.jpg';
import colorSchemesImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-readable-color-schemes.jpg';
import darkModeImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-dark-mode.jpg';
import lightModeImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-light-mode.jpg';
import lowPowerModeImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-low-power-mode.jpg';
import BeParagaph from '../../components/BeParagraph';
import BeMenu from '../../components/BeMenu';
import Helpers from '../../lib/Helpers';
import AppsRepository from '../../repositories/apps-repository';

const Page: NextPage = function () {
  const router = useRouter();
  const slug = Helpers.getCurrentPageSlug(router);
  const app = AppsRepository.load(slug);
  const localizer = Localizer.make(router);

  return (
    <BePage
      title={'Presbyopia'}
      subtitle={'Garmin Watch Face app'}
      section={PageSection.Apps}
      description={app?.description ? localizer.getValue(app.description) : undefined}
      backgroundColor='#000'
      foregroundColor='#9aa6b2'
    >
      <BeImage src={coverImage} alt={''}/>
      <BeCredits fields={[
        {
          label: 'Garmin',
          value: {
            en: 'Platform',
            br: 'Plataforma',
          },
        },
        {
          label: 'Eldes',
          value: {
            en: 'Design and Development',
            br: 'Design e Desenvolvimento',
          },
        },
      ]} title={app?.description} foregroundColor='#9aa6b2' />
      <BeMenu links={[
        {
          id: 'settings',
          text: 'Settings',
        },
        {
          id: 'download',
          text: 'Download',
        },
      ]}/>

      <BeHeading>
        Simple and large. Seeing the time and date... without glasses!
      </BeHeading>

      <BeParagaph>
        The idea is a design that allows you to see, without the need for glasses, the essential information of the watch: time, date, battery, steps and heart.
      </BeParagaph>
      <BeImage src={essentialImage} alt={''} verticalPadding/>
      <BeParagaph>
        For that, a family of readable types was selected, mainly in relation to numerical digits, and the layout was thought of in order to accommodate the largest size for the characters, within the restricted space of the screen.
      </BeParagaph>
      <BeImage src={photoImage} alt={''} verticalPadding/>
      <BeParagaph>
        The color schemes have been selected to make the information more readable.
      </BeParagaph>
      <BeImage src={colorSchemesImage} alt={''} verticalPadding horizontalPadding/>
      <BeImage src={darkModeImage} alt={''} verticalPadding horizontalPadding/>
      <BeImage src={lightModeImage} alt={''} verticalPadding horizontalPadding/>
      <BeImage src={lowPowerModeImage} alt={''} verticalPadding horizontalPadding/>
      <section id='settings'>
        <BeHeading>Settings</BeHeading>
      </section>
      <section id='download'>
        <BeHeading>Download</BeHeading>
      </section>
      
      
    </BePage>
  );
};


export default Page;