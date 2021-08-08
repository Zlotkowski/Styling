import React, { useEffect, useReducer } from "react";

const initialState = {
  posX: 0,
  posY: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_posX":
      return { ...state, posX: action.payload };
    case "SET_posY":
      return { ...state, posY: action.payload };
    default:
      return state;
  }
};

export default function AnimatedFcn(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   useEffect(() => {
  //     document.addEventListener("mousemove", (event) => setNewPosition(event));
  //   }, []);

  useEffect(() => {
    // initiate the event handler
    document.addEventListener("mousemove", (event) => setNewPosition(event));
    return () => {
      // this will clean up the event every time the component is re-rendered
      document.removeEventListener("mousemove", (event) =>
        this.setNewPosition(event)
      );
    };
  }, []);

  const setNewPosition = (event) => {
    const { clientX, clientY } = event;
    const { ratioX, ratioY } = props;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const posX = clientX - centerX;
    const posY = clientY - centerY;

    dispatch({ type: "SET_posX", payload: posX * -ratioX });
    dispatch({ type: "SET_posY", payload: posY * -ratioY });
  };

  const { className, src } = props;
  const { posX, posY } = state;

  return (
    <img
      className={className}
      src={src}
      style={{
        transform: `translate(${posX}px, ${posY}px)`,
      }}
      alt=""
    />
  );
}
