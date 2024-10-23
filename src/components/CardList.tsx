import React from 'react';
import { CardListProps } from '../types';
import { Plus, Minus } from 'lucide-react';

export function CardList({ cards, onAddCard, onRemoveCard, showControls }: CardListProps) {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Ultra Rare': return 'border-yellow-400';
      case 'Super Rare': return 'border-purple-400';
      case 'Rare': return 'border-blue-400';
      default: return 'border-gray-300';
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <div 
          key={`${card.id}-${index}`}
          className={`relative bg-white rounded-lg shadow-md border-2 ${getRarityColor(card.rarity)} hover:shadow-lg transition-shadow`}
        >
          <img 
            src={card.imageUrl} 
            alt={card.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold">{card.name}</h3>
              <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded-full">
                {card.rarity}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{card.effect}</p>
            {card.type === 'Monster' && (
              <div className="flex justify-between text-sm text-gray-700">
                <span>Power: {card.power}</span>
                <span>Defense: {card.defense}</span>
              </div>
            )}
            <div className="mt-4 flex justify-end">
              {showControls === 'add' ? (
                <button
                  onClick={() => onAddCard(card)}
                  className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Plus size={16} />
                  Add
                </button>
              ) : (
                <button
                  onClick={() => onRemoveCard?.(card)}
                  className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Minus size={16} />
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}