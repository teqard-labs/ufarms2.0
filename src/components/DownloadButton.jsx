import React from 'react';
import axios from 'axios';

const DownloadButton = ({ fileUrl, fileName }) => {
  const handleDownload = async () => {
    try {
      const response = await axios({
        url: fileUrl,
        method: 'GET',
        responseType: 'blob', // Important
      });

      // Create a temporary anchor element to trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading file: ', error);
    }
  };

  return (
    <button
      className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 mt-3 h-[50px] w-[200px] rounded-lg"
      onClick={handleDownload}
    >
      Download
    </button>
  );
};

export default DownloadButton;
