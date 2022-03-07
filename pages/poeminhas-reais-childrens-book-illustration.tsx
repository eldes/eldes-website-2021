import { NextPage } from 'next'
import BeBody from '../components/BeBody'
import BeCredits from '../components/BeCredits'
import BeEmbed from '../components/BeEmbed'
import BeHeading from '../components/BeHeading'
import BeImage from '../components/BeImage'
import BeParagaph, { BeParagaphAlign } from '../components/BeParagaph'
import BePhotoGrid from '../components/BePhotoGrid'
import BeThanks from '../components/BeThanks'
import PiecePage from '../components/PiecePage'
import artworkPart1Image from '../public/content/poeminhas-reais-childrens-book-illustration/artwork-part-1.jpg'
import artworkPart2Image from '../public/content/poeminhas-reais-childrens-book-illustration/artwork-part-2.jpg'
import artworkPart3Image from '../public/content/poeminhas-reais-childrens-book-illustration/artwork-part-3.jpg'
import baronetImage from '../public/content/poeminhas-reais-childrens-book-illustration/baronet.jpg'
import coverClosedImage from '../public/content/poeminhas-reais-childrens-book-illustration/cover-closed.jpg'
import coverPoeminhasCelestiais from '../public/content/poeminhas-reais-childrens-book-illustration/cover-poeminhas-celestiais.jpg'
import coverPoeminhasFlorais from '../public/content/poeminhas-reais-childrens-book-illustration/cover-poeminhas-florais.jpg'
import coverPoeminhasLegais from '../public/content/poeminhas-reais-childrens-book-illustration/cover-poeminhas-legais.jpg'
import coverPoeminhasProfissionais from '../public/content/poeminhas-reais-childrens-book-illustration/cover-poeminhas-profissionais.jpg'
import coverPoeminhasReais from '../public/content/poeminhas-reais-childrens-book-illustration/cover-poeminhas-reais.jpg'
import coverPoeminhasVegetais from '../public/content/poeminhas-reais-childrens-book-illustration/cover-poeminhas-vegetais.jpg'
import marcaCorujinhaImage from '../public/content/poeminhas-reais-childrens-book-illustration/marca-corujinha-editora.png'
import mockupAuthorsImage from '../public/content/poeminhas-reais-childrens-book-illustration/mockup-authors.jpg'
import mockupBaronetBaronImage from '../public/content/poeminhas-reais-childrens-book-illustration/mockup-baronet-baron.jpg'
import mockupCoverOpenImage from '../public/content/poeminhas-reais-childrens-book-illustration/mockup-cover-open.jpg'
import mockupDuchessArchdukeImage from '../public/content/poeminhas-reais-childrens-book-illustration/mockup-duchess-archduke.jpg'
import mockupFaceImage from '../public/content/poeminhas-reais-childrens-book-illustration/mockup-face.jpg'
import mockupKnightImage from '../public/content/poeminhas-reais-childrens-book-illustration/mockup-knight.jpg'
import mockupMarquisImage from '../public/content/poeminhas-reais-childrens-book-illustration/mockup-marquis.jpg'
import mockupPricessKingImage from '../public/content/poeminhas-reais-childrens-book-illustration/mockup-princess-king.jpg'
import mockupVicountCountImage from '../public/content/poeminhas-reais-childrens-book-illustration/mockup-viscount-count.jpg'
import roughImage from '../public/content/poeminhas-reais-childrens-book-illustration/rough.jpg'
import sketches1Image from '../public/content/poeminhas-reais-childrens-book-illustration/sketches-1.jpeg'
import sketches2Image from '../public/content/poeminhas-reais-childrens-book-illustration/sketches-2.jpeg'
import sketches3Image from '../public/content/poeminhas-reais-childrens-book-illustration/sketches-3.jpeg'
import thanksImage from '../public/content/poeminhas-reais-childrens-book-illustration/thanks.jpg'

const PoeminhasReaisChildrensBookIllustrationsPage: NextPage = () => {
	return (
		<PiecePage>
			<BeBody>
			<BeImage
					src={ baronetImage }
					alt={'Illustration of the Baronet'}
					
				/>
				<BeCredits
					clientName='Editora Coruja'
					work='illustrations and design of colletion'
				/>
				<BeImage
					src={ coverClosedImage }
					alt={'Mockup of closed cover'}
				/>
				<BeParagaph>
					Está para nascer alguém que não conheça uma gata princesa ou um porco marquês. Difícil mesmo é ver um camelo cavaleiro, um tatu visconde ou uma onça duquesa. A relação completa dos agraciados pelo nosso querido monarca Rei Leão está todinha nos poeminhas reais.
				</BeParagaph>
				<BeParagaph>
					Poeminhas Reais é um livro infantil que brinca com as características dos animais e seus títulos de nobreza.
				</BeParagaph>
				<BeHeading>
					Arte-final
				</BeHeading>
				<BeParagaph>
					{/* The Knight, the Baronet and the Baron: */}
					O Cavaleiro, o Baronete e o Barão:
				</BeParagaph>
				<BeImage
					src={ artworkPart1Image }
					alt={'Part 1 of 3 of the artwork'}
				/>
				<BeParagaph>
					{/* The Viscount, the Count and the Marquis: */}
					O Visconde, o Conde e o Marquês:
				</BeParagaph>
				<BeImage
					src={ artworkPart2Image }
					alt={'Part 2 of 3 of the artwork'}
				/>
				<BeParagaph>
				{/* The Duchess, the Archduke, the Princess and the King: */}
					A Duquesa, o Arqueduque, a Princesa e o Rei:
				</BeParagaph>
				<BeImage
					src={ artworkPart3Image }
					alt={'Part 3 of 3 of the artwork'}
				/>
				<BeHeading>
					Desenho único
				</BeHeading>
				<BeParagaph>
					No caso desse livro, decidi criar um único desenho, composto por várias cenas que se ligam em sequência. Assim, cada poeminha seria ilustrado por uma dessas cenas, ou seja por uma parte desse grande desenho.
				</BeParagaph>
				<BeImage
					src={ roughImage }
					alt={'Rough'}
				/>
				<BeHeading>
					Linguagem gráfica
				</BeHeading>
				<BeParagaph>
					Com o rough pronto, foram feitos mais estudos, agora para definir qual linguagem gráfica seria usada na arte-final.
				</BeParagaph>
				<BePhotoGrid
					images={[
						{
							src: sketches1Image,
							alt: 'Sketches'
						},
						{
							src: sketches3Image,
							alt: 'Sketches'
						},
						{
							src: sketches2Image,
							alt: 'Sketches'
						},
					]}
					cols={3}
				/>
				<BeParagaph>
					Decidida a linguagem gráfica, as ilustrações foram então arte-finalizadas.
				</BeParagaph>
				
				<BePhotoGrid
					images={[
						{
							src: mockupCoverOpenImage,
							alt: 'Full cover'
						},
						{
							src: mockupFaceImage,
							alt: 'Face page'
						},
						{
							src: mockupKnightImage,
							alt: 'Knight pages'
						},
						{
							src: mockupBaronetBaronImage,
							alt: 'Baronet and Baron pages'
						},
						{
							src: mockupVicountCountImage,
							alt: 'Viscount and Count pages'
						},
						{
							src: mockupMarquisImage,
							alt: 'Marquis pages'
						},
						{
							src: mockupDuchessArchdukeImage,
							alt: 'Duchess and Archduke pages'
						},
						{
							src: mockupPricessKingImage,
							alt: 'Princess and King pages'
						},
						{
							src: mockupAuthorsImage,
							alt: 'Authors pages'
						},
					]}
					cols={3}
				>
				<BeEmbed aspectRatioPercent={56}>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/MDmYkBFR98w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
				</BeEmbed>
				</BePhotoGrid>
				<BeHeading>
					<strong>Design</strong> da coleção
				</BeHeading>
				<BeParagaph>
					Além das ilustrações desse, também realizei a editoração dos demais livros, e elaborei o projeto gráfico, da coleção &quot;Poeminhas&quot;.
				</BeParagaph>
				<BePhotoGrid
					images={[
						{
							src: coverPoeminhasReais,
							alt: 'Cover of Poeminhas Reais',
						},
						{
							src: coverPoeminhasFlorais,
							alt: 'Cover of Poeminhas Florais',
						},
						{
							src: coverPoeminhasVegetais,
							alt: 'Cover of Poeminhas Vegetais',
						},
						{
							src: coverPoeminhasProfissionais,
							alt: 'Cover of Poeminhas Profisisonais',
						},
						{
							src: coverPoeminhasLegais,
							alt: 'Cover of Poeminhas Legais',
						},
						{
							src: coverPoeminhasCelestiais,
							alt: 'Cover of Poeminhas Celestiais',
						},
					]}
					cols={3}
				/>
				<BeHeading>
					desenvolvimento da <strong>marca</strong>
				</BeHeading>
				<BeParagaph>
					Na mesma ocasião desenvolvi também o desenho da marca &quot;Corujinha Editora&quot;, que se tornou o selo da Editora Coruja voltado para a literatura infantil.
				</BeParagaph>
				<BeImage
					src={ marcaCorujinhaImage }
					alt={'Corujinha logotype'}
				/>
				<BeThanks image={thanksImage} />
			</BeBody>
		</PiecePage>
	)
}

export default PoeminhasReaisChildrensBookIllustrationsPage