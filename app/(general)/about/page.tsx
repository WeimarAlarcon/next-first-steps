import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['About Page', 'Weimar', 'informacion', '...']
}

export default function AboutPage() {
    return (
      <div>
        <span className="text-7xl">About Page</span>
      </div>
    );
}