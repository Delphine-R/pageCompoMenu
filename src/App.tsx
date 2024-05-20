import React from 'react';
import ImagePlat from './Components/imagePlat';
import TexteExplicatif from './Components/texteExplicatif';
import BanniereAccompagnement from './Components/banniereAccompagnent';
import ValiderButton from './Components/ValiderBtn';

import './App.css';

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
