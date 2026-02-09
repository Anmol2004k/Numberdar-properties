
export enum PropertyType {
  APARTMENT = 'Apartment',
  VILLA = 'Villa',
  STUDIO = 'Studio',
  MANSION = 'Mansion',
  PENTHOUSE = 'Penthouse'
}

export enum PriceCategory {
  CHEAP = 'Cheap',
  MEDIUM = 'Medium',
  EXPENSIVE = 'Expensive'
}

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: PropertyType;
  category: PriceCategory;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  featured?: boolean;
}

export interface LeadFormData {
  name: string;
  phone: string;
  budget: string;
  propertyType: string;
}
