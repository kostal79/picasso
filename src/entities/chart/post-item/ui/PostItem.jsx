import React, { useEffect, useRef } from "react";
import styles from "./PostItem.module.css";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

export const PostItem = ({ post }) => {
  const { ref, inView } = useInView();
  const navigate = useNavigate();
  const textRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    function buttonVisability() {
      if (textRef.current && buttonRef.current) {
        if (textRef.current.scrollWidth > textRef.current.clientWidth) {
          buttonRef.current.style.display = "block";
        } else {
          buttonRef.current.style.display = "none";
        }
      }
    }
    buttonVisability();
    window.addEventListener("resize", buttonVisability);
    return () => window.removeEventListener("resize", buttonVisability);
  }, [inView]);

  const clickHandler = () => {
    navigate(`/${post.id}`);
  };

  return (
    <li className={styles["postitem__container"]} ref={ref}>
      {inView && (
        <div className={styles["postitem"]}>
          <span className={styles["postitem__number"]}>{post.id}</span>
          <span className={styles["postitem__text"]} ref={textRef}>
            <span className={styles["postitem__title"]}>
              {post.title[0].toUpperCase() + post.title.slice(1)}{" "}
            </span>
            <span className={styles["postitem__body"]}>
              {post.body[0].toUpperCase() + post.body.slice(1)}
            </span>
          </span>
          <button
            className={styles["postitem__button"]}
            onClick={clickHandler}
            ref={buttonRef}
          >
            просмотр
          </button>
        </div>
      )}
    </li>
  );
};
