const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`,
    (error, response, body) => {
      if (error) {
        console.log("error:", error); // Print the error if one occurred
      }
      //console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      else {
        if (body !== "[]") {
          // console.log(typeof body);
          //console.log("body:", body); // Print the HTML for the Google homepage.
          return JSON.parse(body);
          //console.log(data);
          //console.log(typeof data);
          //console.log(process.argv[2]);
        }
      }
    }
  );
};

module.exports = { fetchBreedDescription };
