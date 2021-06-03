const request = require("request");
const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        //console.log("error:", error); // Print the error if one occurred
        return callback(error, null);
      } else {
        //console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
        //console.log(`body`, body);
        const data = JSON.parse(body);
        //console.log("data :>> ", data.trim());
        
        if (
          body == undefined ||
          body == null ||
          body == "[]" ||
          body == []
        ) {
          return callback(null, null);
        }
        return callback(null, data[0].description);
        // if (body !== "[]") {
        //   //console.log(typeof body);
        //   //console.log("body:", body); // Print the HTML for the Google homepage.
        //   const data = JSON.parse(body);
        //   return callback(null, data[0].description);
        //   //console.log(typeof data);
        //   //console.log(process.argv[2]);
        // }
      }
    }
  );
};
module.exports = { fetchBreedDescription };
