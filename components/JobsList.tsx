import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import styles from '../styles/JobList.module.scss'

import brasilNaBagagemTextbookIllustrationsHighlight from '../public/content/brasil-na-bagagem-textbook-illustrations/highlight.jpg'
import ajudarisHighlight from '../public/content/ajudaris-20-childrens-book-illustrations/highlight.jpg'

const JobsList: FunctionComponent = () => {
	return (
		<ul className={ styles.jobList }>
			<li className={ styles.item }>
				<Link href="/brasil-na-bagagem-textbook-illustrations">
					<a>
						<Image src={ brasilNaBagagemTextbookIllustrationsHighlight } alt="foo" layout="intrinsic" />
						<span className={ styles.textLabel }>Brasil na Bagagem <small>textbook illustrations</small></span>
					</a>
				</Link>
			</li>
			<li className={ styles.item }>
				<Link href="/brasil-na-bagagem-textbook-illustrations">
					<a>
						<Image src={ ajudarisHighlight } alt="foo" layout="intrinsic"  />
						<span className={ styles.textLabel }>Histórias da Ajudaris&apos;20 <small>children&apos;s book illustrations</small></span>
					</a>
				</Link>
			</li>
		</ul>
	)
}

export default JobsList