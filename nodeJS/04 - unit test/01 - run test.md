
matchers => sebuah expetasi / hasil dari functionya
    expetasi dari function sum

    function expect => mengembalikan object matchers yang bisa kita gunakan untuk mengetes value yang kita expect
        ex: expect(2 + 2).toBe(3)
    
    expect(value)
    .toBe() => hasil yang diinginkan

    equals matchers => persamaan
        expect(value).tobe(expected) => value sama dengan expect
        expect(value).toEqual(expected) => value sama dengan expect, namun dimana membandingkan semua properties secara resursive
    
truthines matchers => membedakan antara undefined, null, dan false
    .toBeNull() => memastikan value adalah null
    .toBeUndefined() => memastikan value adalah undefined
    .toBeDefined() => kebalikan dari toBeUndefined(null)
    .toBeTruthy() => memastikan valuebernilai apapun, asal if statement menganggap true
    .toBeFalsy() => memastikan value bernilai apapun, asal if statement menganggap false

numbers matchers => mathers yang digunakan untuk value berupa number
    .toBeGreaterThan(n) => memastikan value lebih besar dari n
    .toBegreaterThanOrEqual(n) => memastikan value lebih besar / sama dengan n
    .toBeLessThan(n) => memastikan value lebih kecil dari n
    .toBeLessThanOrEqual(n) => memastikan value lebih kecil / sama dengan n

string matchers => matcher untuk string
    .toBe()
    .toEqual()

    .toMatch(regex) => memastikan value sesuai dengan regex

array matchers => mengecek data di dalam sebuah value array
    .toEqual()

    .toContain(item) => memastikan value array memiliki item dimana pengecekan item menggunakan toBe()
    .toContainEqual(item) => memastikan value array memiliki item dimana pengecekan item menggunakan toEqual()

exceptions matchers => berharap sebuah exceptions (kebalikan dari expection)
    khusus untuk jenis matchers exception 
        kita perlu menggunakan closure function di value expect()
        jika tidak maka exception akan telanjur terjadi sebelum kita memanggil expect() function

    .toThrow() => memastikan terjadi exception apapun
    .toThrow(exception) => memastikan terjadi exception sesuai dengan excepted exception
    .toThrow(message) => memastikan terjadi exception sesuai dengan string yang dikirim disini

not matchers => mengecekan kebalikan dari kesamaan
    misal tidak sama dengan, tidak lebih dari, tidak contains, dll
    jest memiliki fitur "not" di matchers nya dengan menggunakan property not di matcher

test async code => pengetesan terhadap kode yang sifatnya async
    namun saat kita melakukan pengetesan kode async, kita harus memberitahu ke jest.
        agar hal ini jest tahu dan bisa menunggu kode async nya, sebelum menjalankan ke unit test selanjutnya
    caranya kita menggunakan asynch code di closure  function jest

    regenerator runtime error => error terjadi di babel
        hal ini secara default babel tidak melakukan fitur untuk melakukan kompilasi runtime
        ketika menemukan fitur regenerator atau async function

        kita bisa tambahkan plugins depedency
            npm install @babel/plugin-transform-runtime
        selanjutnya tambahkan di babel.config.js

async matchers => fitur matcher terhadap data async atau promise
    hal ini mempermudah kita ingin melakukan matchers, sehingga tidak perlu melakukan await pada async functionya
    semua async matchers mengembalikan promise

    expect(promise).resolves => ekseptasi bahwa promise sukses, dan selanjutnya kita bisa gunakan matchers dan function lainya
    expect(promise).rejects => expetasi bahwa promise gagal, selanjutnya kita bisa gunakan matcher function lainya

setup function => fitur / kode yang akan selalu di eksekusi 
    sebelum unit test dijalankan / setelah unit test dijalankan

    beforeEach(function) => function akan di eksekusi sebelum unit test berjalan
    afterEach(function) => function akan di eksekusi setalh unit test selesai

    dan dia akan di panggil sebanyak file unit test

one-time setup function => kode yang hanya di eksekusi sekali saja dalam sebuah file unit test
    contoh: ketika kita connect ke database, dan setelah selesai

    beforeAll(function) => di eksekusi sekali sebelum semua unit test berjalan di file unit test
    afterAll(function) => di eksekusi sekali setelah semua unit test selesai di file unitt test

async setup function
    cukup tambahkan di dalam functionya saja

scoping => 