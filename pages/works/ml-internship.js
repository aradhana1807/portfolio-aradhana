import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
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
        prioritizes the top 20% of delinquent customers, automating collections
        for the remaining 80% of long-tail customers.
      </P>

      <P>
        As an intern at <strong>Highradius</strong>, I collaborated with the ML
        team to develop and deploy predictive models with 60-80% accuracy,
        improving the client's collection management efficiency.
      </P>

      <P>My key responsibilities included:</P>
      <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
        <li>
          Extracting and preprocessing data from the client's database to
          prepare it for model training.
        </li>
        <li>
          Developing and deploying multiple predictive models in a production
          environment to streamline the prediction process.
        </li>
        <li>
          Documenting the entire deployment process, including UI navigation for
          seamless integration, model training steps, and operational
          guidelines.
        </li>
      </ul>

      <List my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Pandas, Numpy, Scikit-learn, Tensorflow, Keras</span>
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
