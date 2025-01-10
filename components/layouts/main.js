import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar.js'
import { useEffect } from 'react'

const Main = ({ children, router }) => {
  useEffect(() => {
    const favicon = document.getElementById('favicon')

    const updateFavicon = () => {
      const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      favicon.setAttribute(
        'href',
        darkMode ? '/favicon-dark.ico' : '/favicon-light.ico'
      )
    }

    updateFavicon()

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', updateFavicon)

    return () => {
      mediaQuery.removeEventListener('change', updateFavicon)
    }
  }, [])
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Aradhana Nayak - Homepage</title>
        <link id="favicon" rel="icon" href="/favicon-light.ico" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
