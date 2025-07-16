function beforeSubmit() {
  const outputDate = document.querySelector(".outputdate");
  const inputDate = document.querySelector(".inputDate");
  console.log(inputDate.value);
  let formateddate = new Date(inputDate.value).toLocaleDateString("en-IN");
  outputDate.value = formateddate;
}
