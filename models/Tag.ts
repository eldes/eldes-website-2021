import Localized from './Locale';

enum TagSlug {
  Textbook = 'textbook',
  CartoonStyle = 'cartoon-style',
  WoodcutStyle = 'woodcut-style',
  Whiteboard = 'whiteboard',
  Flipbook = 'flipbook',
};

type Tag = {
  slug: TagSlug;
  title: Localized<string>;
  pieceSlugs: string[];
};

export default Tag;
export {
  TagSlug,
};