const toStr = Object.prototype.toString;

export const isNullOrUndefined=(v: unknown): v is null | undefined =>{
    return v === null || v === undefined || typeof v === "undefined";
  }
  
export const isDefinedString=(v: unknown): v is string=> {
    return typeof v === "string" && v !== "" && v !== null;
  }

  export const isDefinedObject=(v: unknown): v is Object =>{
    if (typeof v !== "object" || isNullOrUndefined(v)) return false;
    return (
      toStr.call(v) === "[object Object]" &&
      Object.keys(v).length > 0 &&
      v !== null
    );
  }