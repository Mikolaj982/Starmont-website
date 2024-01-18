import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LoadingSpinner from './components/LoadingSpinner';
import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('./page'), {
    loading: () => <LoadingSpinner />,
    ssr: false,
})

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Blacha trapezowa - Starmont',
    description: 'Blacha trapezowa na wymiar',
    // icons: '/images/briefcase-logo.png',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <DynamicHeader />
            </body>
        </html>
    )
}