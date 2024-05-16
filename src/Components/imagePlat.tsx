import React from 'react';

interface ImagePlatProps {
    plat: string;
}

const ImagePlat: React.FC<ImagePlatProps> = ({ plat }) => {
    return <img src={plat} alt="plat" />;
};

export default ImagePlat;
