import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center flex-col gap-y-5 lg:flex-row mt-16 lg:mt-0">
      <div className="font-bold text-5xl space-y-2 mb-12 text-left w-full \">
        <h1>Hi! 👋</h1>
        <h1>
          Saya{" "}
          <span className="relative cursor-pointer">
            {/* Teks dengan efek hover dan gradient */}
            {Array.from("Gemi Yudhia").map((char, index) => (
              <span
                key={index}
                className="inline-block transition-transform duration-300 hover:scale-125 hover:-translate-y-2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                  {char}
                </span>
              </span>
            ))}
          </span>
        </h1>
        <p>Frontend Developer</p>
        <div className="mt-12">
          <Link to="/projects" className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg">
            Proyek Saya
          </Link>
        </div>
      </div>
      <div className="text-center lg:w-1/2">
        <h1 className="font-semibold text-xl mb-2">Tentang Saya</h1>
        <p className="text-justify">
          Halo! Saya <span className="font-semibold">Gemi Yudhia</span>, seorang
          web developer yang bersemangat dan terus belajar. Meski belum memiliki
          pengalaman kerja formal, saya memiliki kemampuan dasar dan telah
          membuat proyek sederhana menggunakan HTML, CSS, JavaScript, serta
          framework modern seperti React. Saya percaya pada pentingnya detail
          dan estetika dalam setiap solusi yang saya buat.
        </p>
      </div>
    </div>
  );
};
