const Hero = () => {
  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="font-semibold text-base text-primary md:text-xl ">
              Halo Semua👋, saya
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                Hansen Jonatan
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
              Student & <span className="text-dark">Content Creator</span>
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">
              Seorang mahaiswa yang tertarik di bidang teknologi , dan mempunyai
              impian menjadi seorang{" "}
              <span className="text-dark font-semibold">
                Fullstack Web Developer dan{" "}
                <span className="text-primary font-semibold">
                  Mobile Developer
                </span>
              </span>
            </p>
            <a
              href=""
              className="text-base text-white font-semibold bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out"
            >
              Hubungi Saya
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2 ">
            <div className="mt-10 relative lg:mt-9 lg:right-0">
              <img
                src="image/profile.png"
                alt=""
                className="max-w-full mx-auto"
              />
              <span className="absolute -bottom-20 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#818cf8"
                    d="M31.1,-55.3C37.4,-44.3,37.7,-30.8,47,-19C56.3,-7.1,74.6,3.1,73.7,10.7C72.8,18.4,52.8,23.4,39.4,28.4C26.1,33.4,19.4,38.5,11.6,41.8C3.8,45,-5.1,46.4,-17,47.7C-29,48.9,-43.9,49.9,-53.6,43.7C-63.3,37.5,-67.9,23.9,-70.1,9.9C-72.3,-4,-72.2,-18.5,-64.6,-27.2C-57,-35.8,-41.9,-38.8,-29.9,-47.2C-17.9,-55.6,-8.9,-69.5,1.7,-72.2C12.4,-74.9,24.8,-66.4,31.1,-55.3Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
