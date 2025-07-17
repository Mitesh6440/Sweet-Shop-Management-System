let sweets = [];

function renderSweets() {
  const list = document.getElementById('sweet-list');
  list.innerHTML = sweets.map(s => `
    <div class="sweet-item">
      <b>${s.name}</b> (${s.category}) - $${s.price} | Qty: ${s.quantity}
      <button onclick="deleteSweet(${s.id})">Delete</button>
    </div>
  `).join('');
}

function addSweet(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const category = document.getElementById('category').value;
  const price = parseFloat(document.getElementById('price').value);
  const quantity = parseInt(document.getElementById('quantity').value, 10);
  const id = sweets.length ? sweets[sweets.length-1].id + 1 : 1;
  sweets.push({ id, name, category, price, quantity });
  renderSweets();
  e.target.reset();
}

function deleteSweet(id) {
  sweets = sweets.filter(s => s.id !== id);
  renderSweets();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add-form').addEventListener('submit', addSweet);
  renderSweets();
});