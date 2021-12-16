
//from https://github.com/Kentico/kontent-starter-corporate-next-js/blob/main/components/RichText.js
// TODO: instal libraries, implement RichTextComponent from sample
import { ContentItemType } from '@kentico/kontent-delivery';
import Image from 'next/image'
import Link from 'next/link'
import RichTextComponent from "./RichTextComponent"

export default function RichText({
    richTextElement,
    linkedItems
}: {
    richTextElement: any
    linkedItems: any
}) {
//   const richTextElement = get(props, "richTextElement", "");
//   const linkedItems = get(props, "data.page.linkedItems", []);
  
  //const mappings = get(props, "mappings");


  return (
    <RichTextComponent
      richTextElement={richTextElement}
      linkedItems={linkedItems}
      //mappings={mappings}
      resolveLinkedItem={(linkedItem:any, domNode:any, domToReact:any) => {
        // TODO: extract switch statements to a helper
          switch (linkedItem.system.type) {
            case 'media':
              if(linkedItem.elements.type.value[0].codename == 'image'){
                return (
                  <Image 
                    src={linkedItem.elements.asset.value[0].url} 
                    height={200} 
                    width={200}
                    alt={linkedItem.elements.name.value}
                    />
                );
            }
            default:
              return domToReact([domNode]);
          }
      }}
    //   resolveImage={(image, _domNode, _domToReact) => {
    //     return (
    //       <div>
    //           Image
    //       </div>
    //     );
    //   }}
      // removed "mappings" for now
      //resolveLink={(link, mappings, domNode, domToReact) => {
    //     resolveLink={(link, domNode, domToReact) => {
    //     //const url = getUrlFromMapping(mappings, link.codename);
    //     const url = "/test"
    //     if (url) {
    //       return (
    //         <Link href={url}> 
    //             {domToReact(domNode.children)}
    //          </Link>
    //       );
    //     }
    //     else {
    //       return (
    //         <del>{domToReact([domNode])}</del>
    //       );
    //     }
    //   }}
      resolveDomNode={(domNode:any, _domToReact:any) => {
        return domNode;
      }}
    />
  );
}