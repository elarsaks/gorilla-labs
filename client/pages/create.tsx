import styled from "styled-components";
import React, { useState } from "react";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  min-width: 40vw;
  margin: 10vh auto;
  padding: 20px;
  padding-top: 0px;
  border-radius: 8px;
  border: 1px solid aqua;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Input = styled.input`
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 8px;
  border: 1px solid aqua;
  font-size: 16px;

  &:focus {
    border-color: #a4c2f4;
    outline: none;
  }

  &[type="file"] {
    border: none;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 8px;
  border: 1px solid aqua;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;

  &:focus {
    border-color: #a4c2f4;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const CreateNFT: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, description, image });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        Create NFT
      </h1>{" "}
      {/* Header styled white */}
      <Input
        type="text"
        placeholder="NFT Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        placeholder="NFT Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input type="file" onChange={handleImageChange} />
      <Button type="submit">Create NFT</Button>
    </Form>
  );
};

export default CreateNFT;
