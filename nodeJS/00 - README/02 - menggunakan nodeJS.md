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