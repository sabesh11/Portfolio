
function sendData() {
    const Name = document.getElementById("floatingInput").value;
    const Email = document.getElementById("floatingEmail").value;
    const Meassage = document.getElementById("exampleFormControlTextarea1").value;

    const data = {
        Name: Name,
        Email: Email,
        Meassage: Meassage
    }
}