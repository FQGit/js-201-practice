var BMI = {
    height: 180,
    weight: 100,
    getBMI: function(){
        return this.weight/(Math.pow(this.height/100,2));
    },
    getAdvice: function () {
    var a = this.getBMI(this.height,this.weight);
    //var a = 36;
    switch(true){
        case a >= 35 :
            return '重胖'
        case a > 30 :
            return '中胖'
        case a > 27 :
            return '輕胖'
        case a > 24 :
            return '過重'
        case a > 18.5 :
            return '中等'
        case a <18.5 :
            return '風吹就飛走'
        default:
            return 'ERR'
        }
    }
}
var MyBMI = Object.create(BMI);
MyBMI.height = 200;
MyBMI.weight = 150;
console.log(MyBMI.getAdvice());
console.log(MyBMI.getBMI());
