// function getsum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum +=i;
//     }
//     return sum;
// }
// getsum(88);
// getsum(9);

const student={
    name: "Aman",
    age: 23,
    eng: 93,
    math: 22,
    phy: 91,
    getAvg(){
        let avg=(this.eng + this.math+this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}