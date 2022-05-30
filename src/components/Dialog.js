import React from "react";
import Button from "./Button";
import styled from "styled-components";

const MyButton = styled.div`
  margin-left: 0.5rem;
`;

function Dialog({
  title,
  children,
  confirmText,
  cancelText,
  onCancel,
  onConfirm,
  visible,
}) {
  if (!visible) return;
  return (
    <div className="darkBackground">
      <div className="dialogBlock">
        <h3>{title}</h3>
        <p>{children}</p>
        <div className="buttonGroup">
          <Button color="gray" size="large" onClick={onCancel}>
            {cancelText}
          </Button>
          <MyButton>
            <Button color="pink" size="large" onClick={onConfirm}>
              {confirmText}
            </Button>
          </MyButton>
        </div>
      </div>
    </div>
  );
}

Dialog.defaultProps = {
  confirmText: "확인",
  cancelText: "취소",
  visible: "hide",
};

export default Dialog;
