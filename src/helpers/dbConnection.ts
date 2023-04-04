import { isNullOrUndefined } from "../helpers/typeGuards";
import mysql from "mysql2/promise";
import config from "../configuration/keys/environments";
import memoize from "lodash/memoize";
import { mysqlHelper } from "../helpers/mysql";

const dbConfig = config.mysql;

type TDatabase ="default"
export type TDatabaseTable =
  | "main"
  | "users"
  | "user_profile"
  | "admin_users";
class DBConnection {
  instance_default: mysql.Pool | null = null;
  instance_chat: mysql.Pool | null = null;
  instance_default_read_replica: mysql.Pool | null = null;
  instance_chat_read_replica: mysql.Pool | null = null;

  getDatabase(): mysql.Pool {
        if (!this.instance_default) {
          try {
            const config = mysqlHelper.getPoolConfiguration(dbConfig.default);
            const pool = mysql.createPool(config);
            this.instance_default = pool;
          } catch (exception) {
            throw exception;
          }
        }
        return this.instance_default;
    }
    
  async retrievalQuery({
    query,
    args
  }: {
    query: string;
    args?: unknown;
   }) {
    let connection = null;

    try {
      const pool = this.getDatabase();
      if (isNullOrUndefined(pool)) {
        return [];
      }
      connection = await pool.getConnection();
      const [rows] = await connection.query<mysql.RowDataPacket[]>(query, args);
      connection.release();
      return rows;
    } catch (exception) {
      if (!isNullOrUndefined(connection)) {
        connection.release();
      }
      throw exception;
    }
  }
}
export const dbConnection = memoize(
  () => new DBConnection(),
  () => 1
);
export default dbConnection;
