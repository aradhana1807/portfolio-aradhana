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
        <strong>Daily struggle blog</strong> is a fictional blog where you
        embark on the journey with Vincent and Charlie, as they accompany their
        humans through life's ups and downs, sharing in their daily struggles
        and triumphs.
      </P>

      <P>
        This blog is born out of my love for writing, shared with a dear friend.
        It's a space where we combine our creative passions to showcase the
        beauty of life's simple stories and the shared experiences of both
        humans and animals. Whether you're here to laugh, reflect, or find
        solace in relatable struggles, we hope you feel at home with us on this
        journey.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Astro.js</span>
        </ListItem>

        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://daily-struggle-blog.vercel.app/">
            https://daily-struggle-blog.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/aradhana1807/daily-struggle-blog-astro">
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
