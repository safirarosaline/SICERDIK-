// Bank Soal Sejarah Indonesia - 150 Soal Lengkap (Format Indeks Angka SiCerdik)
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
        options: ["Sarekat Islam", "Budi Utomo", "Indische Partij", "Perhimpunan Indonesia"],
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
        explanation: "BPUPKI (Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia) bertugas menyelidiki dan merumuskan dasar negara Indonesia."
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
        options: ["Soetomo, Tjipto, dan Ki Hajar Dewantara", "Douwes Dekker, Tjipto, dan Ki Hajar Dewantara", "Soekarno, Hatta, dan Sjahrir", "Tjokroaminoto, Agus Salim, dan Setiabudi"],
        correct: 1,
        explanation: "Tiga Serangkai pendiri Indische Partij adalah E.F.E. Douwes Dekker, Tjipto Mangoenkoesoemo, dan Ki Hajar Dewantara."
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
    },
    {
        question: "Siapakah penasihat militer Jepang yang memprakarsai berdirinya pembela tanah air (PETA) di Indonesia?",
        options: ["Rachmat bin Moehsin / K. Yanagawa", "Tan Malaka", "Ahmad Soebardjo", "Sayuti Melik"],
        correct: 0,
        explanation: "PETA dibentuk atas usul Gatot Mangkupraja dan didukung oleh perwira tinggi militer Jepang."
    },
    {
        question: "Tanggal berdirinya organisasi militer PETA yang menjadi cikal bakal kekuatan bersenjata Indonesia adalah...",
        options: ["3 Oktober 1943", "17 Agustus 1945", "1 Juni 1945", "28 Oktober 1928"],
        correct: 0,
        explanation: "Tentara Pembela Tanah Air (PETA) resmi dibentuk berdasarkan Maklumat Osamu Seidan No. 44 pada 3 Oktober 1943."
    },
    {
        question: "Nama sidang BPUPKI yang kedua dilaksanakan pada tanggal 10 sampai 17 Juli 1945 membahas tentang...",
        options: ["Batang Tubuh UUD dan Rancangan Undang-Undang Dasar", "Dasar Negara", "Pilih Presiden", "Sistem Pajak"],
        correct: 0,
        explanation: "Sidang kedua BPUPKI fokus membahas bentuk negara, wilayah negara, kewarganegaraan, serta rancangan UUD."
    },
    {
        question: "Panitia kecil yang beranggotakan 9 orang dan berhasil merumuskan Piagam Jakarta (Jakarta Charter) dinamakan...",
        options: ["Panitia Sembilan", "Panitia Kecil", "PPKI", "BPUPKI"],
        correct: 0,
        explanation: "Panitia Sembilan diketuai oleh Ir. Soekarno dan merumuskan naskah mukaddimah hukum dasar yang disebut Piagam Jakarta."
    },
    {
        question: "Sila pertama dalam Piagam Jakarta sebelum akhirnya diubah pada tanggal 18 Agustus 1945 berbunyi...",
        options: ["Ketuhanan dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya", "Ketuhanan Yang Maha Esa", "Kemanusiaan yang adil dan beradab", "Persatuan Indonesia"],
        correct: 0,
        explanation: "Atas usul tokoh Indonesia Timur demi persatuan bangsa, sila pertama diubah menjadi Ketuhanan Yang Maha Esa."
    },
    {
        question: "Sidang PPKI pada tanggal 18 Agustus 1945 menghasilkan tiga keputusan penting, kecuali...",
        options: ["Membentuk kabinet parlementer pertama", "Mengesahkan UUD 1945", "Memilih Soekarno sebagai Presiden dan Hatta sebagai Wakil Presiden", "Membentuk Komite Nasional Indonesia Pusat (KNIP)"],
        correct: 0,
        explanation: "Sidang PPKI mengesahkan UUD 1945, memilih presiden/wapres, dan membentuk KNIP untuk membantu tugas presiden."
    },
    {
        question: "Tokoh golongan muda yang mendesak Ir. Soekarno agar segera memproklamasikan kemerdekaan tanpa menunggu janji Jepang adalah...",
        options: ["Sutan Sjahrir dan Wikana", "Soekarno dan Hatta", "Ahmad Soebardjo", "Sayuti Melik"],
        correct: 0,
        explanation: "Golongan muda mendesak kemerdekaan segera karena mendengar berita kekalahan Jepang atas Sekutu."
    },
    {
        question: "Radio penyiaran rahasia di Bandung yang pertama kali menyebarluaskan berita Proklamasi ke seluruh penjuru dunia adalah...",
        options: ["Radio Hoso Kyokai / Kantor Berita Domei", "RRI", "BBC London", "Voice of America"],
        correct: 0,
        explanation: "Kantor berita Domei dan radio pemancar berhasil menyiarkan naskah proklamasi meskipun dijaga ketat tentara Jepang."
    },
    {
        question: "Perang puputan di Bali yang dipimpin oleh I Gusti Ngurah Rai melawan Belanda dikenal dengan nama...",
        options: ["Puputan Margarana", "Puputan Badung", "Puputan Klungkung", "Perang Jagaraga"],
        correct: 0,
        explanation: "Puputan Margarana terjadi di Tabanan, Bali, di mana pasukan Ciung Wanara bertempur habis-habisan sampai titik darah penghabisan."
    },
    {
        question: "Tokoh pahlawan nasional dari Maluku yang memimpin perlawanan di pulau Saparua melawan kekuasaan kolonial Belanda adalah...",
        options: ["Pattimura (Thomas Matulessy)", "Martha Christina Tiahahu", "Sultan Baabullah", "Pangeran Antasari"],
        correct: 0,
        explanation: "Kapitan Pattimura memimpin penyerbuan Benteng Duurstede di Saparua pada tahun 1817."
    },
    {
        question: "Perang Banjar yang berkecamuk di Kalimantan Selatan dipimpin oleh pahlawan nasional bernama...",
        options: ["Pangeran Antasari", "Pangeran Diponegoro", "Sultan Hasanuddin", "Teuku Umar"],
        correct: 0,
        explanation: "Pangeran Antasari memimpin rakyat Banjar dengan semboyan 'Haram Melarat, Pahandem Matan'."
    },
    {
        question: "Sultan dari Kesultanan Ternate yang berhasil mengusir bangsa Portugis dari wilayah Maluku dijuluki sebagai...",
        options: ["Sultan Baabullah (Penguasa 72 Pulau)", "Sultan Hasanuddin", "Sultan Iskandar Muda", "Sultan Ageng Tirtayasa"],
        correct: 0,
        explanation: "Sultan Baabullah memperluas kekuasaan Ternate dan sukses mengepung serta mengusir Portugis dari Maluku."
    },
    {
        question: "Kerajaan Islam di Aceh yang mencapai masa keemasan di bawah pemerintahan Sultan Iskandar Muda adalah...",
        options: ["Kesultanan Aceh Darussalam", "Kesultanan Samudera Pasai", "Kesultanan Perlak", "Kesultanan Malaka"],
        correct: 0,
        explanation: "Kesultanan Aceh menjadi pusat kejayaan Islam di Sumatra dan kekuatan maritim utama di Selat Malaka pada abad ke-17."
    },
    {
        question: "Sistem pemerintahan kolonial Inggris di Indonesia (1811–1816) memperkenalkan kebijakan ekonomi berupa...",
        options: ["Sistem Sewa Tanah (Landrent)", "Tanam Paksa (Cultuurstelsel)", "Monopoli VOC", "Kultivasi Wajib"],
        correct: 0,
        explanation: "Raffles menghapus sistem penyerahan wajib dan menggantinya dengan sistem sewa tanah (landrent system)."
    },
    {
        question: "Undang-undang agraria (Agrarische Wet) dikeluarkan oleh pemerintah kolonial Belanda pada tahun...",
        options: ["1870", "1830", "1908", "1928"],
        correct: 0,
        explanation: "Undang-Undang Agraria 1870 membuka peluang bagi pihak swasta asing untuk menanamkan modal di sektor perkebunan."
    },
    {
        question: "Surat kabar pertama berbahasa Melayu yang dipelopori oleh Tirto Adhi Soerjo sebagai media pergerakan pribumi adalah...",
        options: ["Medan Prijaji", "Bintang Timoer", "Oetoesan Hindia", "De Expres"],
        correct: 0,
        explanation: "Medan Prijaji terbit di Bandung dan menjadi corong suara kritis terhadap ketidakadilan pemerintah kolonial."
    },
    {
        question: "Tokoh pendiri Sarekat Islam (awalnya Sarekat Dagang Islam) di Solo adalah...",
        options: ["H. Samanhudi", "H.O.S. Tjokroaminoto", "K.H. Ahmad Dahlan", "K.H. Hasyim Asy'ari"],
        correct: 0,
        explanation: "H. Samanhudi mendirikan perkumpulan ini untuk melindungi pedagang pribumi dari dominasi pedagang asing."
    },
    {
        question: "Organisasi massa Islam terbesar di Indonesia yang didirikan oleh K.H. Hasyim Asy'ari di Jombang pada tahun 1926 adalah...",
        options: ["Nahdlatul Ulama (NU)", "Muhammadiyah", "Sarekat Islam", "Tarikat Islam"],
        correct: 0,
        explanation: "Nahdlatul Ulama didirikan para ulama pesantren untuk menjaga paham Ahlussunnah wal Jamaah."
    },
    {
        question: "Kongres Perempuan Indonesia pertama kali diselenggarakan pada tanggal 22 Desember 1928 di kota...",
        options: ["Yogyakarta", "Jakarta", "Bandung", "Surabaya"],
        correct: 0,
        explanation: "Kongres Perempuan Indonesia I di Yogyakarta menyatukan berbagai organisasi wanita untuk memperjuangkan hak perempuan."
    },
    {
        question: "Pahlawan nasional wanita yang memperjuangkan hak pendidikan kaum wanita melalui sekolah 'Kautamaan Istri' di Bandung adalah...",
        options: ["Dewi Sartika", "R.A. Kartini", "Cut Nyak Dien", "Maria Walanda Maramis"],
        correct: 0,
        explanation: "Raden Dewi Sartika merintis pendidikan bagi perempuan Sunda agar mandiri dan terampil."
    },
    {
        question: "Gedung tempat diselenggarakannya Kongres Pemuda II yang melahirkan Sumpah Pemuda kini diabadikan sebagai Museum...",
        options: ["Sumpah Pemuda", "Kebangkitan Nasional", "Nasional Indonesia", "Perjuangan"],
        correct: 0,
        explanation: "Gedung di Jalan Kramat Raya No. 106 Jakarta kini menjadi Museum Sumpah Pemuda."
    },
    {
        question: "Gubernur Jenderal pendiri kota Batavia di atas reruntuhan kota Jayakarta pada tahun 1619 adalah...",
        options: ["Jan Pieterszoon Coen", "Daendels", "Raffles", "Van den Bosch"],
        correct: 0,
        explanation: "J.P. Coen mendirikan kota benteng kolonial bernama Batavia sebagai pusat operasional VOC."
    },
    {
        question: "Sistem monopoli perdagangan rempah-rempah di Maluku oleh VOC dilakukan dengan cara menebang tanaman rempah berlebih yang disebut hak...",
        options: ["Hongi / Extirpasi", "Contingenten", "Verplichte Leverantie", "Landrent"],
        correct: 0,
        explanation: "Hak ekstirpasi adalah kebijakan menebang tanaman rempah milik rakyat agar harganya tetap tinggi di pasaran dunia."
    },
    {
        question: "Pemberontakan petani di Banten menentang pemerintah kolonial pada tahun 1888 dipimpin oleh seorang ulama bernama...",
        options: ["K.H. Tubagus Ismail / Ki Bagus", "Pangeran Diponegoro", "Imam Bonjol", "Sultan Ageng"],
        correct: 0,
        explanation: "Pemberontakan Petani Banten 1888 dipimpin oleh para kiai lokal."
    },
    {
        question: "Perjanjian Linggarjati yang diadakan pada November 1946 dimediasi oleh seorang diplomat asal Inggris bernama...",
        options: ["Lord Killearn", "Frank Graham", "Renville", "Van Mook"],
        correct: 0,
        explanation: "Lord Killearn menjadi penengah dalam perundingan antara delegasi Indonesia (Sutan Sjahrir) dan Belanda di Linggarjati."
    },
    {
        question: "Komisi Tiga Negara (KTN) yang dibentuk PBB untuk menyelesaikan sengketa Indonesia-Belanda terdiri dari negara...",
        options: ["Australia, Belgia, dan Amerika Serikat", "Inggris, Prancis, dan Belanda", "Jepang, Jerman, dan Italia", "India, Mesir, dan Australia"],
        correct: 0,
        explanation: "Australia dipilih Indonesia, Belgia dipilih Belanda, dan Amerika Serikat sebagai penengah netral."
    },
    {
        question: "Perundingan Roem-Royen pada tahun 1949 menghasilkan kesepakatan pembebasan pemimpin RI dan kembalinya pemerintah ke kota...",
        options: ["Yogyakarta", "Jakarta", "Bandung", "Surakarta"],
        correct: 0,
        explanation: "Hasil Roem-Royen membuat ibu kota kembali ke Yogyakarta setelah sempat diduduki militer Belanda."
    },
    {
        question: "Tokoh pejuang diplomasi Indonesia yang memimpin delegasi dalam Konferensi Meja Bundar (KMB) adalah...",
        options: ["Drs. Mohammad Hatta", "Ir. Soekarno", "Sutan Sjahrir", "Agus Salim"],
        correct: 0,
        explanation: "Mohammad Hatta memimpin delegasi Indonesia di Den Haag hingga kedaulatan diakui secara resmi."
    },
    {
        question: "Irian Barat akhirnya resmi kembali ke pangkuan Ibu Pertiwi Republik Indonesia melalui Penentuan Pendapat Rakyat (Pepera) pada tahun...",
        options: ["1969", "1945", "1950", "1975"],
        correct: 0,
        explanation: "Pepera 1969 mengukuhkan integrasi wilayah Irian Barat ke dalam wilayah teritorial NKRI."
    },
    {
        question: "Gerakan Non-Blok (GNB) yang dipelopori oleh Ir. Soekarno bersama pemimpin dunia lainnya didirikan melalui Konferensi Tingkat Tinggi (KTT) pertama di...",
        options: ["Beograd, Yugoslavia", "Bandung, Indonesia", "Kairo, Mesir", "Havana, Kuba"],
        correct: 0,
        explanation: "KTT GNB pertama diadakan di Beograd pada tahun 1961 setelah diawali oleh semangat Konferensi Asia Afrika 1955."
    },
    {
        question: "Konferensi Asia Afrika (KAA) yang menghasilkan Dasasila Bandung diselenggarakan pada bulan April tahun...",
        options: ["1955", "1945", "1960", "1949"],
        correct: 0,
        explanation: "KAA berlangsung di Gedung Merdeka, Bandung, menginspirasi kemerdekaan bangsa-bangsa di Asia dan Afrika."
    },
    {
        question: "Pemberontakan PRRI/Permesta pada tahun 1950-an terjadi di wilayah...",
        options: ["Sumatra dan Sulawesi", "Maluku dan Papua", "Jawa Barat dan Jawa Tengah", "Kalimantan Selatan"],
        correct: 0,
        explanation: "PRRI di Sumatra dan Permesta di Sulawesi menuntut otonomi dan pemerataan pembangunan pusat-daerah."
    },
    {
        question: "Operasi militer penumpasan gerakan separatis RMS (Republik Maluku Selatan) dipimpin oleh seorang perwira bernama...",
        options: ["Kolonel A.E. Kawilarang / Letkol Slamet Riyadi", "Soeharto", "Nasution", "Ahmad Yani"],
        correct: 0,
        explanation: "Pemerintah mengirim ekspedisi militer ke Ambon."
    },
    {
        question: "Pemberontakan DI/TII di Jawa Barat dipimpin oleh tokoh bernama...",
        options: ["Sekarmaji Marijan Kartosuwiryo", "Kahar Muzakkar", "Daeng Abdul Fatah", "Ibnu Hajar"],
        correct: 0,
        explanation: "S.M. Kartosuwiryo memproklamasikan Negara Islam Indonesia (NII) melalui DI/TII di wilayah Garut."
    },
    {
        question: "Pemilu pertama dalam sejarah Republik Indonesia yang demokratis diselenggarakan pada tahun...",
        options: ["1955", "1945", "1960", "1971"],
        correct: 0,
        explanation: "Pemilu 1955 diadakan untuk memilih anggota DPR dan Konstituante dan dipuji sebagai pemilu terbersih."
    },
    {
        question: "Masa Demokrasi Terpimpin di Indonesia berlangsung secara resmi pada kurun waktu tahun...",
        options: ["1959 - 1965", "1945 - 1950", "1950 - 1959", "1966 - 1998"],
        correct: 0,
        explanation: "Demokrasi Terpimpin dimulai sejak keluarnya Dekrit Presiden 1959 hingga meletusnya peristiwa G30S 1965."
    },
    {
        question: "Tritura (Tri Tuntutan Rakyat) yang diserukan oleh mahasiswa pada tahun 1966 berisi tuntutan berikut, kecuali...",
        options: ["Retas Ekonomi", "Bubarkan PKI", "Bersihkan kabinet dari unsur PKI", "Turunkan harga sandang pangan"],
        correct: 0,
        explanation: "Tritura meliputi: 1) Bubarkan PKI, 2) Bersihkan kabinet dari unsur PKI, 3) Turunkan harga."
    },
    {
        question: "Pelaksanaan Pemilu pertama pada masa Orde Baru diselenggarakan pada tahun...",
        options: ["1971", "1977", "1982", "1955"],
        correct: 0,
        explanation: "Pemilu Orde Baru pertama kali diadakan pada tahun 1971."
    },
    {
        question: "Tragedi Trisakti yang menjadi pemicu puncak runtuhnya rezim Orde Baru terjadi pada tanggal...",
        options: ["12 Mei 1998", "21 Mei 1998", "30 September 1965", "11 Maret 1966"],
        correct: 0,
        explanation: "Penembakan mahasiswa Universitas Trisakti pada 12 Mei 1998 menyulut kemarahan nasional hingga Soeharto mundur."
    },
    {
        question: "Wakil Presiden yang dilantik menggantikan Presiden Soeharto pada tanggal 21 Mei 1998 adalah...",
        options: ["B.J. Habibie", "Abdurrahman Wahid", "Megawati Soekarnoputri", "Susilo Bambang Yudhoyono"],
        correct: 0,
        explanation: "B.J. Habibie mengambil sumpah jabatan presiden ketiga RI dan memulai masa transisi reformasi."
    },
    {
        question: "Referendum Timor Timur yang berujung pada lepasnya wilayah tersebut dari Indonesia terjadi pada masa pemerintahan Presiden...",
        options: ["B.J. Habibie", "Soeharto", "Abdurrahman Wahid", "Joko Widodo"],
        correct: 0,
        explanation: "Jajak pendapat di Timor Timur difasilitasi PBB pada tahun 1999 di era kepresidenan B.J. Habibie."
    },
    {
        question: "Kerajaan Majapahit mencapai puncak kejayaan ekonomi, politik, dan wilayah nusantara di bawah kekuasaan raja...",
        options: ["Hayam Wuruk", "Raden Wijaya", "Tribhuwana Tunggadewi", "Jayanegara"],
        correct: 0,
        explanation: "Raja Hayam Wuruk didampingi Mahapatih Gajah Mada membawa Majapahit mencapai masa keemasan Nusantara."
    },
    {
        question: "Candi Prambanan selain dikenal sebagai tempat ibadah Hindu juga lekat dengan legenda percintaan rakyat tentang...",
        options: ["Roro Jonggrang dan Bandung Bondowoso", "Sangkuriang dan Dayang Sumbi", "Ken Arok dan Ken Dedes", "Ande Ande Lumut"],
        correct: 0,
        explanation: "Legenda Roro Jonggrang dan seribu candi melekat erat pada sejarah situs Candi Prambanan."
    },
    {
        question: "Pendiri Kerajaan Singasari yang berasal dari kalangan rakyat biasa dan merebut takhta dari Tunggul Ametung adalah...",
        options: ["Ken Arok", "Anusapati", "Rangga Rajasa", "Kertanegara"],
        correct: 0,
        explanation: "Ken Arok mendirikan Wangsa Rajasa dan menjadi raja pertama Singasari."
    },
    {
        question: "Raja terakhir Singasari yang terkenal dengan wawasan politik ekspansi cakrawala mandala ke luar Jawa adalah...",
        options: ["Kertanegara", "Ken Arok", "Anusapati", "Jayakatwang"],
        correct: 0,
        explanation: "Kertanegara mengirim Ekspedisi Pamalayu untuk memperkuat pertahanan maritim."
    },
    {
        question: "Prasasti Talang Tuwo peninggalan Kerajaan Sriwijaya yang memuat doa pembangunan taman suksana ditemukan di kota...",
        options: ["Palembang", "Jambi", "Lampung", "Bengkulu"],
        correct: 0,
        explanation: "Prasasti Talang Tuwo berangka tahun 684 M ditemukan di kaki bukit Siguntang, Palembang."
    },
    {
        question: "Situs prasejarah tempat penemuan fosil manusia purba jenis Pithecanthropus erectus oleh Eugene Dubois di Jawa Timur adalah...",
        options: ["Trinil, Ngawi", "Sangiran, Sragen", "Wajak, Tulungagung", "Flores"],
        correct: 0,
        explanation: "Eugene Dubois menemukan fosil manusia kera berjalan tegak di pinggir Sungai Bengawan Solo di Trinil."
    },
    {
        question: "Pusat situs purbakala Sangiran yang diakui dunia sebagai situs fosil manusia purba terlengkap terletak di kabupaten...",
        options: ["Sragen dan Karanganyar", "Ngawi", "Pacitan", "Wonosobo"],
        correct: 0,
        explanation: "Kubah Sangiran menyimpan ribuan fosil manusia purba dan fauna purba berusia ratusan ribu tahun."
    },
    {
        question: "Masa bercocok tanam dalam periodesasi sejarah prasejarah Indonesia ditandai dengan revolusi kebudayaan berupa...",
        options: ["Food Producing (menghasilkan makanan sendiri)", "Food Gathering (mengumpulkan makanan)", "Nomaden", "Berburu tingkat lanjut"],
        correct: 0,
        explanation: "Manusia purba mulai hidup menetap dan mengolah alam sekitar dengan bercocok tanam."
    },
    {
        question: "Hasil kebudayaan Megalitikum berupa meja batu untuk meletakkan sesaji pemujaan roh nenek moyang disebut...",
        options: ["Dolmen", "Menhir", "Sarkofagus", "Punden Berundak"],
        correct: 0,
        explanation: "Dolmen adalah meja batu tempat menaruh sesaji atau tempat pemujaan roh leluhur."
    },
    {
        question: "Bangunan megalitikum berupa tugu batu tegak yang didirikan untuk memperingati orang yang sudah mati dinamakan...",
        options: ["Menhir", "Dolmen", "Kubur Peti Batu", "Waruga"],
        correct: 0,
        explanation: "Menhir merupakan tiang atau tugu batu tunggal yang banyak ditemukan di berbagai situs megalitikum."
    },
    {
        question: "Perjanjian bongaya yang merugikan Kesultanan Gowa-Tallo dan menguntungkan VOC ditandatangani pada tahun...",
        options: ["1667", "1619", "1755", "1830"],
        correct: 0,
        explanation: "Perjanjian Bongaya memaksa Sultan Hasanuddin mengakui monopoli perdagangan VOC di Makassar."
    },
    {
        question: "Perjanjian Giyanti (1755) membagi wilayah Kesultanan Mataram Islam menjadi dua bagian, yaitu...",
        options: ["Kasunanan Surakarta dan Kesultanan Yogyakarta", "Kasultanan Demak dan Pajang", "Kesultanan Banten dan Cirebon", "Surakarta dan Madura"],
        correct: 0,
        explanation: "Perjanjian Giyanti memecah Mataram menjadi dua kekuasaan berkat intrik politik VOC."
    },
    {
        question: "Kerajaan Sunda Pajajaran mencapai masa pemerintahan gemilang di bawah kepemimpinan raja...",
        options: ["Sri Baduga Maharaja (Prabu Siliwangi)", "Prabu Kian Santang", "Tegar Beriman", "Darmawangsa"],
        correct: 0,
        explanation: "Prabu Siliwangi memimpin Pajajaran dengan makmur sebagaimana tercatat dalam prasasti Batutulis."
    },
    {
        question: "Sumpah Palapa yang diucapkan Gajah Mada dicurahkan dalam bentuk karya sastra peninggalan Majapahit bernama Kitab...",
        options: ["Pararaton", "Sutasoma", "Negarakertagama", "Arjunawiwaha"],
        correct: 0,
        explanation: "Kitab Pararaton mencatat riwayat raja-raja Tumapel dan Majapahit serta ikrar Sumpah Palapa."
    },
    {
        question: "Benteng pertahanan kokoh yang dibangun VOC di Batavia untuk melindungi pusat pemerintahannya dinamakan...",
        options: ["Benteng Batavia (Kastil Batavia)", "Benteng Duurstede", "Benteng Rotterdam", "Benteng Vredeburg"],
        correct: 0,
        explanation: "Kastil Batavia berfungsi sebagai pusat militer dan administrasi utama VOC di Nusantara."
    },
    {
        question: "Gubernur Jenderal Hindia Belanda yang memelopori sistem desentralisasi dan politik etis di awal abad ke-20 adalah...",
        options: ["Alexander Willem Frederik Idenburg", "Van den Bosch", "Daendels", "Raffles"],
        correct: 0,
        explanation: "Politik Etis mulai dijalankan secara sistematis pada masa pemerintahan awal abad ke-20."
    },
    {
        question: "Peristiwa Rengasdengklok terjadi pada tanggal...",
        options: ["16 Agustus 1945", "17 Agustus 1945", "15 Agustus 1945", "18 Agustus 1945"],
        correct: 0,
        explanation: "Soekarno-Hatta diamankan para pemuda ke Rengasdengklok pada pagi hari tanggal 16 Agustus 1945."
    },
    {
        question: "Naskah teks Proklamasi yang autentik dan ditulis tangan langsung oleh Ir. Soekarno dinamakan naskah...",
        options: ["Proklamasi Tulisan Tangan / Autentik", "Proklamasi Ketikan", "Konsep Resmi", "Piagam Asli"],
        correct: 0,
        explanation: "Naskah asli tulisan tangan Soekarno sempat dibuang ke tempat sampah sebelum diselamatkan oleh B.M. Diah."
    },
    {
        question: "Kota di Jawa Tengah yang menjadi saksi bisu penyerahan kedaulatan militer Sekutu melalui Palagan Ambarawa adalah...",
        options: ["Ambarawa", "Semarang", "Magelang", "Salatiga"],
        correct: 0,
        explanation: "Palagan Ambarawa dipimpin oleh Kolonel Sudirman melawan tentara Sekutu."
    },
    {
        question: "Peristiwa perobekan bagian biru bendera Belanda di Hotel Yamato Surabaya terjadi pada tanggal...",
        options: ["19 September 1945", "10 November 1945", "17 Agustus 1945", "28 Oktober 1928"],
        correct: 0,
        explanation: "Rakyat Surabaya merobek warna biru pada bendera Belanda (Merah-Putih-Biru) menjadi bendera Merah Putih."
    },
    {
        question: "Peristiwa penumpasan pemberontakan PKI Madiun terjadi pada tahun...",
        options: ["1948", "1965", "1950", "1955"],
        correct: 0,
        explanation: "Pemberontakan FDR/PKI di Madiun dipimpin oleh Muso dan Amir Sjarifuddin saat RI sedang menghadapi Agresi Militer."
    },
    {
        question: "Panglima Besar TNI pertama yang dianugerahi gelar Jenderal Besar dengan taktik perang gerilya menghadapi agresi militer adalah...",
        options: ["Jenderal Soedirman", "Ahmad Yani", "Soeharto", "A.H. Nasution"],
        correct: 0,
        explanation: "Jenderal Soedirman memimpin perang gerilya meski dalam kondisi sakit parah keluar masuk hutan."
    },
    {
        question: "Tokoh pejuang wanita asal Sumatra Barat yang gugur dalam Perang Padri melawan pasukan kolonial adalah...",
        options: ["Siti Manggopoh", "Cut Nyak Dien", "R.A. Kartini", "Dewi Sartika"],
        correct: 0,
        explanation: "Siti Manggopoh memimpin perlawanan rakyat terhadap aturan belasting (pajak) kolonial."
    },
    {
        question: "Sistem pemerintahan parlementer di Indonesia resmi berakhir dan diganti sistem presidensial setelah dikeluarkannya...",
        options: ["Dekrit Presiden 5 Juli 1959", "Konstitusi RIS", "Maklumat Pemerintah 1945", "Supersemar"],
        correct: 0,
        explanation: "Dekrit Presiden membubarkan Konstituante dan mengembalikan UUD 1945."
    },
    {
        question: "Organisasi pergerakan Budi Utomo mengadakan kongres pertamanya di kota...",
        options: ["Yogyakarta", "Jakarta", "Solo", "Bandung"],
        correct: 0,
        explanation: "Kongres pertama Budi Utomo diadakan di Yogyakarta pada bulan Oktober 1908."
    },
    {
        question: "Tokoh pendiri Perhimpunan Indonesia di negeri Belanda yang handal dalam bidang ekonomi dan politik adalah...",
        options: ["Drs. Mohammad Hatta", "Ir. Soekarno", "Sutan Sjahrir", "Douwes Dekker"],
        correct: 0,
        explanation: "Mohammad Hatta aktif memimpin Perhimpunan Indonesia dan menulis pleidoi 'Indonesia Free'."
    },
    {
        question: "Perdana Menteri Indonesia pertama yang memimpin kabinet parlementer pada masa awal kemerdekaan adalah...",
        options: ["Sutan Sjahrir", "Mohammad Hatta", "Amir Sjarifuddin", "Wilopo"],
        correct: 0,
        explanation: "Sutan Sjahrir diangkat sebagai Perdana Menteri pertama RI pada November 1945."
    },
    {
        question: "Kabinet Indonesia yang menjatuhkan kebijakan devaluasi mata uang dan membatalkan hasil KMB secara sepihak adalah...",
        options: ["Kabinet Ali Sastroamidjojo I", "Kabinet Natsir", "Kabinet Sukiman", "Kabinet Burhanuddin Harahap"],
        correct: 0,
        explanation: "Kabinet Ali I sukses menyelenggarakan KAA 1955 dan membatalkan hasil KMB."
    },
    {
        question: "Pemilu kedua di Indonesia yang direncanakan pada masa Orde Baru diselenggarakan secara rutin setiap kurun waktu...",
        options: ["5 tahun sekali", "4 tahun sekali", "6 tahun sekali", "3 tahun sekali"],
        correct: 0,
        explanation: "Pemilu legislatif dan perhelatan MPR/DPR diatur secara periodik setiap 5 tahun."
    },
    {
        question: "Pusat pemerintahan Kerajaan Sriwijaya berdasarkan teori sejarawan Coedes terletak di daerah aliran sungai...",
        options: ["Musi, Palembang", "Barito, Kalimantan", "Brantas, Jawa", "Mahakam"],
        correct: 0,
        explanation: "George Coedes mempublikasikan letak pusat Sriwijaya berada di Palembang, Sumatra Selatan."
    },
    {
        question: "Prasasti peninggalan Kerajaan Tarumanagara yang ditulis dalam bentuk puisi berirama anustubh berjumlah sebanyak...",
        options: ["7 buah prasasti", "4 buah prasasti", "14 buah prasasti", "2 buah prasasti"],
        correct: 0,
        explanation: "Tujuh prasasti utama Tarumanagara ditemukan tersebar di Bogor, Jakarta, dan Lebak."
    },
    {
        question: "Masa prasejarah ketika alat-alat terbuat dari batu yang diasah halus (neolithikum) sering disebut sebagai masa...",
        options: ["Revolusi Kebudayaan", "Zaman Paleolithikum", "Zaman Megalitikum", "Zaman Logam"],
        correct: 0,
        explanation: "Zaman Neolitikum disebut revolusi kebudayaan karena pergeseran besar pola hidup manusia."
    },
    {
        question: "Sistem kepercayaan kuno yang meyakini bahwa benda-benda di alam memiliki kekuatan gaib atau roh disebut...",
        options: ["Animisme", "Dinamisme", "Totemisme", "Pithecanthropus"],
        correct: 0,
        explanation: "Animisme adalah kepercayaan terhadap roh nenek moyang atau makhluk halus yang mendiami alam."
    },
    {
        question: "Kepercayaan kuno yang memuja benda-benda tertentu seperti pohon besar atau batu besar karena dianggap memiliki kekuatan magis adalah...",
        options: ["Dinamisme", "Animisme", "Polytheisme", "Monotheisme"],
        correct: 0,
        explanation: "Dinamisme adalah kepercayaan bahwa segala sesuatu mempunyai tenaga atau kekuatan gaib."
    },
    {
        question: "Gedung Merdeka di Bandung yang menjadi tempat utama Konferensi Asia Afrika dulunya bernama gedung...",
        options: ["Sociëteit Concordia", "Bioskop Majestic", "Hotel Savoy Homann", "Concordia Hall"],
        correct: 0,
        explanation: "Gedung Sociëteit Concordia merupakan tempat rekreasi elite kolonial Belanda yang kini jadi Museum KAA."
    },
    {
        question: "Tokoh pejuang wanita asal Sulawesi Tenggara yang berjuang melawan kolonial di daerah koloni adalah...",
        options: ["Opu Daeng Risadju", "Cut Nyak Dien", "Martha Christina", "Siti Manggopoh"],
        correct: 0,
        explanation: "Opu Daeng Risadju adalah pahlawan nasional wanita asal Luwu, Sulawesi Selatan."
    },
    {
        question: "Perjanjian pertahanan militer dan ekonomi antara Indonesia dan Jepang pasca kemerdekaan diatur dalam kerangka...",
        options: ["Tidak ada perjanjian militer karena Indonesia merdeka penuh", "Perjanjian Linggarjati", "KMB", "Pakta Warsawa"],
        correct: 0,
        explanation: "Kemerdekaan Indonesia diperoleh atasjuangan bangsa sendiri tanpa ikatan militer asing."
    },
    {
        question: "Kota pelabuhan penting di pesisir utara Jawa tempat lahirnya Wali Songo dan pusat Kesultanan Demak adalah...",
        options: ["Demak / Jepara", "Tuban", "Surabaya", "Cirebon"],
        correct: 0,
        explanation: "Demak berkembang menjadi pusat penyebaran agama Islam di tanah Jawa."
    },
    {
        question: "Prasasti Kedukan Bukit (683 M) yang menceritakan perjalanan suci Siddhayatra peninggalan Kerajaan Sriwijaya ditemukan di...",
        options: ["Palembang (Sumatra Selatan)", "Jambi", "Lampung", "Bangka"],
        correct: 0,
        explanation: "Prasasti Kedukan Bukit ditulis dalam bahasa Melayu Kuno menggunakan aksara Pallawa."
    }
];

// Sinkronisasi variabel global agar aman dibaca script utama web
window.questionsData = questionsData;
window.quizData = questionsData;
window.DEFAULT_QUESTIONS = questionsData;
