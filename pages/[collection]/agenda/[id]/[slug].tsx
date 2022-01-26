import { Responses } from '@kentico/kontent-delivery'
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Layout from '../../../../components/Layout'
import SessionDetail from '../../../../components/SessionDetail'
import { getItemBySlug, getItemsOfType } from '../../../../lib/api'
import { Session as SessionModel } from '../../../../models/Session'
import styles from '../../../../styles/Home.module.css'


//https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript
interface IParams extends ParsedUrlQuery {
    slug: string
}

interface Props {
  data: Responses.IListContentItemsResponse<SessionModel>
}

const SessionPage: NextPage<Props> = ({ data }) => {
  const session = data.items[0]

  return (
    <Layout
      navigation={[]}
    >
        <div className={styles.container}>
          <SessionDetail 
            name={session.elements.name.value}
            presentations={session.elements.presentation.linkedItems}
            speakers={session.elements.speaker.linkedItems}
            dateTimeFromDateTime={session.elements.dateTimeFromDateTime.value}
            dateTimeToDateTime={session.elements.dateTimeToDateTime.value}
            sessionId={session.system.id}
            location={session.elements.location.linkedItems[0]}
            linkedItems={data.linkedItems}
          />
        </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const sessions = await getItemsOfType<SessionModel>('session', 6)
    const paths = sessions.items.map((session) => (
        {
            params: {
              collection: session.system.collection,
              id: session.system.id,
              slug: session.elements.slug.value
            },
        }
        ))

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams

  //slug is not unique-enforced. This could be a problem
  const data = await getItemBySlug<SessionModel>(slug, 'session', 6) 
  
  return {
    props:
      { 
        data
      }
  }
}

export default SessionPage
