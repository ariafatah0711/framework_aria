
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

