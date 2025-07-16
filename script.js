function beforeSubmit() {
  const outputDate = document.querySelector(".outputdate");
  const inputDate = document.querySelector(".inputDate");
  console.log(inputDate.value);
  let formateddate = new Date(inputDate.value).toLocaleDateString("en-IN");
  outputDate.value = formateddate;
}
function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);
