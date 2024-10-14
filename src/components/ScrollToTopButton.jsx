import cls from "classnames";
import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollToTopButtonVisiblity = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScrollToTopButtonVisiblity);
    return () => {
      window.removeEventListener("scroll", handleScrollToTopButtonVisiblity);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={cls("scroll-to-top", { isVisible: showButton })}
        onClick={handleScrollToTop}
      >
        <i className="fa-solid fa-angle-up"></i>
      </div>
    </>
  );
}

export default ScrollToTopButton;
