import { NextPage } from 'next';
import BePage from '../../components/BePage';
import { PageSection } from '../../components/Page';
import { Localizer } from '../../models/Locale';
import { useRouter } from 'next/router';
import BeHeading from '../../components/BeHeading';
import BeCredits from '../../components/BeCredits';
import headerImage from '../../public/content/n-cloud-app/header.jpg';
import screensImage from '../../public/content/n-cloud-app/screens.jpg';
import googlePlayBadgeImage from '../../public/content/common/google-play-badge.svg';
import BeParagaph from '../../components/BeParagraph';
import BeMenu from '../../components/BeMenu';
import Helpers from '../../lib/Helpers';
import AppsRepository from '../../repositories/apps-repository';
import BeThanks from '../../components/BeThanks';
import BeImage from '../../components/BeImage';
import Image from 'next/image';
import BeList from '../../components/BeList';

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
      title={app?.name ?? ''}
      subtitle={localizer.getValue(app?.subtitle ?? {en: '', br: ''})}
      section={PageSection.Apps}
      description={app?.description ? localizer.getValue(app.description) : undefined}
      backgroundColor='#fedd14'
      foregroundColor='#000'
      backwardLink={backwardLink}
    >
      <BeImage src={headerImage} alt={'Start screen f app'}/>
      <BeCredits fields={[
        {
          label: 'Nikon Lenswear',
          value: {
            en: 'Client',
            br: 'Cliente',
          },
        },
        {
          label: 'Frux',
          value: {
            en: 'Agency',
            br: 'Agência',
          },
        },
        {
          label: 'Eldes',
          value: {
            en: 'Android and back-end development',
            br: 'Desenvolvimento Android e back-end',
          },
        },
      ]} title={app?.description} foregroundColor='#000' />
      <BeMenu links={[
        {
          id: 'details',
          text: 'Technical details',
        },
        {
          id: 'download',
          text: 'Download',
        },
      ]}/>

      <BeHeading>
        Nikon Optical Design Engine
      </BeHeading>

      <BeParagaph>
        App for opticians to order the production of Nikon ophthalmic lenses.
      </BeParagaph>
      <BeParagaph>
        N-Cloud allows the choice of products and customization of their characteristics, facilitating the ordering of lenses and their calculation by the exclusive NODE system (Nikon Optical Design Engine) at the headquarters of Nikon Corporation in Japan.
      </BeParagaph>
      <BeImage src={screensImage} alt={'Screens samples'}/>

      <section id="details">
        <BeHeading>Technical details</BeHeading>
        <BeList>
          <li>The app was developed natively in the <em>Android Studio</em> using <em>Kotlin</em> language.</li>
          <li><em>SQLite</em> was used for the local database and a <em>DAO layer</em> was implemented for access.</li>
          <li>For communication with the back-end, the <em>Retrofit</em> library was used through an implemented <em>web service</em> layer.</li>
          <li>The backend was coded in <em>PHP</em> language, using the <em>Symfony</em> framework to implement the <em>REST API</em>.</li>
          <li>The <em>auth</em> control was implemented in <em>JWT</em>, using <em>Firebase&apos;s PHP-JWT</em> library.</li>
          <li>As a server-side database management system, <em>Oracle MySQL</em> was used.</li>
          <li>For version control, <em>Git</em> was used with the <em>GitFlow</em> pattern and <em>GitHub</em> and <em>BitBucket</em> for the remote repositories</li>
          <li>Frux has also implemented an <em>iOS</em> version of the N-Cloud app.</li>
        </BeList>
      </section>
      

      <section id="download">
        <BeHeading>Download</BeHeading>
        <BeParagaph>
          The app can be downloaded directly from Google Play:<br/>
          <a href="https://play.google.com/store/apps/details?id=br.com.frux.ncloud"><Image src={googlePlayBadgeImage} alt='Get it on Google Play' /></a>
        </BeParagaph>
        <BeParagaph>
          To use the system, the optician must be authorized to sell Nikon lenses.
        </BeParagaph>
        
      </section>
      

      <BeThanks />
      
      
    </BePage>
  );
};


export default Page;