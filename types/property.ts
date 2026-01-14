export interface Property {
  id: number;
  title: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  propertyType: 'Residential' | 'Commercial' | 'Land' | 'Condo' | 'Townhouse';
  image: string;
  description: string;
  features: string[];
  yearBuilt?: number;
  lotSize?: number;
  status: 'For Sale' | 'Sold' | 'Pending';
}

export interface PropertyFilters {
  location: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  minPrice: number;
  maxPrice: number;
  sortBy: 'price-asc' | 'price-desc' | 'newest' | 'bedrooms';
}
