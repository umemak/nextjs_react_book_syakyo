import type { NextPage } from 'next'
import Meta from 'components/meta'
import Container from "components/container"
import Hero from 'components/hero'

const Home: NextPage = () => {
  return (
    <Container>
      <Meta />
      <Hero
        title="CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn
      />
    </Container>
  )
}

export default Home
