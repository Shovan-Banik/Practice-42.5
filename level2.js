const increaseNumber=()=>{
    let field=document.getElementById('pera');
    let fieldValue=parseInt(field.innerText);
        let newValue=fieldValue+1;
        field.innerText=newValue;
        localStorage.setItem('result',JSON.stringify(newValue));
       // aziz();
}
window.onload=()=>{
    // increaseNumber();
    let last=localStorage.getItem('result');
    console.log(last);
   last?last=last:last = 0;
    document.getElementById('pera').innerText=last;
}
// const aziz=()=>{
//     // increaseNumber();
//     let last=localStorage.getItem('result');
//     console.log(last);
//    last?last=last:last=0;
//     document.getElementById('pera').innerText=last;
// }