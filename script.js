function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p =>
    p.classList.remove('active')
  );
  document.getElementById(pageId).classList.add('active');
}

function openGame(game) {
  const frame = document.getElementById("gameFrame");
  const modal = document.getElementById("gameModal");

  const games = {
    clicker: "https://orteil.dashnet.org/cookieclicker/",
    snake: "https://playsnake.org/",
    pong: "https://www.ponggame.org/"
  };

  frame.src = games[game];
  modal.style.display = "block";
}

function closeGame() {
  document.getElementById("gameFrame").src = "";
  document.getElementById("gameModal").style.display = "none";
}

