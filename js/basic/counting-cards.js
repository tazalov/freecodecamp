/*
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.
*/

let count = 0;

function cc(card) {
  // Only change code below this line
  if (card < 7) {
    count ++;
  } else if (card < 10) {
    count = count;
  } else {
    count--;
  }

  return count > 0 ? `${count} Bet` : `${count} Hold`;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');