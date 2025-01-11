import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Workforce Summary">
    <Container>
      <Title>
        Workforce Summary <Badge>2024</Badge>
      </Title>
      <P>
        <strong>Workforce Summary</strong> is a Power BI dashboard,
        providing an overview of staff availability across the company,
        displaying the count of available team members at any given time. It
        helps to quickly assess workforce availability, ensuring efficient
        resource allocation and streamlined project management.
      </P>

      <P>
        I developed this dashboard while working at <strong>Accenture</strong>{' '}
        for monitoring internal staff availability for various projects. The
        goal was to provide real-time visibility into workforce availability to
        ensure optimal resource allocation across departments.
      </P>

      <P>
        My role involved designing the Power BI dashboard, integrating internal
        data sources, and creating a user-friendly interface for team leads and
        managers to track staff availability.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Microsoft Power BI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/contents/PowerBI1.png" alt="powerbi-1" />
      <WorkImage src="/images/contents/PowerBI2.png" alt="powerbi-2" />
      <WorkImage src="/images/contents/PowerBI3.png" alt="powerbi-3" />

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Note</Meta>
          <span>
            The dashboard shown is a simplified mockup of the actual dashboard
            and is not the final version. Mock data has been used for
            demonstration purposes.
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
