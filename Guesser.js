const letterGuesser = () => {
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  console.log(alphabetArray);
  const randomNumber = Math.floor(Math.random() * alphabetArray.length);
  const guess = prompt(
    `Your letter is ${alphabetArray[randomNumber]}. What index is this letter?`
  );
  const guessNumber = parseInt(guess, 10);
  console.log(guessNumber);
  console.log(randomNumber, "----Random");
  console.log(typeof guessNumber);
  if (guessNumber === randomNumber) {
    alert("You know the alphabet");
  } else {
    alert(`Relearn the alphabet. The actual answer is ${randomNumber}`);
  }
};

letterGuesser();
