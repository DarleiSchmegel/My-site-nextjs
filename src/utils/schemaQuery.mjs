import * as fs from 'fs';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();
const repoId = 'my-website-darlei';

fetch(`https://${process.env.PRISMIC_REPO_NAME}.cdn.prismic.io/api`, {
  headers: {
    Authorization: `Bearer ${process.env.PRISMIC_ACCESSES_TOKEN}`,
  },
})
  .then((r) => r.json())
  .then((data) => {
    console.log(data)
    const ref = data.refs.find((r) => r.id === 'master');
    if (!ref) return;
    fetch(
      `https://${repoId}.cdn.prismic.io/graphql?query=%7B%20__schema%20%7B%20types%20%7B%20kind%20name%20possibleTypes%20%7B%20name%20%7D%20%7D%20%7D%20%7D`,
      {
        headers: {
          'prismic-ref': ref.ref,
          Authorization: `Bearer ${process.env.PRISMIC_ACCESSES_TOKEN}`,
        },
      },
    )
      .then((result) => result.json())
      .then((result) => {
        console.log("result", result)
        const filteredResults = result;
        const filteredData = result.data.__schema.types.filter(
          (type) => type.possibleTypes !== null,
        );
        filteredResults.data.__schema.types = filteredData;
        fs.writeFileSync(
          './src/utils/fragmentTypes.json',
          JSON.stringify(filteredResults.data),
          (err) => {
            if (err) {
              console.error('Error writing fragmentTypes file', err);
            } else {
              console.log('Fragment types successfully extracted!');
            }
          },
        );
      });
  });
