localStorage.clear();
localStorage.setItem('name','sakib Khan');
localStorage.setItem('age','40');
const item1=localStorage.getItem('name');
const item2=localStorage.getItem('age');
// console.log(item1,item2);
localStorage.removeItem('name');
localStorage.removeItem('age');
const str=JSON.stringify({firstName:'abraham',lastName:'linkon'});
localStorage.setItem('string',str);
const obj=JSON.parse(str);
console.log(obj);