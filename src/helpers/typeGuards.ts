const toStr = Object.prototype.toString;

export const isNullOrUndefined=(value: unknown): value is null | undefined =>{
    return value === null || value === undefined || typeof value === "undefined";
  }
  
export const isDefinedString=(value: unknown): value is string=> {
    return typeof value === "string" && value !== "" && value !== null;
  }

  export const isDefinedObject=(value: unknown): value is Object =>{
    if (typeof value !== "object" || isNullOrUndefined(value)) return false;
    return (
      toStr.call(value) === "[object Object]" &&
      Object.keys(value).length > 0 &&
      value !== null
    );
  }