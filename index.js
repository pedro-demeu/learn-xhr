function makeRequest() {
  callXHRRequest();
}

function callXHRRequest() {
  const req = new XMLHttpRequest();

  req.open("GET", "http://localhost:3000/file", true);

  req.send();

  req.onreadystatechange = function () {
    if (req.readyState == XMLHttpRequest.DONE) {
      const content = req.response;

      if (content) {
        console.log(content);
        document.getElementById("content").innerHTML = content;
      }
    }
  };

  console.log("XHR Properties", req)
}
