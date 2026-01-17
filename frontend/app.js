async function checkPassword() {
  const pw = document.getElementById("password").value;
  const output = document.getElementById("riskOutput");

  output.innerText = "Checking...";

  const result = await mockCheckPassword(pw);

  output.innerText =
    `Risk Score: ${result.risk}
Breach Found: ${result.breached ? "Yes" : "No"}
Suggestion: ${result.suggestion}`;
}

function generatePassword() {
  document.getElementById("generatedPassword").innerText =
    mockGeneratePassword();
}

function loadEvolution() {
  const list = document.getElementById("evolutionList");
  const history = mockPasswordEvolution();

  history.forEach(pw => {
    const li = document.createElement("li");
    li.innerText = pw;
    list.appendChild(li);
  });
}

loadEvolution();

