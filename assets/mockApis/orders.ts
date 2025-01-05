import { Order } from "../types";


export const ORDERS: Order[] = [
  {
    id: '1',
    item: 'Order 1',
    details: 'Details about order 1',
    status: 'Pending',
    slug: 'order-1',
    date: '2024-07-01',
    items: [
      {
        id: 1,
        title: 'Product 1',
        slug: 'product-1',
        imagesUrl: ['url1'],
        price: 10.0,
        heroImage: require('../../assets/images/i-phone-1.jpg'),
      },
      {
        id: 2,
        title: 'Product 2',
        slug: 'product-2',
        imagesUrl: ['url2'],
        price: 20.0,
        heroImage: require('../../assets/images/head-set-1.jpg'),
      },
    ],
  },
  {
    id: '2',
    item: 'Order 2',
    details: 'Details about order 2',
    status: 'Completed',
    slug: 'order-2',
    date: '2024-07-02',
    items: [
      {
        id: 3,
        title: 'Product 3',
        slug: 'product-3',
        imagesUrl: ['url3'],
        price: 30.0,
        heroImage: require('../../assets/images/head-set-1.jpg'),
      },
      {
        id: 4,
        title: 'Product 4',
        slug: 'product-4',
        imagesUrl: ['url4'],
        price: 40.0,
        heroImage: require('../../assets/images/head-set-1.jpg'),
      },
    ],
  },
  {
    id: '3',
    item: 'Order 3',
    details: 'Details about order 3',
    status: 'Shipped',
    slug: 'order-3',
    date: '2024-07-03',
    items: [
      {
        id: 5,
        title: 'Product 5',
        slug: 'product-5',
        imagesUrl: ['url5'],
        price: 50.0,
        heroImage: require('../../assets/images/head-set-1.jpg'),
      },
      {
        id: 6,
        title: 'Product 6',
        slug: 'product-6',
        imagesUrl: ['url6'],
        price: 60.0,
        heroImage: require('../../assets/images/head-set-1.jpg'),
      },
    ],
  },
  {
    id: '4',
    item: 'Order 4',
    details: 'Details about order 4',
    status: 'InTransit',
    slug: 'order-4',
    date: '2024-07-04',
    items: [
      {
        id: 7,
        title: 'Product 7',
        slug: 'product-7',
        imagesUrl: ['url7'],
        price: 70.0,
        heroImage: require('../../assets/images/head-set-1.jpg'),
      },
      {
        id: 8,
        title: 'Product 8',
        slug: 'product-8',
        imagesUrl: ['url8'],
        price: 80.0,
        heroImage: require('../../assets/images/head-set-1.jpg'),
      },
    ],
  },
];