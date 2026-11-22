const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let product = ["хлеб","молоко","сыр"];

console.log("=== Товары ===")
console.log(product);
console.log("1 - добавить, 2 - удалить, 3 - показать, 0 - выход")




rl.on('line', (input) =>{
switch(input) {
    case"0":
        console.log("gjrf!");
        rl.close();
        break;
    case "1":
        rl.question("новый товар: ", (item) =>{
            product.push(item);
            console.log(product);   
        })    
    case "2":
        console.log(product);
        break;
    case "3":
        rl.question("номер для удаления: ", (num) => {
            let idx = Number (num) ;
            product.splice(idx, 1);
            console.log(product);
        });
    case "4":
        rl.question("Номер для выведения", (num) => {
            let idx = Number(num) -1;
            
            console.log(product[idx]);
        })
        break;

    default:
        console.log("не понял")
}})

console.log("Пиши что угодно(слово 'стоп' ---выход)")
rl.on ('line', (input) =>{
    if (input === "стоп") {
        console.log("пока!");
        rl.close();
    }
    else {
        console.log("ns yfgbcfk:", input);
    }
})




