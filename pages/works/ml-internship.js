import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Collection Management">
    <Container>
      <Title>
        Collection Management <Badge>2022</Badge>
      </Title>

      <P>
        <strong>Collection Management</strong> is an AI-powered worklist that
        prioritizes the top 20% of delinquent customers.
      </P>

      <P>
        As an intern at <strong>Highradius</strong>, I collaborated with the ML
        team to develop predictive models.
      </P>

      <List my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Pandas, Numpy, Scikit-learn</span>
        </ListItem>

        <ListItem>
          <Meta>Info</Meta>
          <Link
            href="https://www.highradius.com/software/order-to-cash/collections-management/"
            isExternal
          >
            Collections Management Software
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
