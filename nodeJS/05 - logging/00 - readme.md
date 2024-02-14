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

format => adalah object yang digunakan untuk melakukan formating ke data log
    secara default logger menggunakan format json

    json() => json format
    simple() => format sederhana teks biasa
    logtash() =>

    printf() => custom format / membuat format sendiri

combine format => kombinasi beberapa format sekaligus
    ini cocok untuk menambahkan informasi tambahan ke log data
        misal timestamp, data jarak waktu log

    hanya bisa dipakai di combine jika tidak akan undefined
        timestamp() => waktu / date
        ms() => waktu perbedaan

    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),

file transport => menyimpan data log ke file
    kita bisa juga menambahkan sekaligus : console dan 

    transports: [
        new winston.transports.File({
            filename: "application.log",
        }),
    ]

trasnport level => memisahkan beberapa log di level yang berbeda
    misal untuk info di file info.log
    di warn di file warn.log

rotate file => daily rotate file agar file tidak terlalu penuh setiap hari
    dan ini juga berguna untuk menghapus file lama yang sudah tidak terpakai

    harus install package winston-daily-rotate-file 
    npm install winston-daily-rotate-file

