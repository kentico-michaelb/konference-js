import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/Layout'
import { getItemsOfType, getItem, getSpeakerSessions } from '../../lib/api'
import styles from '../../styles/Home.module.css'
import { ParsedUrlQuery } from 'querystring'
import { Speaker as SpeakerModel } from '../../models/Speaker'
import SpeakerDetail from '../../components/SpeakerDetail'
import { Session } from '../../models/Session'

//https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript
interface IParams extends ParsedUrlQuery {
    speaker: string
}

interface Props {
    data: any
    sessionData: any
}

const SpeakerPage: NextPage<Props> = ({ data, sessionData }) => {
    const speaker:SpeakerModel = data.item
    const speakerSessions:Array<Session> = sessionData.items
    return (
        <Layout
        navigation={[]}>
        <div className={styles.container}>
            <SpeakerDetail 
                bio={speaker.elements.bio}
                media={speaker.elements.media.linkedItems}
                journeyStage={speaker.elements.journeyStage}
                firstName={speaker.elements.firstName.value}
                lastName={speaker.elements.lastName.value}
                jobTitle={speaker.elements.jobTitle.value}
                speakerId={speaker.system.id}
                sessions={speakerSessions}
            />
        </div>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    //get paths from Kontent (using codename until TODO: pages w/ slugs implemented)
    const data = await getItemsOfType<SpeakerModel>('speaker', 6)

    const paths = data.items.map((speaker) => (
        {
            params: {
              speaker: speaker.system.codename
              
            },
        }
        ))
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { speaker } = context.params as IParams
  const data = await getItem<SpeakerModel>(speaker, 1)
  const sessionData = await getSpeakerSessions(speaker, 2)
  
  return {
    props:
      { 
        data,
        sessionData
      }
  }
}

export default SpeakerPage