import Express from "express";

const output = {
  success(res: Express.Response, data: Object, success?: Object) {
    let response;
    if (success) {
      response = {
        status: "OK",
        data: data
      };
    } else {
      response = {
        status: "OK",
        data: data
      };
    }
    res.set("Content-Type", "application/json");
    res.status(200).send(response);
  },
  error(res: Express.Response, exception: any) {
    res.set("Content-Type", "application/json");
    if (process.env.NODE_ENV !== "production") {
      console.log("********* API RESPONSE ERROR *********");
      console.log(exception);
      console.log("****************************************");
    }

    if (exception) {
      if ("error" in exception) {
        res.status(400).send({
          status: "ERROR",
          data: exception.data
        });
      }
    }
  }
};
export default output;
