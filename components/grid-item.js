import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

// ------------------ Generic Grid Item ------------------

export const GridItem = ({ children, href, title, thumbnail }) => {
  const descriptionColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Box
          maxW={{ base: '90%', md: '100%' }}
          mx="auto"
          overflow="hidden"
          borderRadius="12px"
          className="grid-item-container"
        >
          <Image
            src={thumbnail}
            alt={title}
            placeholder="blur"
            loading="lazy"
            className="grid-item-thumbnail"
          />
        </Box>

        <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>

        <Text fontSize={14} color={descriptionColor}>
          {children}
        </Text>
      </LinkBox>
    </Box>
  )
}

// ------------------ Work Grid Item ------------------

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  const descriptionColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box w="100%" align="center" fontFamily={'Ubuntu Sans'}>
      <LinkBox cursor="pointer">
        <Box w="100%" maxW={{ base: '75%', sm: '70%', md: '100%' }} mx="auto">
          <Image
            src={thumbnail}
            alt={title}
            placeholder="blur"
            loading="lazy"
            className="grid-item-thumbnail"
          />
        </Box>

        <Box mt={2} px={1}>
          <LinkOverlay as={NextLink} href={`/works/${id}`}>
            <Text
              fontSize={18}
              fontWeight="semibold"
              noOfLines={2}
              lineHeight="1.3"
            >
              {title}
            </Text>
          </LinkOverlay>

          <Text
            fontSize={14}
            mt={1}
            noOfLines={2}
            lineHeight="1.4"
            color={descriptionColor}
          >
            {children}
          </Text>
        </Box>
      </LinkBox>
    </Box>
  )
}

// ------------------ Styles ------------------

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .grid-item-container:hover .grid-item-thumbnail {
        transform: scale(1.03);
      }
    `}
  />
)
