import Tag, { TagSlug } from '../models/Tag';

const TagsRepository = {
  get: (slug: TagSlug) => tags.find(tag => tag.slug === slug),
};

export default TagsRepository;

const tags: Tag[] = [
  {
    slug: TagSlug.Textbook,
    title: {
      en: 'Textbook',
      br: 'Didáticos',
    },
    pieceSlugs: [
      'brasil-na-bagagem-textbook-illustrations',
      'gramatica-fundamental-5-moderna-textbook-illustrations',
      'get-connected-with-physical-education-textbook-illustrations',
      'water-sustainability-textbook-illustrations',
      'water-sustainability-textbook-cover-illustration',
    ],
  },
  {
    slug: TagSlug.CartoonStyle,
    title: {
      en: 'Cartoon style',
      br: 'Estilo cartoon',
    },
    pieceSlugs: [
      'brasil-na-bagagem-textbook-illustrations',
      'gramatica-fundamental-5-moderna-textbook-illustrations',
      'get-connected-with-physical-education-textbook-illustrations',
      'water-sustainability-textbook-illustrations',
      'water-sustainability-textbook-cover-illustration',
			'historias-da-ajudaris-20-childrens-book-illustrations',
			'historias-da-ajudaris-17-childrens-book-illustrations',
			'poeminhas-reais-childrens-book-illustration',
      'poeminhas-florais-childrens-book-illustrations',
			'a-ultima-flor-de-abril-childrens-book',
      'baseball-guide',
      'whiteboard-animation-quale-magazine-elections',
			'protest-whiteboard-animation',
			'limpidus-whiteboard-animation',
			'embrapa-whiteboard-animation',
			'penguin-story-flip-book',
			'boreal-textbook-flip-book',
    ],
  },
  {
    slug: TagSlug.WoodcutStyle,
    title: {
      en: 'Woodcut style',
      br: 'Estilo xilo',
    },
    pieceSlugs: [
			'como-eram-os-animais-cordel-childrens-book',
			'historias-da-ajudaris-19-childrens-book-illustrations',
      'ilustrar-magazine-20',
			'la-maison-qui-pue-magazine',
			'solidao-empresarial-editorial-illustration',
			'hipocrisil',
      'podcast-max-gehringer',
			'moitara-teatro-portugues-editorial-illustration',
    ],
  },
  {
    slug: TagSlug.Whiteboard,
    title: {
      en: 'Whiteboard',
      br: 'Whiteboard',
    },
    pieceSlugs: [
			'whiteboard-animation-quale-magazine-elections',
			'protest-whiteboard-animation',
			'limpidus-whiteboard-animation',
			'embrapa-whiteboard-animation',
    ],
  },
  {
    slug: TagSlug.Flipbook,
    title: {
      en: 'Flip book',
      br: 'Flip book',
    },
    pieceSlugs: [
			'penguin-story-flip-book',
			'boreal-textbook-flip-book',
    ],
  },
];