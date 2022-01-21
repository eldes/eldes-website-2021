import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import Job from '../entities/Job'
import styles from '../styles/JobList.module.scss'

type Props = {
	jobs: Job[]
}

const JobsList: FunctionComponent<Props> = ({ jobs }) => {
	return (
		<ul className={ styles.jobList }>
		{
			jobs && (
				jobs.map( job =>
					<li key={ job.title } className={ styles.item }>
						<Link href="/brasil-na-bagagem-textbook-illustrations">
							<a>
								<Image src={ job.image } alt="foo" layout="intrinsic" />
								<span className={ styles.textLabel }>{ job.title } <small>{ job.subtitle }</small></span>
							</a>
						</Link>
					</li>
				)
			)
		}
		</ul>
	)
}

export default JobsList