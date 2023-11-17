import contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
});
