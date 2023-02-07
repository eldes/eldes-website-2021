import { NextRouter } from 'next/router';
import SeeMore from '../models/SeeMore';
import { TagSlug } from '../models/Tag';
import piecesRepository from '../repositories/pieces-repository';
import TagsRepository from '../repositories/tags-repository';

const getCurrentPageSlug: (router: NextRouter) => string = (router: NextRouter) => router.pathname.substring(1).split('#')[0];

const rotateArrayToLeftUntilToBeFirst: <T>(array: T[] | undefined, willBeFirst: T) => void = <T>(array: T[] | undefined, willBeFirst: T) => {
  if ((array !== undefined) && (array.length > 0) && (array.indexOf(willBeFirst) !== -1) && (array[0] !== willBeFirst)) {
    const newLast = array[0];
    array.shift();
    if (newLast) {
      array.push(newLast);
      rotateArrayToLeftUntilToBeFirst<T>(array, willBeFirst);
    }
  }
};

const rotatedArrayToLeftUntilToBeFirst: <T>(array: T[] | undefined, willBeFirst: T) => T[] | undefined = <T>(array: T[] | undefined, willBeFirst: T) => {
  const rotatedArray = array?.slice(0);
  rotateArrayToLeftUntilToBeFirst(rotatedArray, willBeFirst);
  return rotatedArray;
};

const makeSeeMoreListForPieceBePage: (router: NextRouter, tagSlugs: TagSlug[]) => SeeMore[] = (router: NextRouter, tagSlugs: TagSlug[]) => {
  const seeMoreList: SeeMore[] = [];

  const currentPieceSlug = Helpers.getCurrentPageSlug(router);
  const categories = piecesRepository.loadAllCategories(currentPieceSlug);

  categories.forEach(category => {
    const allPieceSlugsWithCategory = category.pieceSlugs;
    const rotatedPieceSlugsWithCategory = rotatedArrayToLeftUntilToBeFirst<string>(allPieceSlugsWithCategory, currentPieceSlug);
    const otherPiecesSlugsWithCategory = rotatedPieceSlugsWithCategory?.filter(pieceSlug => ((pieceSlug !== currentPieceSlug) && (seeMoreList.map(seeMore => seeMore.slugs).flat().indexOf(pieceSlug) === -1)));

    if (otherPiecesSlugsWithCategory?.length) {
      seeMoreList.push({
        title: {
          en: `More ${category?.title.en}`,
          br: `Mais ${category?.title.br}`,
        },
        slugs: [otherPiecesSlugsWithCategory[0]],
      });
    }
  });

  tagSlugs.forEach(tagSlug => {
    const tag = TagsRepository.get(tagSlug);
    const allPieceSlugsWithTag = tag?.pieceSlugs;
    const rotatedPieceSlugsWithTag = rotatedArrayToLeftUntilToBeFirst<string>(allPieceSlugsWithTag, currentPieceSlug);
    const otherPieceSlugsWithTag = rotatedPieceSlugsWithTag?.filter(pieceSlug => ((pieceSlug !== currentPieceSlug) && (seeMoreList.map(seeMore => seeMore.slugs).flat().indexOf(pieceSlug) === -1)));

    const titlePrefix = (tag?.pieceSlugs.indexOf(currentPieceSlug) !== -1) ? {en: 'More', br: 'Mais'} : {en: 'See also', br: 'Veja também'}

    if (otherPieceSlugsWithTag?.length) {
      seeMoreList.push({
        title: {
          en: `${titlePrefix.en} ${tag?.title.en}`,
          br: `${titlePrefix.br} ${tag?.title.br}`,
        },
        slugs: [otherPieceSlugsWithTag[0]],
      });
    }
  });

  return seeMoreList;
};

const Helpers = {
  getCurrentPageSlug,
  makeSeeMoreListForPieceBePage,
};

export default Helpers;