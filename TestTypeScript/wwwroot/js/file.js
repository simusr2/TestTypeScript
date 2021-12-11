let el = document.getElementById("input-file");
let op = {
    allowMultiple: true,
    allowImagePreview: true,
    imagePreviewMinHeight: 1,
};
let myAlert;
let myFilePond;
myFilePond = filepond.create(el, op);
let myFiles = myFilePond.getFiles();
