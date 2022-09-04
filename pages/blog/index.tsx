import type { NextPage } from 'next'
import Container from "components/container"
import Hero from 'components/hero'

const Home: NextPage = () => {
    return (
        <Container>
            <Hero
                title="Blog"
                subtitle="Recent Posts"
            />
        </Container>
    )
}

export default Home
