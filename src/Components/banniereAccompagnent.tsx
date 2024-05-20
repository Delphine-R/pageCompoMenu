import React, { useState } from 'react';
import SectionAccompagnement from './sectionAccompagnement';

interface BanniereAccompagnementProps {}

const BanniereAccompagnement: React.FC<BanniereAccompagnementProps> = () => {
    const [showAccompagnement, setShowAccompagnement] = useState(false);
    const toggleAccompagnement = () => {
        setShowAccompagnement(!showAccompagnement);
    };

    return (
        <div className="rectangular-section">
            <div>
                <button onClick={toggleAccompagnement}>
                    {showAccompagnement ? 'Fermer' : 'Ouvrir'} Accompagnement 1
                </button>
            </div>
            {showAccompagnement && <SectionAccompagnement />}
        </div>
    );
};

export default BanniereAccompagnement;
