'use strict';

const pictures = [
  {
    fileName: 'beautiful-sea-animal-in-world.jpg',
    thumbnail: 'thumbnails/beautiful-sea-animal-in-world_tn.jpg'
  },
  {
    fileName: 'Beautiful-sea-animals-jellyfish-light_iphone_1080x1920.jpg',
    thumbnail:
      'thumbnails/Beautiful-sea-animals-jellyfish-light_iphone_1080x1920_tn.jpg'
  },
  {
    fileName:
      'Best-Family-Vacation-Destinations-2018-Maldives-Kids-Are-A-Trip.jpg',
    thumbnail:
      'thumbnails/Best-Family-Vacation-Destinations-2018-Maldives-Kids-Are-A-Trip_tn.jpg'
  },
  {
    fileName: 'download.jpg',
    thumbnail: 'thumbnails/download_tn.jpg'
  },
  {
    fileName: 'HDhut.blogspot.com (12).jpg',
    thumbnail: 'thumbnails/HDhut_tn.jpg'
  },
  {
    fileName:
      'huge-purple-jellyfish--so-pretty-deep-blue-sea-life-under-E184d2130851a5e9d82126e4e95d82b33.jpg',
    thumbnail:
      'thumbnails/huge-purple-jellyfish--so-pretty-deep-blue-sea-life-under-E184d2130851a5e9d82126e4e95d82b33_tn.jpg'
  },
  { fileName: 'images (1).jpg', thumbnail: 'thumbnails/images (1)_tn.jpg' },
  { fileName: 'images (2).jpg', thumbnail: 'thumbnails/images (2)_tn.jpg' },
  { fileName: 'images (3).jpg', thumbnail: 'thumbnails/images (3)_tn.jpg' },
  { fileName: 'images (4).jpg', thumbnail: 'thumbnails/images (4)_tn.jpg' },
  { fileName: 'images (5).jpg', thumbnail: 'thumbnails/images (5)_tn.jpg' },
  { fileName: 'images (6).jpg', thumbnail: 'thumbnails/images (6)_tn.jpg' },
  { fileName: 'images (7).jpg', thumbnail: 'thumbnails/images (7)_tn.jpg' },
  { fileName: 'images (8).jpg', thumbnail: 'thumbnails/images (8)_tn.jpg' },
  { fileName: 'images (9).jpg', thumbnail: 'thumbnails/images (9)_tn.jpg' },
  { fileName: 'images.jpg', thumbnail: 'thumbnails/images_tn.jpg' },
  {
    fileName: 'maxresdefault.jpg',
    thumbnail: 'thumbnails/maxresdefault_tn.jpg'
  },
  {
    fileName: 'most-exclusive-vacation-destinations-in-the-world.jpg',
    thumbnail:
      'thumbnails/most-exclusive-vacation-destinations-in-the-world_tn.jpg'
  },
  {
    fileName: 'ohio_GettyImages-825663918-1280x640.jpg',
    thumbnail: 'thumbnails/ohio_GettyImages-825663918-1280x640_tn.jpg'
  },
  {
    fileName: 'Santorini-Greece.jpg',
    thumbnail: 'thumbnails/Santorini-Greece_tn.jpg'
  },
  {
    fileName: 'south-africa-cape-town.jpg',
    thumbnail: 'thumbnails/south-africa-cape-town_tn.jpg'
  }
];

const thumbnailsDiv = document.getElementById('thumbnails');
const pictureDiv = document.getElementById('picture');

for (let i = 0; i < pictures.length; i++) {
  const thumbnail = document.createElement('img');
  thumbnail.src = '../pictures/' + pictures[i].thumbnail;
  thumbnail.addEventListener('click', () => {
    if (pictureDiv.firstChild) {
      pictureDiv.removeChild(pictureDiv.firstChild);
    }
    const bigPicture = new Image();
    bigPicture.src = '../pictures/' + pictures[i].fileName;
    pictureDiv.appendChild(bigPicture);
    // bigPicture.onload = () => {
    //   console.log(bigPicture.width);
    // };
  });
  thumbnailsDiv.appendChild(thumbnail);
}
