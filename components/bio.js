import { Box, Text, useColorModeValue } from '@chakra-ui/react'

// Bio Section (row)
export const BioSection = ({ children }) => {
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200')
  const hoverBg = useColorModeValue('gray.50', 'whiteAlpha.100')

  return (
    <Box
      display="flex"
      gap="1rem"
      alignItems="flex-start"
      py={1.5}
      borderBottom="1px solid"
      borderColor={borderColor}
      fontFamily="'Ubuntu Sans', serif"
      _hover={{ bg: hoverBg }}
      transition="background 0.2s ease"
    >
      {children}
    </Box>
  )
}

// Year (left side)
export const BioYear = ({ children }) => {
  const color = useColorModeValue('blue.500', 'teal.400')

  return (
    <Text as="span" fontWeight={600} minW="110px" color={color}>
      {children}
    </Text>
  )
}

// Text (right side)
export const BioParagraph = ({ children }) => {
  return (
    <Text m={0} lineHeight="1.5">
      {children}
    </Text>
  )
}
