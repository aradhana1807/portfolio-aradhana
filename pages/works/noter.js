import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Noter">
    <Container>
      <Title>
        Noter <Badge>2024</Badge>
      </Title>

      <P>
        <strong>Noter</strong> is a markdown-based note-taking application built
        with real-time data synchronization and a clean, minimal editing
        experience.
      </P>

      <P>
        Designed with a focus on performance and usability, it leverages Convex
        for backend state management and seamless data updates.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, shadcn UI, Convex</span>
        </ListItem>

        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://marvelous-noter-app.vercel.app/" isExternal>
            https://marvelous-noter-app.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/aradhana1807/noter" isExternal>
            https://github.com/aradhana1807/noter
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/contents/Noter.png" alt="Noter" />
    </Container>
  </Layout>
)

export default Work
