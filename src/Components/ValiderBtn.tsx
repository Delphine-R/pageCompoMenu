import React, { useState } from 'react';

function ValiderButton() {
    const [menu, setMenu] = useState('');
    const [plat, setPlat] = useState('');
    const [accompagnement1, setAccompagnement1] = useState('');
    const [accompagnement2, setAccompagnement2] = useState('');

    const handleSubmit = () => {
        // Envoyer les variables à un serveur ou les afficher dans la console
        console.log({ menu, plat, accompagnement1, accompagnement2 });
    };

    return (
        <button onClick={handleSubmit}>
            Valider
        </button>
    );
}

export default ValiderButton;