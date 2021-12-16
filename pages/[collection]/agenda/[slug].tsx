
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Layout from '../../../components/Layout'
import SessionDetail from '../../../components/SessionDetail'
import { getItem, getItemsOfType } from '../../../lib/api'
import { Session as SessionModel } from '../../../models/Session'
import styles from '../../../styles/Home.module.css'


//https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript
interface IParams extends ParsedUrlQuery {
    slug: string
}

interface Props {
  data: any
}

const SessionPage: NextPage<Props> = ({ data }) => {
  const session: SessionModel = data.item
  return (
    <Layout>
        <div className={styles.container}>
        {/* SECTION */}
        <SessionDetail 
          name={session.elements.name.value}
          presentations={session.elements.presentation.linkedItems}
          speakers={session.elements.speaker.linkedItems}
          dateTimeFromDateTime={session.elements.dateTimeFromDateTime.value}
          dateTimeToDateTime={session.elements.dateTimeToDateTime.value}
          sessionId={session.system.id}
          location={session.elements.location.linkedItems[0]}
        />
        </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    //get paths from Kontent (using codename until TODO: pages w/ slugs implemented)
    const data = await getItemsOfType<SessionModel>('session', 6)

    const paths = data.items.map((session) => (
        {
            params: {
              collection: session.system.collection,
              slug: session.system.codename
            },
        }
        ))
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug, collection } = context.params as IParams
  const data = await getItem<SessionModel>(slug, 6)
  
  return {
    props:
      { 
        data
      }
  }
}

export default SessionPage
