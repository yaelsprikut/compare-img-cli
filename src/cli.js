const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const img1 = PNG.sync.read(fs.readFileSync('images/image1.png'));
const img2 = PNG.sync.read(fs.readFileSync('images/image1.png'));
const {width, height} = img1;
const diff = new PNG({width, height});
 
pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {threshold: 0.1});
 
fs.writeFileSync('diff.png', PNG.sync.write(diff));

export function cli(args) {
    console.log("PIXLEMATCH INFO");
    console.log("diff: ", width, height);
    console.log(args);
}