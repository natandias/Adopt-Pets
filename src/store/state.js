import cats from '@/data/cats';
import dogs from '@/data/dogs';

export default {
  cats,
  dogs,
  pets: [...cats, ...dogs],
};
// Actions call mutations that update states
