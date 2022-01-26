import { useEffect, useState } from "react";
import Button from "../../components/Button";
import PokeCard from "../../components/PokeCard";
import api from "../../config/api";
import Container from "./styles";
import { BsArrowRight } from "react-icons/bs";
import { useContextProvider } from "../../services/context";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../services/api/pokemon";
import axios, { AxiosResponse } from "axios";
import Input from "../../components/Input";
import MyDropzone from "../../components/DropZone";
import Select from "react-select";
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const initialValues = {
  name: "",
  types: [],
  moves: [],
  height: "",
  weight: "",
};

const CreatePokemon = () => {
  const [selectImage, setSelectImage] = useState<Blob | string>("");
  const [loading, setLoading] = useState(false);
  const formik = useFormik<{
    name: string;
    types: Array<{
      value: string;
      label: string;
    }>;
    moves: Array<{
      value: string;
      label: string;
    }>;
    weight: string;
    height: string;
  }>({
    initialValues,
    async onSubmit(values, { resetForm }) {
      try {
        const formData = new FormData();
        console.log(selectImage);
        formData.append("image", selectImage);

        const image = await axios.post<{
          data: {
            url: string;
          };
        }>("https://api.imgbb.com/1/upload", formData, {
          params: {
            expiration: 1440,
            key: "dddae7232e70ff84faa2a780a48052d1",
          },
          headers: {
            "content-type":
              "multipart/form-data; boundary=---011000010111000001101001",
          },
        });
        const types = values.types.map((type) => type.value);
        const moves = values.moves.map((type) => type.value);
        await api.post("pokemon", {
          name: values.name,
          imageUrl: image.data.data.url,
          typeIds: types,
          moveIds: moves,
          order_evolution: 1,
          height: values.height,
          weight: values.weight,
        });
        resetForm();
        alert("Pokemon adicionado");
        setLoading(false);
      } catch {
        setLoading(false);
      }
    },
  });

  const [types, setTypes] = useState<
    Array<{
      value: number;
      label: string;
    }>
  >([]);
  const [moves, setMoves] = useState<
    Array<{
      value: number;
      label: string;
    }>
  >([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get<
        Array<{
          _id: number;
          name: string;
          color: string;
        }>
      >("types");

      const responseMoves = await api.get<
        Array<{
          _id: number;
          name: string;
          description: string;
        }>
      >("move");

      const newMoves = responseMoves.data.map((type) => ({
        value: type._id,
        label: type.name,
      }));

      const newTypes = response.data.map((type) => ({
        value: type._id,
        label: type.name,
      }));
      console.log(newTypes);

      setTypes(newTypes);
      setMoves(newMoves);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <div>
        <div className="container_image">
          <MyDropzone
            selectFile={selectImage}
            setSelectedFileUrl={setSelectImage}
          />
        </div>
        <div>
          <div className="row">
            <div>
              <h2>Nome</h2>
              <Input
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />
            </div>
          </div>
          <div className="row">
            <div>
              <h2>Altura</h2>
              <Input
                value={formik.values.height}
                onChange={formik.handleChange}
                name="height"
              />
            </div>
            <div>
              <h2>Peso</h2>
              <Input
                value={formik.values.weight}
                onChange={formik.handleChange}
                name="weight"
              />
            </div>
          </div>
          <div className="move_container">
            <h2>Tipos</h2>
            <Select
              options={types}
              isMulti
              onChange={(options) => formik.setFieldValue("types", options)}
            />
          </div>
          <div className="move_container">
            <h2>Movimentos</h2>
            <Select
              options={moves}
              isMulti
              onChange={(options) => formik.setFieldValue("moves", options)}
            />
          </div>
          <div className="row">
            <Button
              loading={loading}
              type="button"
              onClick={() => {
                if (loading) {
                  return;
                }
                setLoading(true);
                formik.handleSubmit();
              }}
            >
              {loading ? <AiOutlineLoading3Quarters /> : "Enviar"}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreatePokemon;
