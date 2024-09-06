import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
    // State pour gérer la visibilité du menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction pour basculer la visibilité du menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fonction pour fermer le menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
        <header className="bg-gray-800 text-white fixed top-0 w-full" role="banner">
            <div className="container mx-auto flex justify-between items-center p-4">
            <Link to="/" className="cursor-pointer text-xl font-bold hover:text-red-300 transition-all" aria-label="Page d'accueil">Home</Link>

            {/* Menu de bureau (visible sur écrans moyens et grands) */}
            <nav className="hidden md:flex space-x-4" aria-label="Menu principal">
                <ul className="flex space-x-4">
                <li><Link to="presentation" smooth={true} duration={500} className="transition-all cursor-pointer hover:text-red-300" aria-label="Présentation">Présentation</Link></li>
                <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer transition-all hover:text-red-300" aria-label="Langages et Compétences">Langages et Compétences</Link></li>
                <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer transition-all hover:text-red-300" aria-label="Portfolio">Portfolio</Link></li>
                <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer transition-all hover:text-red-300" aria-label="Contact">Contact</Link></li>
                </ul>
            </nav>

            {/* Bouton burger (visible uniquement sur mobiles) */}
            <button
                id="burger-menu"
                onClick={toggleMenu}
                className="md:hidden text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
            >
                <svg className="w-6 h-6 hover:text-red-300 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                <span className="sr-only">Menu mobile</span>
            </button>
            </div>

            {/* Menu mobile (affiché uniquement lorsque isMenuOpen est true) */}
            <nav id="mobile-menu" className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`} aria-label="Menu mobile">
            <ul className="flex flex-col space-y-2 p-4">
                <li><Link to="presentation" smooth={true} duration={500} onClick={closeMenu} className=" cursor-pointer hover:text-red-300 transition-all" aria-label="Présentation">Présentation</Link></li>
                <li><Link to="skills" smooth={true} duration={500} onClick={closeMenu} className="cursor-pointer hover:text-red-300 transition-all" aria-label="Langages et Compétences">Langages et Compétences</Link></li>
                <li><Link to="projects" smooth={true} duration={500} onClick={closeMenu} className="cursor-pointer hover:text-red-300 transition-all" aria-label="Portfolio">Portfolio</Link></li>
                <li><Link to="contact" smooth={true} duration={500} onClick={closeMenu} className="cursor-pointer hover:text-red-300 transition-all" aria-label="Contact">Contact</Link></li>
            </ul>
            </nav>
        </header>
        </>
    );
}