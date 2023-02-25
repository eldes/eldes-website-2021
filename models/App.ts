import Localized from './Locale';

type App = {
  slug: string;
  name: string;
  subtitle: Localized<string>;
  description: Localized<string>;
  thumbnail: string;
};

export default App;