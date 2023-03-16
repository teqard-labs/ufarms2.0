import React from 'react';

function GoogleMap() {
  return (
    <div >   
      <div className="w-full border border-[#028A0F] shadow-md h-96 md:h-72 lg:h-96">
        <iframe
          className="w-full h-full"
          title="Google Maps Example"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.217982148225!2d76.39381951472836!3d10.1629289927396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d14593bffff%3A0x6ce2bc47b2bad53!2sTeqard%20Labs%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1678900419700!5m2!1sen!2sin"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default GoogleMap;
