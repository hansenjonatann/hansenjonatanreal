import React from "react";

function AboutMe() {
  return (
    <div className="md:pt-4 bg-secondary md:py-24 h-screen md:w-screen md:h-auto pt-6">
      <h1 className="text-3xl md:text-2xl md:pt-6 font-bold text-accsent  text-center">
        Tentang Saya
      </h1>

      <div className="flex items-center py-4 flex-wrap w-screen">
        <div className="w-1/2">
          <img src="image/hansenjonatan.png" alt="" className="mx-24 md:mb-16 md:mx-32" width="300" />
        </div>
        <div className="md:w-1/2 relative md:text-left text-center md:mx-0 mx-8 md:text-lg text-xl">
          <p className="font-medium md:mr-28  ">
            Hi , nama saya Hansen Jonatan. Saya merupakan salah satu mahasiswa
            aktif program studi Sistem Informasi di{" "}
            <a href="www.uib.ac.id" target="_blank" className="font-bold">
              Universitas Internasional Batam
            </a>
            . Saya mempunyai mimpi menjadi seorang Fullstack Web Developer ,
            jadi saya mempelajari web programming secara otodidak.Pada saat ini
            saya sedang membangun sebuah komunitas yang bernama{" "}
            <a
              href="https://hjcodin.vercel.app"
              target="_blank"
              className="font-bold"
            >
              HJ Codin
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
