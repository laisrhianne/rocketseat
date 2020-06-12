// let minhaPromise = function () {
//   let xhr = new XMLHttpRequest();

//   xhr.open('GET', 'https://api.github.com/users/laisrhianne');
//   xhr.send(null);

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         resolve(JSON.parse(xhr.responseText));
//       } else {
//         reject('Erro na requisição');
//       }
//     }
//   };
// };

// minhaPromise()
// .then(function(response){
//     console.log(response);
// })
// .catch(function (error) {
//     console.warn(error);
// });

axios.get('https://api.github.com/users/laisrhianne')
.then((result) => {
    console.log(result);    
}).catch((err) => {
    console.warn(err);
});;