import axios from "axios";

const rootUrl = "http://35.207.169.147";
const loginUrl = rootUrl + "/auth";
const userProfileUrl = rootUrl + "/user";
const logoutUrl = rootUrl + "user/logout";
const newAccessJWT = rootUrl + "tokens";
const userVerificationUrl = userProfileUrl + "/verify";

export const useAuthentication =({email,password})=>{
 
  setInterval(async function(){
   
    const isAuth = await userLogin({ email, password });
  },1000*60*4)
};

export const userRegistration = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(userProfileUrl, frmData);

      resolve(res.data);

      if (res.data.status === "success") {
        resolve(res.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const userRegistrationVerification = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.patch(userVerificationUrl, frmData);

      resolve(res.data);
      if (res.data.status === "success") {
        resolve(res.data);
      }
    } catch (error) {
      reject({ status: "error", message: error.error });
    }
  });
};

export const userLogin = (frmData) => {
  return new Promise(async (resolve, reject) => {
    console.log(frmData,'frmData >>>>');
    try {
      frmData = {
        "email": "the.awanish@gmail.com",
        "password": "lTgAYaLP9jRs",
        }
      const res = await axios.post(loginUrl, frmData);

      resolve(res.data);
        sessionStorage.setItem("accessJWT", res.data.token);
        console.log(res.data,'sdsdsdsdsd');
        localStorage.setItem(
          "crmSite",
          JSON.stringify({ refreshJWT: res.data.token })
        );
      
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");

      if (!accessJWT) {
        reject("Token not found!");
      }

      // const res = await axios.get(userProfileUrl, {
      //   headers: {
      //     Authorization: accessJWT,
      //   },
      // });

      resolve('');
    } catch (error) {
      console.log(error);
      // reject(error.message);
    }
  });
};

export const fetchNewAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshJWT } = JSON.parse(localStorage.getItem("crmSite"));

      if (!refreshJWT) {
        reject("Token not found!");
      }

      const res = await axios.get(newAccessJWT, {
        headers: {
          Authorization: refreshJWT,
        },
      });

      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
      }

      resolve(true);
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        localStorage.removeItem("crmSite");
      }

      reject(false);
    }
  });
};

export const userLogout = async () => {
  try {
    await axios.delete(logoutUrl, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};
