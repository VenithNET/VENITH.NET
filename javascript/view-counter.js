const VISITOR_COUNTER = document.getElementById("visitorCounter");

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Get the data
    let site_data = JSON.parse(this.responseText);
    // Add commas
    let num_arr = site_data.info.views.toString().split("");
    let num_str = "";
    for (i = 0; i < num_arr.length; i++) {
      num_str += num_arr[i];
      if ((num_arr.length - 1 - i) % 3 == 0 && num_arr.length - 1 - i != 0) {
        num_str += ",";
      }
    }
    // Add result to html
    VISITOR_COUNTER.innerHTML = num_str;
  }
};
xhttp.open(
  "GET",
  "https://weirdscifi.ratiosemper.com/neocities.php?sitename=daniele63",
  true
);
xhttp.send();
