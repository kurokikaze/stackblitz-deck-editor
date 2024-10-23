export interface Card {
  id: string;
  name: string;
  effect: string;
  type: 'Monster' | 'Spell' | 'Trap';
  rarity: 'Common' | 'Rare' | 'Super Rare' | 'Ultra Rare';
  power?: number;
  defense?: number;
  imageUrl: string;
}

export interface Deck {
  name: string;
  cards: Card[];
}

export interface CardListProps {
  cards: Card[];
  onAddCard: (card: Card) => void;
  onRemoveCard?: (card: Card) => void;
  showControls: 'add' | 'remove';
}