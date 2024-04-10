import type { Metadata } from 'next'
import '@/app/reset.css'
import Header from './_components/header/Header'
import * as styles from './layoutStyles.css'

export const metadata: Metadata = {
  title: "ronci's playground",
  description: "ronci's FE tech playground",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={styles.body}>
        <Header />
        {children}
      </body>
    </html>
  )
}
