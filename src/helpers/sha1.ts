import crypto from "crypto";

export  const sha1=(data: string)=> {
  let generator = crypto.createHash("sha1");
  generator.update(data);
  return generator.digest("hex");
}
