import React from 'react';

interface BanniereAccompagnementProps {
    toggleAccompagnement: () => void;
    showAccompagnement: boolean;
}

const BanniereAccompagnement: React.FC<BanniereAccompagnementProps> = ({ toggleAccompagnement, showAccompagnement }) => {
    return (
        <div>
            <button onClick={toggleAccompagnement}>
                {showAccompagnement ? 'Fermer' : 'Ouvrir'} Accompagnement 1
            </button>
        </div>
    );
};

export default BanniereAccompagnement;
