import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";

import { Button } from "../../common.styles";
import { Background, ModalWrapper } from "./styles";

export default function DeleteConfirmationModal({
  showModal,
  setShowModal,
  handleDelete,
}) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 150,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <div>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper>
              <p className="confirmation-text">
                Are you sure you want to delete this blog ?
              </p>
              <div className="buttons-area">
                <Button
                  width="100px"
                  onClick={() => setShowModal((prev) => !prev)}
                >
                  No
                </Button>
                <Button width="100px" bg="#a60000" onClick={handleDelete}>
                  Yes
                </Button>
              </div>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </div>
  );
}
