import express from "express";
import gateKeeper from "../../helpers/gateKeeper";
import config from "../../configuration/keys/environments";
import output from "../../helpers/output";
import personalLibrary from "../../libraries/personal";
 
const coreController = {
  async checkCredentials(req: express.Request, res: express.Response) {
    const body = gateKeeper.decryptBody({
      req,
      key:  config.encryptKeyData,
      encrypted: true
    });
  
    try {
      const username =  body.username;
      const password = body.password;
      const admin = await personalLibrary.checkCredentials(username, password);
  
    
       output.success(res, { admin });
    } catch (exception) {
      output.error(res, exception);
    }
  },
 
};
export default coreController;
