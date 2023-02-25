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
      en: 'Watch face app, Presbyopia, to Garmin\'s devices.',
      br: 'Aplicativo de mostrador de relógio, Presbyopia, para dispositivos Garmin.',
    },
    thumbnail: '/content/presbyopia-garmin-watch-face-app/thumbnail.jpg',
  },
];