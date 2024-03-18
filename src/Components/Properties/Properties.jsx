import file from "../../assets/File.png";
import { Link } from "react-router-dom";
import "./Properties.css";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { addfile } from "../../Redux/Slices/FileSlice";
import Try from "../Try/Try";
const Properties = () => {
  const dispatch = useDispatch();

  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const fileList = files.map((file) => (
    <img
      src={file.preview}
      alt={file.name}
      style={{ width: "200px", height: "150px" }}
    />
  ));
  const create = () => {
    files.map((file) => {
      dispatch(addfile(file.preview));
    });
  };

  return (
    <>
      <form className="formule">
        <div>
          <label>Keyword</label> <br />
          <input type="text" placeholder="The Starry Night" />
        </div>
        <div>
          <div className="genre_size">
            <div className="genre">
              <label>Genre</label>
              <br />
              <input type="text" placeholder="Selecte Genre" />
            </div>
            <div className="size">
              <label>size</label>
              <br />
              <input type="text" placeholder="size" />
            </div>
          </div>
          <div className="buttons">
            <button>Abstract</button>
            <button>Sci-fi</button>
            <button>Abstract</button>
            <button> + </button>
          </div>
        </div>
        <div className="couleures">
          <div className="white"></div>
          <div className="blue"></div>
          <div className="red"></div>
          <div className="orange"></div>
          <div className="pink"></div>
          <div className="yellow"></div>
          <div className="gray"></div>
          <div className="plus"> + </div>
        </div>
      </form>
      <label htmlFor="">sample</label>
      <div className="drop" {...getRootProps()}>
        <input {...getInputProps()} />

        {files.length !== 0 ? (
          <div>{fileList}</div>
        ) : (
          <>
            <img src={file} alt="" />
            <h3>
              Drag and drop or <span> Browse </span>
            </h3>
            <p>Support all image formats</p>
          </>
        )}
      </div>

      <button className="btn" onClick={create}>
        {" "}
        Create{" "}
      </button>
    </>
  );
};

export default Properties;
