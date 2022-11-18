import { Product } from './product';
import { User } from './user';

User.hasMany(Product, { foreignKey: 'userId' });
Product.belongsTo(User, { foreignKey: 'userId' });

export { Product, User };
