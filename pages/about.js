import { Container, Heading } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import P from "../components/paragraph"

const About = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h1" fontSize={20} mb={4} mt={4} fontWeight="bold">
                    About Me
                </Heading>

                <Section>
                    <P>
                        Hello! I am Aradhana, a passionate Software Engineer based in India.
                        I am currently working at Accenture as Application Development Associate
                    </P>
                </Section>

            </Container>
        </Layout>
    )
}

export default About