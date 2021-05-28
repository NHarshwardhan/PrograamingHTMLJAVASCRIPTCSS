function onLoadTextFile() {
  const theFileElement = document.getElementById("theTextFile");

  console.log(theFileElement);

  if (theFileElement.files.length != 0) {
    const reader = new FileReader();

    reader.readAsDataURL(theFileElement.files[0]);

    reader.onload = function (event) {
      document.getElementById("theImage").src = event.target.result;
    };
    reader.onerror = function (event) {
      console.log("Can not load text file");
    };
  } else {
    console.log("Please select a text file");
  }
}
