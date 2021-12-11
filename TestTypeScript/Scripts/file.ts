let el: HTMLElement = document.getElementById("input-file") as HTMLElement;
let op: filepond.FilePondOptions = {
    allowMultiple: true,
    allowImagePreview: true,
    imagePreviewMinHeight: 1,
};
let myAlert: bootstrap.Alert;
let myFilePond: filepond.FilePond;
myFilePond = filepond.create(el, op);
let myFiles: filepond.FilePondFile[] = myFilePond.getFiles();