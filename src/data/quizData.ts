export interface QuizQuestion {
  id: number;
  pertanyaan: string;
  jawaban: {
    teks: string;
    gambar?: string;
    skor: {
      Fotografi: number;
      Videografi: number;
      Kineklub: number;
      PTJKN: number;
    };
  }[];
}

export const quizData: QuizQuestion[] = [
  {
    "id": 1,
    "pertanyaan": "Salam kenal ya! Hal pertama yang biasanya kamu perhatiin dari orang itu…",
    "jawaban": [
      {
        "teks": "Penampilan mereka",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 0, "PTJKN": 1 }
      },
      {
        "teks": "Gaya berbicara",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 1, "PTJKN": 0 }
      },
      {
        "teks": "Gerak-gerik mereka",
        "skor": { "Fotografi": 1, "Videografi": 0, "Kineklub": 0, "PTJKN": 0 }
      },
      {
        "teks": "Sifat mereka",
        "skor": { "Fotografi": 0, "Videografi": 1, "Kineklub": 0, "PTJKN": 0 }
      }
    ]
  },
  {
    "id": 2,
    "pertanyaan": "Pilih outfit yang paling kamu suka!",
    "jawaban": [
      {
        "teks": "1",
        "gambar": "/outfit/outfit1.jpg",
        "skor": { "Fotografi": 1, "Videografi": 0, "Kineklub": 0, "PTJKN": 0 }
      },
      {
        "teks": "2",
        "gambar": "/outfit/outfit2.jpg",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 1, "PTJKN": 0 }
      },
      {
        "teks": "3",
        "gambar": "/outfit/outfit3.jpg",
        "skor": { "Fotografi": 0, "Videografi": 1, "Kineklub": 0, "PTJKN": 0 }
      },
      {
        "teks": "4",
        "gambar": "/outfit/outfit4.jpg",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 0, "PTJKN": 1 }
      }
    ]
  },
  {
    "id": 3,
    "pertanyaan": "Saat tiba di mall, hal apa yang kamu bakal lakuin pertama?",
    "jawaban": [
      {
        "teks": "Mau cari event ongoing",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 0, "PTJKN": 1 }
      },
      {
        "teks": "Cari buku di perpus ah!",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 1, "PTJKN": 0 }
      },
      {
        "teks": "Ke bioskop kuyy",
        "skor": { "Fotografi": 0, "Videografi": 1, "Kineklub": 0, "PTJKN": 0 }
      },
      {
        "teks": "Cari spot foto estetik dong!",
        "skor": { "Fotografi": 1, "Videografi": 0, "Kineklub": 0, "PTJKN": 0 }
      }
    ]
  },
  {
    "id": 4,
    "pertanyaan": "Pilih meme yang paling kamu!",
    "jawaban": [
      {
        "teks": "1",
        "gambar": "/meme/1.jpg",
        "skor": { "Fotografi": 0, "Videografi": 1, "Kineklub": 0, "PTJKN": 1 }
      },
      {
        "teks": "2",
        "gambar": "/meme/2.jpg",
        "skor": { "Fotografi": 1, "Videografi": 0, "Kineklub": 0, "PTJKN": 0 }
      },
      {
        "teks": "3",
        "gambar": "/meme/3.jpg",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 1, "PTJKN": 0 }
      },
      {
        "teks": "4",
        "gambar": "/meme/4.jpg",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 0, "PTJKN": 1 }
      }
    ]
  },
  {
    "id": 5,
    "pertanyaan": "Lagi cape gawe nih, jajan minum yuk!",
    "jawaban": [
      {
        "teks": "Gas ngopi!",
        "skor": { "Fotografi": 0, "Videografi": 1, "Kineklub": 0, "PTJKN": 0 }
      },
      {
        "teks": "Maunya milk tea..",
        "skor": { "Fotografi": 1, "Videografi": 0, "Kineklub": 0, "PTJKN": 0 }
      },
      {
        "teks": "Pengen yang seger-seger ah!",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 0, "PTJKN": 1 }
      },
      {
        "teks": "Sukanya air putih.",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 1, "PTJKN": 0 }
      }
    ]
  },
  {
    "id": 6,
    "pertanyaan": "Kamu paling suka konsumsi media apa?",
    "jawaban": [
      {
        "teks": "Reels/Tik-Tok/Shorts",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 0, "PTJKN": 1 }
      },
      {
        "teks": "Twitter/Threads",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 1, "PTJKN": 0 }
      },
      {
        "teks": "Film/Dokumenter",
        "skor": { "Fotografi": 0, "Videografi": 1, "Kineklub": 0, "PTJKN": 0 }
      },
      {
        "teks": "Instagram/Facebook post",
        "skor": { "Fotografi": 1, "Videografi": 0, "Kineklub": 0, "PTJKN": 0 }
      }
    ]
  },
  {
    "id": 7,
    "pertanyaan": "Kira-kira isi repost-an Tik-Tok/reels terakhirmu apa sih?",
    "jawaban": [
      {
        "teks": "Meme brainrot",
        "skor": { "Fotografi": 0, "Videografi": 1, "Kineklub": 0, "PTJKN": 0 }
      },
      {
        "teks": "Inspirational quotes",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 1, "PTJKN": 0 }
      },
      {
        "teks": "Hobi/interests kamu",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 0, "PTJKN": 1 }
      },
      {
        "teks": "Hal yang relate sama keseharianmu",
        "skor": { "Fotografi": 1, "Videografi": 0, "Kineklub": 0, "PTJKN": 0 }
      }
    ]
  },
  {
    "id": 8,
    "pertanyaan": "kalau kamu nonton film biasanya perhatiin apa sih?",
    "jawaban": [
      {
        "teks": "Konsepnya keren banget!",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 0, "PTJKN": 1 }
      },
      {
        "teks": "Jujur alurnya rapi..",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 1, "PTJKN": 0 }
      },
      {
        "teks": "Cinematographynya cakepp!",
        "skor": { "Fotografi": 0, "Videografi": 1, "Kineklub": 0, "PTJKN": 0 }
      },
      {
        "teks": "Pemilihan latarnya keren-keren!",
        "skor": { "Fotografi": 1, "Videografi": 0, "Kineklub": 0, "PTJKN": 0 }
      }
    ]
  },
  {
    "id": 9,
    "pertanyaan": "Pilih karakter conan favorit kamu!",
    "jawaban": [
      {
        "teks": "Mouri Kogoro",
        "gambar": "/karakter/Mouri Kogoro.jpg",
        "skor": { "Fotografi": 1, "Videografi": 0, "Kineklub": 0, "PTJKN": 0 }
      },
      {
        "teks": "Edogawa Conan",
        "gambar": "/karakter/Edogawa Conan.jpg",
        "skor": { "Fotografi": 0, "Videografi": 1, "Kineklub": 0, "PTJKN": 0 }
      },
      {
        "teks": "Kudo Shinichi",
        "gambar": "/karakter/Kudo Shinichi.jpg",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 1, "PTJKN": 0 }
      },
      {
        "teks": "Mouri Ran",
        "gambar": "/karakter/Mouri Ran.jpg",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 0, "PTJKN": 1 }
      }
    ]
  },
  {
    "id": 10,
    "pertanyaan": "Udah dibilangin #JMMLFM nih.. kamu tetep daftar gakk?",
    "jawaban": [
      {
        "teks": "Larangan adalah perintah",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 1, "PTJKN": 0 }
      },
      {
        "teks": "Daftar dongg",
        "skor": { "Fotografi": 1, "Videografi": 0, "Kineklub": 0, "PTJKN": 0 }
      },
      {
        "teks": "Siapa sih larang-larang, gw mah tetep daftar!",
        "skor": { "Fotografi": 0, "Videografi": 1, "Kineklub": 0, "PTJKN": 0 }
      },
      {
        "teks": "Engga-enggaa (tapi tetep daftar)",
        "skor": { "Fotografi": 0, "Videografi": 0, "Kineklub": 0, "PTJKN": 1 }
      }
    ]
  },
];