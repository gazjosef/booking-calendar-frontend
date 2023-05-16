import { Meta } from './Meta'
import { useRouter } from 'next/router'
import Header from './Header'

export const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <header>
        <Meta />
      </header>

      <Header />

      {router.pathname === '/'}

      <main>{children}</main>
    </>
  )
}
