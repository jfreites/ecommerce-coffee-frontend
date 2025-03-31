import Link from "next/link"
import { Separator } from "./ui/separator"

const dataFooter = [
    {
        id: 1,
        title: 'Sobre nosotros',
        link: '/about'
    },
    {
        id: 2,
        title: 'Politica de privacidad',
        link: '/privacy'
    },
    {
        id: 3,
        title: 'Terminos y condiciones',
        link: '/terms'
    },
    {
        id: 4,
        title: 'Contacto',
        link: '/contact'
    }
]

const Footer = () => {
    return (
        <footer className="mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p><span className="font-bold">EcommCoffee</span> Online Premium Shop</p>
                    <ul className="flex flex-wrap items0center mb-6 text-md font-medium text-gray-500 sm:mb-0 sm:mt-0">
                        {dataFooter.map((item) => (
                            <li key={item.id}>
                                <Link href={item.link} className="hover:underline me-4 md:me-6">{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    &copy; 2025{" "}
                    <Link href="/" className="hover:underline">
                        EcommCoffee
                    </Link>. Todos los derechos reservados.
                </span>
            </div>
        </footer>
    )
}
export default Footer