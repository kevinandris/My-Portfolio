import Navbar from "./Navbar";

const Footer = () => {
  return (
    <div data-testid="footer-border" className="border-t mt-10">
      <Navbar data-testid="footer-navbar" className="flex flex-col gap-5" />
    </div>
  );
};

export default Footer;
