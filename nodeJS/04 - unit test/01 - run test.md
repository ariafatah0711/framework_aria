
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

scoping => membuat group unit test menggunakan function describe
    hanya digunakan untuk unit test di dalam describe() tersebut
    namun setup function diluar describe() secara otomatis juga digunakan di dalam describe

nested scoping => membuat scoping di dalam describe()

code coverage => melihat kode mana yang sudah tercakupi dengan unit test
    dan bagian mana yang belum

    praktek ini merupakan salah satu best practice dengan menentukan jumlah persentase kode yang 
        harus tercukupi oleh unit test, misal 80%

    jika ingin menyalakanya kita harus ubah konfigurasinya di file package.json
        "collectCoverage": true

    --------------|---------|----------|---------|---------|-------------------
    File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    --------------|---------|----------|---------|---------|-------------------
    All files     |   91.66 |       75 |     100 |   91.66 |                   
    async.js      |     100 |      100 |     100 |     100 |                   
    exception.js  |      75 |       50 |     100 |      75 | 7                 
    sum.js        |     100 |      100 |     100 |     100 |                   
    --------------|---------|----------|---------|---------|-------------------

    dan dia akan otomatis akan muncul folder coverage yang berupa file html

coverage threshold => menentukan presentase code coverage
    jika dibawah angka presentasenya akan gagal unit testnya 

    branches => alur progam ex: if else
    functions => function ex: funct
    lines => baris
    statements => statement ex: operator

collect coverage => menentukan bagian kode yang mana yang ingin dihitung kode coveragenya
    atribut collectCoverageFrom

    "collectCoverageFrom": [
      "src/**/*.{js,jsx}",
      "!**/node_modules/**",
      "**/vendor/**"
    ]

    jadi nanti folder vendor akan di baca juga

it function => alias untuk function test()
    it()
        it dibuat agar mirip seperti cerita saat kita membuat progam

skip function => mengignore sebuah unit test
    saat kita menggunakan skip function nanti unit test nya akan di skip dan tidak dijalankan
    test.skip("", () => {})
    it.skip("", () => {})

only function => memastikan hanya only function yang nanati akan di test
    atau hanya memaksa unit test only yang akan di eksekusi

    test.only("", () => {})
    it.only("", () => {})

duplicate unit test => unit test duplicate yang sebenernya sama hanya beda paamater / datanya

each function => memungkinkan data dalam bentuk array yang akan di iterasi ke dalam kode unit test yang sama
    test.each(table)("string", (numbers, expect) => {})

    %s String, %d Number, %i Integer, %f floating, %j Json, %o Object

    const table = [
        [[10, 10, 10], 30],
        [[10, 10, 10, 10, 10], 50],
        [[10, 10, 10, 10, 10, 10, 10], 70],
    ];

    test.each(table)("test sumAll(%s) should result %i", (numbers, expected) => {
        expect(sumAll(numbers)).toBe(expected);
    });

object sebagai data => each function menggunakan data object
    namun kita perlu melakukan destructing

    const table = [
        { numbers: [10, 10, 10], expected: 30 },
        { numbers: [10, 10, 10, 10, 10], expected: 50 },
        { numbers: [10, 10, 10, 10, 10, 10, 10], expected: 70 },
    ];

    test.each(table)("test sumAll(%numbers) should result (%expected)", ({ numbers, expected }) => {
        expect(sumAll(numbers)).toBe(expected);
    });

concurrent test => secara default semua unit test akan dijalankan secara sequential 
    dan unit test selanjutnya akan dijalankan ketika unit test sebelummya sudah selesai

    atau berjalan asynchronus

    test.concurent("nama test", () => )

membatasi concurrent => membatasi berapa banyak concurrent test yang berjalan di configurasi jestnya
    defaultnya 5

    ubah di package json
        "maxConcurrency": 3,

todo function => gunakan todo function ketika berencana untuk membuat todo test
    todo function akan ditampilkan sebagai summaray ketika kita menjalankan unit test

    test.todo("")

failing function => sekanario gagal / expetasi yang gagal
    contoh misal ketika kita mengirim tidak fvalid, maka kita berharap kalo kodenya error

    tanpa menggunakan matcher
    
    menggunakan failing function
    test.failing("failing", () => )

mock => kode yang melakukan interakssi dengan sistem lain, misal databse, message broker, thrid party web servicec dll
    jika kita lakukan unit test dengan cara berinteraksi secara langsung

    test pertama success, tes selanjutnya malah gagal

    dalam pemograman, mock object adalah tiruan yang kita buat, yang tingkah lakunya menyerupai dengan object aslinya
        jadi tidak perlu berhubungan dengan sistem database nya langsung

    jenis:
    - mock fucntion => membuat tiruan dari sebuah function
    - mock class, yang kita bisa gunakan untuk membuat tiruan dari object class
    - mock modules, yang bisa kita gunakan untuk membuat tiruan dari modules

mock fucntion => membuat tiruan dari sebuah function
    bisa melihat detail dari parameter yang digunakan untuk memanggil sebuah mock function

    test("test calculate", () => {
    const callback = jest.fn();

    calculate([10, 10, 10], callback);
    calculate([10, 10, 10, 10, 10], callback);
    });

mock property => melihat parameter yang digunakan untuk memanggil mock
    mockFn.mock.calls
    mockFn.mock.results

mock return value => kita bisa gunakan
    mockReturnValue(returnValue)
    mockReturnValueOnce(returnValue)

mock implementation => mengubah return value secara dinamis
    callback.mockImplementation((total) => {
        return total * 2;
    });

mock async fucntion => mengembalikan rsult promise
    jest.fn().mockResolvedvalue(value)
    jest.fn().mockRejectedValueOnce(value)

mock mathers => melakukan matchers dengan mudah
    expect(mock).toHaveBennCalled() => memastikan mock pernah dipanggil
    expect(mock).toHaveBennCalledTimes(number) => memastikan mock pernah dipanggil sebanyak number
    expect(mock).toHaveBennCalledWith(arg1, arg2, ...) => memastikan mock pernah dipanggil dengan parameter

mock modules => 