software testing => memastikan kualitas kode kita baik. minim bug, dan minim masalah
    salah satu ilmu nya adalah unit testing

test pyramid => semakin 
    UI => lama dan mahal
    Service
    Unit => cepat dan murah

HLA(high level architecture aplikasi)
            front end
    backend A   |       backend B
    databse     |   database | other system

UI test / end to end test => unit testing yang menjalankan semuanya
    contoh: jalanin semua nya

Service test / intregration test => hanya salah satu servicenya
    contoh intregation test a yaitu: backend A
    contoh intregation test b yaitu: backend B

    contoh:
    backend A
    user => controler
                |
            Service
                |
            repository => databse A

UNIT test => hanya ngetest di satu komponen saja
    contoh:
        - controler
        - service
        - repository

    jadi unit test akan fokus menguji bagian kode progam terkecil, biasanya menguji sebuah method
    unit test bisa digunakan untuk meningkatkan kualitas kode progam

package yang dilakukan untuk unit test seperti asertion
    namun kita bisa gunakan yang lainya
    seperti: jest, mocha, jasmine 

jest => library yang digunakan untuk unit test nodeJS
    jest terintegrasi sangat baik seperti nodejS, ReactJS, VueJS, dll
    jest fokus pada kesederhanaan jadi sangat mudah untuk pemula

membuat project
    - menginstall jest
        jest sendiri digunakan untuk membuat unit test saja
            jadi kita tidak perlu menambahkan sebagai depedency production
            kita cukup tambahkan sebagai development depedency
        kita bisa install dengan menambahkan pada file json atau menggunakan
            npm install jest --save-dev

program jest => berada pada di node_module/.bin/jest

menjalankan unit test => kita bisa gunakan file jest yang ada di node_modules/.bin/jest
    tapi kita bisa permudah dengan script

    manual
        ./node_modules/.bin/jest
    
    auto
        kita tambahkan di script
        "test": "jest"

        lalu jika ingin run gunakan npm run test

npx => node package runner
    digunakan untuk sepsial untuk menjalankan perintah yang bisa secara otomatis mendeteksi  file yang terdapat di node_modules/.bin

    jadi kita bisa gunakan
        npx jest
        dia akan secara otomatis mencari file jest

membuat unit test
    jest sudah menyediakan function yang diregestasikan secara global bernama test(),
        function tersebut digunakan untuk membuat unit test
    test() memiliki nama unit test daan juga function yang berisi kode unit test nya

    - jadi kita buat folder bernama test
    - lalu buat file bernama sum.test.js => harus test.js
    - dan buat file seperti
        ```
            import { sum } from "../src/sum";

            test("sum(1, 2) must be 3", () => {
            const result = sum(1, 2);

            expect(result).toBe(3);
        });
        ```
    test("nama unit test", () => {
        // block test
    })

    namun jest belum support javascript modules

jalankan progam nya dengan menggunakan
    npx jest

pengenalan babel
    sejak awal belajar nodejs kita menggunakan javascript modules
        library babel => yang digunakan untuk membuat jest bisa digunakan untuk mengenali fitus javascript module
    jest code transformation => fitur dimana untuk kita bisa melakukan perubahan kode progam sebelum dijalankan oleh jest

bebel => javascript compile yang digunakan untuk kompilasi ke kode javascript yang kodenya versi lebih lama atau berbeda
    dengan ini kita bisa membuat fitur javasript terbaru yang nanti di kompile ke javascript lama

integrasi babel dan jest
    jest terintegrasi dengan baik dengan babel. jadi kita bisa secara otomatis melakukan kompilasi
    
    - gunakan perintah
        npm install babel-jest --save-dev
    - mengubah package json dan menambahkan configuration
        ```
            "jest": {
                "transform": {
                "^.+\\.[t|j]sx?$": "babel-jest"
                }
            }
        ```
    - membuat babel.config.json
        npm install @babel/preset-env --save-dev
        dan tambaykan file ini
        ```
            {
                "presets": ["@babel/preset-env"]
            }
        ```

jest configuration
    - menymipan data konfigurasi
        1. bisa di dalam file package.json
        2. atau bisa masukin ke dalam file jest.config.js
            jest --init
        3. namun jangan lupa pindahin konfigurasinya ke dalam jest.config.js/mjs/ts
            lalu tambahkan file yang tadinya
                // "jest": {
                    transform: {
                        "^.+\\.[t|j]sx?$": "babel-jest",
                    },
                // }

            jadi tmbahkan seperti ini aja
                transform: {
                    "^.+\\.[t|j]sx?$": "babel-jest",
                },

pengaturan konfigurasi
    key-value
    bisa baca di https://jestjs.io/docs/configuration

    saya mau coba "verbose": true