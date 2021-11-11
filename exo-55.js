document.body.style.backgroundColor = 'red';
let span1= 5;
let span2=12;


let result= document.getElementById('result');
result.innerHTML = ( span1 === 5 && span2 === 12) ? (span1 + span2).toString() : (span2 - span1).toString();
result.style.fontSize= '5rem';


let p1= document.getElementById('p1')
if (-10 < 0) {
    p1.innerHTML = "Attention le résultat est inférieur à 0";
    p1.style.fontWeight= 'bold';
}



