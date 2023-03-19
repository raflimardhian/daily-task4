const { sum, sum2 } = require("./penjumlahan");
const { subtraction, subtraction2 } = require("./pengurangan");
const { kali } = require("./perkalian");
const { bagi } = require("./pembagian");
const { hargaTotal } = require("./total");

const readline = require("readline");
const { total } = require("./total");

const gm = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1 hasil tambah inputan user (done)
gm.question("Angka pertama yang mau di jumlahkan? ", (angka1) => {
  gm.question("Angka kedua yang mau di jumlahkan? ", (angka2) => {
    const hasil1 = sum(parseInt(angka1), parseInt(angka2));
    console.log(`hasil dari penjumlahan ${angka1} and ${angka2} adalah ${hasil1}`);

    gm.close();
  });
});

// 2 hasil kurang inputan user
// gm.question("Angka pertama yang mau di kurangkan? ", (angka1) => {
//   gm.question("Angka kedua yang mau di kurangkan? ", (angka2) => {
//     const hasil2 = kurang(parseInt(angka1), parseInt(angka2));
//     console.log(`hasil dari pengurangan ${angka1} and ${angka2} adalah ${hasil2}`);

//     gm.close();
//   });
// });

// 3 hasil kali inputan user
// gm.question("Angka pertama yang mau di kalikan? ", (angka1) => {
//   gm.question("Angka kedua yang mau di kalikan? ", (angka2) => {
//     const hasil3 = kali(parseInt(angka1), parseInt(angka2));
//     console.log(`hasil dari perkalian ${angka1} and ${angka2} adalah ${hasil3}`);

//     gm.close();
//   });
// });

// 4 hasil bagi inputan user
// gm.question("Angka pertama yang mau di bagikan? ", (angka1) => {
//   gm.question("Angka kedua yang mau di bagikan? ", (angka2) => {
//     const hasil4 = bagi(parseInt(angka1), parseInt(angka2));
//     console.log(`hasil dari pembagian ${angka1} and ${angka2} adalah ${hasil4}`);

//     gm.close();
//   });
// });

// 5 hasil total harga kali quantitas barang
// gm.question("Angka pertama untuk total harga? ", (price) => {
//   gm.question("Angka kedua untuk quantity? ", (quantity) => {
//     const hasil5 = hargaTotal(parseInt(price), parseInt(quantity));
//     console.log(`hasil dari Total Harga ${price} and ${quantity} adalah ${hasil5}`);

//     gm.close();
//   });
// });
