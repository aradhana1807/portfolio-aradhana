import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Scalable Micro Frontend">
        <Container>
            <Title>
                Scalable Micro Frontend <Badge>2025</Badge>
            </Title>

            <P>
                In this project, I worked closely with the client to understand their requirements and goals. As a Junior React Developer at <strong>Accenture</strong>, I collaborated with a cross-functional team to design, develop, and deploy <strong>micro frontend</strong> solutions.
            </P>

            <P>
                The primary focus was on ensuring the scalability, performance, and maintainability of the micro frontend architecture, while following best practices for modularity and integration.
            </P>

            <P>My key responsibilities included:</P>
            <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
                <li>
                    Building and developing micro frontend components using Next.js to be integrated to the client's existing web application.
                </li>
                <li>
                    Writing unit and integration tests to ensure the stability and reliability of the micro frontend components.
                </li>
                <li>
                    Collaborating with the agile team, actively participating in daily stand-ups, sprint planning, and maintaining an organized Jira board.
                </li>
            </ul>


            <List my={4}>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Next.js, React, Typescript, Ethos CSS, Vitest</span>
                </ListItem>
            </List>
        </Container>
    </Layout>
)

export default Work
