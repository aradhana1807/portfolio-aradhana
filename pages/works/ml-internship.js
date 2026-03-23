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
        prioritizes the top 20% of delinquent customers while automating
        collections for the remaining 80% of long-tail accounts.
      </P>

      <P>
        During my internship at <strong>HighRadius</strong>, I collaborated with
        the Machine Learning team to develop and deploy predictive models
        achieving 60–75% accuracy, improving overall collection efficiency for
        enterprise clients.
      </P>

      <P>My key responsibilities included:</P>

      <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
        <li>
          Extracting and preprocessing data from client databases to prepare it
          for model training and analysis.
        </li>
        <li>
          Developing and deploying multiple predictive models in a production
          environment to streamline collection workflows.
        </li>
        <li>
          Documenting the end-to-end deployment process, including UI
          navigation, model training steps, and operational guidelines for
          seamless adoption.
        </li>
      </ul>

      <List my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Pandas, NumPy, Scikit-learn, TensorFlow, Keras</span>
        </ListItem>

        <ListItem>
          <Meta>Info</Meta>
          <Link href="https://www.highradius.com/software/order-to-cash/collections-management/">
            Collections Management Software
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
