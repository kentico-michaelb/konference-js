import { WslRoot } from "../../models/WslRoot"
import { getItem } from "../api"
import { pagesByCollection } from "./urlHelper"

export async function getNavigation(collection:string){

    const root = await getItem<WslRoot>('root', 10).then(response => response.item)
    const navigationData = pagesByCollection(root, collection)

    return navigationData
}