// 🐶 狗狗年齡換成人類年齡公式
function dogToHumanAge(dogAge) {
  if (dogAge <= 0) return 0;
  if (dogAge === 1) return 15;
  if (dogAge === 2) return 24;
  return 24 + (dogAge - 2) * 5;
}

// 計算狗狗年齡（以生日計算）
function getDogAge(birthday) {
  const birth = new Date(birthday);
  const today = new Date();

  const diff = today - birth;
  const years = diff / (1000 * 60 * 60 * 24 * 365.25);

  return Math.floor(years * 10) / 10; // 一位小數
}

// 健康提醒 (依狗狗年齡範圍)
function getHealthNote(age) {
  if (age < 2) return "🐾 幼犬階段：注意疫苗、寄生蟲、基本訓練、社會化。";
  if (age < 7) return "🌟 青壯年：注意牙齒清潔、適度運動與均衡飲食。";
  if (age < 10) return "🧡 中年犬：注意關節保健、體重管理、年度健康檢查。";
  return "💛 高齡犬：注意心臟、腎臟、關節、腫瘤與定期健檢。";
}

// DOM
const calcBtn = document.getElementById("calcBtn");
const resultBox = document.getElementById("result");
const dogBirthdayInput = document.getElementById("dogBirthday");

// 載入 localStorage
window.onload = () => {
  const last = localStorage.getItem("dogAgeData");
  if (last) {
    resultBox.style.display = "block";
    resultBox.innerHTML = last;
  }
};

// 計算按鈕事件
calcBtn.addEventListener("click", () => {
  const birthday = dogBirthdayInput.value;
  if (!birthday) return alert("請輸入狗狗的生日！");

  const dogAge = getDogAge(birthday);
  const humanAge = dogToHumanAge(Math.floor(dogAge));

  const healthNote = getHealthNote(dogAge);

  const html = `
    <p>🐶 <b>狗狗實際年齡：</b> ${dogAge} 歲</p>
    <p>👨‍🦳 <b>換算人類年齡：</b> ${humanAge} 歲</p>
    <p>🩺 <b>健康提醒：</b> ${healthNote}</p>
  `;

  resultBox.innerHTML = html;
  resultBox.style.display = "block";

  // 存入 localStorage
  localStorage.setItem("dogAgeData", html);
});
