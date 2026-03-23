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
        <strong>Daily struggle blog</strong> a fictional space where you step
        into the lives of Vincent and Charlie—two companions who walk alongside
        their humans through the quiet battles and loud chaos of everyday life.
        Through their journey, the ordinary becomes meaningful, and the
        unnoticed emotions find a voice.
      </P>

      <P>
        This blog is born out of my love for writing, and it is something I’ve
        built together with my best friend. What started as simple thoughts and
        stories slowly grew into a world of its own—one where feelings,
        struggles, and small moments are explored with honesty and warmth.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Astro.js</span>
        </ListItem>

        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://daily-struggle-blog.vercel.app/" isExternal>
            https://daily-struggle-blog.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>GitHub</Meta>
          <Link
            href="https://github.com/aradhana1807/daily-struggle-blog-astro"
            isExternal
          >
            https://github.com/aradhana1807/daily-struggle-blog-astro
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/contents/daily-struggle-blog1.png" alt="blog1" />
      <WorkImage src="/images/contents/daily-struggle-blog2.png" alt="blog2" />
      <WorkImage src="/images/contents/daily-struggle-blog3.png" alt="blog3" />
      <WorkImage src="/images/contents/daily-struggle-blog4.png" alt="blog4" />
      <WorkImage src="/images/contents/daily-struggle-blog5.png" alt="blog5" />
    </Container>
  </Layout>
)

export default Work
