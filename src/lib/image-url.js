import clientConfig from "../../client-config";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(clientConfig.sanity);
console.log('client: ', clientConfig)
export function imageUrlFor(source) {
  return builder.image(source);
}