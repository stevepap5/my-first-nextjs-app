import VerticalTabs from './components/VerticalTabs'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body>
      <VerticalTabs/>
    </body>
  )
}
