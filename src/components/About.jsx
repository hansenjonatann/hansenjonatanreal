import Youtube from "../Icons/Youtube";
import Github from "../Icons/Github";
import Instagram from "../Icons/Instagram";
import Linkedin from "../Icons/Linkedin";
import Twitter from "../Icons/Twitter";

const About = () => {
  return (
    <div>
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold text-primary uppercase text-lg mb-3">
                Tentang Saya
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">
                Yuk, belajar web programming di HJ Codin
              </h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                HJ Codin adalah sebuah bisnis yang saya dirikan untuk membantu pengguna dalam belajar pemograman web
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-2xl text-dark mb-4 lg:text-3xl lg:pt-10">
                Mari Berteman
              </h3>
              <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                Saya adalah tipe orang yang terbuka , jika ada saran atau masukkan untuk saya dan website ini silahkan hubungi saya di sosial media di bawah ini!
              </p>
              <div className="flex items-center">
                <a
                  href="https://youtube.com/@hjcodin"
                  target="__blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Youtube />
                </a>
                <a
                  href="https://instagram.com/hansenjonatann"
                  target="__blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Instagram />
                </a>
                <a
                  href="https://github.com/hansenjonatann"
                  target="__blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Github />
                </a>
                <a
                  href="https://twitter.com/hansenjonatann"
                  target="__blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Twitter />
                </a>
                <a
                  href="https://linkedin.com/hansenjonatann"
                  target="__blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
