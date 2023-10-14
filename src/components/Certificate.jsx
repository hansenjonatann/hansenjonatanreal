import certificateData from '../certificate.json'

const Certificate = () => {

  return (
    <section
      id="certificate"
      className="pt-4 md:pt-6  pb-8 md:pb-6 bg-slate-800"
    >
      <h2 className="text-center text-4xl text-primary font-bold">
        Certificate
      </h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  gap-8 mt-8 md:ml-6 md:mr-4">
        {certificateData.map((item) => {
          return (
            <div className="bg-secondary shadow-md p-4" key={item.id}>
              <img src={item.image} />
              <h1 className="text-white text-center text-xl font-bold pt-2">
                {item.title}
              </h1>
              <h3 className="text-secondary font-bold mt-2 ">
                Dari: {item.from}
              </h3>

              <small className="text-white ">
                Tanggal diperoleh: {item.dateOfAchieve}
              </small>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certificate;
