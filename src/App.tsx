import React, { useState } from 'react';
import { Card, Deck } from './types';
import { CardList } from './components/CardList';
import { DeckStats } from './components/DeckStats';
import { sampleCards } from './data/sampleCards';
import { Search, Save, Folder, Plus, AlertCircle } from 'lucide-react';

function App() {
  const [deck, setDeck] = useState<Deck>({ name: 'New Deck', cards: [] });
  const [searchTerm, setSearchTerm] = useState('');
  const [deckName, setDeckName] = useState('New Deck');
  const [showDeckError, setShowDeckError] = useState(false);

  const filteredCards = sampleCards.filter(card => 
    card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.effect.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addCardToDeck = (card: Card) => {
    const cardCount = deck.cards.filter(c => c.id === card.id).length;
    if (cardCount < 3 && deck.cards.length < 40) {
      setDeck({ ...deck, cards: [...deck.cards, card] });
      setShowDeckError(false);
    } else {
      setShowDeckError(true);
    }
  };

  const removeCardFromDeck = (card: Card) => {
    const cardIndex = deck.cards.findIndex(c => c.id === card.id);
    if (cardIndex !== -1) {
      const newCards = [...deck.cards];
      newCards.splice(cardIndex, 1);
      setDeck({ ...deck, cards: newCards });
      setShowDeckError(false);
    }
  };

  const saveDeck = () => {
    // In a real app, this would save to a backend
    console.log('Saving deck:', deck);
    alert('Deck saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Anime TCG Deck Editor</h1>
          <p className="text-indigo-200">Build your perfect deck with powerful cards!</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search cards by name or effect..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
              <CardList 
                cards={filteredCards}
                onAddCard={addCardToDeck}
                showControls="add"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={deckName}
                    onChange={(e) => setDeckName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Deck Name"
                  />
                </div>
                <button
                  onClick={saveDeck}
                  className="ml-4 flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Save size={16} />
                  Save
                </button>
              </div>

              {showDeckError && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center gap-2">
                  <AlertCircle size={16} />
                  <span>Maximum 3 copies per card or deck is full (40 cards)</span>
                </div>
              )}

              <DeckStats cards={deck.cards} />

              <div className="mt-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Folder className="text-indigo-500" />
                  Deck Contents ({deck.cards.length}/40)
                </h3>
                {deck.cards.length > 0 ? (
                  <CardList
                    cards={deck.cards}
                    onAddCard={addCardToDeck}
                    onRemoveCard={removeCardFromDeck}
                    showControls="remove"
                  />
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Plus className="mx-auto mb-2" />
                    <p>Add cards to your deck</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;