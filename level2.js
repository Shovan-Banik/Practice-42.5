const increaseNumber=()=>{
    let field=document.getElementById('pera');
    let fieldValue=parseInt(field.innerText);
    
    let box=JSON.parse(localStorage.getItem('result')) || [];
        let newValue=fieldValue+1;
        field.innerText=newValue;
        box.push(newValue);
        localStorage.setItem('result',JSON.stringify(box));
        
        let stored=localStorage.getItem('result');
        let max=JSON.parse(stored);
        let maximum=max[max.length-1];
        console.log(maximum);

        field.innerText=maximum;
}
