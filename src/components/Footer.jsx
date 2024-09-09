import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-white py-8" role="contentinfo" aria-labelledby="footer-heading">
            <div className="container mx-auto py-5 px-4">
                {/* <!-- Source Section --> */}
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-4 md:mb-0" aria-labelledby="source-heading">
                        <h3 id="source-heading" className="text-xl font-semibold">Source</h3>
                        <p>Mes ressources dans la réalisation de ce portfolio :</p>
                        <ul className="list-disc list-inside">
                            <li><Link href="https://freeflo.ai/images/photo/small-white-boat-in-water-surrounded-by-mountains-HE49VJHYuUyzHlTbjiAK" className="text-blue-400 hover:underline">Image de background de la section Home</Link></li>
                            <li><Link href="https://tailwindcss.com/" className="text-blue-400 hover:underline">Tailwind CSS pour la mise en page</Link></li>
                            <li><Link href="https://fontawesome.com/" className="text-blue-400 hover:underline">Font Awesome pour les logos</Link></li>
                            <li><Link href="https://icons8.com/icons" className="text-blue-400 hover:underline">Icons8 pour les icônes</Link></li>
                        </ul>
                    </div>
                
                    {/* <!-- Copyright Section --> */}
                    <div>
                        <p>© 2023 Copyright : Ce portfolio est libre de droit.</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}