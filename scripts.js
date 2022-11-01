var newP = document.getElementById("newP");

function changeValue() {
    textField = document.getElementById("textField1");
    var innerValue = textField.value;
    var newValue = innerValue.replace("5.75.130.20", "88.198.122.138").replace("116.202.3.144", "88.198.122.138");
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