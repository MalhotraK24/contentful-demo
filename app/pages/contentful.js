'use strict'

const contentful = require('contentful');

const SPACE_ID = 'yzv6k9csp5ed';
const ACCESS_TOKEN = 'SEiOkbOFmibKerSLTNMc9oUrVY2dQ6kXsEOVwXQjneQ';

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

const getQuestions = async () => {
  let data = { questions: [] };
  const entries = await client.getEntries({content_type: 'questions'});
  if( entries && entries.total > 0 ) {
    entries.items.forEach(function (entry) {
      data.questions.push([entry.sys.id, entry.fields]);
    })
    // console.log('Data', data);
  }
  return data;
}

module.exports = { getQuestions };
