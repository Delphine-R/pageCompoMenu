import React from 'react';

const ImagePlat: React.FC = () => {
    const imagePath = 'src/assets/randomImageForTest.jpg';

    return (
        <div>
            <img src={imagePath} alt="plat" />
        </div>
    );
};

export default ImagePlat;
