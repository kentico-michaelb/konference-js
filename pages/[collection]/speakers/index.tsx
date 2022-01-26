import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../../components/Layout'
import { getItemsOfType } from '../../../lib/api'
import styles from '../../../styles/Home.module.css'
import { ParsedUrlQuery } from 'querystring'
import { buildCollectionUrl } from '../../../lib/utils/urlHelper'
import { Session } from '../../../models/Session'
import { Speaker as SpeakerModel } from '../../../models/Speaker'
import Speaker from '../../../components/Speaker'

//https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript
interface IParams extends ParsedUrlQuery {
  collection: string
}

interface Props {
  speakers: SpeakerModel[]
}

const SpeakersPage: NextPage<Props> = ({ speakers }) => {
  return (
    <Layout
    navigation={[]}>
    <div className={styles.container}>

      {speakers.map(speaker => (
        <div key={speaker.system.id}>
          <Speaker
            media={speaker.elements.media.linkedItems}
            firstName={speaker.elements.firstName.value}
            jobTitle={speaker.elements.jobTitle.value}
            lastName={speaker.elements.lastName.value}
            speakerId={speaker.system.id}
          />
        </div>

      ))}

    </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = buildCollectionUrl()
  return {
      paths: paths,
      fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { collection } = context.params as IParams
  const data = await getItemsOfType<Session>('session', 6)
  const sessions = data.items.filter(session => session.system.collection == collection && session.elements.speaker.linkedItems.length > 0)

  //handles multiple speakers per session
  let speakersData = sessions.map(session => session.elements.speaker.linkedItems).flat()

  //ensures uniqueness
  let speakers = [...new Set(speakersData)]

  return {
    props:
      { 
        speakers
      }
  }
}

export default SpeakersPage
