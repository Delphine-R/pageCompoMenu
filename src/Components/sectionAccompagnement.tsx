import React, { useState } from 'react';

const SectionAccompagnement: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <button onClick={() => handleCategoryClick("Dessert")}>Dessert</button>
            <button onClick={() => handleCategoryClick("Entree")}>Entree</button>
            <button onClick={() => handleCategoryClick("Boisson")}>Boisson</button>

            {selectedCategory === "Dessert" && (
                <div>
                    <button>fruit</button>
                    <button>madeleine</button>
                    <button>compote</button>
                    <button>yaourt</button>
                </div>
            )}

            {/* Render other category buttons and their respective sub-buttons similarly */}
        </div>
    );
};

export default SectionAccompagnement;
