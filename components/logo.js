import NextLink from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.a`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  cursor: pointer;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const diamondImg = `/images/diamond${useColorModeValue('', '-dark')}.png`

  return (
    <NextLink href="/" passHref legacyBehavior>
      <LogoBox>
        <Image src={diamondImg} width={20} height={20} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="Montserrat"
          fontWeight="medium"
          ml={3}
        >
          Aradhana
        </Text>
      </LogoBox>
    </NextLink>
  )
}

export default Logo
