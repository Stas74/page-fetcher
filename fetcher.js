const fs = require('fs');
const request = require('request');
// use fs.stat, or just use body.length since you want it in bytes anyway!

let input = process.argv.slice(2);
const url = input[0];
const path = input[1];

const total = () => {
  request(url, (error, response, body) => {
    fs.writeFile(path, body, err => {
      if (err) {
        console.error(err);
        return;
      }
      // file written successfully
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    });
  });
};

total();

/*
const fs = require('fs');
const request = require('request');

const content = 'Some content!'

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

request('http://www.example.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
*/