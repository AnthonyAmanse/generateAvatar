function avatarAction(args) {
    const random_name = require("node-random-name")
    svgString = "default";
    getImage(function(result) {
      return { name: random_name(), image: result }
    }
}

function getImage(callback) {
    const minifig = require("minifig")
    minifig.makeSVG(function(stuff) {
      callback(stuff);
    }
}    

exports.main = avatarAction;
