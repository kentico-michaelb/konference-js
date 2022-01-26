import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Image from 'next/image'
import { ParsedUrlQuery } from "querystring"
import { Venue as VenueModel } from '../../models/Venue'
import Layout from "../../components/Layout"
import { buildCollectionUrl } from "../../lib/utils/urlHelper"
import styles from '../../styles/Home.module.css'
import { getItemsOfType } from "../../lib/api"
import VenueBlock from "../../components/VenueBlock"

interface IParams extends ParsedUrlQuery {
    collection: string
  }
  
  interface Props {
    venuesData:any
  }

  const VenuePage: NextPage<Props> = ({ venuesData }) => {
    const venue:VenueModel= venuesData[0]
    return (
        <Layout
        navigation={[]}
        >
            <div className={styles.container}>
            <Image 
              src={venue.elements.media.linkedItems[0].elements.asset.value[0].url}
              height={400}
              width={600}
              alt={venue.elements.media.linkedItems[0].elements.asset.value[0].description}
          />
                <VenueBlock 
                  heading="Event Venue"
                  venue={venue}
                  linkedItems={venuesData.linkedItems}
                />
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
      const data = await getItemsOfType<VenueModel>('venue', 6)
      const venuesData = data.items.filter(venue => venue.system.collection == collection)

      return {
        props:
          { 
            venuesData
          }
      }
    }
    
    export default VenuePage