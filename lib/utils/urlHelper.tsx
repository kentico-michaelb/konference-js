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