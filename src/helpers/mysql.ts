export type TDatabaseCredentials = {
    user: string | undefined;
    database: string;
    host: string | undefined;
    password: string | undefined;
    port: number;
    charset: string;
  };
  
export type TDatabaseField = {
  type: string;
  length: number;
  db: string;
  table: string;
  name: string;
  string: () => string;
};

export const mysqlHelper = {
  mysqlTypeCasting: (field: TDatabaseField, next: () => void) => {
    const fieldType =field.type;
    switch (fieldType) {
      case "LONG":
      case "LONGLONG":
      case "NEWDECIMAL":
      case "FLOAT":
        const value = field.string();
        return parseFloat(value);

      case "VAR_STRING":
      case "STRING":
      case "DATETIME":
      default:
        return next();
    }
  },
  getPoolConfiguration: (databaseCredentials: TDatabaseCredentials) => {
    return {
      ...databaseCredentials,
      typeCast: function (
        field: {
          type: string;
          length: number;
          db: string;
          table: string;
          name: string;
          string: () => string;
        },
        next: () => void
      ) {
        return mysqlHelper.mysqlTypeCasting(field, next);
      }
    };
  }
};
