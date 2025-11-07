
import product from './product';

export default function Image() {
  return <img src={product.image} alt={product.name} style={{ width: '100%' }} />;
}
