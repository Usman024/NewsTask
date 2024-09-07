import { apiKeys, baseURLs } from "../constant/NewsApi.ts";
import { NewsResource } from "../types/News";
// To wait out async calls wait and to work with threads
// import { Mutex, Semaphore, withTimeout } from "async-mutex";
// import jwt_decode from "jwt-decode";
// export const mutex = new Mutex();

export function GET(url: string, selectedSource: NewsResource) {
  return createApiFetch(url, "GET", null, selectedSource);
}

export function POST(url: string, body = null, selectedSource: NewsResource) {
  return createApiFetch(url, "POST", body, selectedSource);
}

export function PATCH(url: string, body = null, selectedSource: NewsResource) {
  return createApiFetch(url, "PATCH", body, selectedSource);
}

export function PUT(url: string, body = null, selectedSource: NewsResource) {
  return createApiFetch(url, "PUT", body, selectedSource);
}

export function DELETE(url: string, body = null, selectedSource: NewsResource) {
  return createApiFetch(url, "DELETE", body, selectedSource);
}

// This is custom build function which will provide functionality
// For making API calls instead of using AXIOS or RTK query
export function createApiFetch(
  url: string,
  method: string,
  body: any,
  selectedSource: NewsResource
) {
  let completeURL = baseURLs[selectedSource] + url + apiKeys[selectedSource];
  return fetch(completeURL, {
    method: method,
    body: body,
  })
    .then(async (response) => {
      return response.json();
    })
    .then((response) => {
      console.log("json response -> ", response);
      if (
        !!!response.status ||
        (typeof response.status == "string" &&
          response.status.toLowerCase() != "ok") ||
        (typeof response.status == "number" && response.status != 200)
      ) {
        throw response;
      }

      // Returing Response based of our selected SOURCE
      if (selectedSource == "NewYork Times") return response.response.docs;
      else return response.articles;
    })
    .catch(async (error: any) => {
      console.log("fetch catch -> ", error);

      // Returing error based of our selected SOURCE
      if (selectedSource == "NewYork Times")
        throw error.fault.faultstring.split(".")[0];
      else throw error.message.split(".")[0];
    });
}

// function to handle accesstoken if we use it within our application
const onRequest = async ({ request, options }) => {
  //
  //   console.log("request", request);
  //   if (!isAccessTokenExpired()) return;
  //   console.log("expired refresh");
  //   if (mutex.isLocked()) {
  //     console.log("in if");
  //     await mutex.waitForUnlock();
  //     const accessToken = useCookie("accessToken");
  //     options.headers.Authorization = `Bearer ${accessToken.value}`;
  //   } else {
  //     console.log("in else");
  //     const release = await mutex.acquire();
  //     console.log("refreshing token");
  //     const [success, error] = await refreshToken();
  //     release();
  //     if (success) {
  //       console.log("in success");
  //       if (success.msg == "Token expired") {
  //         openSnackBar(
  //           "error",
  //           "Token Expired",
  //           "Login Again! You have not been interacting with application for previous some minutes.",
  //           "",
  //           ""
  //         );
  //         navigateTo("/");
  //         return;
  //       }
  //       const accessToken = useCookie("accessToken");
  //       options.headers.Authorization = `Bearer ${accessToken.value}`;
  //     }
  //   }
};

// code to check if accesstoken is  expired or not
function isAccessTokenExpired() {
  //
  // const accessToken = useCookie("accessToken");
  // try {
  //   if (!!!accessToken.value) {
  //     throw { data: "Invalid Access Token: " + accessToken };
  //   }
  //   let exp = jwt_decode(accessToken.value).expiry;
  //   exp = Math.round(new Date(exp).getTime() / 1000);
  //   let time = parseInt(Math.round(new Date().getTime() / 1000));
  //   let difference = exp - time;
  //   let isTokenExpired = difference <= 100 ? true : false;
  //   // console.log("isexpired", isTokenExpired);
  //   return isTokenExpired;
  // } catch (error) {
  //   return false;
  // }
}
