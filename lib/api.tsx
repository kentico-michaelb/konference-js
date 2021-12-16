import { camelCasePropertyNameResolver, DeliveryClient, IContentItem } from "@kentico/kontent-delivery"

const client = new DeliveryClient({
    projectId: String(process.env.KONTENT_PROJECT_ID),
    previewApiKey: process.env.KONTENT_PREVIEW_API_KEY,
    propertyNameResolver: camelCasePropertyNameResolver, 
})

//TODO: Need to make colelction dynamic
//TODO: analyze what appropriate depth would be
export async function getItem<T extends IContentItem>(
    codename: string, 
    depth: number)
    {
    return await client
        .item<T>(codename)
        .depthParameter(depth)
        .toPromise()
        .then(response => response.data)
}

export async function getItemsOfType<T extends IContentItem>(
    type: string,
    depth: number, 
    )
    {
        return await client
        .items<T>()
        .type(type)
        .depthParameter(depth)
        .toPromise()
        .then(response => response.data)
}