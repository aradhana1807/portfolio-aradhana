import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Project Gallery">
    <Container>
      <Title>
        Project Gallery <Badge>2024</Badge>
      </Title>

      <P>
        <strong>Project Gallery</strong> is a collection of personal projects.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js</span>
        </ListItem>

        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://re-myproject-gallery.vercel.app/" isExternal>
            https://re-myproject-gallery.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>GitHub</Meta>
          <Link
            href="https://github.com/aradhana1807/project-gallery-nextjs"
            isExternal
          >
            https://github.com/aradhana1807/project-gallery-nextjs
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/contents/project-gallery-1.png" alt="Project" />
    </Container>
  </Layout>
)

export default Work
