const api = 'https://dog.ceo/api/breeds/image/random';
const fetch = require('node-fetch');
// Closures and callbacks

// function someFetchRequest(callback) {
//    const request = new XMLHttpRequest();
//    request.onreadystatechange = function () {
//       if(this.readyState === XMLHttpRequest.DONE){
//          if(this.status === 200){
//             callback(this.responseText);
//          }
//       }
//    }
// }

// const data;
// someFetchRequest(function () {
//    data = result;   
// })


// Promise

function somePromiseFunc() {
   return new Promise(function(resolve, reject){
      setTimeout(function(){
         resolve('data')
      }, 1000)
   })   
}
//some promise fucction
somePromiseFunc()
.then(data => console.log(data))
.catch(error => console.log(error));


//es6 promise[
fetch(api)
.then(res => res.json)
.then(data => console.log(data))


// Async Await
async function someAsyncFunc() {
   const response = await fetch(api);
   const data = await response.json();

   return data;
}

someAsyncFunc().
then(data => {
   console.log('---async/await---')
   console.log(data)
   }
)


// Generator/yield function
function flow(gen){
   const iter = gen();
   
   return (async() => {
      let obj = res = iter.next();

      while(obj.done === false){
         if(obj.value instanceof Promise){
            obj.value = await obj.value;
         }

         res = obj;
         obj = iter.next(obj.value)
      }

      return res.value
   })();
}

const result = flow(function*(){
   const response = yield fetch(api);
   const data = yield response.json();
   return data;
})

result.then(data =>{
      console.log('---Generator/yield function---')
      console.log(data)
   }
)
// function * gen(){
//    yield 1;
//    yield 2;
//    yield 3;
// }

// const iterator = gen();
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
