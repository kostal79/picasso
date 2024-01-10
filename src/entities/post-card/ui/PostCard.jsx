import React from "react";
import styles from "./PostCard.module.css";
import { useNavigate } from "react-router-dom";

export const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(-1)};
  return (
    <div className={styles.card}>
      <div className={styles["card__number"]}>№ {post.id}</div>
      <h1 className={styles["card__title"]}>Title: {post.title}</h1>
      <div className={styles["card__body"]}>Body: {post.body}</div>
      <button className={styles["card__button"]} onClick={clickHandler}>
        back
      </button>
    </div>
  );
};
