import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Frontend Platform Development">
    <Container>
      <Title>
        Frontend Platform Development <Badge>2024–Present</Badge>
      </Title>

      <P>
        As a Frontend Developer at <strong>Accenture</strong>, I worked on a
        large-scale frontend platform for a leading financial services
        organization. My role evolved from core frontend development to
        contributing across the stack, working on both UI and backend
        integrations within a micro frontend architecture.
      </P>

      <P>
        Alongside building user-facing features, I contributed to a shared
        component library developed in a separate repository. This library is
        published as an internal package and consumed across multiple
        applications, improving consistency and reducing duplication.
      </P>

      <P>
        I was also involved in backend development using NestJS, enabling
        end-to-end integration between micro frontends and Backend-for-Frontend
        (BFF) services.
      </P>

      <P>Key responsibilities:</P>
      <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
        <li>
          Developed and maintained micro frontend applications using Next.js and
          React in a scalable, modular architecture.
        </li>
        <li>
          Built reusable UI components and contributed to a shared component
          library distributed as an internal package.
        </li>
        <li>
          Implemented end-to-end API integration between frontend applications
          and BFF services using NestJS.
        </li>
        <li>
          Worked on backend enhancements and API handling to support frontend
          requirements.
        </li>
        <li>
          Wrote unit and integration tests using Vitest and improved overall
          test coverage.
        </li>
        <li>
          Actively handled defect resolution, release support, and ensured
          smooth delivery of features.
        </li>
        <li>
          Collaborated within an agile team, participating in sprint planning,
          stand-ups, and cross-team discussions.
        </li>
      </ul>

      <List my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js, React, TypeScript, Express + Node.js, Nest.js, Vitest
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
