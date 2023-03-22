import { GetServerSideProps } from 'next';
import piecesRepository from '../repositories/pieces-repository';
import fontsRepository from '../repositories/fonts-repository';
import { LocaleCode, Localizer } from '../models/Locale';
import categoriesRepository from '../repositories/categories-repository';

const { i18nRoutes } = require('../next-i18next.config');

type Route = {
  source: string;
  destination: string;
};

function generateSiteMap(urlRoot: string, locs: string[]) {

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${urlRoot}</loc>
	    </url>
      ${locs.map((loc) => {
        return `
          <url>
            <loc>${loc}</loc>
          </url>
        `;
      })
      .join('')}
    </urlset>
  `;
}

function SiteMap() {
}

const getServerSideProps: GetServerSideProps = async (context) => {

  const urlRoot = context.locale === LocaleCode.Br.toString() ? 'https://www.eldes.com/br' : 'https://www.eldes.com';

  const slugs = [
    'portfolio',
    'fonts',
    'apps',
    'about',
  ];

  categoriesRepository.loadAll().forEach((category) => slugs.push(category.slug));
  piecesRepository.loadAll().forEach((piece) => slugs.push(piece.slug));
  fontsRepository.loadAll().forEach((font) => slugs.push(font.slug));

  slugs.forEach((slug, i) => {
    if (context.locale && (context.locale === LocaleCode.Br.toString())) {
      const j: number = i18nRoutes.br.findIndex((route: Route) => route.destination === `/${slug}`);
      if (j !== -1) {
        const route: Route = i18nRoutes.br[j];
        slugs[i] = route.source.substring(1);
      }
    }
  });

  const locs = slugs.map((slug) => `${urlRoot}/${slug}`);
  
  const sitemap = generateSiteMap(urlRoot, locs);
  context.res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  context.res.write(sitemap);
  context.res.end();

  return {
    props: {},
  };
}

export default SiteMap;
export { getServerSideProps };