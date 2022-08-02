const convertDate = (day) => {
  var dd = String(day.getDate()).padStart(2, "0");
  var mm = String(day.getMonth() + 1).padStart(2, "0");
  var yyyy = day.getFullYear();

  return mm + "/" + dd + "/" + yyyy;
};

export default convertDate;