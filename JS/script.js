//Mengambil target tampilan dimana elemen gambar akan ditampilan
let tampilan = document.getElementById("tampilan");
//Mengambil target gambar dimana image tersimpan beserta turunannya 
let gambar = document.getElementById("gambar").children;
//Inisiasi nomor default
let nomor = 0;

//Membuat fungsi saat gambar dipencet akan ditampilkan ditarget tampilan serta mengubah nomor sesuai class name yang ada pada masing-maisng image
function ganti_gambar(gambar){
    tampilan.src = gambar.getAttribute("src");
    nomor = gambar.className;
}
//Membuat fungsi saat button kiri dipencet akan mengubah default nomor dikurangi dengan 1, kemudian jika nomor lebih kecil dari 0, maka nomor akan di berikan nilai 5 yang dimana akan menampilkan gambar terakhir pada image
function geser_kiri(){
    nomor = nomor - 1;
    if(nomor < 0)nomor = 5;
     tampilan.src = gambar[nomor].getAttribute("src");
    }

//Membuat fungsi saat button kanan dipencet akan mengubah default nomor ditambah dengan 1, kemudian jika nomor lebih besar dari 5, maka nomor akan di berikan nilai 0 yang dimana akan menampilkan gambar pertama pada image
function geser_kanan(){
    nomor = nomor + 1;
    if(nomor > 5)nomor = 0;
    tampilan.src = gambar[nomor].getAttribute("src");
}