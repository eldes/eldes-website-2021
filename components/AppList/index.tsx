import { useRouter } from 'next/router';
import App from '../../models/App';
import { Localizer } from '../../models/Locale';
import ThumbnailListItem from '../ThumbnailListItem';

type Props = {
  apps: App[];
};

const AppList = function (props: Props) {
  const localizer = Localizer.make(useRouter());
  return (
    <ul>
      {(props.apps) && (
        props.apps.map(app =>
          <ThumbnailListItem
            key={app.slug}
            slug={app.slug}
            title={app.name}
            subtitle={localizer.getValue(app.subtitle)}
            thumbnail={app.thumbnail}
          />
        )
      )}
    </ul>
  );
};

export default AppList;