import React, { useState, useEffect, useMemo, useCallback } from "react";
import Child from "./child";
import CustomHooks from "./custom-hooks";
const HookPage = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log(
      "useEffect - chạy 1 lần duy nhất nếu đối số thứ 2 là mảng rỗng - tương đương componentDidMount bên class"
    );
  }, []);

  useEffect(() => {
    console.log(
      "useEffect - chạy lại nếu đối số thứ 2 là mảng khác rỗng - tương đương componentDidUpdate bên class"
    );
  }, [number]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("useEffect -  - tương đương componentWillUnmount bên class");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const countUp = () => {
    let i = 0;

    while (i < 1000) {
      i++;
    }
    console.log(i);
    return i;
  };

  const countUpMemo = useMemo(() => countUp(), []);
  const renderNoti = () => {
    console.log("renderNoti");
  };
  const renderNotiCallBack = useCallback(() => renderNoti(), []);
  return (
    <div>
      <h3>Number: {number}</h3>
      <h3>Number Up: {countUpMemo}</h3>
      <button
        className="btn btn-my-custom"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Click
      </button>
      <hr />
      <Child renderNoti={renderNotiCallBack} />
      <hr />
      <CustomHooks />
    </div>
  );
};

export default HookPage;
