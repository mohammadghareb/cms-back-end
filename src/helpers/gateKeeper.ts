
import CryptoJS from "crypto-js";
import Express from "express";
import {isDefinedString,isDefinedObject} from "./typeGuards"
const gateKeeper = {
    decryptBody ({
        req,
        key,
      }: {
        req: Express.Request;
        key: string;
      }){
        
        let body: { [a: string]: any } = {};
        const bodyBytes = CryptoJS.AES.decrypt(`${req.body.data}`, key);
        body = JSON.parse(bodyBytes.toString(CryptoJS.enc.Utf8));
        const bodyLength =  Object.keys(body).length;

        for (let i = 0; i < bodyLength; i++) {
          const key = Object.keys(body)[i];
          const value = body[key];
          if (isDefinedString(value)) {
            body[key] = (value);
          } else if (isDefinedObject(value)) {
            const objectLength = Object.keys(body[key]).length;
            for (let j = 0; j < objectLength; j++) {
              const subKey = Object.keys(body[key])[i];
              const subValue = body[key][subKey];
              body[key][subKey] = (subValue);
            }
          }
        }
        return body;
      }
};
export default gateKeeper;


 