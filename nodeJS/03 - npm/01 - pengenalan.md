npm (node package manager) => melakukan management project node js
    project => adalah directory atau folder yang berisikan kode progam dan dependency(library) yang kita butuhkan
    - dependency management project nodejs
    - digunakan untuk donwoald dependency

file package .json
    npm menyimpan konfigurasi project pada file package.json
    - kita bisa meenambahkan secara manual atau secara otomatis menggunakan nauto generate menggunakan progam npm

nodejs dependency repository
    kita dapat mencari library di web npm

menginstall npm
    - saat kita menginstall nodejs, secara otomatis npm akan terinstall secara otomatis
    - untuk mengecek versi npm kita dapat menggunakan npm --version

membuat projet
    - buat folder untuk project
    - masuk ke folder melalui terminal
    - buat project npm menggunakan: npm init

project configuration
    - inti dari konfigurasi project nodejs adalah package json
        name => nama project
        version => version project
        description  => deskripsi project
        homepage => home page project
        author > author project
        contributords => nama kontribusi
        main => entry point package
        keyword => keyworad project
        license => lincese project
        repository => repository project

menjalankan project yang sudah dibuat
    node file_script
    - namun yang berbeda itu akan mengecek dulu packagenya

project type => seacra default node js menggunakan commonjs
    oleh karean itu ketika kita ingin menggunakan js modules kita harus membuaat file menjadi filemjs

    namun kita bisa menggunakan default project type dari common.js menjadi module.js
    ubah type: module pada package.json

script => menyediakan script yang dimana kita bisa menyediakan perintah script 
    yang nanti bisa digunakan untuk menjalankan perintah lainya

    penggunakan script ini mirip seperti alias
    untuk menambahkan ini kita tambahkan scripts: pada file package.json

    untuk menjalankan kita gunakan
    npm run-script <nama_script>
    atau
    npm run <nama_sript>

spesial script => special script atau khusus yang dapat langsung di run
    - start
    - stop
    - test
    - restart
    - uninstall
    - version

    selain itu terdapat script spesial untuk script di atas
        prefix pre => script yang akan dijlankan sebelumnya
        previx post => script yang akan dijlankan setelahnya

    misal ketika kita gunakan perintah npm start, maka akan menjalankan sript prestart, start, dan poststart

export module
    main => attribut main adalah entry point yang akan di load ketika kita meload nodejs project/package
        pada kasus kita membuat aplikasi, mungkiin tidak terlalu berguna, tapi pada kasus ketika kita membuat library
        yang akan digunakan di banyak project, baru attribut main ini akan terlihat kegunaanya

    problemnya ketika menggunakan attribut main adalah, kita cuma bisa mengekspos satu file js.
        yang menarik dari export ini kita tidak perlu menambahkan nama file js aslinya

    tambahkan "exports": {
        ".": "01 - project",
        "./write": "./write.js"
    },

