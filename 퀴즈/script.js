var btn = document.getElementById('btn');
var div = document.getElementById('div');
var a;
var b;

let score = 0;
function rand(a,b) {
    return Math.floor(Math.random()*(b-a+1))+a
}
btn.addEventListener('click', function () {
    const answer = document.getElementById('answer').value;
    if(a+b == answer){
        score ++;
    }
    console.log(a,b,answer)
    a = rand(1,10)
    b = rand(1,10)
    div.innerText = `${a}+${b}=?`
    
    document.getElementById('score').innerHTML= `점수: ${score}점`;
})