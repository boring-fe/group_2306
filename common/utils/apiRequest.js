export class ApiRequest {
  constructor() {}
  /**
   *
   * @param {Object} data
   * @param {string} url
   * @param {Function} onSuccess
   * @param {Function} onError
   */
  post(data, url, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));

    xhr.onload = () => {
      if (xhr.status >= 500) {
        alert("Server  error");
      }

      if (xhr.status >= 400) {
        onError(xhr.statusText);
      }
      if (xhr.status >= 200) {
        onSuccess(xhr.response);
      }
    };
  }
  /**
   *
   * @param {string} url
   * @param {Function} onSuccess
   * @param {Function} onError
   */
  get(url, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.send();
    xhr.onload = () => {
      console.log(xhr.status);
      if (xhr.status >= 500) {
        alert("Server  error");
      }

      if (xhr.status >= 400) {
        onError(xhr.statusText);
      }
      if (xhr.status >= 200) {
        onSuccess(xhr.response);
      }
    };
  }
}
