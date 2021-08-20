import axios from "axios";
export async function fetchHomeProducts(setter) {
  console.log("here in crud");
  var res = await axios.get("http://localhost:5000/homeProducts");

  setter(res.data);
}

export async function fetchProduct(setter, id) {
  var req = new XMLHttpRequest();
  req.open("GET", "http://localhost:5000/product/" + id, true);
  req.send();
  req.onload = () => {
    var data = JSON.parse(req.responseText);
    setter(data);
  };
}
