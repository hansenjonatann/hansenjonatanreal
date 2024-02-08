import certificateData from '../certificate.json'

const Certificate = () => {

  return (
    <section
      id="certificate"
      className="pt-36 pb-32 md:pt-6   md:pb-6 bg-slate-100"
    >
      <h2 className="text-center text-4xl text-primary font-bold mt-16">
        Certificates
      </h2>
      <p className="font-medium text-md text-secondary text-center md:text-lg">
             Below are some of the certificates I received
            </p>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  gap-8 mt-8 md:ml-6 md:mr-4">
        {certificateData.map((item) => {
          return (
            <div className=" shadow-md px-4" key={item.id}>
              <img src={item.image} />
              <h1 className="text-dark text-center text-xl font-bold pt-2">
                {item.title}
              </h1>
              <h3 className="text-dark font-bold mt-2 ">
                From: {item.from}
              </h3>

              <small className="text-dark ">
                Date obtained:   <span className='font-bold'> {item.dateOfAchieve}</span>
              </small>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certificate;
