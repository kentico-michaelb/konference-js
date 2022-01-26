import { Page } from "../../models/Page"
import { WslRoot } from "../../models/WslRoot"
import { NavParams } from "../../models/NavParams"

export function buildCollectionUrl(){
    let collections
    if (process.env.KONTENT_COLLECTIONS !== undefined){
        collections = process.env.KONTENT_COLLECTIONS.split(",")
    }
    // TODO:  better catching logic for this -- maybe auto 404?
    else {
        collections = ['denver']
    }
        const paths = collections.map((collection) => (
            {
                params: {collection},
            }
            ))
    return paths
}

export function pagesByCollection(root:WslRoot, collection:string) {
    const subpages = root.elements.subpages.linkedItems
    const navigationData = subpages.filter(page => page.system.collection === collection) as Array<Page>

    const paths = new Array<NavParams>()

    let eventPageUrl = navigationData[0].elements.url.value

    const eventParams:NavParams = {
        params: {
            slug: eventPageUrl,
            page: navigationData[0]
        }
    }

    paths.push(eventParams)

    navigationData.map(page => {
        // agenda, venue, sponsors, speakers
        if(page.elements.subpages.linkedItems){
            getContentUrlsRecursive(page.elements.subpages.linkedItems as Array<Page>, paths, eventPageUrl)
        }
    })

    return paths
}
//TODO: handle "content" if flagged as listing page
function getContentUrlsRecursive (items: Array<Page>, paths: Array<NavParams>, parents?: string) { 
    items.map(item =>  {
        let pageUrl = item.elements.url.value
        if(parents){
           pageUrl =  parents.concat(`/${pageUrl}`)
        }

        const pageParams:NavParams = {
            params: {
                slug: pageUrl,
                page: item
            }
        }

        paths.push(pageParams)

       if(item.elements.subpages.linkedItems.length > 0){
        const subpages = item.elements.subpages.linkedItems as Array<Page>
        getContentUrlsRecursive(subpages, paths, pageUrl)
       }
    })
}
