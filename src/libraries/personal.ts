import { getFormmatedDate } from "../helpers/date";
import generator from "../helpers/generators";
import {sha1} from "../helpers/sha1";
import adminModel from "../Models";

const personalLibrary = {
  async checkCredentials(username: string, password: string) {
    const encryptedPassword = sha1(password);
    const admin = await adminModel.select.checkCredentials(
      username,
      encryptedPassword
    );
     
    const adminId =admin.id;
    const accessToken = generator.generateAccessToken(adminId);
    await updateAccessToken({
      admin_id: adminId,
      accessToken: accessToken,
      duration: 60
    });
    const lastLogin = getFormmatedDate(new Date());
    return { ...admin, lastLogin, accessToken };
  } 
};

const updateAccessToken = async ({
  admin_id,
  accessToken,
  duration
}: {
  admin_id: number;
  accessToken: string;
  duration: number;
}) => {
  return await adminModel.update.updateAccessToken({
    admin_id,
    accessToken,
    duration
  });
};
export default personalLibrary;
