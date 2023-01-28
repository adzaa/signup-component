function submit() {
  const fName = document.querySelector('input[name="fName"]').value;
  const lName = document.querySelector('input[name="lName"]').value;
  const email = document.querySelector('input[name="Email"]').value;
  const password = document.querySelector('input[name="Password"]').value;

  if (fName === "") {
    document.querySelector('input[name="fName"]').style.border =
      "1px solid var(--primary-red)";
    document
      .querySelector('input[name="fName"]')
      .classList.add("input-error-icon");
    document.getElementById("input-empty-fname").style.display = "block";
  } else {
    document.querySelector('input[name="fName"]').style.border = "";
    document.getElementById("input-empty-fname").style.display = "none";
    document
      .querySelector('input[name="fName"]')
      .classList.remove("input-error-icon");
  }

  if (lName === "") {
    document.querySelector('input[name="lName"]').style.border =
      "1px solid var(--primary-red)";
    document.getElementById("input-empty-lname").style.display = "block";
    document
      .querySelector('input[name="lName"]')
      .classList.add("input-error-icon");
  } else {
    document.querySelector('input[name="lName"]').style.border = "";
    document.getElementById("input-empty-lname").style.display = "none";
    document
      .querySelector('input[name="lName"]')
      .classList.remove("input-error-icon");
  }

  if (email === "") {
    document.querySelector('input[name="Email"]').style.border =
      "1px solid var(--primary-red)";
    document.getElementById("input-empty-email").style.display = "block";
    document
      .querySelector('input[name="Email"]')
      .classList.add("input-error-icon");
  } else {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      document.querySelector('input[name="Email"]').style.border = "";
      document.getElementById("input-empty-email").style.display = "none";
      document
        .querySelector('input[name="Email"]')
        .classList.remove("input-error-icon");
    } else {
      document.querySelector('input[name="Email"]').style.border =
        "1px solid var(--primary-red)";
      document.getElementById("input-empty-email").style.display = "block";
      document
        .querySelector('input[name="Email"]')
        .classList.add("input-error-icon");
      document.querySelector('input[name="Email"]').placeholder =
        "email@example/com";
    }
  }

  if (password === "") {
    document.querySelector('input[name="Password"]').style.border =
      "1px solid var(--primary-red)";
    document.getElementById("input-empty-password").style.display = "block";
    document
      .querySelector('input[name="Password"]')
      .classList.add("input-error-icon");
  } else {
    document.querySelector('input[name="Password"]').style.border = "";
    document.getElementById("input-empty-password").style.display = "none";
    document
      .querySelector('input[name="Password"]')
      .classList.remove("input-error-icon");
  }
}
