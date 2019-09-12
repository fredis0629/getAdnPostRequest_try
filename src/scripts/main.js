window.onload = () => {
  const ajaxGetRequestSubmit = window.ajaxGet;
  const ajaxGetRequestInput = window.ajaxGetInput;
  const ajaxPostRequestSubmit = window.ajaxPost;

  ajaxGetRequestSubmit.addEventListener("submit", loadAjaxGet);

  ajaxPostRequestSubmit.addEventListener("submit", loadAjaxPost);

  function loadAjaxGet(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", `/ajaxGetRequest?name=${ajaxGetRequestInput.value}`, true);
    xhttp.send();
  }
  function loadAjaxPost(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/ajaxPostRequest", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    let resp = {};
    for (let index = 0; index < ajaxPostRequestSubmit.length - 1; index++) {
      resp[ajaxPostRequestSubmit[index].name] = ajaxPostRequestSubmit[index].value;
    }
    xhttp.send(JSON.stringify(resp));
  }
};
