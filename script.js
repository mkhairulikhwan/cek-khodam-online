const listKhodam = [
  "kalimbuay",
  "buhaya darat",
  "hayam kt",
  "kuduk zuma",
  "walut",
  "anguy",
  "sapat siam",
  "haruan",
  "sadu",
  "ular kadut",
  "biyuku",
  "bekantan",
  "katikih",
  "haruan",
  "tidak ada",
];

function pilihKhodam(event) {
  event.preventDefault();
  const nama = document.getElementById("nama").value;
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "";
  if (nama) {
    const randomIndex = Math.floor(Math.random() * listKhodam.length);
    const khodamTerpilih = listKhodam[randomIndex];
    resultDiv.textContent = `Khodamnya ${nama} adalah "${khodamTerpilih}".`;

    setTimeout(() => {
      resultDiv.textContent = "...";
    }, 10000);
  } else {
    resultDiv.textContent = "Nama harus diisi.";
  }
}

document.getElementById("formKhodam").addEventListener("submit", pilihKhodam);
