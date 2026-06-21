import db from '../db.json';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getCart = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

const saveCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const api = {
  get: async (url) => {
    await delay(300); // Gerçekçi olması için ufak bir gecikme ekliyoruz

    if (url === './restaurants' || url === '/restaurants') {
      return { data: db.restaurants };
    }

    if (url.startsWith('/restaurants/')) {
      const id = url.split('/').pop();
      const restaurant = db.restaurants.find(r => String(r.id) === String(id));
      return { data: restaurant };
    }

    if (url.startsWith('/products?restaurantId=')) {
      const id = url.split('=')[1];
      const products = db.products.filter(p => String(p.restaurantId) === String(id));
      return { data: products };
    }

    if (url === '/cart' || url === '/cart/') {
      return { data: getCart() };
    }

    return { data: [] };
  },

  post: async (url, data) => {
    await delay(300);
    if (url === '/cart' || url === '/cart/') {
      const cart = getCart();
      cart.push(data);
      saveCart(cart);
      return { data };
    }
  },

  patch: async (url, data) => {
    await delay(300);
    if (url.startsWith('/cart/')) {
      const id = url.split('/').pop();
      const cart = getCart();
      const index = cart.findIndex(item => String(item.id) === String(id));
      if (index !== -1) {
        cart[index] = { ...cart[index], ...data };
        saveCart(cart);
        return { data: cart[index] };
      }
    }
    throw new Error('Ürün bulunamadı');
  },

  delete: async (url) => {
    await delay(300);
    if (url.startsWith('/cart/')) {
      const id = url.split('/').pop();
      let cart = getCart();
      cart = cart.filter(item => String(item.id) !== String(id));
      saveCart(cart);
      return { data: {} };
    }
  }
};

export default api;