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

dependency manager => install library/package secara otomatis
    kita bisa mencari open source package ataau membuat source package disana jika kita mau
    untuk menginstall dependency, kita bisa gunakan
        npm install <nama_dependency@version>
        atau
        npm i <nama_dependency@version>

    atau bisa langsungtulis di dependencies di package json

    jika ingin langsung install yang sudah di depencies di package json kita bisa gunakan
    npm install

    lalu akan muncul file 
        - node_modules => berisi package / library yang dibutuhkan
        - file package-lock json => berisi konfigurasi dependency dan versi package package

menggunakan dependency
    import _ from "lodash";

depedency version
    node js merekomendasikan menggunakan sinematik version
    MAJOR, MINOR, PATCH
        major => versi compitable misal dari 1 jadi 2 biasanya ini break
        minor => menambahkan fitur baru namun tidak break fitur sebelumnya
        patch => bug fix atau memperbaiki bug namun tidak menambahkan fitur baru

    contoh lodash
        versi 4.17.21 major.minor.patch

    kegunaan nya kita dapat menentukan versi package yang ingin kita gunakan secara dinamis

    menentukan versi dependency secara otomatis
        x => (not recomended) donwoald versi terbaru meskipun major berubah 
        1.x => donwoald minnor terbaru tanpa merubah major
        1.10.x => donwoald patch terbaru tanpa merubah major dan minor
        1.10.20 => versi tetap dan tidak akan ada perubahan

    atau kita gunakan
        ~1.1.1 => donwoald versi 1.1.1 jika ada update lakukan update jika patch berubah
            mirip seperti 1.1.x
        ^1.1.1 => donwoald versi 1.1.1 jika ada update, lakukan update namun hanya update minor dan patch berubah
            mirip seperti 1.x

    jika ingin coba kita bisa pergi ke npm version calculator

    saat kita install dependecy di tereminal dia akan menginstall versi yang terbaru dan ada ^
        lodash: "^4.17.21"

    jika ingin update package kita gunakan 
        npm update

development dependency
    production => depedency yang dibutukan ketika aplikasi berjalan
    development => depedency yang dibutuhkan khusus ketika proses development saja
        contoh: unit testing

    untuk menambahkan developement dependency kita tambahkan di bagian 
        devDepedency di package.json
    atau kiata gunakan perintah
        npm install <naam_package> --save-dev

    untuk donwoald depedency, sama kita gunakan
        npm install

        contoh:
          "devDependencies": {
                "moment": "2.30.1"
            }

    install depedency tanpa development (recomended)
        npm install --poroduction #hanya menginstall production saja
    
membuat library
    buat package dulu

publish package
    login ke npmjs.com
    lalu login juga di npm terminal dengan perintah
        npm adduser

    publish dengan perintah
        npm publish

        namun nama package nya harus berbeda karena nanti akan di publish secara global

install package yang sudah dibuat
    caranya sama hanya tinggal ganti nama package pada depedency
        nanti di node_modules akan tampil file yang sudah ada di package tadi

cara gunakan package nya
    import {nama_function} from "nama_package"

ignore file saat ingin publish ke npmjs
    .npmignore => untuk npm
    .gitignore => untuk git

    cara kerjanya adalah
        npm akan membaca file .npmignore dulu jika tidak ada maka akan membaca di .gitignore
    
    jangan lupa tambahkan
        "exports": {
            ".": "./index.js",
            "./number": "./number.js"
        }
    
publish ulang
    - pastikan versinya diubah

update depedency
    ubah versi depedency yang kita masukan
        atau kita bisa gunakan version ~ atau ^
        dan gunakan perintah 
            npm update
            npm update <nama_depedency>
    