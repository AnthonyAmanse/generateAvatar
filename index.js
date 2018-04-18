function avatarAction(args) {
    const random_name = require("node-random-name")
    const minifig = require("minifig")
    svgString = "default";
    
    return new Promise(function(resolve, reject) {
      minifig.makeSVG(function(stuff) {
        if (stuff) {
          svgString = stuff;
          resolve({ name : random_name(), image: stuff});
        }
        else {
          reject(stuff);
        }
      });
    });
    
    // promise.then(function(result) {
      // svgString = result;
      // return { name: random_name(), image: svgString};
    // }, function(err) {
      // console.log(err);
    // });
  
    // return { name: random_name(), image: svgString }
}

exports.main = avatarAction;
