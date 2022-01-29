import { NextPage } from 'next'
import CategoryList, { CategoriesListHighlight } from '../components/CategoryList'
import Page, { PageSection } from '../components/Page'
import Category from '../model/Category'

import brasilNaBagagemThumbnail from '../public/content/brasil-na-bagagem-textbook-illustrations/thumbnail.jpg'
import ajudaris20Thumbnail from '../public/content/ajudaris-20-childrens-book-illustrations/thumbnail.jpg'
import ajudaris17Thumbnail from '../public/content/ajudaris-17-childrens-book-illustrations/thumbnail.jpg'

const PortfolioPage: NextPage = () => {
	return (
		<Page title="Portfolio" section={ PageSection.Portfolio }>
			<CategoryList categories={ categoriesHigh } highlight={ CategoriesListHighlight.High } />
		</Page>
	)
}

const categoriesHigh: Category[] = [
	{
		title: 'Children\'s Books and Textbooks',
		thumbnails: [
			brasilNaBagagemThumbnail,
			ajudaris20Thumbnail,
			ajudaris17Thumbnail,
		],
		link: '/childrens-books-and-textbooks',
	},
]

export default PortfolioPage