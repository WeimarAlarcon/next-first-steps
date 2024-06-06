import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'SEO Contact',
    description: 'SEO Description',
    keywords: ['Contact Page', 'Aylin', 'datos', '...']
}

export default function ContactPage() {
    return (
        <div>
            <span className="text-7xl">Contact Page</span>
        </div>
    )
}