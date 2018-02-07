const modulee = require('../moduleOperator/index');
var Calculator = function () {
    this.operators = {
        '+' : new modulee.addition,
        '-' : new modulee.subtraction,
        '*' : new modulee.multiplication,
        '/' : new modulee.division
    };
    this.Addoperators = function (operatorsname, operator ) {
        this.operators[operatorsname] = operator;
        return this;
    };
    this.runn = function (operatorsname, NumA, NumB) {
        return this.operators[operatorsname].run(NumA, NumB);
    };
};
var calcule = new Calculator();

calcule
    .Addoperators('**', new modulee.double)
    .Addoperators('uscln', new modulee.uscln)
;

console.log('Sum',calcule.runn('+',2,3));
console.log(calcule.runn('-',9,3));
console.log(calcule.runn('*',2,3));
console.log(calcule.runn('**',2,3));
console.log('USCLN la',calcule.runn('uscln', 9, 27));
try {
    console.log(calcule.runn('/',2,0));
} catch (err) {
    console.log(err.toString());
}
