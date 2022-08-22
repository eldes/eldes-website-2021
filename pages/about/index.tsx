import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Page, { PageSection } from '../../components/Page';
import { LocaleCode, Localizer } from '../../models/Locale';
import eldesPhotoImage from '../../public/content/about/eldes.jpg';
import styles from './styles.module.scss';

const AboutPage: NextPage = () => {
	const { t } = useTranslation()
	const localizer = Localizer.make(useRouter());
	
	return (
		<Page title={ t('common:Sections.about', 'About') } section={PageSection.About}>
			{(localizer.getLocale().code === LocaleCode.Br) ? (
				<>
					<div className={styles.about}>
						<div className={styles.resume}>
							<p className={styles.text}>
								<strong>Combinação de talento criativo em artes visuais e visão tecnológica:</strong> <em>designer gráfico</em> e <em>ilustrador</em>, com mais de {(new Date().getFullYear() - 2004)} anos de experiência com Editorial, Literatura e Publicidade, e <em>desenvolvedor de sistemas</em>, com mais de {(new Date().getFullYear() - 2000)} anos de experiência com desenvolvimento Web full-stack e Mobile.
								
							</p>
							<div className={styles.photo}>
								<Image
									src={ eldesPhotoImage }
									alt={ 'Eldes' }
									layout="responsive"
								/>
								<span className={styles.credits}>Photo: <a href="https://www.flickr.com/photos/194161014@N06/" target="_blank" rel="noreferrer">Will Veltroni</a></span>
							</div>
						</div>
						<section>
							<h2>Atualmente</h2>
							<p>
								Trabalha no seu estúdio desenvolvendo diversos projetos de ilustração, design gráfico e multimídia.
							</p>
							<p>
								É professor do SENAC, dando aulas de Desenvolvimento de Sistemas, de Design Gráfico e de Desenho.
							</p>
							<p>
								Ajuda a organziar encontros de desenho como Urban Sketchers e World Wide SketchCrawl.
							</p>
							<p>
								Ministra cursos, workshops e palestras sobre técnicas e sobre o mercado de Ilustração.
							</p>
						</section>
						<section>
							<div className={styles.secIntro}>
								<h2>Como Designer Gráfico e Ilustrador</h2>
								<ul>
									<li>Formação incluindo vários cursos com profissionais atuantes no mercado</li>
									<li>Especialização em identidade visual, UX/UI e ilustração</li>
									<li>Mais de {(new Date().getFullYear() - 2004)} anos de experiência no mercado</li>
								</ul>
							</div>
							<div className={styles.secSkills}>
								<div>
									<h3>UX/UI</h3>
									<ul>
										<li>Proficiência no pacote da Adobe (Photoshop, Illutrator, InDesign, Acrobat, Animate)</li>
										<li>Experiência com a abordagem Design Thinking</li>
										<li>Conhecimento do Material Design Guide do Google</li>
										<li>Conhecimento de Figma e Adobe XD</li>
									</ul>
								</div>
								<div>
									<h3>Editorial</h3>
									<ul>
										<li>Experiência em projeto gráfico, gerência de projeto e editoração de livros</li>
										<li>Proficiência em diagramação de publicações</li>
										<li>Proficiência em ilustração e projeto gráfico de livros ilustrados e livros infantis</li>
									</ul>
								</div>
								<div>
									<h3>Corporativo</h3>
									<ul>
										<li>Proficiência em desenvolvimento de <em>branding</em>/Sistema de Identidade Visual (logotipo/marca, papelaria etc.)</li>
										<li>Proficiência em desenvolvimento de Manual de Uso da Marca</li>
										<li>Experiência com design de Relatório Anual</li>
										<li>Experiência com design de Newsletter</li>
										<li>Experiência com design e gestão de Comunicação Interna</li>
									</ul>
								</div>
								<div>
									<h3>Ilustração e animação</h3>
									<ul>
										<li>Experiência com ilutração para propaganda, identidade e marketing</li>
										<li>Proficiência com ilustração para livros, revistas, jornais e periódicos</li>
										<li>Experiência com desenvolvimento de personagem</li>
										<li>Experiência com animação 2D e motion graphics</li>
										<li>Proficiência em animação em estilo whiteboard</li>
										<li>Proficiência em animação com Adobe Animate e experiência com Adobe AfterEffects</li>
										<li>Experiência em escultura digital com Z-Brush e Mudbox</li>
									</ul>
								</div>
							</div>
							<Link href='/portfolio'><a className={styles.sectionLink}>dê uma olhada no meu trabalho</a></Link>
						</section>
						<section>
							<div className={styles.secIntro}>
								<h2>Como Desenvolvedor de Sistemas</h2>
								<ul>
									<li>Graduação em Bacharelado em Ciências da Computação (USP)</li>
									<li>Especialização em Desenvolvimento de Sistemas para Dispositivos Móveis (IFSP)</li>
									<li>Mais de {(new Date().getFullYear() - 2000)} anos de experiência com desenvolvimento em ambiente corporativo</li>
									<li>Mais de {(new Date().getFullYear() - 2013)} anos de experiência com desenvolvimento de aplicativos móveis</li>
									<li>Experiência com várias linguagens de programação como TypeScript/JavaScript, Kotlin, Java, PHP, C/C++, ActionScript — e conhecimento de Swift, Objective-C e Phyton</li>
									<li>Experiência com design patterns</li>
									<li>Conhecimento de SOA e experiência no desenvolvimento de serviços REST</li>
									<li>Experiência com JSON e XML</li>
									<li>Experiência com Git e com o modelo GitFlow — e conhecimento das plataformas GitHub e BitBucket</li>
									<li>Conhecimento da metodologia de desenvolvimento Ágil/Scrum</li>
									<li>Experiência com desenvolvimento de Realidade Virtual e Realidade Aumentada</li>
									<li>Experiência com desenvolvimento Unity</li>
								</ul>
							</div>
							<div className={styles.secSkills}>
								<div>
									<h3>Front-end</h3>
									<ul>
										<li>Proficiência em HTML5 e CSS3/SASS</li>
										<li>Proficiência em TypeScript/JavaScript</li>
										<li>Proficiência nos framework React e Next.js</li>
										<li>Conhecimento de GraphQL</li>
										<li>Experiência com AngularJS e Vue.js</li>
										<li>Proficiência nas bibliotecas JavaScript Bootstrap, jQuery, jQuery UI e jQuery Mobile</li>
									</ul>
								</div>
								<div>
									<h3>Back-end</h3>
									<ul>
										<li>Conhecimento dos sistemas operacionais Linux, macOS e Windows</li>
										<li>Proficiência em PHP e experiência em Composer</li>
										<li>Experiência com o framework PHP Slim para desenvolvimento de APIs REST</li>
										<li>Experiência com Node.js e Express</li>
										<li>Experiência com personalização do Wordpress e WooCommerce (tema-filho, criação de plug-in, ganchos e códigos de acesso)</li>
										<li>Experiência com bancos de dados relacionais (MySQL, PostgreSQL, MS SQL Server)</li>
										<li>Conhecimento de bancos de dados NoSQL (MongoDB)</li>
									</ul>
								</div>
								<div>
									<h3>Mobile</h3>
									<ul>
										<li>Proficiência em desenvolvimento nativo Android usando Java e Kotlin — e experiência com Room e Retrofit</li>
										<li>Conhecimento de desenvolvimento nativo iOS usando ObjectiveC e Swift</li>
										<li>Conhecimento de React Native</li>
										<li>Conhecimento de Maven e Gradle</li>
										<li>Conhecimento de CocoaPods</li>
										<li>Experiência em publicação na Play Store e na App Store</li>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<h2>Experiência profissional</h2>
							<div className={styles.experience}>
								<div>
									<h3>
										Eldes Studio
										<span className={styles.date}>2000/mai – Presente</span>
										<span className={styles.rule}>Ilustrador</span>
									</h3>
									<ul>
										<li>Ilustração para livros infantis e didáticos</li>
										<li>Ilustração para revistas, jornais e periódicos</li>
										<li>Ilustração para propaganda, identidade e marketing</li>
										<li>Animação</li>
										<li>Desenvolvimento de personagem</li>
										<li>Concept art</li>
										<li>Type design</li>
									</ul>
								</div>
								<div>
									<h3>
										Frux Design
										<span className={styles.date}>2008/out – Presente</span>
										<span className={styles.rule}>Sócio proprietário e fundador</span>
									</h3>
									<ul>
										<li>Gerência de projeto</li>
										<li>Arquitetura de software</li>
										<li>Desenvolvimento de sistemas</li>
										<li>Direção de arte</li>
										<li>Design gráfico</li>
										<li>Type design</li>
										<li>Ilustração</li>
									</ul>
								</div>
								<div>
									<h3>
										Senac
										<span className={styles.date}>2002/jun – Presente</span>
										<span className={styles.rule}>Docente nas áreas:</span>
									</h3>
									<ul>
										<li>Dsenvovlimento de Sistemas</li>
										<li>Design Gráfico e UX/UI Design</li>
										<li>Aplicativos de Design</li>
										<li>Ilustração e desenho</li>
										<li>Animação</li>
										<li>Escultura digital</li>
									</ul>
								</div>
								<div>
									<h3>
										MZO Interativa
										<span className={styles.date}>2000/jan – 2006/dez</span>
										<span className={styles.rule}>Sócio proprietário e fundador</span>
									</h3>
									<ul>
										<li>Gerência de projeto</li>
										<li>Arquitetura de software</li>
										<li>Desenvolvimento de sistemas</li>
										<li>Direção de arte</li>
										<li>Design gráfico</li>
									</ul>
								</div>
							</div>
						</section>

						<section>
							<h2>Formação</h2>
							<div className={styles.experience}>
								<div>
									<h3>
										IFSP
										<span className={styles.date}>2014 – 2016</span>
										<span className={styles.rule}>Especialização lato-sensu em Desenvolvimento de Sistemass para Dispositivos Móveis</span>
									</h3>
									<ul>
										<li>Horas do curso completadas integalmente, com exceção da apresentação da dissertação</li>
									</ul>
								</div>
								<div>
									<h3>
										USP
										<span className={styles.date}>1993 – 1999</span>
										<span className={styles.rule}>Bacharelado em Ciências da Computação</span>
									</h3>
									<ul>
										<li>Pesquisa em Visualização de Dados Científicos</li>
										<li>TCC em Desenvolvimento de Projetos Multimídia</li>
									</ul>
								</div>
							</div>
						</section>
					</div>
				</>
			) : (
				<>
					<div className={styles.about}>
						<div className={styles.resume}>
							<p className={styles.text}>
								<strong>Combination of creative talent in visual arts and technological insight:</strong> <em>graphic designer</em> and <em>illustrator</em>, with over {(new Date().getFullYear() - 2004)} years experience in Editorial, Literature and Advertising, and <em>software engineer</em>, with over {(new Date().getFullYear() - 2000)} years experience in full-stack Web and Mobile development.
							</p>
							<div className={styles.photo}>
								<Image
									src={ eldesPhotoImage }
									alt={ 'Eldes' }
									layout="responsive"
								/>
								<span className={styles.credits}>Photo: <a href="https://www.flickr.com/photos/194161014@N06/" target="_blank" rel="noreferrer">Will Veltroni</a></span>
							</div>
						</div>
						<section>
							<h2>Currently</h2>
							<p>
								He works at his illustration studio developing several illustration, graphic design and multimedia projects.
							</p>
							<p>
								He is a professor at Senac, teaching system development, graphic design and drawing classes.
							</p>
							<p>
								He helps organize sketching meetups like Urban Sketchers and World Wide SketchCrawl.
							</p>
							<p>
								He teaches courses, workshops and lectures about techniques and the illustration market.
							</p>
						</section>
						<section>
							<div className={styles.secIntro}>
								<h2>As Graphic Designer and Illustrator</h2>
								<ul>
									<li>Several courses with professionals active in labor market</li>
									<li>Specialization in identity, UI/UX and illustration</li>
									<li>{(new Date().getFullYear() - 2004)}+ years in the labor market</li>
								</ul>
							</div>
							<div className={styles.secSkills}>
								<div>
									<h3>UX/UI</h3>
									<ul>
										<li>Proficiency in Adobe graphic pack (Photoshop, Illustrator, InDesign, Acrobat, Animate)</li>
										<li>Experience with Design Thinking approach</li>
										<li>Knowledge of Google&apos;s Material Design guidelines</li>
										<li>Knowledge of Figma and Adobe XD</li>
									</ul>
								</div>
								<div>
									<h3>Books</h3>
									<ul>
										<li>Experience with style and visual flow development of book</li>
										<li>Proficiency in publish layout</li>
										<li>Proficiency in book illustration</li>
									</ul>
								</div>
								<div>
									<h3>Corporate</h3>
									<ul>
										<li>Proficiency in comprehensive branding/ID development (logotype, lettering, business card etc.)</li>
										<li>Proficiency in brand use manual development</li>
										<li>Experience with annual report design</li>
										<li>Experience with design for newsletter and email marketing</li>
										<li>Experience with design and management of endomarketing</li>
									</ul>
								</div>
								<div>
									<h3>Illustration and animation</h3>
									<ul>
										<li>Experience with illustration for advertising, identity and marketing</li>
										<li>Proficiency in illustration for children&apos;s book, picture book and textbook</li>
										<li>Proficiency in illustration for magazine, newspaper and periodicals</li>
										<li>Experience with character design</li>
										<li>Experience with 2D animation and motion graphics</li>
										<li>Proficiency in whiteboard animation</li>
										<li>Proficiency in animation with Adobe Animate — and experience with Adobe AfterEffects</li>
										<li>Experience in digital sculpting (Z-Brush, Mudbox)</li>
									</ul>
								</div>
							</div>
							<Link href='/portfolio'><a className={styles.sectionLink}>take a look at my work</a></Link>
						</section>
						<section>
							<div className={styles.secIntro}>
								<h2>As Software Engineer</h2>
								<ul>
									<li>Bachelor’s degree in Computer Science</li>
									<li>Lato sensu specialization in Mobile Application Development</li>
									<li>{(new Date().getFullYear() - 2000)}+ years of programming experience in corporate environment</li>
									<li>{(new Date().getFullYear() - 2013)}+ years experience developing mobile applications</li>
									<li>Experience with several programming languages such JavaScript/TypeScript, Kotlin, Java, PHP, C/C++, ActionScript — and knowledge of Objective-C, Swift and Phyton</li>
									<li>Experience with design patterns</li>
									<li>Knowledge of SOA — and experience in development of REST API development</li>
									<li>Experience with XML and JSON</li>
									<li>Experience with Git and with GitFlow branching model — and knowledge of GitHub and BitBucket platforms</li>
									<li>Knowledge of Agile methodology and Scrum</li>
									<li>Experience with VR (virtual reality) and AR (augmented reality) development</li>
									<li>Experience with development using Unity</li>
								</ul>
							</div>
							<div className={styles.secSkills}>
								<div>
									<h3>Front-end</h3>
									<ul>
										<li>Proficiency in HMTL5 and CSS3/SASS</li>
										<li>Proficiency in JavaScript/TypeScript</li>
										<li>Proficiency in React and Next.js frameworks</li>
										<li>Knowledge of GraphQL</li>
										<li>Experience with Vue.js and AngularJS</li>
										<li>Proficiency in JavaScript libraries as Bootstrap, jQuery, jQuery UI and jQuery Mobile</li>
										<li>Knowledge of Google&apos;s Material Design Guidelines — and experience with Material Design components libraries</li>
									</ul>
								</div>
								<div>
									<h3>Back-end</h3>
									<ul>
										<li>Knowledge of Linux, Windows and macOS operating systems</li>
										<li>Experience with Node.js and Express</li>
										<li>Proficiency in PHP and experience with Composer</li>
										<li>Experience with PHP framework Slim for developing REST API</li>
										<li>Experience with customization of Wordpress and WooCommerce (child-theme, plugin creation, hooks, shortcodes)</li>
										<li>Experience with relational databases (MariaDB, PostgreSQL, MS SQL Server)</li>
										<li>Knowledge of NoSQL databases (MongoDB)</li>
									</ul>
								</div>
								<div>
									<h3>Mobile</h3>
									<ul>
										<li>Proficiency in Android native development using Java and Kotlin — and experience with Room and Retrofit.</li>
										<li>Knowledge of iOS native development using Objective-C and Swift</li>
										<li>Knowledge of React Native</li>
										<li>Knowledge of Maven and Gradle</li>
										<li>Knowledge of CocoaPods</li>
										<li>Experience with Play Store and App Store publishing</li>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<h2>Work Experience</h2>
							<div className={styles.experience}>
								<div>
									<h3>
										Eldes Studio
										<span className={styles.date}>2000/may – Present</span>
										<span className={styles.rule}>Owner / Art Director / Illustrator</span>
									</h3>
									<ul>
										<li>Children&apos;s book and textbook illustration</li>
										<li>Magazine, newspaper and periodicals illustration</li>
										<li>Advertising, identity and marketing illustration</li>
										<li>Animation</li>
										<li>Character design</li>
										<li>Concept art</li>
										<li>Type design</li>
									</ul>
								</div>
								<div>
									<h3>
										Frux Design
										<span className={styles.date}>2008/oct – Present</span>
										<span className={styles.rule}>Partner owner and founder / Art director / CIO</span>
									</h3>
									<ul>
										<li>Project management</li>
										<li>Software architecture</li>
										<li>System development</li>
										<li>Art direction</li>
										<li>UX/UI design</li>
										<li>Type design</li>
										<li>Illustration</li>
									</ul>
								</div>
								<div>
									<h3>
										Senac (National Service for Commercial Education)
										<span className={styles.date}>2002/jun – Present</span>
										<span className={styles.rule}>Teacher in:</span>
									</h3>
									<ul>
										<li>System development (software enginering, object-oriented programming)</li>
										<li>Web development (HTML5, CSS3, TypeScript/JavaScript, React, PHP, Wordpress</li>
										<li>Mobile development (Java, React Native)</li>
										<li>Graphic design (color theory, typography, UX/UI)</li>
										<li>Graphic apps (Photoshop, Illustrator, InDesign)</li>
										<li>Animation (concept e techniques)</li>
										<li>Digital sculpting (ZBrush, Mudbox)</li>
										<li>Illustration (character design, observational drawing, drawing techniques, digital painting)</li>
									</ul>
								</div>
								<div>
									<h3>
										MZO Interativa
										<span className={styles.date}>2000/jan – 2006/dec</span>
										<span className={styles.rule}>Partner owner and founder / Art director / CIO</span>
									</h3>
									<ul>
										<li>Project management</li>
										<li>Software architecture</li>
										<li>System development</li>
										<li>Art direction</li>
										<li>UX/UI design</li>
									</ul>
								</div>
							</div>
						</section>

						<section>
							<h2>Education and training</h2>
							<div className={styles.experience}>
								<div>
									<h3>
										IFSP
										<span className={styles.date}>2014 – 2016</span>
										<span className={styles.rule}>Post Graduate lato sensu Specialization in Mobile Application Development</span>
									</h3>
									<ul>
										<li>I completed all the instruction-hours, except the presentation of capstone project</li>
									</ul>
								</div>
								<div>
									<h3>
										USP
										<span className={styles.date}>1993 – 1999</span>
										<span className={styles.rule}>Bachelor&apos;s degree in Computer Science</span>
									</h3>
									<ul>
										<li>Research in Scientific Data Visualization</li>
										<li>Capstone project in Multimedia Project Development</li>
									</ul>
								</div>
							</div>
						</section>
					</div>
				</>
			)}
			
		</Page>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? '', ['common', 'Page'])),
		}
	}
}

export default AboutPage