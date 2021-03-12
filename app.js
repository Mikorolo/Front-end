function takevalue()
{

    event.preventDefault();
    let firstNameValue=document.getElementById("firstName").value;
    let surnameValue=document.getElementById("surname").value;
    let telNumValue=document.getElementById("telNum").value;
    let emailValue=document.getElementById("mail").value;
    let messageValue=document.getElementById("message").value;
    //zrobić refactor bo się powtarza duzo

    const divResults = document.getElementById("results");
    let a = document.createElement("h4");
    let b = document.createElement("h4");
    let c = document.createElement("h4");
    let d = document.createElement("h4");
    let e = document.createElement("h4");

    a.textContent = "Twoje imię: " + firstNameValue;
    b.textContent = "Twoje nazwisko: " + surnameValue;
    c.textContent = "Twój numer: " + telNumValue;
    d.textContent = "Twój email: " + emailValue;
    e.textContent = "Twoja wiadomość: " + messageValue;


    divResults.append(a, b, c, d, e);
}