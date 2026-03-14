function vote() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var res = document.getElementById("res");

    // Clear previous classes
    res.classList.remove("eligible", "not-eligible");

    if (age >= 18) {
        // alert("Eligible to Vote");
        res.innerHTML = name + " " + "Eligible to Vote";
        res.classList.add("eligible");
    } else {
        // alert("You are still a Child");
        res.innerHTML = name + " " + "You are still a Child";
        res.classList.add("not-eligible");
    }
}