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
        <strong>Noter</strong> is a markdown note-taking app that helps you keep
        track of your notes efficiently. You can create, edit, and delete your
        notes. It's a lightweight and efficient tool.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, shadcn UI, Convex, Edgestore</span>
        </ListItem>

        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://marvelous-noter-app.vercel.app/">
            https://marvelous-noter-app.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/aradhana1807/noter">
            https://github.com/aradhana1807/noter
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/contents/Noter.png" alt="Noter" />
      <WorkImage src="/images/contents/noter-1.png" alt="Noter" />
    </Container>
  </Layout>
)

export default Work
