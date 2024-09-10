import Footer from "../components/Footer";
import Header from "../components/Header";
import photoProfil from "../assets/chat.meme.png";
import { Link } from "react-router-dom";
import photoPokedex from "../assets/pokedex.png";
import photoHoroscope from "../assets/horaculus.png";
import photoForum from "../assets/miniReseau.png";
import photoKeyHome from "../assets/homekey.png";
import photoTicTacToe from "../assets/tictactoe.png";
import photoGenieArtHub from "../assets/geniearthub.png";


export default function Home() {
    return (
        <>
        <Header />
        <main>
            <section id="home" role="region" aria-labelledby="home-heading">
                <div className="bg-[url(../assets/bgc-boat.png)] bg-cover bg-center h-screen">
                    <div className="flex flex-col justify-center items-center h-full p-4">
                        <h1 id="home-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                            Calvin Rousseau
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white" aria-describedby="job-description">
                            Développeur Web
                        </p>
                    </div>
                </div>
            </section>
            <section id="presentation" className="py-12 pt-20 mt-12" role="region" aria-labelledby="presentation-heading">
                <div id="container-presentation" className="max-w-4xl mx-auto px-4">
                    <h2 id="presentation-heading" className="text-3xl text-center font-extrabold text-gray-900 mb-6">
                        Présentation
                    </h2>
                    <div id="content-presentation" className="flex flex-col md:flex-row items-center gap-8">
                        <img src={photoProfil} alt="Image d'un chat" className="w-full md:w-1/2 h-auto rounded-lg shadow-lg" />
                        <p className="text-gray-700 text-base leading-relaxed">
                            Je m’appelle Calvin et je suis passionné par le développement web et les technologies. Après avoir commencé ma carrière dans la restauration, j’ai découvert le domaine du développement pendant la période de confinement liée au Covid-19. Cette révélation m’a conduit à me consacrer entièrement à cette nouvelle passion. Actuellement, je suis apprenant développeur web en formation chez <Link className="w-1 font-bold" to="https://laplateforme.io/" aria-label="La Plateforme, centre de formation en développement web" target="_blank" rel="noopener noreferrer">La Plateforme</Link> pour approfondir mes compétences et réaliser mon ambition dans ce secteur en pleine évolution.
                        </p>
                    </div>
                </div>
            </section>
            <section id="tab-competences" role="region" aria-labelledby="experience-heading">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 id="experience-heading" className="text-3xl text-center font-extrabold text-gray-900 mb-6">
                        Mes récentes expériences
                    </h2>
                    <table className="min-w-full border-gray-300 border-collapse" aria-describedby="experience-description">
                        <thead>
                            <tr className="border-b border-gray-300">
                                <th className="p-6 text-left" scope="col"></th>
                                <th className="p-6 text-left" scope="col">Formation et entreprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b hover:bg-gray-200">
                                <td className="p-6" scope="row">2024 - 2025</td>
                                <td className="p-6">Formation développeur web et web mobile chez <Link className="text-black underline font-bold" href="https://laplateforme.io/" aria-label="La Plateforme, centre de formation en développement web" target="_blank" rel="noopener noreferrer">La Plateforme</Link></td>
                            </tr>
                            <tr className="border-b hover:bg-gray-200">
                                <td className="p-6" scope="row">2024</td>
                                <td className="p-6">Formation langage à la carte chez <Link className="text-black underline font-bold" href="https://laplateforme.io/" aria-label="La Plateforme, centre de formation en développement web" target="_blank" rel="noopener noreferrer">La Plateforme</Link></td>
                            </tr>
                            <tr className="border-b hover:bg-gray-200">
                                <td className="p-6" scope="row">2022-2023</td>
                                <td className="p-6"><span className="font-bold">Commis de cuisine / Chef de partie :</span> Préparation des ingrédients, gestion d’une station spécifique (entrée, plat, dessert), supervision de la mise en place et de la cuisson, et respect strict des normes d’hygiène et de sécurité alimentaire.</td>
                            </tr>
                            <tr className="hover:bg-gray-200">
                                <td className="p-6" scope="row">2020-2022</td>
                                <td className="p-6"><span className="font-bold">Intérim en restauration :</span> Renfort ponctuel des équipes, réalisation de diverses tâches en cuisine et en salle, adaptation rapide aux besoins de l’établissement, tout en respectant les normes d’hygiène et de sécurité.</td>
                            </tr>
                            <tr className="hover:bg-gray-200">
                                <td className="p-6" scope="row">2019-2020</td>
                                <td className="p-6"><span className="font-bold">Commis de cuisine :</span> Préparation des ingrédients, réalisation des tâches de base en cuisine, assistance aux chefs dans l’élaboration des plats et respect des normes d’hygiène et de sécurité.</td>
                            </tr>
                            <tr className="hover:bg-gray-200">
                                <td className="p-6" scope="row">2016-2018</td>
                                <td className="p-6"><span className="font-bold">Apprentissage en boucherie :</span> Formation aux techniques de découpe, préparation, transformation et présentation des viandes, avec maîtrise des méthodes de désossage, parage et respect des normes d’hygiène alimentaire.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section id="skills" className="mt-12 pt-20 bg-gray-50" role="region" aria-labelledby="skills-heading">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 id="skills-heading" className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                        Langages et compétences
                    </h2>
                    <div className="flex flex-wrap -mx-4">
                        {/* <!-- Carte Front-End --> */}
                        <article className="w-auto md:w-1/3 px-4 mb-8" role="article" aria-labelledby="front-end-heading">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h3 id="front-end-heading" className="text-xl text-center font-bold mb-4">
                                    Front-End
                                </h3>
                                <div className="flex justify-around">
                                    <div className="items-center mb-2" aria-label="HTML5">
                                        <i className="fab fa-html5 text-2xl text-gray-700" aria-hidden="true"></i>
                                    </div>
                                    <div className="items-center mb-2" aria-label="CSS3">
                                        <i className="fab fa-css3-alt text-2xl text-gray-700" aria-hidden="true"></i>
                                    </div>
                                    <div className="items-center mb-2" aria-label="JavaScript">
                                        <i className="fab fa-js text-2xl text-gray-700" aria-hidden="true"></i>
                                    </div>
                                    <div className="items-center mb-2" aria-label="React">
                                        <i className="fab fa-react text-2xl text-gray-700" aria-hidden="true"></i>
                                    </div>
                                    <div className="items-center mb-2 self-center" aria-label="Tailwind CSS">
                                        <img src="/icons8-tailwind-css.svg" alt="Tailwind CSS" className="w-full mb-0 h-auto" />
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    J'ai une solide expérience en développement front-end, avec une maîtrise des langages HTML, CSS et JavaScript. Je suis également compétent en React pour le développement d'interfaces utilisateur dynamiques et en Tailwind CSS pour des conceptions modernes et réactives.
                                </p>
                            </div>
                        </article>
                        {/* <!-- Carte Back-End --> */}
                        <article className="w-auto md:w-1/3 px-4 mb-8" role="article" aria-labelledby="back-end-heading">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h3 id="back-end-heading" className="text-xl text-center font-bold mb-4">
                                    Back-End
                                </h3>
                                <div className="flex justify-around">
                                    <div className="items-center mb-2" aria-label="PHP">
                                        <i className="fab fa-php text-2xl text-gray-700" aria-hidden="true"></i>
                                    </div>
                                    <div className="items-center mb-2" aria-label="Node.js">
                                        <i className="fab fa-node text-2xl text-gray-700" aria-hidden="true"></i>
                                    </div>
                                    <div className="items-center mb-2" aria-label="Python">
                                        <i className="fab fa-python text-2xl text-gray-700" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    Je possède une expérience approfondie en développement back-end avec PHP et Node.js. Je suis capable de créer des applications serveur performantes et évolutives, et de gérer des bases de données et des API de manière efficace.
                                </p>
                            </div>
                        </article>
                        {/* <!-- Carte Outils et Collaborations --> */}
                        <article className="w-auto md:w-1/3 px-4 mb-8" role="article" aria-labelledby="tools-collaboration-heading">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h3 id="tools-collaboration-heading" className="text-xl text-center font-bold mb-4">
                                    Outils et Collaborations
                                </h3>
                                <div className="flex justify-around">
                                    <div className="items-center mb-2" aria-label="Git">
                                        <i className="fab fa-git-alt text-2xl text-gray-700 mr-2" aria-hidden="true"></i>
                                    </div>
                                    <div className="items-center mb-2" aria-label="Figma">
                                        <i className="fab fa-figma text-2xl text-gray-700 mr-2" aria-hidden="true"></i>
                                    </div>
                                    <div className="items-center mb-2" aria-label="GitHub">
                                        <i className="fab fa-github text-2xl text-gray-700 mr-2" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    Je suis à l'aise avec divers outils de développement et de collaboration, notamment Git pour le versionnage du code, Figma pour la conception d'interface, et GitHub pour la gestion de projets et la collaboration en équipe.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section id="projects" className="mb-12 pt-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Portfolio</h2>
                    <div className="flex flex-wrap -mx-4">
                        {/* <!-- Carte Projet 1 --> */}
                        <article className="w-full md:w-2/4 lg:w-1/3 h-fit px-4 mb-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img src={photoPokedex} alt="Image du projet 1" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
                                <h3 className="text-xl text-center font-bold mb-4">Pokédex Python</h3>
                                <p className="text-gray-600 mb-4">Voici une brève description du projet 1. Ce projet utilise les dernières technologies pour offrir une solution innovante et efficace dans son domaine. Il permet de créer un Pokédex en Python, avec des fonctionnalités avancées telles que l'ajout de nouveaux Pokémon, la modification des informations et la gestion des images. non fini</p>
                                <div className="flex justify-center">
                                    <Link to="https://github.com/Calvin2124/Pokedex" target="_blank" className="bg-blue-600 transition-all hover:bg-white hover:text-black text-white py-2 px-4 rounded-lg">En savoir plus</Link>
                                </div>
                            </div>
                        </article>
                        {/* <!-- Carte Projet 2 --> */}
                        <article className="w-full md:w-2/4 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img src={photoHoroscope} alt="Image du projet 2" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
                                <h3 className="text-xl text-center font-bold mb-4">Horoscope</h3>
                                <p className="text-gray-600 mb-4">Le site d’horoscope que j’ai développé offre une expérience interactive et personnalisée pour les passionnés d’astrologie. Construit avec React, ce site utilise une API locale pour fournir des horoscopes précis et des informations astrologiques.
                                </p>
                                <div className="flex justify-center">
                                    <a href="https://github.com/Calvin2124/Horoscope" target="_blank" className="bg-blue-600 transition-all hover:bg-white hover:text-black text-white py-2 px-4 rounded-lg">En savoir plus</a>
                                </div>
                            </div>
                        </article>
                        {/* <!-- Carte Projet 3 --> */}
                        <article className="w-full md:w-2/4 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img src={photoForum} alt="Image du projet 3" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
                                <h3 className="text-xl text-center font-bold mb-4">Forum PHP</h3>
                                <p className="text-gray-600 mb-4">Le forum PHP que j’ai développé permet aux utilisateurs de s’inscrire, se connecter, publier des messages, et gérer leurs propres contributions. Construit en PHP, ce forum propose un espace où les utilisateurs peuvent interagir en partageant des publications tout en ayant la possibilité de gérer uniquement leurs propres messages.</p>
                                <div className="flex justify-center">
                                    <a href="https://github.com/Calvin2124/ForumPhp" target="_blank" className="bg-blue-600 transition-all hover:bg-white hover:text-black text-white py-2 px-4 rounded-lg">En savoir plus</a>
                                </div>
                            </div>
                        </article>
                        {/* <!-- Carte Projet 4 --> */}
                        <article className="w-full md:w-2/4 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img src={photoKeyHome} alt="Image du projet 4" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
                                <h3 className="text-xl text-center font-bold mb-4">KeyHome</h3>
                                <p className="text-gray-600 mb-4">Le site de voyage que j’ai développé est une plateforme simple et visuellement attrayante créée en HTML et CSS. Ce site permet aux utilisateurs de découvrir des informations générales sur les destinations de voyage sans inclure de fonctionnalités complexes telles que la recherche de locations.</p>
                                <div className="flex justify-center">
                                    <a href="https://github.com/Calvin2124/KeyHomeFlexBox" target="_blank" className="bg-blue-600 transition-all hover:bg-white hover:text-black text-white py-2 px-4 rounded-lg">En savoir plus</a>
                                </div>
                            </div>
                        </article>
                        {/* <!-- Carte Projet 5 --> */}
                        <article className="w-full md:w-2/4 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img src={photoTicTacToe} alt="Image du projet 5" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
                                <h3 className="text-xl text-center font-bold mb-4">Tic Tac Toe</h3>
                                <p className="text-gray-600 mb-4">Ce projet consiste en un jeu de plateaux. Le jeu est jouable sur une page web et permet aux joueurs de jouer contre l'ordinateur. Le jeu est réalisé en JavaScript.</p>
                                <div className="flex justify-center">
                                    <a href="https://github.com/Calvin2124/tictactoe" target="_blank" className="bg-blue-600 transition-all hover:bg-white hover:text-black text-white py-2 px-4 rounded-lg">En savoir plus</a>
                                </div>
                            </div>
                        </article>
                        {/* <!-- Carte Projet 6 --> */}
                        <article className="w-full md:w-2/4 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img src={photoGenieArtHub} alt="Image du projet 6" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
                                <h3 className="text-xl text-center font-bold mb-4">Génie ArtHub</h3>
                                <p className="text-gray-600 mb-4">Ce projet consiste en un site de commerce en ligne dédié aux œuvres d’art. L’application permet aux utilisateurs de parcourir une galerie d’œuvres, d’ajouter leurs sélections à un panier virtuel, et de gérer leur panier en ajoutant ou en supprimant des articles. Lors de la finalisation de l’achat, les utilisateurs remplissent un formulaire de commande, après quoi le panier est vidé et un numéro de commande est généré. Le site utilise une API pour afficher les informations sur les œuvres, assurant ainsi une expérience utilisateur fluide et intuitive. Non fini
                                </p>
                                <div className="flex justify-center">
                                    <a href="https://github.com/Calvin2124/GenieArtHub-REACT" target="_blank" className="bg-blue-600 transition-all hover:bg-white hover:text-black text-white py-2 px-4 rounded-lg">En savoir plus</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section id="contact" className="p-8" role="region" aria-labelledby="contact-heading">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 id="contact-heading" className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                        Contact
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-5 justify-between p-6">
                        {/* <!-- Paragraphe à gauche (60%) --> */}
                        <div className="w-full md:w-[60%] mb-4 md:mb-0">
                            <p className="text-gray-700">
                                Je suis constamment en quête de nouvelles opportunités pour participer à des projets motivants et apporter ma contribution dans le domaine du développement. N’hésitez pas à me contacter via Github, LinkedIn ou par mail afin d’échanger sur d’éventuelles collaborations.
                            </p>
                        </div>
                        {/* <!-- Icônes à droite (40%) --> */}
                        <div className="w-full md:w-[40%] flex items-center justify-center space-x-4">
                            {/* <!-- Gmail Icon --> */}
                            <Link to="mailto:calvinrousseau90@gmail.com" target="_blank" className="text-gray-700 hover:text-red-500" aria-label="Envoyer un e-mail à Calvin Rousseau">
                                <i className="fas fa-envelope fa-2x"></i>
                            </Link>
                            {/* <!-- GitHub Icon --> */}
                            <Link to="https://github.com/Calvin2124" target="_blank" className="text-gray-700 hover:text-black" aria-label="Profil GitHub de Calvin Rousseau">
                                <i className="fab fa-github fa-2x"></i>
                            </Link>
                            {/* <!-- LinkedIn Icon --> */}
                            <Link to="https://www.linkedin.com/in/calvin-rousseau-0851202b0/" target="_blank" className="text-gray-700 hover:text-blue-700" aria-label="Profil LinkedIn de Calvin Rousseau">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}