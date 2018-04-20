function avatarAction(args) {
    const totro = require("totro")
    const minifig = require("minifig")
    
    return new Promise(function(resolve, reject) {
      minifig.makeSVG(function(stuff) {
        if (stuff) {
          svgString = stuff;
          fullname = totro.RandomName(2,5) + " " + totro.RandomName(6,8);
          resolve({ name : fullname, image: stuff});
        }
        else {
          reject(stuff);
        }
      });
    });
    
}

exports.main = avatarAction;
