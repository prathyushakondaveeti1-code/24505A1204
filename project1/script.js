document.getElementById("questionnaire").addEventListener("submit", function(e) {
  e.preventDefault();

  const mother = e.target.mother.value.trim().toUpperCase();
  const father = e.target.father.value.trim().toUpperCase();

  let possibleTypes = [];

  // Simple illustrative logic (not medically accurate!)
  if (mother.includes("O") && father.includes("O")) {
    possibleTypes = ["O"];
  } else if (mother.includes("A") && father.includes("A")) {
    possibleTypes = ["A", "O"];
  } else if (mother.includes("B") && father.includes("B")) {
    possibleTypes = ["B", "O"];
  } else {
    possibleTypes = ["A", "B", "AB", "O"];
  }

  document.getElementById("result").innerHTML =
    `<h2>Estimated Possible Blood Types:</h2><p>${possibleTypes.join(", ")}</p>`;
});
