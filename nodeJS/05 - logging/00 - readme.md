logging => log file yang berisi informasi kerjadian dari sebuah system
    biasanya terdapat informasi waktu kejadian, dan pesan kejadian
    logging adalah aksi untuk menambah informasi log ke log file

    logging bukan hanya untuk menampilkan informasi, terkadang digunakan untuk
        proses debugging ketika terjadi masalah di aplikasi kita

diagram logging
    
    aplikasi ===mengirim log event==> log file

ekosistem logging
    
    aplikasi ===mengirim log event==> log file => log aggregator    log management
                                                          |               |
                                                    log database =======> |

nodejs logging => nodejs sendiri sebenrnya memilih fitur untuk melakukan logging dengan object console    
    namun progammer hanya menggunakan fitur ini pada kasus tertentu

logging library
    winston => merupakan logging library di nodejs

    npm install winston

membuat project
    salin project yang unit test

    menambah depedency winston
    "dependencies": {
        "winston": "3.11.0"
    },

logger => adalah sebuah object di winston yang digunakan untuk melakukan logging
    untuk membuat object logger kita bisa menggunakan function
        createLogger() yang terdapat di package winston langsung

    saat kita membuat logger secara default logger tidak akan menggunakan transport

transport => destination atau target yang digunakan untuk mengirim log
    salah satunya adalah console, file transport, dll

    console => transport yang digunakan utnuk mengirim data log ke console/stdout

logging level => informasi seberapa penting log yang kita kirimkan
    log dimulai dari level paling rendah ke paling tinggi

    winston level
    - error => errror
    - warn => peringatan
    - info => informasi
    - http => http request
    - verbose => informasi lebih detail
    - debug => debugging
    - silly => test saja

secara default saat kita membuat log, logger hanya menampilkan log dengan level info dan di atasny

jika ingin mengubah level lognya tambahkan di abgian konfigurasi logger
    const logger = winston.createLogger({
        level: "debug",
    })

shorcut function => yang digunakan untuk logging,
    sehingga kita tidak perlu menggunakan function log dan object dengan attribut level lagi

    logger.info(message)
    logger.warn(message)
    dll

