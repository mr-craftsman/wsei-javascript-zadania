function distFromAverage(table){
        let sum = 0;
        let newTable = [];
        for (i=1; i < table.length; i++){
            sum = sum + table[i];
            console.log(sum)
        }
        sum = sum/table.length;
        table.ForEach(piece => {
            newTable.push(piece-sum);
        })

        return(newTable);

}

let table = [1,2,3,4,5,6,7]

distFromAverage(table);