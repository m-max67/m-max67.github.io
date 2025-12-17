function showPage(id) {
  document.querySelectorAll('.page').forEach(p =>
    p.classList.remove('active')
  );
  document.getElementById(id).classList.add('active');
}

function openGame(url, external = false) {
  if (external) {
    window.open(url, "_blank");
    return;
  }

  document.getElementById('frame').src = url;
  document.getElementById('modal').style.display = 'block';
}


function closeGame() {
  document.getElementById('frame').src = '';
  document.getElementById('modal').style.display = 'none';
}

function filterGames() {
  const q = document.getElementById('search').value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    card.style.display =
      card.dataset.name.includes(q) ? 'block' : 'none';
  });
}
