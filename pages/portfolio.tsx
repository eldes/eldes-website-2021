import { NextPage } from 'next'
import CategoryList, { CategoriesListHighlight } from '../components/CategoryList'
import Page, { PageSection } from '../components/Page'
import Category from '../model/Category'

import childrensBooksAndTextBooksThumbnail from '../public/content/brasil-na-bagagem-textbook-illustrations/ventriloquist.jpg'

const PortfolioPage: NextPage = () => {
	return (
		<Page title="Portfolio" section={ PageSection.Portfolio }>
			<CategoryList categories={ categoriesHigh } highlight={ CategoriesListHighlight.High } />
			<CategoryList categories={ categoriesMedium } highlight={ CategoriesListHighlight.Medium } />
			<CategoryList categories={ categoriesHigh } highlight={ CategoriesListHighlight.Low } />
		</Page>
	)
}

const categoriesHigh: Category[] = [
	{
		title: 'Children\'s Books and Textbooks',
		image: childrensBooksAndTextBooksThumbnail,
		link: '/childrens-books-and-textbooks',
	},
	{
		title: 'Whiteboard Animation',
		image: childrensBooksAndTextBooksThumbnail,
		link: '/portraits',
	},
	{
		title: 'Etc',
		image: childrensBooksAndTextBooksThumbnail,
		link: '/etc',
	},
]

const categoriesMedium: Category[] = [
	{
		title: 'Portraits',
		image: childrensBooksAndTextBooksThumbnail,
		link: '/portraits',
	},
	{
		title: 'Wall',
		image: childrensBooksAndTextBooksThumbnail,
		link: '/etc',
	},
]

export default PortfolioPage