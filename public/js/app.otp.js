const Form = document.querySelector("form");
const otp = document.querySelector("#otp");
const btn = document.querySelector("button");

btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
Form.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    otp: otp.value,
  };

  const handleFetchForm = async (res, req) => {
    const request = await fetch("/otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const response = await request.text();
    console.log(request.statusText);
    console.log(response);
    if (response == "success") {
      otp.value = "";
      location.href = "/otp";
    } else {
      console.log("error");
    }
  };
  handleFetchForm();
});
