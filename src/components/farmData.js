import Location from "../assets/icons/location.png"
import g1 from '../assets/farm/g1.jpg';
import g2 from '../assets/farm/g2.jpg';
import g3 from '../assets/farm/g3.jpg';
import Avatar from '../assets/farm/4.jpg';
import P1 from '../assets/farm/2.jpg'
import P2 from '../assets/farm/4.jpg'

const farms = [
    {
      id: 1,
      name: "Farm 1",
      authorImg: Avatar,
      certified: true,
      icon: Location,
      crop: "Crop: Palak",
      description: "Kerala's First Fully Automated Hydroponic Farm",
      picture: P1,
      location: "Trivandrum, Karamana",
      previewImages: [
       g1,g2,g3
      ],
      data: {
        gkey: "AIzaSyCtvBEjc56_o3d9_S-3gHjZSE4uum8Th7Q",
        dirId: "1gA6YaqmdFxO1tH5DZiWpkpmDB6Sn6dIG",
        name: "name1",
        options: {
          style: {
            // Define your styles here
          },
          onClick: {
            modal: true,       // Set to open images in a modal
            newWindow: false,  // Set to open images in a new window
          },
          hover: true, // Enable hover effect
        },
      },
    },
    {
      id: 2,
      name: "Farm 2",
      authorImg: Avatar,
      certified: true,
      icon: Location,
      crop: "Crop: Not Available",
      description: "---Under Construction---",
      picture: P2,
      location: "Trivandrum, Karamana",
      previewImages: [
        g1,g2,g3
       ],
      data: {
        gkey: "AIzaSyCtvBEjc56_o3d9_S-3gHjZSE4uum8Th7Q",
        dirId: "1i3TyfujhEm3Bp8opZzfVT1gleIHY8Lj7",
        name: "name2",
        options: {
          style: {
            // Define your styles here
          },
          onClick: {
            modal: true,       // Set to open images in a modal
            newWindow: false,  // Set to open images in a new window
          },
          hover: true, // Enable hover effect
        },
      },
    },
    {
      id: 3,
      name: "Farm 3",
      authorImg: Avatar,
      certified: true,
      icon: Location,
      location: "Trivandrum",
      previewImages: [
        g1,g2,g3
       ], 
      data: {
        gkey: "AIzaSyCtvBEjc56_o3d9_S-3gHjZSE4uum8Th7Q",
        dirId: "1aWzjut5cWoOre3f5eN0VUdXgu7nHHIeS",
        name: "name3",
        options: {
          style: {
            // Define your styles here
          },
          onClick: {
            modal: true,       // Set to open images in a modal
            newWindow: false,  // Set to open images in a new window
          },
          hover: true, // Enable hover effect
        },
      },
    },
    {
      id: 4,
      name: "Farm 4",
      authorImg: Avatar,
      certified: true,
      icon: Location,
      location: "United Kingdom",
      previewImages: [
        g1,g2,g3
       ], 
      data: {
        gkey: "AIzaSyCtvBEjc56_o3d9_S-3gHjZSE4uum8Th7Q",
        dirId: "13yvcrOgQVEQMHjs7cwTXM2q-Vt-u1NMl",
        name: "name4",
        options: {
          style: {
            // Define your styles here
          },
          onClick: {
            modal: true,       // Set to open images in a modal
            newWindow: false,  // Set to open images in a new window
          },
          hover: true, // Enable hover effect
        },
      },
    },
    // Add more farms with their data properties
    // ...
  ];

  export default farms;