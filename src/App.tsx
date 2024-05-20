import React from 'react';
import ImagePlat from './Components/imagePlat';
import TexteExplicatif from './Components/texteExplicatif';
import BanniereAccompagnement from './Components/banniereAccompagnent';
import ValiderButton from './Components/ValiderBtn';

import './CSS/App.css';

const App: React.FC = () => {
    return (
        <div>
            <ImagePlat/>
            <TexteExplicatif />
            <BanniereAccompagnement />
            <ValiderButton />
        </div>
    );
};

export default App;
