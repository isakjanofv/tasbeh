let count = 0;

document.getElementById("increment-btn").addEventListener("click", function () {
  count++;
  document.getElementById("counter").innerText = count;
});

document.getElementById("reset-btn").addEventListener("click", function () {
  count = 0;
  document.getElementById("counter").innerText = count;
});
