import React from 'react'
import { useInView } from 'react-intersection-observer';

export const useButtonListener = (inView) => {

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
}

export const clickHandler = () => {
    navigate(`/posts/${post.id}`);
};
