function namex() {
  let x = 0;
  document.querySelector("#btn").addEventListener("click", function () {
    console.log("clicked ", ++x);
  });
}
namex();