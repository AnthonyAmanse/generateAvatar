function avatarAction(args) {
    const random_name = require("node-random-name")
    const minifig = require("minifig")
    svgString = "default";
    
    var promise = new Promise(function(resolve, reject) {
      minifig.makeSVG(function(stuff) {
        if (stuff) {
          svgString = stuff;
          resolve(stuff);
        }
        else {
          reject(stuff);
        }
      });
    });
    
    promise.then(function(result) {
      svgString = result;
    }, function(err) {
      console.log(err);
    });
  
    return { name: random_name(), image: svgString }
}

exports.main = avatarAction;
