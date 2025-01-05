import { Product } from "../types";


export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Macbook Pro (2024)',
    slug: 'macbook-pro-2024',
    heroImage: require('../images/mac-book-1.jpg'),
    imagesUrl: [
      require('../images/mac-book-1.jpg'),
      require('../images/mac-book-2.jpg'),
      require('../images/mac-book-3.jpg'),
    ],
    price: 899.99,
    category: {
      imageUrl: require('../images/mac-book-1.jpg'),
      name: 'Laptops',
      slug: 'laptops',
    },
    maxQuantity: 5,
  },
  {
    id: 5,
    title: 'Dell XPS 13',
    slug: 'dell-xps-13',
    heroImage: require('../images/dell-1.jpg'),
    imagesUrl: [
      require('../images/dell-1.jpg'),
      require('../images/dell-2.jpg'),
    ],
    price: 1099.99,
    category: {
      imageUrl: require('../images/mac-book-1.jpg'),
      name: 'Laptops',
      slug: 'laptops',
    },
    maxQuantity: 7,
  },
  {
    id: 2,
    title: 'IPhone 15',
    slug: 'i-phone-15',
    heroImage: require('../images/i-phone-1.jpg'),
    imagesUrl: [
      require('../images/i-phone-2.jpg'),
      require('../images/i-phone-3.jpg'),
    ],
    price: 999.99,
    category: {
      imageUrl: require('../images/i-phone-1.jpg'),
      name: 'Phones',
      slug: 'phones',
    },
    maxQuantity: 10,
  },
  {
    id: 6,
    title: 'Samsung Galaxy S21',
    slug: 'samsung-galaxy-s21',
    heroImage: require('../images/samsung-1.jpg'),
    imagesUrl: [
      require('../images/samsung-1.jpg'),
      require('../images/samsung-2.jpg'),
    ],
    price: 799.99,
    category: {
      imageUrl: require('../images/i-phone-1.jpg'),
      name: 'Phones',
      slug: 'phones',
    },
    maxQuantity: 12,
  },
  {
    id: 3,
    title: 'Headset',
    slug: 'headset',
    heroImage: require('../images/head-set-1.jpg'),
    imagesUrl: [
      require('../images/head-set-1.jpg'),
      require('../images/head-set-2.jpg'),
    ],
    price: 499.99,
    category: {
      imageUrl: require('../images/head-set-1.jpg'),
      name: 'Accessories',
      slug: 'accessories',
    },
    maxQuantity: 15,
  },
  {
    id: 4,
    title: 'PlayStation 5',
    slug: 'playstation-5',
    heroImage: require('../images/ps-5-1.jpg'),
    imagesUrl: [
      require('../images/ps-5-1.jpg'),
      require('../images/ps-5-2.jpg'),
      require('../images/ps-5-3.jpg'),
    ],
    price: 699.99,
    category: {
      imageUrl: require('../images/ps-5-1.jpg'),
      name: 'Gaming',
      slug: 'gaming',
    },
    maxQuantity: 3,
  },
  {
    id: 7,
    title: 'Nintendo Switch',
    slug: 'nintendo-switch',
    heroImage: require('../images/nintendo-switch-1.jpg'),
    imagesUrl: [
      require('../images/nintendo-switch-1.jpg'),
      require('../images/nintendo-switch-2.jpg'),
    ],
    price: 299.99,
    category: {
      imageUrl: require('../images/ps-5-1.jpg'),
      name: 'Gaming',
      slug: 'gaming',
    },
    maxQuantity: 8,
  },
];