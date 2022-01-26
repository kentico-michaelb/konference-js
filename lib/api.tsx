import { camelCasePropertyNameResolver, DeliveryClient, IContentItem } from "@kentico/kontent-delivery"

const client = new DeliveryClient({
    projectId: String(process.env.KONTENT_PROJECT_ID),
    previewApiKey: process.env.KONTENT_PREVIEW_API_KEY,
    propertyNameResolver: camelCasePropertyNameResolver, 
})

export async function getItem<T extends IContentItem>(
    codename: string, 
    depth: number = 1)
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

export async function getSpeakerSessions<T extends IContentItem>(
    speaker: string,
    depth: number, 
    )
    {
        return await client
        .items<T>()
        .type('session')
        .depthParameter(depth)
        .containsFilter('elements.speaker', [speaker])
        .orderByDescending('system.collection')
        .toPromise()
        .then(response => response.data)
    }

    export async function getItemBySlug<T extends IContentItem>(
        slug: string,
        type: string, 
        depth: number)
        {
        return await client
            .items<T>()
            .type(type)
            .equalsFilter('elements.slug', slug)
            .depthParameter(depth)
            .limitParameter(1)
            .toPromise()
            .then(response => response.data)
    }