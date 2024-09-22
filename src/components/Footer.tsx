import heart from "../assets/undraw_heart.svg";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full pb-3 text-white text-sm">
      <div className="flex justify-center items-center">
        Made with
        <img src={heart} alt="heart image" width="14px" className="m-1" />
        by Rishika.
      </div>
    </footer>
  );
}

export default Footer;
