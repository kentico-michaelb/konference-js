import type { NextPage, GetStaticProps } from 'next'
import { WslRoot } from '../models/WslRoot'
import { getItem } from '../lib/api'
import { Page } from '../models/Page'
import Link from 'next/link'

interface Props {
    events:Array<Page>
}

const Landing: NextPage<Props> = ({ events }) => {

  return (
    <div>
    HOME
    <nav>
        <ul>
            {events.map(event => (
                <li key={event.system.id}>
                    <Link  href={event.elements.url.value}>
                        {event.elements.title.value}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {  
    
  // does this need to happen on every Page???
  // https://flaviocopes.com/nextjs-cache-data-globally/
  // refactor to JSON fs write function
  const root = await getItem<WslRoot>('root')

  const events = root.item.elements.subpages.linkedItems as Page[]
  
  return {
    props:
      { 
        events
      }
  }
}

export default Landing
