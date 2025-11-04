import { Link } from "react-router-dom";
import { Button } from "../components/Button";

import { NotesIcon } from "../icons/NotesIcon";
import { HomePageSvg } from "../icons/homePageSvg";
import { Navbar } from "../components/Navbar";

// text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-400

function Home() {
  return (
    <>
      <Navbar />
      <section className=" ">
        <div className="absolute top-0 right-0 z-0">
          <HomePageSvg size="sm:size-100 size-60" />
        </div>
        <div className=" flex flex-col gap-10 justify-center items-center sm:pt-16 pt-10 z-20 ">
          <div className="relative">
            <h1
              className="mb-3 lg:text-[94px] sm:text-[72px] text-5xl transition-all text-center  text-black"
              style={{ fontFamily: "Italiana" }}
            >
              KeepNote
            </h1>
            <h2
              className=" sm:text-[22px] text-sm text-center "
              style={{ fontFamily: "italiana" }}
            >
              one place for all your notes. write and share.
            </h2>
            <div className="absolute lg:-right-23 sm:-right-10 right-2  lg:-top-1 sm:-top-3 -top-7 transition-all ">
              <NotesIcon className="lg:size-20 sm:size-18  size-10" />
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center z-20 shadow-md rounded-xl backdrop-blur-xs ">
            <div className="pt-8">
              <img
                className="sm:w-lg w-sm rounded-lg "
                src="public/addanote.png"
                alt="add a note"
              />
            </div>
            <div className="flex md:flex-row flex-col md:justify-between items-center lg:w-200  w-full">
              <img
                className="lg:w-100 md:w-100 w-80 rounded-lg"
                src="public/notes.png"
                alt="notes"
              />
              <img
                className="lg:w-50 md:w-40 w-32 h-full rounded-lg"
                src="public/sharenotes.png"
                alt="share notes"
              />
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-5  transition-all w-65 sm:w-max">
            <Link to="/signup">
              <Button
                variant="tertiaryDark"
                text="Get started"
                size="md"
                className="hover:scale-103 sm:w-36 w-full "
              />
            </Link>
            <Link to="/login">
              <Button
                variant="primary"
                text="Log in"
                size="md"
                className="sm:w-36 w-full  "
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
