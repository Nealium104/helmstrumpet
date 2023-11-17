import { client } from "./contentful";

exports.handler = async (event) => {
  const { queryStringParameters } = event;
  const contentType = queryStringParameters["content_type"];
  try {
    const entries = await client.getEntries({
      content_type: contentType,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(entries.items),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
