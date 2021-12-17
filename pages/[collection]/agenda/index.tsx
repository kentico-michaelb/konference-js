import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../../components/Layout'
import { getItemsOfType } from '../../../lib/api'
import styles from '../../../styles/Home.module.css'
import Agenda from '../../../components/Agenda'
import { Agenda as AgendaModel } from '../../../models/Agenda'
import { ParsedUrlQuery } from 'querystring'
import { buildCollectionUrl } from '../../../lib/utils/urlHelper'

//https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript
interface IParams extends ParsedUrlQuery {
  collection: string
}

interface Props {
  agendas: AgendaModel[]
}

const AgendaPage: NextPage<Props> = ({ agendas }) => {
  return (
    <Layout>
    <div className={styles.container}>

      {agendas.map(agenda => (
        <div key={agenda.system.id}>
          <Agenda
            name={agenda.elements.name.value}
            sessions={agenda.elements.sessions.linkedItems}
            agendaId={agenda.system.id}
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
  const data = await getItemsOfType<AgendaModel>('agenda', 6)
  const agendas = data.items.filter(agenda => agenda.system.collection == collection)
  return {
    props:
      { 
        agendas
      }
  }
}

export default AgendaPage
