localStorage.clear();
localStorage.setItem('name','sakib Khan');
localStorage.setItem('age','40');
const item1=localStorage.getItem('name');
const item2=localStorage.getItem('age');
// console.log(item1,item2);
localStorage.removeItem('name');
localStorage.removeItem('age');
localStorage.setItem('object',JSON.stringify({firstName:'abraham',lastName:'linkon'}));
