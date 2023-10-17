class TextReveal {
  /**
   * Creates a TextReveal instance.
   * @param {HTMLElement} domElement - The DOM element where the text will be revealed.
   * @param {string[]} words - An array of words to be revealed.
   * @param {Object} options - Options for the animation.
   * @param {number} options.stepCount - The number of steps in which the first character of each word will be revealed (default: 2).
   * @param {number} options.visibleTime - The time for which each revealed word will be visible before proceeding to the next one (default: 500ms).
   * @param {number} options.stepDelay - The delay between individual steps (default: 20ms).
   * @param {boolean} options.loop - Whether to loop the animation (default: false).
   */
  #wordInfo;
  #wordTracker;
  #presentWord;
  constructor(domElement, words, { stepCount, visibleTime, stepDelay, loop }) {
    this.domElement = domElement;
    this.words = words;
    if (this.words.length === 0)
      throw new Error("RequiredWordsButGotUndefined");
    this.options = {
      stepCount: stepCount <= 0 ? 2 : stepCount || 2,
      visibleTime: visibleTime || 500,
      stepDelay: stepDelay || 20,
      loop: loop || false,
    };
    this.#wordInfo = new Array(this.words.length);
    words.forEach((element, index) => {
      this.#wordInfo[index] = element.split("");
    });
    this.#wordTracker = 0;
    this.#presentWord = [...this.#wordInfo[0]];
  }
  animate() {
    this.#animateWordsNesting();
  }
  #animateWordsNesting() {
    this.#animateWord();
  }
  #animateWord() {
    let i = 1;
    let arrangedTill = 0;

    const intervalId = setInterval(() => {
      if (
        this.#wordTracker == 0 ||
        this.#presentWord.length ===
          this.words[this.#wordTracker % this.words.length].length
      ) {
        if (i % this.options.stepCount == 0) {
          this.#presentWord[arrangedTill] =
            this.#wordInfo[this.#wordTracker % this.words.length][arrangedTill];
          arrangedTill += 1;
        }
        this.#fillRandomChars(
          this.#presentWord,
          arrangedTill,
          this.#presentWord.length
        );
        if (arrangedTill == this.#presentWord.length) {
          clearInterval(intervalId);

          setTimeout(() => {
            this.#wordTracker++;
            if (this.options.loop == true) this.#animateWordsNesting();
            else if (this.#wordInfo.length >= this.#wordTracker + 1)
              this.#animateWordsNesting();

            if (this.words.length == this.#wordTracker) {
              arrangedTill = 0;
            }
          }, this.options.visibleTime);
        }
      } else {
        if (i % 4 == 0)
          this.#lengthAdjuster(
            this.#presentWord,
            this.#presentWord.length,
            this.#wordInfo[this.#wordTracker % this.words.length].length
          );
        this.#fillRandomChars(this.#presentWord, 0, this.#presentWord.length);
      }
      i++;
      this.#update(this.#presentWord);
    }, this.options.stepDelay);
  }

  #lengthAdjuster(array, initialLength, finalLength) {
    if (initialLength > finalLength) {
      array.pop();
    } else if (initialLength < finalLength) {
      array.push(" ");
    }
  }
  #fillRandomChars(array, start, end) {
    for (let i = start; i < end; i++) {
      array[i] = this.#randomChar();
    }
  }
  #generateRandomNo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  #randomChar() {
    return String.fromCharCode(this.#generateRandomNo(33, 126));
  }
  #update(array) {
    this.domElement.textContent = array.join("");
  }
}
export default TextReveal;
