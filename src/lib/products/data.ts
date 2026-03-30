// Product data layer for Royal King Seeds AU
// Uses local product engine with CA-sourced data and AU-unique descriptions
// Replaces the WooCommerce API approach

export {
  getProducts,
  getAllProducts,
  getProductBySlug,
  getProductBySlugAny,
  getFeaturedProducts,
  getBeginnerProducts,
  getHighThcProducts,
  getFastFloweringProducts,
  getProductsByCategory,
  searchProducts,
  getProductCount,
} from './product-engine';

export { getProductBySlugFromDb } from './db-fallback';
