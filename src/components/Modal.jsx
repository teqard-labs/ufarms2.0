import { useState } from 'react';
import {  Modal,Carousel } from 'flowbite-react';

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
       <button type="button" onClick={handleOpenModal} className="mt-4 py-2 w-28 h-15 rounded-md bg-gradient-to-r from-[#caf880] to-[#70cf7d]  text-sm text-black font-semibold tracking-wide hover:from-[#028A0F] hover:to-[#028A0F] hover:text-white">
          Know More
        </button>
      <Modal show={showModal} onClose={handleCloseModal} className="bg-green-700 pt-20">
        <Modal.Header className="">Details</Modal.Header>
        <Modal.Body>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
            <img
              src="https://assets.weforum.org/article/image/responsive_big_webp_WxZnPfCh3elRtPyzhRY9XyAi6L9J8DKPjYq_-FUVEtA.webp"
              alt="..."
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzDfCpeQgBLAlX1w2iNrr5Ll0bNWRcMYpYA&usqp=CAU"
              alt="..."
            />
            <img
              src="https://c2.staticflickr.com/2/1779/42225728250_16df0bbcac_z.jpg"
              alt="..."
            />
            <img
              src="https://assets.weforum.org/article/image/responsive_big_webp_WxZnPfCh3elRtPyzhRY9XyAi6L9J8DKPjYq_-FUVEtA.webp"
              alt="..."
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzDfCpeQgBLAlX1w2iNrr5Ll0bNWRcMYpYA&usqp=CAU"
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
