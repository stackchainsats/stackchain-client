import { useState } from "react";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

import styled from "styled-components";

const ComponentsWrapper = styled.div``;

const Components = () => {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <ComponentsWrapper>
      <h1>Components</h1>
      <TextInput onChange={(e) => setText(e.target.vaue)} value={text} />
      <TextInput
        onChange={(e) => setText(e.target.vaue)}
        value={text}
        label={"this one has a label"}
      />
      <Button>button text</Button>
      <Button variation="green">button text</Button>
      <Button variation="primary">primary button</Button>
      <Button variation="black" showLoader={true}>
        primary loader button
      </Button>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      <Modal
        showModal={showModal}
        headerTitle="Modal Title"
        bodyContent={<p>Body content</p>}
        submitText="Submit"
        onClose={() => setShowModal(false)}
      />
      <select>
        <option>Apples</option>
        <option selected>Pineapples</option>
        <option>Chocklate</option>
        <option>Pancakes</option>
      </select>
    </ComponentsWrapper>
  );
};
export default Components;
