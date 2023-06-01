import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { DB } from '@src/database/sequelize';
// import { User } from '@src/models/user.model';
import { CreateUserDto } from '@src/dtos/users.dto';
import { HttpException } from '@src/exceptions/httpException';
// import { User } from '@src/interfaces/users.interface';

@Service()
export class UserService {
  public async findAllUser() {
    console.log('comming request is ==>');
    const allUser = await User.findOne({ where: { id: 1 } });
    console.log('response is ==>', allUser);
    // return allUser;
    return [{ email: 'user01', password: 'qwertyujik' }];
  }

  public async findUserById(userId: number): Promise<User> {
    const findUser: User = await DB.Users.findByPk(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    const findUser: User = await DB.Users.findOne({ where: { email: userData.email } });
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = await DB.Users.create({ ...userData, password: hashedPassword });
    return createUserData;
  }

  public async updateUser(userId: number, userData: CreateUserDto): Promise<User> {
    const findUser: User = await DB.Users.findByPk(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    const hashedPassword = await hash(userData.password, 10);
    await DB.Users.update({ ...userData, password: hashedPassword }, { where: { id: userId } });

    const updateUser: User = await DB.Users.findByPk(userId);
    return updateUser;
  }

  public async deleteUser(userId: number): Promise<User> {
    const findUser: User = await DB.Users.findByPk(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    await DB.Users.destroy({ where: { id: userId } });

    return findUser;
  }
}
