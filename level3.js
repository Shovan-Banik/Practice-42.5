const addFunction=(input,text)=>{
    const name=input.value;
    const title=text.innerText;
    localStorage.setItem(JSON.stringify(title),JSON.stringify(name));

}
const deleteFunction=(title)=>{
    // console.log(title);
    localStorage.removeItem('title');
}
document.getElementById('delete1').addEventListener('click',function(){
    const peraText=document.getElementById('pera1').innerText;
    deleteFunction(peraText);
    
});

document.getElementById('add1').addEventListener('click',function(){
    const inputName=document.getElementById('name');
    const peraText=document.getElementById('pera1');
    addFunction(inputName,peraText);
    inputName.value='';
})
document.getElementById('add2').addEventListener('click',function(){
    const inputName=document.getElementById('email');
    const peraText=document.getElementById('pera2');
    addFunction(inputName,peraText);
    inputName.value='';
})
document.getElementById('add3').addEventListener('click',function(){
    const inputName=document.getElementById('message');
    const peraText=document.getElementById('pera3');
    addFunction(inputName,peraText);
    inputName.value='';
})
// document.getElementById('delete1').addEventListener('click',function(){
//     const peraText=document.getElementById('pera1');
//     deleteFunction(peraText);
    
// })
