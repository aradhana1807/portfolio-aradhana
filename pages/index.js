import Head from 'next/head'
import NextLink from 'next/link'
import {
  Container,
  Button,
  Box,
  Heading,
  Link,
  Image,
  useColorModeValue,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Head>
        <title>Aradhana Nayak - Frontend Developer</title>
        <meta name="description" content="Portfolio of Aradhana Nayak, a frontend developer based in India. Explore my work and connect with me on various platforms." />
        <meta property="og:title" content="Aradhana Nayak - Frontend Developer" />
        <meta property="og:description" content="Portfolio of Aradhana Nayak, a frontend developer based in India. Explore my work and connect with me on various platforms." />
        <meta property="og:image" content="/images/aradhana-1.jpg" />
        <meta property="og:url" content="https://portfolio-aradhana.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aradhana Nayak - Frontend Developer" />
        <meta name="twitter:description" content="Portfolio of Aradhana Nayak, a frontend developer based in India. Explore my work and connect with me on various platforms." />
        <meta name="twitter:image" content="/images/aradhana-1.jpg" />
      </Head>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          mt={6}
          align="center"
        >
          Hello, I&apos;m a frontend developer based in India
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Aradhana Nayak
            </Heading>
            <p>Software Engineer / Developer</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/aradhana-1.jpg"
              alt="Profile Image"
              objectFit={'cover'}
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Aradhana is a software developer based in India. Currently working as an
            Application Development Associate at Accenture. She is passionate
            about exploring new technologies and has a keen interest in frontend
            development. Her enthusiasm for learning and dedication to mastering
            the latest trends in technology positions her as a forward-thinking
            professional eager to make a mark in the field of frontend
            development.
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                alignItems="center"
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Odisha, India.
          </BioSection>

          <BioSection>
            <BioYear>2023</BioYear>
            Completed Bachelor&apos;s Degree in Computer Science and Engineering
            from KIIT University, Bhubaneswar.
          </BioSection>

          <BioSection>
            <BioYear>2023 to present </BioYear>
            Working at Accenture.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I 💖
          </Heading>
          <Paragraph>
            Writing, Reading, Photography, Music, Gaming, Web Development
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/aradhana1807" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @aradhana1807
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/aradhana-nayak-607959212/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  aradhana nayak
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="mailto:aradhana.zero@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
                >
                  aradhana.zero@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
