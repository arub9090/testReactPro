import React from "react";

function Footer() {
    const footerYear= new Date().getFullYear();
  return (
    <footer className="py-12 shadow-xl bg-neutral text-white">
      <div className="flex-1 px-2 mx-2">
        <div className="flex justify-center">
          <div>Copyright &copy; {footerYear} All Rights Reserved </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
