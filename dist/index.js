import { Ewords } from './wor.json';
import { Twords } from './twords.json';
// Styles for the cards
const styles = `
  <style>
    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 20px;
    }
    .english-card {
      width: 200px;
      height: 100px;
      background: #2196F3;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      font-size: 24px;
      cursor: pointer;
    }
    .options-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .translation-card {
      width: 150px;
      height: 80px;
      background: #4CAF50;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .translation-card:hover {
      background: #45a049;
    }
    .translation-card.wrong {
      background: #f44336;
    }
    .translation-card.correct {
      background: #8bc34a;
    }
  </style>
`;
// Add styles to document
document.head.insertAdjacentHTML('beforeend', styles);
// Create main container
const gameContainer = document.createElement('div');
gameContainer.className = 'game-container';
document.body.appendChild(gameContainer);
// Game state
let currentWordIndex;
// Add "Other Games" text
const otherGamesText = document.createElement('p');
otherGamesText.textContent = 'Diğer oyunlar';
otherGamesText.style.cssText = `
    position: fixed;
    top: 100px;
    left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;
// Add viewport meta tag for mobile responsiveness
const metaTag = document.createElement('meta');
metaTag.name = 'viewport';
metaTag.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(metaTag);
// Update button styles
const buttonStyles = `
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    width: min(200px, 90vw);
    font-size: clamp(14px, 4vw, 16px);
`;
// Update the other games section styling
otherGamesText.style.cssText = `
    position: static;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    text-align: center;
`;
document.body.appendChild(otherGamesText);
// Add Contexto button
const contextoButton = document.createElement('button');
contextoButton.textContent = 'Play Contexto';
contextoButton.style.cssText = `
    padding: 10px 20px;
    background: #2196F3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
`;
contextoButton.addEventListener('click', () => {
    window.location.href = 'https://contexto.me';
});
document.body.appendChild(contextoButton);
// Add Redactle button
const redactleButton = document.createElement('button');
redactleButton.textContent = 'Play Redactle';
redactleButton.style.cssText = `
    padding: 10px 20px;
    background: #ff5722;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
`;
redactleButton.addEventListener('click', () => {
    window.location.href = 'https://www.redactle.com';
});
document.body.appendChild(redactleButton);
// Add Semantle button
const semantleButton = document.createElement('button');
semantleButton.textContent = 'Play Semantle';
semantleButton.style.cssText = `
    padding: 10px 20px;
    background: #9c27b0;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
`;
semantleButton.addEventListener('click', () => {
    window.location.href = 'https://semantle.pimanrul.es/';
});
document.body.appendChild(semantleButton);
let currentOptions;
function getRandomIndexes(max, count) {
    const indexes = new Set();
    while (indexes.size < count) {
        indexes.add(Math.floor(Math.random() * max));
    }
    return Array.from(indexes);
}
function createNewRound() {
    // Clear previous content
    gameContainer.innerHTML = '';
    // Select random word
    currentWordIndex = Math.floor(Math.random() * Ewords.length);
    const englishWord = Ewords[currentWordIndex];
    const correctTranslation = Twords[currentWordIndex];
    // Create English word card
    const englishCard = document.createElement('div');
    englishCard.className = 'english-card';
    englishCard.textContent = englishWord;
    gameContainer.appendChild(englishCard);
    // Get 4 random wrong options
    const wrongIndexes = getRandomIndexes(Twords.length, 4)
        .filter(index => index !== currentWordIndex)
        .map(index => Twords[index]);
    // Combine correct and wrong options
    currentOptions = [...wrongIndexes, correctTranslation];
    // Shuffle options
    currentOptions.sort(() => Math.random() - 0.5);
    // Create options container
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container';
    // Create translation cards
    currentOptions.forEach((option) => {
        const card = document.createElement('div');
        card.className = 'translation-card';
        card.textContent = option;
        card.addEventListener('click', () => checkAnswer(card, option, correctTranslation));
        optionsContainer.appendChild(card);
    });
    gameContainer.appendChild(optionsContainer);
}
function checkAnswer(card, selected, correct) {
    if (selected === correct) {
        card.classList.add('correct');
        setTimeout(() => {
            createNewRound();
        }, 1000);
    }
    else {
        card.classList.add('wrong');
        setTimeout(() => {
            card.classList.remove('wrong');
        }, 1000);
    }
}
// Start the game
createNewRound();
// Add meta viewport tag for mobile compatibility
const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(metaViewport);
// Add dark theme styles
const darkThemeStyles = document.createElement('style');
darkThemeStyles.textContent = `
  body {
    background-color: #121212;
    color: #ffffff;
    margin: 0;
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .game-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .english-card {
    width: 90%;
    max-width: 300px;
    margin: 0 auto;
    background: #1e88e5;
  }

  .options-container {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    padding: 10px;
  }

  .translation-card {
    width: 100%;
    height: 60px;
    background: #388e3c;
    font-size: 16px;
    padding: 10px;
    box-sizing: border-box;
    touch-action: manipulation;
  }

  @media (max-width: 480px) {
    .options-container {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .english-card {
      font-size: 20px;
      height: 80px;
    }
  }
`;
document.head.appendChild(darkThemeStyles);
