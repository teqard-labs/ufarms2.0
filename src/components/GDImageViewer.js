  import React, { useEffect, useState } from "react";
  import * as R from 'ramda';
  import "./GDImageViewer.css";

  function GDImageViewer(data) {
    const [imgIds, setImgIds] = useState([]);
    const [style, setStyle] = useState({});
    const [hover, setHover] = useState(false);
    const [newWindow, setNewWindw] = useState(false);
    const [clickable, setClickable] = useState(false);
    const [modal, setModal] = useState(false);
    const [showHeader, setShowHeader] = useState(null);
    const [classNames, setClassNames] = useState(null);
    const [ids, setIds] = useState(null);
    const [excludes, setExcludes] = useState(null);

    const GOOGLE_API_KEY = data.data.gkey;
    const GOOGLE_DRIVE_FOLDER_ID = data.data.dirId;
    const GOOGLE_DRIVE_FILES_API = 'https://www.googleapis.com/drive/v2/files';


    const GOOGLE_DRIVE_IMG_URL = "https://drive.google.com/uc?export=view&id=";

    const options = data.data.options;
    const header = data.data.header;

    async function loadData() {
      try {
        const apiUrl = `${GOOGLE_DRIVE_FILES_API}?q='${GOOGLE_DRIVE_FOLDER_ID}'+in+parents&key=${GOOGLE_API_KEY}`;


        console.log("API Request URL:", apiUrl);

        await fetch(apiUrl)
          .then(response => response.json())
          .then(jsonResp => {
            console.log("API Response:", jsonResp);
            setImgIds(jsonResp.items);
          });
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    function checkFormat(url) {
      return url.match(/\.(jpeg|jpg|gif|png)$/) !== null;
    }

    function ModalView(props) {
      return (
        <div>
          <div id="modal-container" className="modal top-[20vw] md:top-[7vw] px-3 w-full h-full z-20 overflow-y-hidden ">
            <span className="close">&times;</span>
            <img className="modal-content md:h-[30vw] md:w-[30vw] w-full h-[100vw] -mt-20 object-cover " id="curr-modal" alt="" />
            <div id="caption" />
          </div>
        </div>
      );
    }

    function showModal(imgId) {
      const modal = document.getElementById("modal-container");
      const modalImg = document.getElementById("curr-modal");
      const caption = document.getElementById("caption");

      modal.style.display = "block";
      modalImg.src = imgId;
      caption.innerHTML = imgId.alt;

      const span = document.getElementsByClassName("close")[0];
      span.onclick = function () {
        modal.style.display = "none";
      };
    }

    const renderImages = (className, id, exclude, item, i) => {
      return (
        <>
          {!exclude && (
            <img
              style={style}
              className={
                (clickable ? " gd-pointer " : "") +
                (" gd-img ") +
                "w-[90vw] h-[80vw] md:w-[31vw] md:h-[20vw] ml-4 mb-3 object-cover rounded-xl" +
                (hover ? " gd-pointer gd-hover " : "") +
                className
              }
              onClick={() => {
                modal && showModal(GOOGLE_DRIVE_IMG_URL + item.id);
              }}
              src={GOOGLE_DRIVE_IMG_URL + item.id}
              id={id ? id : null}
              key={i}
              alt=""
            />
          )}
        </>
      );
    }

    const renderMain = (className, id, exclude, href, target, item, i) => {
      if (!R.isEmpty(href)) {
        return (
          <a href={href} target={target}>
            {renderImages(className, id, exclude, item, i)}
          </a>
        );
      }
      return renderImages(className, id, exclude, item, i);
    }

    useEffect(() => {
      loadData();
      loadSettings(options);
    });

    function loadSettings(options) {
      if (options.style) {
        setStyle(options.style);
      }
      if (options.onClick) {
        setClickable(true);
        if (options.onClick.newWindow) {
          setNewWindw(true);
        }
        if (options.onClick.modal) {
          setModal(true);
        }
      }
      if (options.hover) {
        setHover(true);
      }
      if (header) {
        setShowHeader(true);
      }

      if (options.attachClass) {
        setClassNames(options.attachClass);
      }

      if (options.attachId) {
        setIds(options.attachId);
      }
      if (options.exclude) {
        setExcludes(options.exclude);
      }
    }

    return (
      <div>
        <h2>{showHeader && header}</h2>

        {modal && <ModalView />}

        <div className="grid md:grid-cols-3 grid-cols-1 overflow-hidden">
          {imgIds &&
            imgIds.map((item, i) => {
              const title = R.propOr("", "title", item);
              if (checkFormat(item.title)) {
                const className = R.propOr("", title, classNames);
                const id = R.propOr("", title, ids);
                const exclude = R.propOr("", title, excludes);
                const href = !modal && clickable ? GOOGLE_DRIVE_IMG_URL + item.id : "";
                const target = newWindow ? "_blank" : "";
                return renderMain(className, id, exclude, href, target, item, i);
              } else {
                // Return a default value (e.g., null) when checkFormat is false
                return null;
              }
            })}
        </div>
      </div>
    );
  }

  export default GDImageViewer;
