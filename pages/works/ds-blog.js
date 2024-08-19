import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ds blog">
    <Container>
      <Title>
        Daily Struggle Blog <Badge>2024</Badge>
      </Title>
      <P>
        <strong>daily struggle Blog</strong> is a fictional blog where embark on
        the journey with Hikari and Cloud, as they accompany their humans
        through life's ups and downs, sharing in their daily struggles and
        triumphs.
      </P>

      <P>
        It also has features like comments and likes for users to interact.
        Users can also customize their profile.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, MongoDB</span>
        </ListItem>

        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://daily-struggle.onrender.com/">
            https://daily-struggle.onrender.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/aradhana1807/blog-mern">
            https://github.com/aradhana1807/blog-mern
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/contents/daily struggle.png"
        alt="Daily Struggle Blog"
      />
      <WorkImage
        src="/images/contents/daily struggle 1.png"
        alt="Daily Struggle Blog"
      />
    </Container>
  </Layout>
)

export default Work
