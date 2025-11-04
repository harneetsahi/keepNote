import { Link } from "react-router-dom";
import { NotesIcon } from "../icons/NotesIcon";
// import { Theme } from "./Theme";
// import { Button } from "./Button";

export function Navbar() {
  return (
    <>
      <div className="absolute top-4 left-4">
        <Link to="/" className="">
          <NotesIcon className="size-8  cursor-pointer " />
        </Link>
        {/* <Theme className="w-max absolute top-7 right-8 z-100" size="size-5" /> */}
        {/* <Link to="/login" className="z-100">
          <Button
            variant="primary"
            text="Log in"
            size="md"
            className="w-30 sm:block hidden"
          />
        </Link> */}
      </div>
    </>
  );
}
