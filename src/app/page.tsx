"use client";
import { useState } from "react";
import Image from "next/image";
import { quizData } from "@/data/quizData";

const divisionDescriptions: Record<string, string> = {
  Fotografi: "Mulai dari belajar pegang kamera, cari momen, sampai ngehasilin foto-foto yang kece abis! Kalau kamu suka dokumentasi momen-momen berharga atau penting, fotografi tempatnya!",
  Videografi: "Bukan cuman belajar cara bikin video, tapi dari konsep, scriptwriting, pensuasanaan, directing, sampai editing juga diterobos! Mau buat video JJ laser mantep? Bisa! Mau buat short video estetik buat dipost di IG? Bisa juga dong, yang penting #enjoybervideo",
  Kineklub: "Sarangnya para sinefil yang letterboxd entrynya udah sampai ratusan. Tempat untuk kamu yang engga cuma pengen nonton film doang tapi pengen bisa belajar memaknai dan mengapresiasi film secara lebih. Suka ngomongin film-film yang jarang ditonton? Atau pengen punya temen nonton bareng? Kineklub jelas tempatnya.",
  PTJKN: "Wadah bagi para skena yang suka menghabiskan akhir pekannya untuk berkunjung ke berbagai pameran. Tempat untuk belajar tidak hanya cara mempresentasikan suatu karya dengan baik, tapi juga perancangan acaranya juga! Kalau kalian merasa memiliki jiwa artistik yang cukup, kami tantang untuk bergabung dengan kami.",
};

export default function QuizPage() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState({
    Fotografi: 0,
    Videografi: 0,
    Kineklub: 0,
    PTJKN: 0,
  });
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerClick = (skorTambahan: typeof scores) => {
    setScores((prevScores) => ({
      Fotografi: prevScores.Fotografi + skorTambahan.Fotografi,
      Videografi: prevScores.Videografi + skorTambahan.Videografi,
      Kineklub: prevScores.Kineklub + skorTambahan.Kineklub,
      PTJKN: prevScores.PTJKN + skorTambahan.PTJKN,
    }));

    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScores({
      Fotografi: 0,
      Videografi: 0,
      Kineklub: 0,
      PTJKN: 0,
    });
    setIsFinished(false);
    setHasStarted(false);
  };

  const highestDivision = isFinished
    ? Object.keys(scores).reduce((a, b) =>
        scores[a as keyof typeof scores] > scores[b as keyof typeof scores] ? a : b
      )
    : "";

  const displayDivisionName = highestDivision === "PTJKN" ? "Pertunjukan" : highestDivision;
  const currentQuestion = quizData[currentIndex];

  return (
    <main className="relative flex flex-col items-center min-h-screen text-zinc-100 bg-zinc-950 font-sans selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Image
          src="/jmmlfm.PNG"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-zinc-950/50 z-0"></div>

      {/* Header dengan padding layar yang lebih lebar (px-6 sm:px-12) */}
      <header className="relative w-full px-6 sm:px-12 md:px-16 py-6 sm:py-10 z-50 flex justify-between items-center max-w-5xl mx-auto">
        <div className="text-xs sm:text-sm font-black tracking-[0.3em] text-yellow-500 uppercase drop-shadow-md">
          JMMLFM
        </div>
        <nav className="flex gap-4 sm:gap-8 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-zinc-300">
          <button onClick={handleRestart} className="hover:text-yellow-500 transition-colors drop-shadow-md">
            Home
          </button>
        </nav>
      </header>

      {/* Kontainer Utama dengan ruang tepi yang lebih lega (px-6 sm:px-12) */}
      <div className="relative z-10 w-full flex-grow flex flex-col items-center justify-center px-6 sm:px-12 md:px-16 pb-24 max-w-4xl mx-auto">
        {!hasStarted ? (
          <div className="flex flex-col items-start text-left w-full mt-4 sm:mt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="w-10 sm:w-12 h-1 bg-yellow-500 mb-6 sm:mb-8 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6 sm:mb-8 text-white max-w-3xl drop-shadow-lg">
              BIDANG LFM APA <br className="hidden sm:block" />
              <span className="text-zinc-300">YANG COCOK BUAT KAMU?</span>
            </h1>
            <button
              onClick={() => setHasStarted(true)}
              className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-yellow-500 text-black font-bold text-xs sm:text-sm uppercase tracking-[0.2em] overflow-hidden rounded-xl transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Mulai</span>
              <div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20 rounded-xl"></div>
            </button>
          </div>
        ) : isFinished ? (
          <div className="w-full flex flex-col items-start animate-in fade-in slide-in-from-bottom-8 duration-700">
            <p className="text-xs sm:text-sm font-bold tracking-[0.3em] text-zinc-300 uppercase mb-3 sm:mb-4 drop-shadow-md">Hasil Analisis</p>
            <h2 className="text-lg sm:text-xl md:text-2xl text-white font-light mb-6 sm:mb-8 drop-shadow-md">
              Kamu direkomendasikan untuk masuk bidang
            </h2>

            <div className="relative mb-8 sm:mb-10 w-full">
              <div className="absolute -inset-4 bg-yellow-500 blur-3xl opacity-20 rounded-full"></div>
              <h1 className="relative text-5xl sm:text-7xl md:text-9xl font-black text-white uppercase tracking-tighter drop-shadow-lg">
                {displayDivisionName}
              </h1>
            </div>

            <div className="border-l-2 border-yellow-500 pl-5 sm:pl-8 max-w-2xl w-full text-left mb-10 sm:mb-12 bg-zinc-950/40 backdrop-blur-sm py-4 pr-4 rounded-r-xl">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-100 font-light">
                {divisionDescriptions[highestDivision]}
              </p>
            </div>

            <button
              onClick={handleRestart}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900/80 backdrop-blur-md border border-zinc-600 text-white font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto text-center"
            >
              Coba Lagi
            </button>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-8 sm:gap-10 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-between items-start md:items-end border-b border-zinc-700/80 pb-4 sm:pb-6">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold tracking-tight text-white max-w-2xl leading-snug drop-shadow-lg">
                {currentQuestion.pertanyaan}
              </h2>
              <div className="flex items-center gap-3 shrink-0 bg-zinc-900/70 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-zinc-700 w-fit">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
                <span className="text-zinc-200 font-mono text-xs sm:text-sm">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(quizData.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            <div
              className={`grid gap-4 sm:gap-6 w-full ${
                currentQuestion.jawaban.some((j) => j.gambar)
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2"
              }`}
            >
              {currentQuestion.jawaban.map((opsi, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(opsi.skor)}
                  className={`group flex flex-col items-start text-left p-4 sm:p-6 md:p-8 border border-zinc-700/80 bg-zinc-950/60 backdrop-blur-md hover:bg-zinc-900/90 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all duration-300 rounded-xl sm:rounded-2xl ${
                    opsi.gambar ? "p-3 sm:p-4 md:p-5" : ""
                  }`}
                >
                  {opsi.gambar && (
                    <div className="w-full relative aspect-[4/3] mb-4 sm:mb-5 overflow-hidden bg-zinc-900/80 rounded-lg sm:rounded-xl border border-zinc-700/50 group-hover:border-yellow-500/40 transition-colors p-1 sm:p-2">
                      <Image
                        src={opsi.gambar}
                        alt={opsi.teks}
                        fill
                        className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex items-start gap-3 sm:gap-4 w-full">
                    <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-zinc-800 border border-zinc-600 text-zinc-300 font-mono text-[10px] sm:text-xs group-hover:bg-yellow-500 group-hover:border-yellow-500 group-hover:text-black transition-colors shrink-0 mt-0.5">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="font-medium tracking-wide text-zinc-100 group-hover:text-white transition-colors text-sm sm:text-base drop-shadow-sm mt-0.5 sm:mt-1">
                      {opsi.teks}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}