var newP = document.getElementById("newP");

function changeValue() {
    textField = document.getElementById("textField1");
    var innerValue = textField.value;
//    var newValue = innerValue.replace("5.75.130.20", "45.139.11.167").replace("116.202.3.144", "45.139.11.167").replace("88.198.122.138", "45.139.11.167").replace("95.217.245.72", "45.139.11.167").replace("bat1.tigerkala.com", "45.139.11.167").replace("65.108.48.150", "103.215.221.228");
    var newValue = innerValue.replace("65.108.48.150", "103.215.221.228");
    newP.innerHTML = newValue;
    newP.value = newValue;

}



function cpLink() {
    ///navigator.clipboard.writeText(newP.value);
    newP.focus();
    newP.select();
    //alert("کپی شد");
}


var copyToClipboard = function copyToClipboard(element) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
};
closeButton.addEventListener("click", function () {
    location.reload();
});
copyButton.addEventListener("click", copyToClipboard);
