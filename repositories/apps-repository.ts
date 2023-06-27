import App from '../models/App';

const AppsRepository = {
  loadAll: () => appsMock,

  load: (slug: string) => appsMock.find(app => app.slug === slug),
};

export default AppsRepository;

const appsMock: App[] = [
  {
    slug: 'presbyopia-garmin-watch-face-app',
    name: 'Presbyopia',
    subtitle: {
      en: 'Garmin Watch Face App',
      br: 'Garmin Watch Face App',
    },
    description: {
      en: 'Development of a watch face app for Garmin: the Presbyopia app.',
      br: 'Desenvolvimento de um mostrador de relógio para Garmin: o aplicativo Presbyopia.',
    },
    thumbnail: '/content/presbyopia-garmin-watch-face-app/thumbnail.jpg',
  },
  {
    slug: 'n-cloud-app',
    name: 'N-Cloud',
    subtitle: {
      en: 'mobile App',
      br: 'App mobile',
    },
    description: {
      en: 'Development of a smartphone app to Nikon Lenswear.',
      br: 'Desenvolvimento de um aplicativo para smartphone para a Nikon Lenswear.',
    },
    thumbnail: '/content/n-cloud-app/thumbnail.png',
  },
];