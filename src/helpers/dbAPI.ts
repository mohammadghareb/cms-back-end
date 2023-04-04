 
 import dbConnection from "./dbConnection";

 export type TDatabaseTable = "users" | "admin_users";

const dbAPI = {
  async queryGetOne<T>(
    query: string,
     tableName: TDatabaseTable
  ) {
    const rows = await dbConnection().retrievalQuery({
       query    });
    return (rows.length > 0 ? rows[0] : {}) as T;
  },
  async queryExecute<T>(
    query: string,
     tableName: TDatabaseTable
  ) {
    const rows = await dbConnection().retrievalQuery({
       query    });
    return <T>rows;
  }
};
export default dbAPI;
