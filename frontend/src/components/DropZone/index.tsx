import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Container from "./styles";

interface props {
  selectFile: any;
  setSelectedFileUrl: any;
}

const MyDropzone: React.FC<props> = ({ selectFile, setSelectedFileUrl }) => {
  const [file, setFile] = useState("");
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    console.log(file);
    if (!file) {
      return;
    }
    setSelectedFileUrl(file);
    const urlFile = URL.createObjectURL(file);
    setFile(urlFile);

    setSelectedFileUrl(file);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Container existFile={Boolean(file)}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {file ? <img src={file} /> : <p>Adicione o arquivo aqui.</p>}
      </div>
    </Container>
  );
};

export default MyDropzone;
