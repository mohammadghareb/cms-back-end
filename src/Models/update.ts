import dateHelper from "../helpers/date";
import sql from "../helpers/sqlQueryBuilder";
import dbAPI from "../helpers/dbAPI";

const adminUpdateModel = {
  async updateAccessToken({
    admin_id,
    accessToken,
    duration
  }: {
    admin_id: number;
    accessToken: string | number;
    duration: number;
  }) {
    const currentTime = dateHelper.getCurrentTime("STRING");
    const query = sql`
    UPDATE admin_users 
    SET access_token='${accessToken}',
      access_token_time=DATE_ADD('${currentTime}', INTERVAL ${duration} DAY),
      last_login = '${currentTime}'
    WHERE id=${admin_id}`;
    return await dbAPI.queryExecute(query, "admin_users");
  }
};
export default adminUpdateModel;
