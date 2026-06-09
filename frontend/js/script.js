/* SIGNUP */

async function signup() {

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const response = await fetch(
        "http://localhost:5000/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        }
    );

    const data = await response.json();

    alert(data.message);

    window.location.href = "login.html";
}

/* LOGIN */

async function login() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const response = await fetch(
        "http://localhost:5000/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }
    );

    const data = await response.json();

    if (data.success) {

        localStorage.setItem(
            "user_id",
            data.user.user_id
        );

        localStorage.setItem(
            "username",
            data.user.name
        );

        window.location.href =
            "booking.html";

    } else {

        alert("Invalid Login");
    }
}

/* BOOKING */

/* BOOKING */

async function bookProperty() {

    const property =
        document.getElementById("property").value;

    const propertyId =
        document.getElementById("property").selectedIndex;

    const guests =
        document.getElementById("guests").value;

    const startDate =
        document.getElementById("startDate").value;

    const endDate =
        document.getElementById("endDate").value;

    const user_id =
        localStorage.getItem("user_id");

    const prices = {
        "Luxury Apartment": 3000,
        "Beach House": 5000,
        "Hill Cottage": 4000,
        "City Studio": 2500,
        "Lake View Villa": 6000
    };

    const start = new Date(startDate);
    const end = new Date(endDate);

    const days =
        Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    const totalPrice =
        days * prices[property];

    localStorage.setItem("property", property);
    localStorage.setItem("guests", guests);
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("endDate", endDate);
    localStorage.setItem("price", totalPrice);

    const response = await fetch(
        "http://localhost:5000/booking",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id,
                property_id: propertyId
            })
        }
    );

    const data = await response.json();

    alert(data.message);

    window.location.href = "confirmation.html";
}