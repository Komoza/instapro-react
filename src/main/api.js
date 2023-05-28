const personalKey = "Komoza-dev";
// const personalKey = "prod";

const baseHost = "https://webdev-hw-api.vercel.app";
const postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;

export function getPosts() {
    return fetch(postsHost, {
      method: "GET",
      headers: {
        Authorization: '',
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        return data.posts;
      });
  }

  export function loginUser({ login, password }) {
    return fetch(baseHost + "/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
    }).then((response) => {
      if (response.status === 400) {
        throw new Error("Неверный логин или пароль");
      }
      return response.json();
    });
  }