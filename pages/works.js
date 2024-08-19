import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNoter from '../public/images/contents/Noter.png'
import thumbDS from '../public/images/contents/daily struggle.png'
import thumbProjectGallery from '../public/images/contents/project-gallery-2.png'
import thumbHextagram from '../public/images/contents/hextagram.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} mt={4} fontWeight="bold">
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="noter" title="Noter" thumbnail={thumbNoter}>
              A markdown based note taking app.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="ds-blog"
              title="daily struggle Blog"
              thumbnail={thumbDS}
            >
              A fictional blog.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="project-gallery"
              title="Project Gallery"
              thumbnail={thumbProjectGallery}
            >
              An app for curated personal projects.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="hextagram"
              title="Hextagram"
              thumbnail={thumbHextagram}
            >
              A social media app.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
