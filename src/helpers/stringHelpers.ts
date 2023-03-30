import { shuffle } from "lodash";

export const shuffleString=(string: string)=> {
    const charArray = string.split("");
    const randomCharArray = shuffle(charArray);
    const shuffledString = randomCharArray.join("");
    return shuffledString;
  }