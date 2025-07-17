class SweetShop {
    constructor() {
      this.sweets = [];
      this.nextId = 1;
    }
  
    addSweet({ name, category, price, quantity }) {
      const sweet = {
        id: this.nextId++,
        name,
        category,
        price,
        quantity,
      };
      this.sweets.push(sweet);
      return sweet;
    }
  
    deleteSweet(id) {
      this.sweets = this.sweets.filter(s => s.id !== id);
    }
  
    searchSweets({ name, category, minPrice, maxPrice }) {
      return this.sweets.filter(s => {
        return (!name || s.name.toLowerCase().includes(name.toLowerCase())) &&
               (!category || s.category === category) &&
               (!minPrice || s.price >= minPrice) &&
               (!maxPrice || s.price <= maxPrice);
      });
    }
  
    purchaseSweet(id, qty) {
      const sweet = this.sweets.find(s => s.id === id);
      if (!sweet) throw new Error('Sweet not found');
      if (sweet.quantity < qty) throw new Error('Not enough stock');
      sweet.quantity -= qty;
    }
  
    restockSweet(id, qty) {
      const sweet = this.sweets.find(s => s.id === id);
      if (!sweet) throw new Error('Sweet not found');
      sweet.quantity += qty;
    }
  
    sortSweets(sortBy) {
      return this.sweets.sort((a, b) => {
        if (sortBy === 'price') return a.price - b.price;
        return a.name.localeCompare(b.name);
      });   
    }

    updateSweet(id, { name, category, price, quantity }) {
      const sweet = this.sweets.find(s => s.id === id);
      if (!sweet) throw new Error('Sweet not found');
      sweet.name = name || sweet.name;
      sweet.category = category || sweet.category;
      sweet.price = price || sweet.price;
      sweet.quantity = quantity || sweet.quantity;
    }   
  }
  
  module.exports = SweetShop;