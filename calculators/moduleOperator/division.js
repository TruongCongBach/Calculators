class Division {
    run(NumA, NumB) {
        if(NumB === 0) {
            throw Error ('cannot divide by zero');
        }
        return NumA / NumB;
    }
}

module.exports = Division;