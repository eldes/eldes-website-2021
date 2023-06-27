import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BeCredits from '../../components/BeCredits';
import BeHeading from '../../components/BeHeading';
import BeImage from '../../components/BeImage';
import BeList from '../../components/BeList';
import BeMenu from '../../components/BeMenu';
import BePage from '../../components/BePage';
import BeParagaph from '../../components/BeParagraph';
import BeThanks from '../../components/BeThanks';
import GarminConnectIqButton from '../../components/GarminConnectIqButton';
import { PageSection } from '../../components/Page';
import PayPalDonateButton from '../../components/PayPalDonateButton';
import Helpers from '../../lib/Helpers';
import { Localizer } from '../../models/Locale';
import coverImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-cover.jpg';
import darkModeImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-dark-mode.jpg';
import essentialImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-essential-watch-information.jpg';
import lightModeImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-light-mode.jpg';
import lowPowerModeImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-low-power-mode.jpg';
import photoImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-photo.jpg';
import colorSchemesImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-readable-color-schemes.jpg';
import setttingsImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-settings.jpg';
import thanksImage from '../../public/content/presbyopia-garmin-watch-face-app/thanks.png';
import AppsRepository from '../../repositories/apps-repository';

const Page: NextPage = function () {
  const router = useRouter();
  const slug = Helpers.getCurrentPageSlug(router);
  const app = AppsRepository.load(slug);
  const localizer = Localizer.make(router);

  const backwardLink = {
		text: 'Apps',
		href: '/apps',
	}

  return (
    <BePage
      title={'Presbyopia'}
      subtitle={'Garmin Watch Face app'}
      section={PageSection.Apps}
      description={app?.description ? localizer.getValue(app.description) : undefined}
      backgroundColor='#000'
      foregroundColor='#9aa6b2'
      backwardLink={backwardLink}
    >
      <BeImage src={coverImage} alt={'Development of a watch face app for Garmin: the Presbyopia app.'}/>
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
      ]} title={app?.description} foregroundColor='#eeffff' />
      <BeMenu links={[
        {
          id: 'settings',
          text: 'Settings',
        },
        {
          id: 'download',
          text: 'Download',
        },
        {
          id: 'source',
          text: 'Source code',
        },
      ]}/>

      <BeHeading>
        Simple and large. See the time and date... without glasses!
      </BeHeading>

      <BeParagaph>
        The idea behind this design is to allow users to see essential information on their watch without needing glasses, including time, date, battery level, steps, and heart rate.
      </BeParagaph>
      <BeImage src={essentialImage} alt={''} verticalPadding/>
      <BeParagaph>
        To achieve this, a selection of easily readable fonts was made, with a focus on numeric digits. The layout was carefully designed to accommodate larger characters within the limited screen space.
      </BeParagaph>
      <BeImage src={photoImage} alt={''} verticalPadding/>
      <BeParagaph>
        Color schemes were chosen to enhance readability.
      </BeParagaph>
      <BeImage src={colorSchemesImage} alt={''} verticalPadding horizontalPadding/>
      <BeImage src={darkModeImage} alt={''} verticalPadding horizontalPadding/>
      <BeImage src={lightModeImage} alt={''} verticalPadding horizontalPadding/>
      <BeParagaph>
        To preserve battery power and prevent screen burn-in, watches with AMOLED displays typically turn off the screen when not in use.
      </BeParagaph>
      <BeParagaph>
        For this type of watch, Garmin&apos;s Connect IQ has special rules for apps when the watch enters always-on mode:
      </BeParagaph>
      <BeList>
          <li>The watch face updates only once a minute.</li>
          <li>Only 10% of pixels can be lit.</li>
          <li>No pixel can remain lit for more than 3 minutes.</li>
      </BeList>
      <BeImage src={lowPowerModeImage} alt={''} verticalPadding horizontalPadding/>
      <section id='settings'>
        <BeHeading>Settings</BeHeading>
        <BeParagaph>
          The Presbyopia app allows users to modify a set of properties via their mobile phones:
        </BeParagaph>
        <BeList>
          <li><strong>Top field:</strong> Choose which information will be displayed above the time (battery level, date, step counter, or heart rate).</li>
          <li><strong>Bottom field:</strong> Choose which information will be displayed below the time (battery level, date, step counter, or heart rate).</li>
          <li><strong>Color scheme:</strong> Define the colors used for the time and the top and bottom fields.</li>
          <li><strong>Use leading zero:</strong> When enabled, a leading zero is displayed to always maintain the same number of digits in numeric fields.</li>
          <li><strong>Keep the display always on (for MIP screens only):</strong> When enabled, the display remains in high power mode at all times (this option does not work for watches with an LCD or AMOLED screen).</li>
        </BeList>
        <BeImage src={setttingsImage} alt={'Settings'} verticalPadding horizontalPadding/>
      </section>
      <section id='download'>
        <BeHeading>Download</BeHeading>
        <BeParagaph>
          The Presbyopia app can be downloaded directly from the Garmin Connect IQ store:<br/>
          <GarminConnectIqButton appId={'799627ae-7229-4981-95b6-984458c1a587'} />
        </BeParagaph>
        <BeParagaph>
          This watch face is <strong>FREE</strong>.<br/>
          If you enjoyed using it, please consider making a <strong>DONATION ☕️</strong>:<br/>
          <PayPalDonateButton buttonId={'K9EE8WAUFQ3WJ'} style={{maxWidth: 359}} />
        </BeParagaph>
      </section>
      <section id="source">
        <BeHeading>Source code</BeHeading>
        <BeParagaph>
          The Presbyopia app was developed by me using the Monkey C language and Garmin&apos;s Connect IQ™ SDK.
        </BeParagaph>
        <BeParagaph>
          Due to various reasons, including security and commercial considerations, I cannot open-source all of my projects.
        </BeParagaph>
        <BeParagaph>
          However, given the limited documentation available, open-sourcing this application can be a valuable resource for novice developers to learn how to achieve certain functionalities.
        </BeParagaph>
        <BeParagaph>
        The source code for the Presbyopia app can be found on my <a href="https://github.com/eldes/presbyopia-watch-face">GitHub</a>.
        </BeParagaph>
      </section>

      <BeThanks image={thanksImage} />
    </BePage>
  );
};


export default Page;