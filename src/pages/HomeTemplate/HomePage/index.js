import Loader from "components/Loader";
import React from "react";
import styled from "styled-components";
import { Button, DatePicker } from "antd";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};
// const App = () => (
//   <Space direction="vertical">
//     <DatePicker onChange={onChange} />
//     <DatePicker onChange={onChange} picker="week" />
//     <DatePicker onChange={onChange} picker="month" />
//     <DatePicker onChange={onChange} picker="quarter" />
//     <DatePicker onChange={onChange} picker="year" />
//   </Space>
// );

const Wraper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const HomePage = () => {
  return (
    <Wraper>
      <Title>Hello World!</Title>
      <Button type="primary">Click</Button>
      <DatePicker onChange={onChange} />
      <Loader />
    </Wraper>
  );
};

export default HomePage;
