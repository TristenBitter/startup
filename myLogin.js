function login() {
  const nameEl_1 = document.querySelector("#name_1");
  localStorage.setItem("user_1", nameEl_1.value);
  const nameEl_2 = document.querySelector("#name_2");
  localStorage.setItem("user_2", nameEl_2.value);
  const nameEl_3 = document.querySelector("#name_3");
  localStorage.setItem("user_3", nameEl_3.value);
  const nameEl_4 = document.querySelector("#name_4");
  localStorage.setItem("user_4", nameEl_4.value);

  window.location.href = "play.html";

  //   const nameEl_1 = document.querySelector("#name_1");
  //   user_1 = { name: nameEl_1.value, score: 0, round_banked: 0 };
  //   localStorage.setItem("user_1", JSON.stringify(user_1));
}
