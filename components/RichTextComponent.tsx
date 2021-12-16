import parseHTML, { domToReact } from "html-react-parser";

const IMAGE_ID_ATTRIBUTE_IDENTIFIER = "data-image-id";
const LINKED_ITEM_ID_ATTRIBUTE_IDENTIFIER = "data-item-id";

function isLinkedItem(domNode: any) {
  return domNode.name === "object" && domNode.attribs?.type === "application/kenticocloud";
}

function isImage(domNode: any) {
  return domNode.name === "figure" && typeof domNode.attribs?.[IMAGE_ID_ATTRIBUTE_IDENTIFIER] !== "undefined";
}

function isLink(domNode: any) {
  return domNode.name === "a" && typeof domNode.attribs?.[LINKED_ITEM_ID_ATTRIBUTE_IDENTIFIER] !== "undefined";
}
// removed mappings
//function replaceNode(domNode, richTextElement, linkedItems, mappings, resolveLinkedItem, resolveImage, resolveLink, resolveDomNode) {
function replaceNode(domNode: any, richTextElement: any, linkedItems: any, resolveLinkedItem: any, resolveDomNode: any) {
  const { images, links } = richTextElement;
  if (resolveLinkedItem && linkedItems) {
    if (isLinkedItem(domNode)) {
        console.log('is linked item.')
      const codeName = domNode.attribs?.["data-codename"];
      const linkedItem = linkedItems[codeName];
      console.log(codeName)
      return resolveLinkedItem(linkedItem, domNode, domToReact);
    }
  }

//   if (resolveImage && images) {
//     if (isImage(domNode)) {
//       const imageId = domNode.attribs?.[IMAGE_ID_ATTRIBUTE_IDENTIFIER];
//       const image = images.find(image => image.imageId === imageId);
//       return resolveImage(image, domNode, domToReact);
//     }
//   }

//   if (resolveLink && links) {
//     if (isLink(domNode)) {
//       const linkId = domNode.attribs?.[LINKED_ITEM_ID_ATTRIBUTE_IDENTIFIER];
//       const link = links.find(link => link.linkId === linkId);
//       // removed mappings
//     //   return resolveLink(link, mappings, domNode, domToReact);
//       return resolveLink(link, domNode, domToReact);
//     }
//   }

  if (resolveDomNode) {
    return resolveDomNode(domNode, domToReact);
  }
}

//removed classname and mappings
//function RichTextComponent({ richTextElement, linkedItems, mappings, resolveLinkedItem, resolveImage, resolveLink, resolveDomNode, className }) {
function RichTextComponent({ 
    richTextElement, 
    linkedItems, 
    resolveLinkedItem, 
    resolveDomNode }: {
        richTextElement: any, 
        linkedItems: any, 
        resolveLinkedItem: any, 
        resolveDomNode: any 
    
    }) {
    const cleanedValue = richTextElement.value.replace(/(\n|\r)+/, "");
    const result = parseHTML(cleanedValue, {
    // replace: (domNode) => replaceNode(domNode, richTextElement, linkedItems, mappings, resolveLinkedItem, resolveImage, resolveLink, resolveDomNode),
    replace: (domNode) => replaceNode(domNode, richTextElement, linkedItems, resolveLinkedItem, resolveDomNode),
  });

  return (
    //<div className={className} > removed classname
    <div >
      {result}
    </div>
  );
}

export default RichTextComponent;