const prompt = require("prompt-sync")({sigint :true}); 

let harga = Number(prompt("Harga Barang : ")) 
let diskon = 7.5
let totalHarga = 0

if ( harga >= 200000) 
    totalHarga = harga * 7.5 / 100 
console.log(totalHarga)