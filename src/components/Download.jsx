import React from "react";
import Navbar from "./Navbar";
import DownloadButton from "./DownloadButton";
import App from "../assets/app.png";
import Footer from "./Footer";

const Download = () => {
    return (
        <>
            <Navbar/>
            <div className="flex justify-center items-center h-screen ml-10 -mt-16 px-16 overflow-hidden">
                <div className="flex flex-col">
                    <h3 className="font-bold font-sans mb-2">Ufarms App</h3>
                    <p className="font-sans justify-between">Unlock a world of possibilities with our app! Click the download button to access a seamless experience tailored just for you.</p>
                    <DownloadButton
                        fileUrl="https://drive.google.com/file/d/1QHg6rkrh9vQNHihdzfqKxB7FJaROt2js/view?usp=drivesdk"
                        fileName="ufarm_drip.apk"
                    />
                </div>
                <div className="flex items-center ml-4">
                    <img src={App} alt="App" className="h-[50vh] w-[50vw]" />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Download;
