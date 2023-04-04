"use strict";
import {sha1} from "./sha1";
import { shuffleString } from "./stringHelpers";

const generator = {

  generateAccessToken(userId: number) {
    const key = "NE05c98Ig1Uyp9Q2R20GTq0iUizIR9zm";
    const randomString = shuffleString(
      "0123456789abcdefghijklmnopqrstvwxyz"
    ).substring(0, 20);
    return sha1(`${userId}${key}${randomString}`);
  },
 
};
export default generator;
