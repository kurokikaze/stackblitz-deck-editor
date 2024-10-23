import { Card } from '../types';

export const sampleCards: Card[] = [
  {
    id: '1',
    name: 'Dragon Emperor',
    effect: 'When this card attacks, draw 1 card.',
    type: 'Monster',
    rarity: 'Ultra Rare',
    power: 3000,
    defense: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&q=80&w=300&h=400'
  },
  {
    id: '2',
    name: 'Mystic Sorcerer',
    effect: 'Once per turn: You can discard 1 card to destroy 1 spell card.',
    type: 'Monster',
    rarity: 'Super Rare',
    power: 2400,
    defense: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=300&h=400'
  },
  {
    id: '3',
    name: 'Ancient Barrier',
    effect: 'Negate one attack targeting your monster.',
    type: 'Trap',
    rarity: 'Rare',
    imageUrl: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&q=80&w=300&h=400'
  },
  {
    id: '4',
    name: 'Energy Boost',
    effect: 'Target monster gains 1000 power until end of turn.',
    type: 'Spell',
    rarity: 'Common',
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=300&h=400'
  },
  {
    id: '5',
    name: 'Ninja Warrior',
    effect: 'This card can attack directly if your opponent controls no monsters.',
    type: 'Monster',
    rarity: 'Rare',
    power: 1800,
    defense: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1578353022142-09264fd64295?auto=format&fit=crop&q=80&w=300&h=400'
  }
];