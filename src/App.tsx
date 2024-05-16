import React, { useState } from 'react';
import ImagePlat from './Components/imagePlat';
import TexteExplicatif from './Components/texteExplicatif';
import BanniereAccompagnement from './Components/banniereAccompagnent';
import ValiderButton from './Components/ValiderBtn';

const App: React.FC = () => {
    const [showAccompagnement, setShowAccompagnement] = useState(false);
    const plat = './assets/randomImageForTest.jpg'
    const toggleAccompagnement = () => {
        setShowAccompagnement(!showAccompagnement);
    };

    return (
        <div>
            <ImagePlat plat={plat} />
            <TexteExplicatif />
            <BanniereAccompagnement toggleAccompagnement={toggleAccompagnement} showAccompagnement={showAccompagnement} />
            <ValiderButton />
            {showAccompagnement && (
                // eslint-disable-next-line react/jsx-no-comment-textnodes
                <div>
                    //Contenu de la section accompagnement...
                </div>
            )}
        </div>
    );
};

export default App;
