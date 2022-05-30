import React, { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Circle from "./components/Circle";
import Dialog from "./components/Dialog";
import "./components/Button.scss";
import "./components/Dialog.scss";

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog((dialog) => true);
  };
  const onCancel = () => {
    console.log("취소");
    setDialog((dialog) => false);
  };
  const onConfirm = () => {
    console.log("확인이요");
    setDialog((dialog) => false);
  };

  return (
    <>
      <div className="App">
        <div className="buttons">
          <Button size="large" onClick={() => console.log("클릭")}>
            BUTTON
          </Button>
          <Button>BUTTON</Button>
          <Button size="small">BUTTON</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="gray">
            BUTTON
          </Button>
          <Button color="gray">BUTTON</Button>
          <Button size="small" color="gray">
            BUTTON
          </Button>
        </div>
        <div className="buttons">
          <Button size="large" color="pink">
            BUTTON
          </Button>
          <Button color="pink">BUTTON</Button>
          <Button size="small" color="pink">
            BUTTON
          </Button>
        </div>
        <div className="buttons">
          <Button size="large" color="blue" outline="outline">
            BUTTON
          </Button>
          <Button size="medium" color="gray" outline="outline">
            BUTTON
          </Button>
          <Button size="small" color="pink" outline="outline">
            BUTTON
          </Button>
        </div>
        <div className="buttons">
          <Button size="large" color="blue" fullWidth="fullWidth">
            BUTTON
          </Button>
          <Button size="large" color="gray" fullWidth="fullWidth">
            BUTTON
          </Button>
          <Button size="large" color="pink" fullWidth="fullWidth">
            BUTTON
          </Button>
        </div>
        <div>
          <CheckBox checked={check} onChange={onChange}>
            다음 약관에 모두 동의
          </CheckBox>
        </div>
        <div>
          <Circle />
        </div>
        <div>
          <br />
          <Button
            size="large"
            color="pink"
            fullWidth="fullWidth"
            onClick={onClick}
          >
            삭제
          </Button>
          <Dialog
            title="정말로 삭제하시겠습니까?"
            confirmText="확인"
            cancelText="취소"
            onCancel={onCancel}
            onConfirm={onConfirm}
            visible={dialog}
          >
            데이터를 정말로 삭제하시겠습니까?
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default App;
