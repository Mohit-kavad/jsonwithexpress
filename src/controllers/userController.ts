import { Request, Response } from 'express';
import { User } from '../../models/user';
import bcrypt from 'bcrypt';

const getUsers = async (req: Request, res: Response) => {
  try {
    const data = await User.findAll();
    res.status(200).json({
      status: 200,
      message: 'success',
      data
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const userId = +req.params.id;
    const data = await User.findByPk(userId);
    if (data === null) {
      return res.status(202).json({
        message: 'user is not found or deleted '
      });
    }
    res.status(200).json({
      status: 200,
      message: 'success',
      data
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = +req.params.id;
    const data = await User.destroy({ where: { id: userId } });
    if (data === 0) {
      return res.status(202).json({
        message: 'user is not found or deleted '
      });
    }
    res.status(202).json({
      status: 204,
      data,
      message: 'data deleted successfully'
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = +req.params.id;
    const { password } = req.body;

    // //@ts-ignore
    // console.log('req.user ::', req.user);

    const data = await User.update(
      { ...req.body, password: await bcrypt.hash(password, 12) },
      { where: { id: userId } }
    );
    if (data.includes(0)) {
      return res.status(202).json({
        message: 'user is not found or deleted '
      });
    }
    res.status(200).json({
      status: 200,
      message: 'data updated successfully',
      data
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getUsers, getUser, updateUser, deleteUser };
