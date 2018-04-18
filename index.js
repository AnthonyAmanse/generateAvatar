function avatarAction(args) {
    const random_name = require("node-random-name")
    const minifig = require("minifig")
    
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
}

exports.main = avatarAction;
