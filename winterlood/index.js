/**
 * GUI: Graphic User Interface
 * CLI: Command Line Interface
 */

/**
 * terminal로 node 실행하는 명령어
 * (단, 파일이 위치한 곳으로 cd해야함)
 * node 파일명
 */
const calc = require('./calc');

console.log(calc);
console.log(calc.add(1,2));
console.log(calc.sub(5,2));