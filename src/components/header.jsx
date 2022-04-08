import React from 'react'
import { AiOutlineLogin, AiOutlineSearch } from 'react-icons/ai'
const header = () => {
  return (
    <header className="shadow-md shadow-dark/10">
      <div className="flex  relative  py-6 items-center px-8 md:px-12  justify-between">
        {/* logo section */}

        <section className="flex items-center">
          <img src="/logo.png" alt="logo" className="w-18 h-10" />
        </section>
        <section className="border  flex items-center border-secondary/40 rounded-md  text-secondary">
          <input
            type="search"
            placeholder="search here..."
            className=" outline-none px-4 py-1"
          />
          <button className="bg-dark/20 px-4  h-full py-2 rounded-tr-md rounded-br-md">
            <AiOutlineSearch className="w-5 h-5 text-secondary" />
          </button>
        </section>
        <section className="">
          <a
            href="/login"
            className="py-3 px-10 rounded-full inline-block text-main text-sm  bg-secondary"
          >
            Login <AiOutlineLogin className="inline w-5 h-5" />
          </a>
        </section>
      </div>
    </header>
  )
}

export default header
