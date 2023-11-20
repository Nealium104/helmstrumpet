const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const buildHookUrl = process.env.NETLIFY_BUILD_HOOK_URL;

  try {
    await fetch(buildHookUrl, { method: "POST" });
    return { statusCode: 200, body: "Build triggered successfully" };
  } catch (error) {
    return { statusCode: 500, body: "Failed to trigger build" };
  }
};
