import vkbeautify from "vkbeautify";

export const sqlQueryBuilder = (
  query: TemplateStringsArray,
  ...args: Array<unknown>
) => {
  const newString: string[] = [];
  for (let i = 0; i < query.length; i++) {
    const queryChunk = query[i];
    newString.push(queryChunk);
    if (i <= args.length - 1) {
      const currentArg = String(args[i]).trim();
      newString.push(currentArg);
    }
  }
  const sql = newString.join("");
  return vkbeautify.sqlmin(sql);
};

export default sqlQueryBuilder;
