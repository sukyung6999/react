/**
 * 1) npm init 하면 package.json이 생성됨
 * 2) package.json에서 
 *  "scripts": {
      "start": "node index.js" // npm start로 node index.js 인것처럼 작동하게 설정함
    },
 * 
 */

const randomColor = require('randomcolor');

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();
console.log(color1, color2, color3);