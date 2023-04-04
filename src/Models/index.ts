import adminInsertModel from "./insert";
import adminSelectModel from "./select";
import adminUpdateModel from "./update";

const adminModel = {
  insert: adminInsertModel,
  select: adminSelectModel,
  update: adminUpdateModel
};
export default adminModel;
