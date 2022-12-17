// var run = document.getElementById("button");
// var hours = 0
// var minuts = 0
// var seconds = 0
// function hourValue() {
//     var a1=document.getElementById("hour")
//     var a2=document.getElementById("minut")
//     var a3=document.getElementById("second")
//     hours += +a1.value;
//     minuts += +a2.value;
//     seconds += +a3.value;
//     var num = hours * 3600 + minuts * 60 + seconds
//     console.log(num)
//     var timeInterval = setInterval(function () {
//         var last =(num-(num%3600))/3600
//         a3.value=num%3600
//         num--;
// a1.value=num/3600;
// a2.value=(num/60)%60;
// a3.value=num%60;
//         if (num <1 ){
//             clearInterval(timeInterval)
//         }
//     }, 1000)
// }
// run.addEventListener("click", hourValue)



//2 chanse
// var but = document.getElementById("button");
// var hour = document.getElementById("hour");
// var minut = document.getElementById("minut");
// var second = document.getElementById("second");
// var colForMinut = 0;
// function timer() {
//     var hourValue = +hour.value;
//     console.log("hours=" + hourValue);
//     var minutValue = +minut.value;
//     console.log("minuts=" + minutValue);;
//     var secondValue = +second.value;
//     console.log("seconds=" + secondValue);
//     var timeInterval = setInterval(function () {
//         secondValue--;
//         second.value = secondValue;
//         colForMinut++;
        
//         if (minutValue<=1){
//             hour.value= hourValue-=1;
//             minutValue+=60;
//         }
//         if (secondValue<=1){
//             minut.value= minutValue-=1;
//             secondValue+=60;
//         }
//         if (secondValue <1 ){
//             clearInterval(timeInterval);
//         }
//     }, 1000)
// }
// but.addEventListener("click", timer)


var but = document.getElementById("button");
var but2 = document.getElementById("stop");
var but3 = document.getElementById("reset");
var a1 = document.getElementById("hour");
var a2 = document.getElementById("minut");
var a3 = document.getElementById("second");
function timer(){
    var hours = +a1.value;
    var minuts = +a2.value;
    var seconds = +a3.value;
    var col=(hours*3600)+(minuts*60)+seconds;
    var timeInterval =setInterval(function(){
        col--;    
        console.log(col);
        a3.value=col%60;
        var f=(col%3600);
        a2.value=(f-(f%60))/60
        a1.value=(col-(col%3600))/3600
        but3.addEventListener("click",function (){
            clearInterval(timeInterval);
            a1.value=""
            a2.value=""
            a3.value=""
        })
        but2.addEventListener("click",function (){
            clearInterval(timeInterval);
        })
        if (col<=0){
            alert("finish")
            clearInterval(timeInterval)
        }
    },1000)
}
but.addEventListener("click",timer);