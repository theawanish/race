import axios from "axios";

export const getAllRace = () => {
  return new Promise(async (resolve, reject) => {
    try {
      //console.log(123);
      const ss = sessionStorage.getItem("accessJWT");
      //console.log(ss);
      const result = await axios.get("http://35.207.169.147/results", {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
    } catch (error) {
      reject(error,'why');
    }
  });
};

