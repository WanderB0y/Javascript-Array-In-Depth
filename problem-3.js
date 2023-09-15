let total = 0;
const arrGrades = [55,63,82,98,91,43];

for(let i = 0; i < arrGrades.length;i++){
    total += arrGrades[i];
    console.log(total)
}

console.log(`Total Avg = ${total/arrGrades.length}`)