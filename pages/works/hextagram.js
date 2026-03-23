import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Hextagram">
    <Container>
      <Title>
        Hextagram <Badge>2024</Badge>
      </Title>

      <P>
        <strong>Hextagram</strong> is a social media application enabling users
        to create, share, like, and comment on posts in real time.
      </P>

      <P>
        It integrates Firebase for authentication and database management,
        supporting dynamic content updates and user interactions.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Firebase</span>
        </ListItem>

        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://hextagram.vercel.app/" isExternal>
            https://hextagram.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/aradhana1807/hextagram" isExternal>
            https://github.com/aradhana1807/hextagram
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/contents/hextagram.png" alt="Hextagram" />
    </Container>
  </Layout>
)

export default Work
