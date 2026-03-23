// export default theme
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// Global styles for light and dark mode
const styles = {
  global: props => ({
    body: {
      bg: mode('#d2dce4', '#181a1c')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: 22,
        marginTop: 3,
        marginBottom: 4
      },

      'project-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 4,
        textDecorationColor: '#525252',
        textDecorationThickness: 2,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'Outfit'"
}

// Custom color values (updated teal and blue colors)
const colors = {
  blue: {
    50: '#A5B9D9',
    100: '#4A6A92',
    200: '#35557A',
    300: '#204461',
    400: '#153651',
    500: '#102C57', // Default blue (updated)
    600: '#0C2345',
    700: '#081A34',
    800: '#050F24',
    900: '#020914'
  },
  teal: {
    50: '#D5E9E2',
    100: '#B2D9CB',
    200: '#98D2C0', // Default teal (updated)
    300: '#7EBCA9',
    400: '#65A88F',
    500: '#4C9575',
    600: '#3A7B62',
    700: '#296144',
    800: '#194B2B',
    900: '#0C3621'
  },
  purple: {
    50: '#e2d4f4',
    100: '#c0a4e0',
    200: '#9e74cc',
    300: '#7c4cb8',
    400: '#5a28a4',
    500: '#624E88', // Default purple
    600: '#4f3e6f',
    700: '#3c2e56',
    800: '#2a1e3d',
    900: '#190f25'
  },
  orange: {
    50: '#f9e1d8',
    100: '#f1bda8',
    200: '#e99b77',
    300: '#e16a54', // Default orange
    400: '#d84c33',
    500: '#c72e12',
    600: '#a8220f',
    700: '#8a1c0c',
    800: '#701609',
    900: '#580f06'
  },
  lightBlue: {
    50: '#E3F2F9',
    100: '#C9E6F0',
    200: '#A6D9E6',
    300: '#84CCE2',
    400: '#61C0D7',
    500: '#3DB3CB',
    600: '#2899B1',
    700: '#1C7F97',
    800: '#106680',
    900: '#0B4D69'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors, // Add custom colors here
  fonts
})

export default theme
