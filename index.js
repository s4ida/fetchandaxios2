// EN BAHALI MEHSUL
// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {
//         let products = 0;
//         let producthighestprice = 0;
//         data.forEach(item => {
//             if (item.unitPrice > products) {
//                 products = item.unitPrice;
//                 producthighestprice = item;
//             }
//         });

//         highestprice.textContent = `${products}`; 
//         Name.textContent = producthighestprice.name ;
//     });


// ORTALAMA STOCK MUDDETI
// let stock =document.getElementById('stock')
// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {
//         const newarray = data.map(item => item.unitsInStock); 
//         const sumStock = newarray.reduce((sum, stock) => sum + stock, 0);
//         const AverageCountStock = sumStock / newarray.length; 
//         stock.textContent= `${AverageCountStock}`
//     })


// C ILE BASLAYAN ADLAR
// const NamesStartWithC = document.getElementById('NamesStartWithC')
// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {
//         const NameC = data.map(item => item.name); 
//         const WriteName =NameC.filter(item => item.startsWith('C'));
//         NamesStartWithC.textContent = `${WriteName}`
//     })


// LONDONDAKI MUSTERILER
// fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//        const londonsCustomers = data.filter(item => item.address.city === "London");
//        londonsCustomers.forEach(item => {
//             console.log(item.contactName);
//        });
//     });


// REGIONU NULL OLANLARIN SAYI  
// const number=document.getElementById('number')
// fetch('https://northwind.vercel.app/api/customers')
//   .then(response => response.json())
//   .then(data => {
//       const regionNULL = data.filter(customer => customer.address.region === 'NULL');
//       number.textContent = `${regionNULL.length}`
//     });


// USER ID-SI 1 OLANLARIN SAYISI    
// const postnumbers=document.getElementById('postnumbers')
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {
//       const posts = data.filter(item => item.userId === 1);
//       postnumbers.textContent = `${posts.length}`
//     });


