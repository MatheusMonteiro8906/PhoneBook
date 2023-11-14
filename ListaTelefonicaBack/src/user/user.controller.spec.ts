import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  describe('findSome', () => {
    it('should return an array of users', async () => {
      const usersMock = [
        {
          id: 1,
          name: 'User1',
          phones: [
            { id: 1, number: '16994512363', userId: 1 },
            { id: 2, number: '26994542363', userId: 1 },
          ],
        },
        {
          id: 1,
          name: 'User1',
          phones: [
            { id: 1, number: '16994512363', userId: 1 },
            { id: 2, number: '26994542363', userId: 1 },
          ],
        },
      ];


      jest.spyOn(userService, 'getPaginatedUsers').mockResolvedValue(usersMock);

      const result = await controller.getUsers('1');

      expect(result).toEqual(usersMock);
    });

    it('should return an array of all users when no page is provided', async () => {
      const usersMock = [
        {
          id: 1,
          name: 'User1',
          phones: [
            { id: 1, number: '16994512363', userId: 1 },
            { id: 2, number: '26994542363', userId: 1 },
          ],
        },
        {
          id: 1,
          name: 'User1',
          phones: [
            { id: 1, number: '16994512363', userId: 1 },
            { id: 2, number: '26994542363', userId: 1 },
          ],
        },
      ]; jest.spyOn(userService, 'getAllUsers').mockResolvedValue(usersMock);

      const result = await controller.getUsers(Response);

      expect(result).toEqual(usersMock);
    });
  });

  describe('findOne', () => {
    it('should return user phone numbers', async () => {
      const userMock =
      {
        id: 1,
        name: 'User1',
        phones: [
          { id: 1, number: '16994512363', userId: 1 },
          { id: 2, number: '26994542363', userId: 1 },
        ],
      }
      jest.spyOn(userService, 'getOneUser').mockResolvedValue(userMock);

      const responseMock = {
        send: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      await controller.getUserPhoneNumbers('1', responseMock);

      expect(responseMock.send).toHaveBeenCalledWith(userMock.phones);
    });

    it('should return 404 status when user is not found', async () => {
      jest.spyOn(userService, 'getOneUser').mockResolvedValue(null);

      const responseMock = {
        send: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      await controller.getUserPhoneNumbers('1', responseMock);

      expect(responseMock.status).toHaveBeenCalledWith(404);
      expect(responseMock.send).toHaveBeenCalledWith('User with id 1 not found');
    });

    it('should return 422 status when there is an error', async () => {
      jest.spyOn(userService, 'getOneUser').mockRejectedValue(new Error('Some error'));

      const responseMock = {
        send: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      await controller.getUserPhoneNumbers('1', responseMock);

      expect(responseMock.status).toHaveBeenCalledWith(422);
      expect(responseMock.send).toHaveBeenCalledWith('Error retrieving user with id 1');
    });
  });
});
