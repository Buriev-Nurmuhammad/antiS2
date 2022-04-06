btn.onclick = () => {
  let text = document.getElementById("tf");
  let abuse = [
    "xuy",
    "blyat",
    "beka",
    "suka",
    "eban",
    "dalbayob",
    "chmo",
    "oneyni",
    "pizda",
    "хуй",
    "блять",
    "бека",
    "сука",
    "ебан",
    "далбаёб",
    "чмо",
    "онейни",
    "пизда",
    "чорт",
    "Blyat",
    "Beka",
    "Suka",
    "Eban",
    "Dalbayob",
    "Chmo",
    "Oneyni",
    "Pizda",
    "Хуй",
    "Блять",
    "Бека",
    "Сука",
    "Ебан",
    "Далбаёб",
    "Чмо",
    "Онейни",
    "Пизда",
    "Чорт",
  ];
  let btn = document.getElementById("btn");
  let tv = text.value;

 document.body.innerHTML = (
    tv
      .split(" ")
      .map((a) => (abuse.some((elem) => elem == a) ? "*".repeat(a.length) : a))
      .join(" ")
  );
  
};






