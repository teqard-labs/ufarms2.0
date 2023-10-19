import React from 'react';
import { useParams } from 'react-router-dom';
import GDImageViewer from "./GDImageViewer";
import "./GDImageViewer.css";
import Navbar from './Navbar';
import farms from './farmData';

function ImageViewer() {
    console.log(farms);
  const { id } = useParams();
  const farm = farms.find(farm => farm.id === parseInt(id));

  if (!farm) {
    // Handle case when the farm with the provided id is not found
    return <div>Farm not found</div>;
  }

  // Access farm data and display Google Drive images here
  const { name, data } = farm;

  return (
    <div>
        <Navbar />
      <h2>Farm Details for {name}</h2>
      <GDImageViewer data={data}/>
    </div>
  );
}

export default ImageViewer;
