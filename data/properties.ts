
import { Property, PropertyType, PriceCategory } from '../types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Marine Drive Luxury Suite',
    price: 85000000,
    location: 'South Mumbai, Maharashtra',
    type: PropertyType.APARTMENT,
    category: PriceCategory.EXPENSIVE,
    beds: 3,
    baths: 3,
    sqft: 2200,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: '2',
    title: 'Greenwood Estate Villa',
    price: 32000000,
    location: 'Whitefield, Bangalore',
    type: PropertyType.VILLA,
    category: PriceCategory.MEDIUM,
    beds: 4,
    baths: 4,
    sqft: 3800,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: '3',
    title: 'Hitech City Smart Studio',
    price: 4500000,
    location: 'Hyderabad, Telangana',
    type: PropertyType.STUDIO,
    category: PriceCategory.CHEAP,
    beds: 1,
    baths: 1,
    sqft: 650,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Aravalli Range Mansion',
    price: 125000000,
    location: 'Gurugram, Delhi NCR',
    type: PropertyType.MANSION,
    category: PriceCategory.EXPENSIVE,
    beds: 6,
    baths: 7,
    sqft: 9500,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Ocean View Penthouse',
    price: 65000000,
    location: 'Anjuna, Goa',
    type: PropertyType.PENTHOUSE,
    category: PriceCategory.EXPENSIVE,
    beds: 4,
    baths: 4,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1567496898731-daec1b177ceb?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: '6',
    title: 'Eco-Friendly Urban Flat',
    price: 8500000,
    location: 'Kothrud, Pune',
    type: PropertyType.APARTMENT,
    category: PriceCategory.CHEAP,
    beds: 2,
    baths: 2,
    sqft: 1100,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    title: 'Heritage Row Villa',
    price: 21000000,
    location: 'C-Scheme, Jaipur',
    type: PropertyType.VILLA,
    category: PriceCategory.MEDIUM,
    beds: 3,
    baths: 3,
    sqft: 2400,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    title: 'Sky Garden Residence',
    price: 14500000,
    location: 'New Town, Kolkata',
    type: PropertyType.APARTMENT,
    category: PriceCategory.MEDIUM,
    beds: 3,
    baths: 2,
    sqft: 1650,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '9',
    title: 'Cyber Hub Loft',
    price: 5500000,
    location: 'Indiranagar, Bangalore',
    type: PropertyType.STUDIO,
    category: PriceCategory.CHEAP,
    beds: 1,
    baths: 1,
    sqft: 800,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '10',
    title: 'Palm Beach Residency',
    price: 38000000,
    location: 'Navi Mumbai, Maharashtra',
    type: PropertyType.APARTMENT,
    category: PriceCategory.MEDIUM,
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80'
  }
];
