var convertBtn = document.querySelector(".convert_btn");
var URLinput = document.querySelector(".url_input");

convertBtn.addEventListener("click", function () {
  console.log(`URL : ${URLinput.value}`);
  sendURL(URLinput.value);
});

function sendURL(URL) {
  window.location.href = `http://localhost:4000/download?URL=${URL}`;
}