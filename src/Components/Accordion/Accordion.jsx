import React, { useRef } from "react";
import "./style.scss";

export function Accordion({ title, label }) {
  const accordion = useRef();
  const panel = useRef();
  const drop = () => {
    if (panel.current.style.maxHeight) {
      panel.current.style.maxHeight = null;
    } else {
      panel.current.style.maxHeight = panel.current.scrollHeight + "px";
    }
  };

  return (
    <div className="accordion__container">
      <button
        class="accordion"
        ref={accordion}
        onClick={() => {
          drop();
        }}
      >
        {title}
      </button>
      <div class="panel" ref={panel}>
        <p>{label}</p>
      </div>
    </div>
  );
}

Accordion.defaultProps = {
  title: "Lorem",
  label:
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
};
