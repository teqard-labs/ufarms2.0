import { useState } from 'react';
import {  Modal,Carousel } from 'flowbite-react';
import F1 from '../assets/farm/1.jpg'
import F2 from '../assets/farm/2.jpg'
import F3 from '../assets/farm/3.jpg'
import F4 from '../assets/farm/4.jpg'
import F5 from '../assets/farm/5.jpg'
import F6 from '../assets/farm/6.jpg'
import F7 from '../assets/farm/7.jpg'

const Modal1=()=> {
  const [showModal, setShowModal] = useState(false);
 
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);

  };



  return (
    <>
       <button type="button" onClick={handleOpenModal} className={`mt-4 py-2 w-28 h-15 rounded-md bg-gradient-to-r from-[#caf880] to-[#70cf7d]  text-sm text-black font-semibold tracking-wide hover:from-[#028A0F] hover:to-[#028A0F] hover:text-white`}>
          Read More
        </button>
      <Modal show={showModal} onClose={handleCloseModal} className="bg-green-700 pt-20">
        <Modal.Header className="">Details</Modal.Header>
        <Modal.Body>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
            <img
              src={F1}
              alt="..."
              
            />
            <img
              src={F2}
              alt="..."
              
            />
            <img
              src={F3}
              alt="..."
              
            />
            <img
              src={F4}
              alt="..."
              
            />
            <img
              src={F5}
              alt="..."
              
            />
            <img
              src={F6}
              alt="..."
              className='h-full'
            />
            <img
              src={F7}
              alt="..."
              
            />
          </Carousel>
          </div>
          <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Hydroponics farming is a type of agriculture where plants are grown in a nutrient-rich solution instead of soil. This method allows for a controlled and highly efficient way to grow plants, with a reduced need for water and land compared to traditional farming methods.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Overall, hydroponic farming is an innovative and efficient method of growing plants that has the potential to revolutionize modern agriculture by producing fresh and nutritious food while conserving natural resources.
              </p>
            </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Modal1;
