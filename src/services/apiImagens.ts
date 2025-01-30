export const fetchRandomImages = async (setImages: (images: string[]) => void) => {
  const getRandomImage = () => `https://picsum.photos/200/300?random=${Math.random()}`;

  const images = [
    getRandomImage(),
    getRandomImage(),
    getRandomImage(),
    getRandomImage(),
    getRandomImage(),
  ];

  setImages(images);
};

export const fetchRandomImage = async (setImage: (image: string) => void) => {
  const getRandomImage = () => `https://picsum.photos/200/300?random=${Math.random()}`;

  const image = getRandomImage();

  setImage(image); 
};
