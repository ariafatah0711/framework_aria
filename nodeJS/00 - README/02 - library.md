nodeJS REPL (read eval print loop)
    => mekanisme dimana progam bisa membaca langsung kode progam yang diketikan, lalu mengeksekusinya, menampilkan hasilnya, lalu mengulang dari awal lagi

    untuk menggunakanya hanya perlu jalankan aplikasi node saja

        .help untuk mengecek bantuan

nodeJS standar library
    Web API => library yang ada pada web browser
    standar library => yang bisa kita gunakan untuk mempermudah pembuatan aplikasi

    membuat ajax di dalam node JS

    const request = new XMLHttpRequest(); saat dijalankan di node js ini error

-----------------------------------------------------------------------------------

modules => standar library node js juga mempunyai modules
    jika ingin menggunakan module kita bisa ubah nama file dari .js menjadi .mjs

require function => node js dulu menggunakan require untuk mengambil standar library nodeJS
    namun di rekemondasikan menggunakan import

global asynch => 
    saat kita belajar javascript, untuk menggunakan asynch await, biasanya kita perlu membuat terlebih dahulu function yang kita tandai sebagai asynch

    saat kita menggunakan module, secara default, global code adalah asynch oleh karena itu kita bisa menggunakan asynch await

    kecuali jika kita membuat function, maka function tersebut harus kita tandai sebagai asynch jika ingin menggunakan asynch await

-----------------------------------------------------------------------------------

macam macam standar library
os => merupakan standar library yang bisa digunakan untuk mendapatkan informasi 
    tentang sistem operasi yang digunakan

    os.platform(), os.arch(), os.uptime()

path => standar library yang bisa kita gunakan untuk bekerja
    dengan lokasi file/direktori

    path.basename(path[, ext]), path.dirname(path)

file system => standar library yang digunakan untuk memanipulasi file system
    blocking / synchronus
    non-blocking / asynchronus with callback
    non-blocking / asynchronus with promise(recemonded)

debugger => mengikuti tahapan eksekusi progam di nodeJS
    
    breakpoint => lokasi dimana kita ingin menghentikan sementara eksekusi kode progam
        untuk menambahkan breakpoint kita tambahkan kata kunci debugger
        jika kita menjalankan file node js dia tidak akan jalan di debug

        namun harus dijalankan di mode debugging

    node inspect namafile.js

    printah debugger
    - cont, c: continue exception => melanjutkan eksekusi progam
    - next, n: step next => step kode berikutnya
    - step, s: step in => masuk ke dalam sebuah function
    - out,  o: step out => keluar dari sebuah function
    - pause  : pause running code => menghentikan running code

    watch("namaVar");

DNS => standar library yang digunakan untuk bekerja dengan DNS(domain name server)

events => standar library yang digunakan untuk implementasi event listener
    didalam event, terdapat sebuah class bernama EventEmitter yang bisa digunakan untuk
        menampung data listener per jenis event
    lalu kita bisa melakukan emmit untuk mentrigger jenis event dan mengirim data ke event tersebut

globals => library berupa variable atau function yang secara global bisa diakses
    tanpa harus melakukan import

    contoh: require(), setTimeOut(), dll

process => standar library yang berupa variable digunakan untuk mendapatkan informasi 
    dari process nodeJS yang sedang berjalan

    process juga merupakan instance dari EventEmmiter sehingga kita bisamenambahkan listener ke dalam process

readline => standar library yang digunakan untuk membaca input

report => merupakan fitur yang terdapat di nodeJS untuk membuat laporan secara otomatis 
    dalam file ketika sesuatu terjadi pada aplikasi nodeJS kita

buffer => merupakan object yang berisi urutan byte dengan panjang tetap
    buffer merupakan turunan dari data Uint8array

    buffer Encoding => digunakan untuk melakukan encoding dari satu encoding ke encoding yang lainya
        misal utf8, ascii, hex, dll

stream => standar library untuk aliran data di nodeJS
    stream bisa jadi object yang dibaca, atau bisa di tulis, stream juga adalah turunan dati EventEmmiter

time => standat library yang digunakan untuk melakukan scheduling
    function timer terdapat globals

    jika kita ingin menggunakan time versi promise kita bisa mengimport dari module timer/promise

net => standar library yang digunakan untuk membuat network client dan server berbasis TCP
    net server dan client merupakan object stream seshingga kita bisa baca datanya, tulis datanya, dan juga menambahkan listener

url => standar library yang digunakan untuk bekerja url

util => standar library yang digunakan untuk utility utility yang bisa kita gunakan untuk mempermudah pembuatan kode progam di nodeJS

Zlib => standar library yang digunakan untuk melakukan kompresi menggunakan Gzip

console => standar library yang digunakan untuk melakukan print text 
    console melakukan print ke stdout
    dan console bisa kita gunakan tanpa melakukan import

worker thread => standar library yang digunakan untuk menggunakan thread ketika mengeksekusi javasript secara pararrel
    whorker thread sangat cocok ketika kita membuat kode progam yang berjalan parrarel
        digunakan untuk kode yang insentive sprt: enkripsi / kompresi
    cara kerja nya mirip web worker di javascript web API

HTTP client => standar library untuk HTTP, dimana kita bisa melakukan simulasi HTTP request
    bisa menggunakan simulasi HTTP atau HTTPS

HTTP server => standar library untuk HTTP server, dimana kita bisa membuat HTTP server
    untuk kasus sederhana, cocok sekali jika ingin membuat http server menggunakan standar library nodeJS
    
    namun untuk kasus kompleks, di rekomendasikan menggunakan framework yang lebih mudah penggunaanya