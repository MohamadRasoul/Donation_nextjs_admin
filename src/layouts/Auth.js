import React from "react";


export default function Auth({ children }) {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full min-h-screen py-20">
          <div
            className="absolute top-0 w-full h-full bg-no-repeat bg-blueGray-800 bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  );
}
