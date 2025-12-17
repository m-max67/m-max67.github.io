let currentCategory = 'all';

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function openGame(url, external = false) {
  saveRecent(url);
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

function toggleFullscreen() {
  const f = document.getElementById('frame');
  if (f.requestFullscreen) f.requestFullscreen();
}

function filterGames() {
  const q = document.getElementById('search').value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const matchName = card.dataset.name.includes(q);
    const matchCat = currentCategory === 'all' || card.dataset.cat === currentCategory;
    card.style.display = matchName && matchCat ? 'block' : 'none';
  });
}

function setCategory(cat) {
  currentCategory = cat;
  filterGames();
}

function toggleFav(el) {
  el.classList.toggle('active');
}

function saveRecent(url) {
  const r = JSON.parse(localStorage.getItem('recent') || '[]');
  if (!r.includes(url)) r.unshift(url);
  localStorage.setItem('recent', JSON.stringify(r.slice(0, 5)));
}
{
  name: "Mini Football",
  url: "your-games/football.html",
  img: "https://i.imgur.com/7W1R9ZB.png"
}
