import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import VenueBlock from '../../components/VenueBlock'
import { getItem } from '../../lib/api'
import { Event } from "../../models/Event"
import SponsorBlock from '../../components/SponsorsBlock'
import RichText from '../../components/RichText'
import { Venue } from '../../models/Venue'
import { Sponsor } from '../../models/Sponsor'
import styles from '../../styles/Home.module.css'
import { ParsedUrlQuery } from 'querystring'
import { buildCollectionUrl } from '../../lib/utils/urlHelper'

//https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript
interface IParams extends ParsedUrlQuery {
  collection: string
}

interface Props {
  eventData: any
}

const Home: NextPage<Props> = ({ eventData }) => {

  const event: Event = eventData.item
  const hero_image = event.elements.heroImage.linkedItems[0].elements.asset.value[0].url

  const venue = event.elements.venue.linkedItems[0] as Venue
  const sponsors = event.elements.sponsors.linkedItems as Array<Sponsor>
  const linkedItems = eventData.linkedItems

  return (
    <Layout home>
    <div className={styles.container}>
      {/* HERO UNIT */}
      <Hero 
        title={event.elements.title.value}
        image={hero_image}
        dateFrom={event.elements.dateTimeFromDateTime.value}
        dateTo={event.elements.dateTimeToDateTime.value}
        location={event.elements.venue.linkedItems[0].elements.name.value}
      />

      {/* EVENT DESCRIPTION BLOCK */}
        <RichText 
          richTextElement={event.elements.description}
          linkedItems={linkedItems}
        />

      {/* VENUE BLOCK */}
      <VenueBlock 
        heading="Event Venue" 
        venue={venue}
        linkedItems={linkedItems}
      />

    {/* SPONSOR BLOCK */}
      <SponsorBlock 
        heading="Sponsors"
        sponsors={sponsors}
      />
    </div>
    </Layout>
  )
}

// does this have to be repeated at every level in the nav hierarchy??
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = buildCollectionUrl()
  return {
      paths: paths,
      fallback: false
  }
}


export const getStaticProps: GetStaticProps = async (context) => {
  const { collection } = context.params as IParams
  const eventData = await getItem<Event>(collection, 6)
  return {
    props:
      { eventData }
  }
}

export default Home
