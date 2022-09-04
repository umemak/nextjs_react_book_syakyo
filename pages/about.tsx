import type { NextPage } from 'next'
import Container from "components/container"
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'images/about.png'

const Home: NextPage = () => {
  return (
    <Container>
      <Hero
        title="About"
        subtitle="About development activities"
      />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout='responsive'
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder='blur'
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              段落１
            </p>
            <h2>ヘッダー</h2>
            <p>
              段落２
            </p>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}

export default Home
