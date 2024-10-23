import React from 'react';
import { Card } from '../types';
import { PieChart, Swords, Wand2, Shield } from 'lucide-react';

interface DeckStatsProps {
  cards: Card[];
}

export function DeckStats({ cards }: DeckStatsProps) {
  const stats = {
    monsters: cards.filter(card => card.type === 'Monster').length,
    spells: cards.filter(card => card.type === 'Spell').length,
    traps: cards.filter(card => card.type === 'Trap').length
  };

  const StatBox = ({ icon: Icon, label, value, color }: { 
    icon: React.ElementType, 
    label: string, 
    value: number,
    color: string 
  }) => (
    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
      <Icon className={color} size={20} />
      <div>
        <div className="text-sm text-gray-600">{label}</div>
        <div className="font-bold">{value}</div>
      </div>
    </div>
  );

  return (
    <div>
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <PieChart className="text-indigo-500" />
        Deck Statistics
      </h3>
      <div className="grid grid-cols-3 gap-3">
        <StatBox 
          icon={Swords} 
          label="Monsters" 
          value={stats.monsters}
          color="text-red-500"
        />
        <StatBox 
          icon={Wand2} 
          label="Spells" 
          value={stats.spells}
          color="text-green-500"
        />
        <StatBox 
          icon={Shield} 
          label="Traps" 
          value={stats.traps}
          color="text-blue-500"
        />
      </div>
    </div>
  );
}