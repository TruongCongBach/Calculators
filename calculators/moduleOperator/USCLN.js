class USCLN {
    run(NumA, NumB) {
        if(NumA < 0)
            NumA = -NumA;
        if(NumB < 0)
            NumB = -NumB;
        if (NumA === 0 && b === 0)
           return 'Khong co uoc so chung lon nhat';
        else
        {
            while (NumA!== 0 && NumB!== 0)
            {
                if(NumA > NumB)
                    NumA = NumA%NumB;
                else
                    NumB = NumB%NumA;
            }
            if (NumA === 0)
                return NumB;
            else
                return NumA;
        }
    }
}
module.exports = USCLN;
