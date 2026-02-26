import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });

export const metadata: Metadata = {
    title: 'Blacha trapezowa - Starmont',
    description: 'Blacha trapezowa na wymiar',
    openGraph: {
        title: 'Blacha trapezowa - Starmont',
        description: "Oferta blach trapezowych, płaskich, blachodachówek oraz akcesoriów.",
        url: "https://blachy.netlify.app",
        images: [
            {
                url: "https://blachy.netlify.app/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
        siteName: 'Blacha trapezowa - Starmont',
    },
    icons: {
        icon: '../../../public/images/favicon.png',
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}