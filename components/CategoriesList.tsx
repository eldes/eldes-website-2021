import Link from 'next/link'
import { FunctionComponent } from 'react'
import styles from '../styles/CategoriesList.module.scss'

const CategoriesList: FunctionComponent = () => {
	return (
		<div className={ styles.categoriesList }>
			<Link href="/childrens-books-and-textbooks"><a>Children&apos;s Books and Textbooks</a></Link>
			<a href="">Portraits</a>
			<a href="">Etc</a>
		</div>
	)
}

export default CategoriesList