import sql from "../helpers/sqlQueryBuilder";
import dbAPI from "../helpers/dbAPI";
import { TAdminId } from "../../types/Admin";

const adminSelectModel = {
  
  async checkCredentials(username: string, encryptedPassword: string) {
    const query = sql`
        SELECT 
            id, 
            username, 
            DATE_FORMAT(last_login, '%Y-%m-%d %T') AS lastLogin,
            role, 
            full_name AS fullName 
        FROM admin_users 
        WHERE 
            username = '${username}'
        AND 
            password = '${encryptedPassword}'
        LIMIT 1;`;
    const admin = await dbAPI.queryGetOne<TAdminId>(
      query,
      "admin_users"
    );
    return admin;
  }
};
export default adminSelectModel;
