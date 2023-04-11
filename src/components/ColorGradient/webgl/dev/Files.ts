export function Download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

export function Import() {

  return new Promise((resolve) => {
    var input = document.createElement("input");
    input.type = "file";

    input.addEventListener("change", () => {
      const file = input.files[0];
      if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function(evt) {
          resolve(JSON.parse(evt.target.result as string));
        }
      }
    });

    input.click();
  })

}