// Bank Soal Sejarah Indonesia - SiCerdik Kurikulum Merdeka
const questionsData = [
    {
        question: "Siapakah tokoh pahlawan nasional yang membacakan Teks Proklamasi Kemerdekaan Indonesia pada tanggal 17 Agustus 1945?",
        options: ["Mohammad Hatta", "Ir. Soekarno", "Sutan Sjahrir", "Tan Malaka"],
        correct: 1,
        explanation: "Ir. Soekarno membacakan Teks Proklamasi Kemerdekaan didampingi oleh Drs. Mohammad Hatta di Jalan Pegangsaan Timur No. 56, Jakarta."
    },
    {
        question: "Di kota manakah peristiwa Rengasdengklok terjadi sebelum pembacaan Proklamasi Kemerdekaan Indonesia?",
        options: ["Bandung", "Karawang", "Bogor", "Cirebon"],
        correct: 1,
        explanation: "Peristiwa Rengasdengklok terjadi di Kabupaten Karawang, Jawa Barat, di mana para pemuda membawa Soekarno dan Hatta untuk menjauhkan mereka dari pengaruh Jepang."
    },
    {
        question: "Tokoh yang mengetik naskah Proklamasi Kemerdekaan Indonesia setelah dirumuskan oleh Soekarno, Hatta, dan Ahmad Soebardjo adalah...",
        options: ["Sayuti Melik", "B.M. Diah", "Sukarni", "Chaerul Saleh"],
        correct: 0,
        explanation: "Sayuti Melik adalah tokoh pemuda yang mengetik naskah Proklamasi Kemerdekaan Indonesia dengan melakukan beberapa perubahan ejaan."
    },
    {
        question: "Sumpah Pemuda dicetuskan pada tanggal 28 Oktober 1928 dalam Kongres Pemuda II. Di kota manakah kongres tersebut berlangsung?",
        options: ["Bandung", "Surabaya", "Jakarta", "Yogyakarta"],
        correct: 2,
        explanation: "Kongres Pemuda II diselenggarakan di Jakarta (dahulu Batavia) pada tanggal 27-28 Oktober 1928 dan melahirkan ikrar Sumpah Pemuda."
    },
    {
        question: "Organisasi modern pertama di Indonesia yang didirikan pada tanggal 20 Mei 1908 dan menjadi pelopor Kebangkitan Nasional adalah...",
        options: ["Sikat Islam", "Budi Utomo", "Indische Partij", "Perhimpunan Indonesia"],
        correct: 1,
        explanation: "Budi Utomo didirikan oleh Dr. Soetomo dan para mahasiswa STOVIA pada 20 Mei 1908, yang peringatannya kini ditetapkan sebagai Hari Kebangkitan Nasional."
    },
    {
        question: "Lagu kebangsaan 'Indonesia Raya' pertama kali diperdengarkan secara resmi pada peristiwa...",
        options: ["Proklamasi Kemerdekaan 1945", "Kongres Pemuda II tahun 1928", "Sidang Pertama BPUPKI", "Peristiwa Rengasdengklok"],
        correct: 1,
        explanation: "Lagu Indonesia Raya ciptaan Wage Rudolf Supratman pertama kali dimainkan menggunakan biola pada Kongres Pemuda II tanggal 28 Oktober 1928."
    },
    {
        question: "Peristiwa Pertempuran Surabaya tanggal 10 November 1945 yang dipimpin oleh Bung Tomo kini diperingati oleh bangsa Indonesia sebagai...",
        options: ["Hari Kemerdekaan", "Hari Sumpah Pemuda", "Hari Pahlawan", "Hari Kebangkitan Nasional"],
        correct: 2,
        explanation: "Pertempuran dahsyat di Surabaya memperlihatkan keberanian rakyat dalam mempertahankan kemerdekaan, sehingga tanggal 10 November ditetapkan sebagai Hari Pahlawan."
    },
    {
        question: "Peristiwa pembumihangusan kota oleh rakyat dan pejuang agar tidak dijadikan markas militer oleh Sekutu dan NICA dinamakan...",
        options: ["Bandung Lautan Api", "Pertempuran Ambarawa", "Puputan Margarana", "Pertempuran Medan Area"],
        correct: 0,
        explanation: "Peristiwa Bandung Lautan Api terjadi pada 23 Maret 1946, di mana penduduk membakar rumah dan kota Bandung bagian selatan sebelum meninggalkan kota tersebut."
    },
    {
        question: "Patih Kerajaan Majapahit yang terkenal dengan ikrar 'Sumpah Palapa' untuk menyatukan Nusantara adalah...",
        options: ["Hayam Wuruk", "Gajah Mada", "Raden Wijaya", "Kertanegara"],
        correct: 1,
        explanation: "Mahapatih Gajah Mada mengucapkan Sumpah Palapa yang berjanji tidak akan menikmati kelonggaran sebelum berhasil menyatukan Nusantara di bawah naungan Majapahit."
    },
    {
        question: "Kerajaan Hindu tertua di Indonesia yang dibuktikan dengan penemuan prasasti berbentuk Yupa di Kalimantan Timur adalah...",
        options: ["Kerajaan Tarumanagara", "Kerajaan Kutai", "Kerajaan Sriwijaya", "Kerajaan Mataram Kuno"],
        correct: 1,
        explanation: "Kerajaan Kutai Martadipura berdiri sekitar abad ke-4 Masehi di Muara Kaman, Kalimantan Timur, dan merupakan kerajaan Hindu tertua di Nusantara."
    },
    {
        question: "Kerajaan maritim Buddha terbesar di Indonesia yang menjadi pusat pembelajaran agama Buddha di Asia Tenggara adalah...",
        options: ["Kerajaan Majapahit", "Kerajaan Sriwijaya", "Kerajaan Singasari", "Kerajaan Mataram Kuno"],
        correct: 1,
        explanation: "Kerajaan Sriwijaya yang berpusat di Palembang merupakan kerajaan bahari besar yang menguasai jalur pelayaran Selat Malaka serta menjadi pusat agama Buddha."
    },
    {
        question: "Pahlawan wanita asal Aceh yang pantang menyerah dan terus memimpin perlawanan gerilya melawan penjajah Belanda adalah...",
        options: ["R.A. Kartini", "Cut Nyak Dhien", "Dewi Sartika", "Martha Christina Tiahahu"],
        correct: 1,
        explanation: "Cut Nyak Dhien adalah pahlawan nasional wanita dari Aceh yang melanjutkan perjuangan suaminya, Teuku Umar, melawan kolonial Belanda."
    },
    {
        question: "Sistem tanam paksa (Cultuurstelsel) yang sangat menyengsarakan rakyat Indonesia pada masa kolonial Belanda diperkenalkan oleh Gubernur Jenderal...",
        options: ["Herman Willem Daendels", "Johannes van den Bosch", "Jan Pieterszoon Coen", "Thomas Stamford Raffles"],
        correct: 1,
        explanation: "Johannes van den Bosch menerapkan sistem Tanam Paksa pada tahun 1830 untuk mengisi kembali kas negara Belanda yang kosong akibat perang."
    },
    {
        question: "Badan yang dibentuk oleh pemerintah Jepang pada tanggal 1 Maret 1945 untuk mempersiapkan kemerdekaan Indonesia adalah...",
        options: ["BPUPKI", "PPKI", "KNPI", "PETA"],
        correct: 0,
        explanation: "BPUPKI (Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia) atau Dokuritsu Junbi Cosakai bertugas menyelidiki dan merumuskan dasar negara Indonesia."
    },
    {
        question: "Raja terkenal dari Kerajaan Kediri yang terkenal dengan ramalan-ramalannya mengenai masa depan Nusantara adalah...",
        options: ["Raja Mulawarman", "Raja Purnawarman", "Raja Jayabaya", "Raja Ken Arok"],
        correct: 2,
        explanation: "Raja Jayabaya adalah raja terbesar Kerajaan Kediri yang memerintah pada abad ke-12 dan sangat tersohor dengan Ramalan Jayabaya."
    },
    {
        question: "Konferensi Meja Bundar (KMB) yang menandai pengakuan kedaulatan Indonesia oleh Belanda diselenggarakan di kota...",
        options: ["Jakarta", "Linggarjati", "Den Haag", "Bangkok"],
        correct: 2,
        explanation: "KMB dilaksanakan di Den Haag, Belanda, pada akhir tahun 1949 dan menghasilkan penyerahan/pengakuan kedaulatan bagi Republik Indonesia Serikat (RIS)."
    },
    {
        question: "Berapa jumlah bulu pada leher Burung Garuda lambang negara Indonesia?",
        options: ["44", "45", "46", "47"],
        correct: 1,
        explanation: "Jumlah bulu pada bagian leher Burung Garuda adalah 45, yang melambangkan angka tahun kemerdekaan (1945)."
    },
    {
        question: "Perang Diponegoro yang merupakan salah satu perang besar di Nusantara berlangsung pada tahun...",
        options: ["1825 - 1830", "1908 - 1912", "1945 - 1949", "1942 - 1945"],
        correct: 0,
        explanation: "Perang Diponegoro dipimpin oleh Pangeran Diponegoro melawan pemerintah kolonial Belanda terjadi pada tahun 1825 hingga 1830."
    },
    {
        question: "Organisasi pergerakan nasional Indische Partij didirikan pada tanggal 25 Desember 1912 oleh tiga serangkai, yaitu...",
        options: ["Soetomo, Tjipto Mangoenkoesoemo, dan Ki Hajar Dewantara", "Douwes Dekker, Tjipto Mangoenkoesoemo, dan Ki Hajar Dewantara", "Ir. Soekarno, Moh. Hatta, dan Sutan Sjahrir", "H.O.S. Tjokroaminoto, Agus Salim, dan Danudirja Setiabudi"],
        correct: 1,
        explanation: "Tiga Serangkai pendiri Indische Partij adalah E.F.E. Douwes Dekker (Danudirja Setiabudi), Tjipto Mangoenkoesoemo, dan Ki Hajar Dewantara."
    },
    {
        question: "Sidang pertama BPUPKI yang membahas tentang rancangan dasar negara Indonesia merdeka dilaksanakan pada tanggal...",
        options: ["29 Mei - 1 Juni 1945", "10 - 17 Juli 1945", "18 Agustus 1945", "17 Agustus 1945"],
        correct: 0,
        explanation: "Sidang pertama BPUPKI diselenggarakan pada tanggal 29 Mei sampai 1 Juni 1945."
    },
    {
        question: "Perjanjian antara Indonesia dan Belanda yang ditandatangani di atas kapal perang Amerika Serikat USS Renville disebut Perjanjian...",
        options: ["Linggarjati", "Renville", "Roem-Royen", "KMB"],
        correct: 1,
        explanation: "Perjanjian Renville ditandatangani pada 17 Januari 1948 di atas geladak kapal perang USS Renville."
    },
    {
        question: "Kerajaan Islam di Jawa yang terkenal dengan bandar pelabuhan internasionalnya di Jepara dan Tuban serta menyerang Malaka adalah...",
        options: ["Kesultanan Demak", "Kesultanan Banten", "Kesultanan Mataram Islam", "Kerajaan Pajang"],
        correct: 0,
        explanation: "Kesultanan Demak di bawah Pati Unus pernah mengirim armada laut untuk menyerang kedudukan Portugis di Malaka."
    },
    {
        question: "Sultan dari Kesultanan Banten yang membawa kejayaan perdagangan maritim dan gigih melawan VOC pada abad ke-17 adalah...",
        options: ["Sultan Ageng Tirtayasa", "Sultan Hasanuddin", "Sultan Iskandar Muda", "Raden Patah"],
        correct: 0,
        explanation: "Sultan Ageng Tirtayasa menjadikan Banten sebagai pelabuhan bebas dan pusat perdagangan internasional yang menyaingi Batavia."
    },
    {
        question: "Gubernur Jenderal Hindia Belanda yang terkenal dengan proyek pembangunan Jalan Raya Pos dari Anyer sampai Panarukan adalah...",
        options: ["Herman Willem Daendels", "Thomas Stamford Raffles", "Johannes van den Bosch", "J.P. Coen"],
        correct: 0,
        explanation: "H.W. Daendels memerintah tahun 1808–1811 dan membangun Jalan Raya Pos untuk pertahanan militer Pulau Jawa."
    },
    {
        question: "Buku karya Thomas Stamford Raffles yang mengupas tuntas mengenai kebudayaan, sejarah, dan alam pulau Jawa berjudul...",
        options: ["History of Java", "Max Havelaar", "Indonesia Menggugat", "Van Der Capellen"],
        correct: 0,
        explanation: "Raffles menulis buku terkenal berjudul 'The History of Java' selama masa jabatannya sebagai Letnan Gubernur Jenderal di Jawa."
    },
    {
        question: "Perlawanan rakyat Bali terhadap monopoli hak tawan karang oleh Belanda dikenal dengan perang...",
        options: ["Puputan Margarana", "Perang Banjar", "Perang Padri", "Perang Bali (Jagaraga)"],
        correct: 3,
        explanation: "Perang Jagaraga di Bali melibatkan pertempuran habis-habisan (puputan) karena Bali menolak aturan hak tawan karang Belanda."
    },
    {
        question: "Tokoh ulama pemimpin Perang Padri di Sumatra Barat melawan kaum adat dan kolonial Belanda adalah...",
        options: ["Tuanku Imam Bonjol", "Pangeran Diponegoro", "Cut Nyak Dien", "Sultan Hasanuddin"],
        correct: 0,
        explanation: "Tuanku Imam Bonjol memimpin kaum Padri dalam perang di Minangkabau pada awal abad ke-19."
    },
    {
        question: "Organisasi pergerakan Islam yang didirikan oleh H. Samanhudi di Solo pada tahun 1905 untuk membendung pedagang asing adalah...",
        options: ["Sarikat Islam", "Muhammadiyah", "Nahdlatul Ulama", "Budi Utomo"],
        correct: 0,
        explanation: "Sarekat Dagang Islam (kemudian menjadi Sarekat Islam) didirikan untuk melindungi kepentingan pedagang pribumi."
    },
    {
        question: "Organisasi Islam modernis yang didirikan oleh K.H. Ahmad Dahlan di Yogyakarta pada 18 November 1912 adalah...",
        options: ["Muhammadiyah", "Sarikat Islam", "Nahdlatul Ulama", "Taman Siswa"],
        correct: 0,
        explanation: "Muhammadiyah berfokus pada pemurnian ajaran Islam serta pendidikan dan pelayanan sosial."
    },
    {
        question: "Perhimpunan pelajar Indonesia di Belanda yang awalnya bernama Indische Vereeniging dan berjuang untuk kemerdekaan politik adalah...",
        options: ["Perhimpunan Indonesia", "Indische Partij", "Jong Java", "Taman Siswa"],
        correct: 0,
        explanation: "Perhimpunan Indonesia (PI) dipelopori oleh tokoh seperti Mohammad Hatta dan aktif menyuarakan kemerdekaan di kancah internasional."
    },
    {
        question: "Bapak Pendidikan Nasional Indonesia yang mendirikan perguruan Taman Siswa pada tanggal 3 Juli 1922 adalah...",
        options: ["Ki Hajar Dewantara", "Dr. Soetomo", "Cipto Mangunkusumo", "Douwes Dekker"],
        correct: 0,
        explanation: "Ki Hajar Dewantara mendirikan Taman Siswa untuk memberikan kesempatan pendidikan bagi kaum pribumi."
    },
    {
        question: "Tiga tokoh utama tiga serangkai pendiri Indische Partij adalah Douwes Dekker, Tipto Mangoenkoesoemo, dan...",
        options: ["Ki Hajar Dewantara", "Mohammad Hatta", "Ir. Soekarno", "H.O.S. Tjokroaminoto"],
        correct: 0,
        explanation: "Ki Hajar Dewantara (Suwardi Suryaningrat) bersama Douwes Dekker dan Tjipto Mangoenkoesoemo mendirikan partai politik berhaluan nasionalis pertama."
    },
    {
        question: "Perjanjian antara Indonesia dan Belanda yang menghasilkan pengakuan de facto wilayah Republik Indonesia atas Jawa, Sumatra, dan Madura adalah...",
        options: ["Perjanjian Linggarjati", "Perjanjian Renville", "Perjanjian Roem-Royen", "Konferensi Malino"],
        correct: 0,
        explanation: "Perjanjian Linggarjati ditandatangani pada November 1946 dan menghasilkan perundingan status wilayah RI."
    },
    {
        question: "Perjanjian yang mengharuskan tentara Republik Indonesia melakukan long march hijrah dari kantong-kantong gerilya ke wilayah Yogyakarta akibat Perjanjian Renville adalah...",
        options: ["Divisi Siliwangi", "TKR", "BKR", "APRIS"],
        correct: 0,
        explanation: "Pasukan TNI termasuk Siliwangi harus hijrah dari Jawa Barat ke Jawa Tengah karena wilayahnya dikuasai Belanda."
    },
    {
        question: "Serangan umum besar-besaran yang dilancarkan TNI dan rakyat pada tanggal 1 Maret 1949 untuk membuktikan bahwa Republik Indonesia masih ada adalah...",
        options: ["Serangan Umum 1 Maret", "Bandung Lautan Api", "Medan Area", "Palagan Ambarawa"],
        correct: 0,
        explanation: "Serangan Umum 1 Maret 1949 berhasil menduduki kota Yogyakarta selama 6 jam di bawah pimpinan Letkol Soeharto."
    },
    {
        question: "Peristiwa Agresi Militer Belanda II yang terjadi pada 19 Desember 1948 menyebabkan ibu kota negara saat itu dipindahkan darurat ke...",
        options: ["Bukittinggi (PDRI)", "Surabaya", "Malang", "Semarang"],
        correct: 0,
        explanation: "Pemerintahan Darurat Republik Indonesia (PDRI) dibentuk di Bukittinggi, Sumatra Barat, di bawah pimpinan Sjafruddin Prawiranegara."
    },
    {
        question: "Hasil dari Konferensi Meja Bundar (KMB) di Den Haag mengubah bentuk negara Republik Indonesia menjadi...",
        options: ["Republik Indonesia Serikat (RIS)", "Negara Kesatuan", "Kerajaan", "Dominion"],
        correct: 0,
        explanation: "Berdasarkan KMB, Indonesia sempat menjadi negara federal (RIS) sebelum kembali ke bentuk NKRI pada 17 Agustus 1950."
    },
    {
        question: "Dekrit Presiden 5 Juli 1959 yang dikeluarkan oleh Ir. Soekarno berisi pembubaran Konstituante dan pemberlakuan kembali UUD...",
        options: ["UUD 1945", "UUDS 1950", "Konstitusi RIS", "UUD Sementara"],
        correct: 0,
        explanation: "Dekrit Presiden 5 Juli 1959 mengakhiri masa Demokrasi Liberal dan kembali menggunakan UUD 1945."
    },
    {
        question: "G30S/PKI merupakan peristiwa kelam pemberontakan yang terjadi pada malam tanggal...",
        options: ["30 September - 1 Oktober 1965", "17 Agustus 1945", "10 November 1945", "20 Mei 1908"],
        correct: 0,
        explanation: "Peristiwa Gerakan 30 September 1965 merenggut nyawa para perwira tinggi TNI Angkatan Darat."
    },
    {
        question: "Surat Perintah Sebelas Maret (Supersemar) tahun 1966 diserahkan oleh Presiden Soekarno kepada...",
        options: ["Letjen Soeharto", "Jenderal Ahmad Yani", "Nasution", "Adam Malik"],
        correct: 0,
        explanation: "Supersemar menjadi tonggak awal beralihnya kekuasaan pemerintahan ke masa Orde Baru di bawah kepemimpinan Soeharto."
    },
    {
        question: "Masa pemerintahan Presiden Soeharto dari tahun 1966 hingga 1998 dikenal dalam sejarah politik Indonesia sebagai masa...",
        options: ["Orde Baru", "Orde Lama", "Reformasi", "Demokrasi Terpimpin"],
        correct: 0,
        explanation: "Era Orde Baru berlangsung selama lebih dari 32 tahun dengan penekanan pada stabilitas nasional dan pembangunan ekonomi."
    },
    {
        question: "Peristiwa mundurnya Presiden Soeharto dari jabatannya pada tanggal 21 Mei 1998 menandai dimulainya era...",
        options: ["Reformasi", "Orde Baru", "Demokrasi Liberal", "Kemerdekaan"],
        correct: 0,
        explanation: "Era Reformasi lahir setelah gelombang demonstrasi besar mahasiswa menuntut perbaikan ekonomi, politik, dan penegakan hukum."
    },
    {
        question: "Kerajaan Kutai di Kalimantan Timur meninggalkan bukti sejarah berupa prasasti yang ditulis dalam huruf...",
        options: ["Pallawa", "Melayu Kuno", "Jawa Kuno", "Arab"],
        correct: 0,
        explanation: "Prasasti Yupa di Kutai menggunakan aksara Pallawa dan bahasa Sanskerta yang berasal dari India Selatan."
    },
    {
        question: "Prasasti Ciaruteun yang memuat telapak kaki Raja Purnawarman ditemukan di daerah...",
        options: ["Bogor", "Jakarta", "Bandung", "Cirebon"],
        correct: 0,
        explanation: "Prasasti Ciaruteun peninggalan Kerajaan Tarumanagara terletak di Ciampea, Kabupaten Bogor."
    },
    {
        question: "Candi Borobudur dan Candi Mendut merupakan peninggalan dari masa pemerintahan wangsa...",
        options: ["Syailendra", "Sanjaya", "Isyana", "Rajasa"],
        correct: 0,
        explanation: "Dinasti Syailendra bercorak Buddha dan membangun banyak candi megah di dataran tinggi Magelang."
    },
    {
        question: "Kitab Negarakertagama yang memuat istilah 'Majapahit' dan susunan pemerintahan kerajaan ditulis oleh...",
        options: ["Mpu Prapanca", "Mpu Tantular", "Mpu Sedah", "Mpu Panuluh"],
        correct: 0,
        explanation: "Kakawin Nagarakretagama dikarang oleh Mpu Prapanca pada masa keemasan Raja Hayam Wuruk."
    },
    {
        question: "Pendiri Kesultanan Mataram Islam yang memindahkan pusat kerajaan ke Plered/Kerta adalah...",
        options: ["Panembahan Senopati / Sultan Agung", "Raden Patah", "Sultan Ageng Tirtayasa", "Fatahillah"],
        correct: 0,
        explanation: "Kesultanan Mataram mencapai puncak kejayaannya di bawah kepemimpinan Sultan Agung Hanyokrokusumo."
    },
    {
        question: "Panglima perang Demak yang berhasil merebut Sunda Kelapa dari tangan Portugis pada tahun 1527 dan mengubah namanya menjadi Jayakarta adalah...",
        options: ["Fatahillah (Syarif Hidayatullah)", "Pati Unus", "Raden Patah", "Sunan Gunung Jati"],
        correct: 0,
        explanation: "Fatahillah mengusir Portugis dari Sunda Kelapa pada 22 Juni 1527 yang kemudian diperingati sebagai hari jadi Jakarta."
    },
    {
        question: "Sistem kerja rodi (kerja paksa) untuk membangun jalan raya di Pulau Jawa diberlakukan pada masa Gubernur Jenderal...",
        options: ["H.W. Daendels", "T.S. Raffles", "Van den Bosch", "J.P. Coen"],
        correct: 0,
        explanation: "Herman Willem Daendels memaksa rakyat pribumi membangun infrastruktur pertahanan militer secara fisik."
    },
    {
        question: "Politik Etis (Politik Balas Budi) yang dicetuskan oleh Conrad Theodore van Deventer berfokus pada tiga program utama, yaitu edukasi, irigasi, dan...",
        options: ["Emigrasi", "Transmigrasi", "Industrialisasi", "Kolonisasi"],
        correct: 0,
        explanation: "Tritunggal Politik Etis meliputi edukasi (pendidikan), irigasi (pengairan), dan emigrasi (perpindahan penduduk)."
    }
];

// Sinkronisasi variabel global agar aman dibaca script utama web
window.questionsData = questionsData;
window.quizData = questionsData;
window.DEFAULT_QUESTIONS = questionsData;
