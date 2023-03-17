import { NextPage } from 'next';
import Image from 'next/image';
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
import setttingsImage from '../../public/content/presbyopia-garmin-watch-face-app/presbyopia-garmin-watch-face-app-settings.jpg';
import thanksImage from '../../public/content/presbyopia-garmin-watch-face-app/thanks.png';
import BeParagaph from '../../components/BeParagraph';
import BeMenu from '../../components/BeMenu';
import Helpers from '../../lib/Helpers';
import AppsRepository from '../../repositories/apps-repository';
import BeList from '../../components/BeList';
import BeThanks from '../../components/BeThanks';
import PayPalDonateButton from '../../components/PayPalDonateButton';
import GarminConnectIqButton from '../../components/GarminConnectIqButton';

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
      <BeParagaph>
        To prevent wear down the display and save battery power, watches with an AMOLED display typically turn off the screen when not in use.
      </BeParagaph>
      <BeParagaph>
        For this type of watches, Garmin&apos;s Connect IQ has special rules for apps when the watch enters always-on mode:
      </BeParagaph>
      <BeList>
          <li>the watch face will only update every minute</li>
          <li>only 10% of pixels can be lit</li>
          <li>no pixel can be lit for more than 3 minutes</li>
      </BeList>
      <BeImage src={lowPowerModeImage} alt={''} verticalPadding horizontalPadding/>
      <section id='settings'>
        <BeHeading>Settings</BeHeading>
        <BeParagaph>
          The Presbyopia app allows the user to modify a set of properties via the mobile phone:
        </BeParagaph>
        <BeList>
          <li><strong>Top field:</strong> defines which information will be displayed above the time (battery level, date, step counter or heart rate).</li>
          <li><strong>Bottom field:</strong> defines which information will be displayed below the time (battery level, date, step counter or heart rate).</li>
          <li><strong>Color scheme:</strong> defines the colors that will be used in the time and in the top and bottom fields.</li>
          <li><strong>Use leading zero:</strong> if on, displays a leading zero to always keep the same number of digits in numeric fields.</li>
          <li><strong>Keep the display always on (just for MIP screens):</strong> if on, it always keeps the display in high power mode (this option does not work for watches with an LCD or AMOLED type screen).</li>
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
          If you enjoyed using it, please consider a <strong>DONATION ☕️</strong>:<br/>
          <PayPalDonateButton buttonId={'K9EE8WAUFQ3WJ'} style={{maxWidth: 359}} />
        </BeParagaph>
      </section>
      <section id="source">
        <BeHeading>Source code</BeHeading>
        <BeParagaph>
          The Presbyopia app was developed by me in Monkey C language, using Garmin&apos;s Connect IQ™ SDK.
        </BeParagaph>
        <BeParagaph>
          For various reasons, such as security and commercial reasons, I don&apos;t open source all of my projects.
        </BeParagaph>
        <BeParagaph>
          However, due to the scarcity of documentation, open sourcing this application can be a great resource for novice developers to learn how certain things should be achieved.
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