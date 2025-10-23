import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shahfaid Rabbani | Software Developer",
  description:
    "Software Developer specializing in Angular, TypeScript, NgRx, and modern web technologies. Currently working at Standard Chartered Research & Technology Pvt. Ltd India(SOLV).",
  keywords: [
    "Software Developer",
    "Frontend Developer",
    "Angular",
    "TypeScript",
    "NgRx",
    "Web Development",
    "React",
    "Next.js",
    "JavaScript",
    "Shahfaid Rabbani",
  ],
  authors: [{ name: "Shahfaid Rabbani" }],
  creator: "Shahfaid Rabbani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahfaidrabbani.com",
    title: "Shahfaid Rabbani | Software Developer",
    description:
      "Software Developer specializing in Angular, TypeScript, NgRx, and modern web technologies.",
    siteName: "Shahfaid Rabbani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahfaid Rabbani | Software Developer",
    description:
      "Software Developer specializing in Angular, TypeScript, NgRx, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

