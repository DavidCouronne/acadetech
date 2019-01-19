const contentful = require('contentful');
function generateConfig() {
  return {
    routes: () => {
      const client = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN
      });
      return client.getEntries({
        content_type: 'blogPost'
      }).then((response) => {
        return response.items.map(entry => {
          return {
            route: entry.fields.slug,
            payload: entry
          };
        });
      });
    }
  };
}
exports.generateConfig = generateConfig;
function markdownConfig() {
  return {
    injected: true,
    use: [
        '@mathssyfy/markdown-it-component',
        '@mathssyfy/markdown-it-highlightlines',
        '@mathssyfy/markdown-it-prewrapper',
        'markdown-it-emoji',
        'markdown-it-anchor',
        'markdown-it-table-of-contents',
        '@mathssyfy/markdown-it-linenumbers'
      ]
  };
}
exports.markdownConfig = markdownConfig;
