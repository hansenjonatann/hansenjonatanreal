import React from "react";

const Form = () => {
  return (
    <div className="p-4 max-w-md mx-auto  rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Kontak</h2>
      <form>
        <div className="mb-4 ">
          <label htmlFor="name" className="block font-medium mb-1">
            Nama:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-500 focus:outline-none"
            placeholder="Masukkan nama Anda"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-500 focus:outline-none"
            placeholder="Masukkan email Anda"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium mb-1">
            Pesan:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-500 focus:outline-none"
            placeholder="Tulis pesan Anda..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-secondary py-2 rounded-md hover:bg-opacity-50 font-bold transition duration-300"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};

export default Form;
