// Simulated backend responses

function mockCheckPassword(password) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        risk: Math.min(password.length / 20 + Math.random(), 1).toFixed(2),
        breached: password.toLowerCase().includes("123"),
        suggestion: "X9!qA$kZ@92"
      });
    }, 500);
  });
}

function mockGeneratePassword() {
  return "A9@Xq!L2Z#k8";
}

function mockPasswordEvolution() {
  return [
    "password123",
    "Password@123",
    "P@ssw0rd2024",
    "A9@Xq!L2Z#k8"
  ];
}

