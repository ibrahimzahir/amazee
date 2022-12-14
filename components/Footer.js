import Link from "next/link";
import React from "react";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="w-full py-16 border-t">
      <div className="md:px-12 lg:px-28">
        <div className="container m-auto space-y-6 text-gray-600">
          <ul
            role="list"
            className="py-4 flex flex-col gap-4 items-center justify-center sm:flex-row sm:gap-8"
          >
            <Link href="/" role="listitem">
              <a className="text-sm">Home</a>
            </Link>
            <Link href="#" role="listitem">
              <a className="text-sm">About</a>
            </Link>
          </ul>
          <div className="w-max m-auto flex items-center justify-between space-x-4">
            <a href="tel:+243996660436" aria-label="call">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 m-auto"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                ></path>
              </svg>
            </a>
            <a href="mailto:hello@mail.com" aria-label="send mail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 m-auto"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
              </svg>
            </a>
            <a href="#" title="facebook" target="blank" aria-label="facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 m-auto"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
              </svg>
            </a>
          </div>

          <div className="text-center">
            <span className="text-sm tracking-wide">
              Copyright ?? {year} amazee <span id="year"></span> | All right
              reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
