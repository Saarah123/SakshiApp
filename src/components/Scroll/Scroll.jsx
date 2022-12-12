import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
export const Scroll = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {visible && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "50px",
            fontWeight: "100",
            borderRadius: "50px",
            border: "none",
            backgroundColor: "rgb(245, 72, 9)",
            color: "white",
          }}
          onClick={scrollToTop}
        >
          ^
        </button>
      )}
    </div>
  );
};
