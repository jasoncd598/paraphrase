function paraphrase(sentence) {
  const wordMappings = {
    happy: ['joyful', 'delighted', 'content'],
    sad: ['unhappy', 'gloomy', 'depressed'],
    big: ['large', 'enormous', 'huge'],
    small: ['tiny', 'little', 'miniature']
    // Add more word mappings here...
  };

  const words = sentence.toLowerCase().split(' ');

  const paraphrasedWords = words.map(word => {
    if (word in wordMappings) {
      const synonyms = wordMappings[word];
      const randomIndex = Math.floor(Math.random() * synonyms.length);
      return synonyms[randomIndex];
    }
    return word;
  });

  const paraphrasedSentence = paraphrasedWords.join(' ');

  return paraphrasedSentence;
}

module.exports = paraphrase