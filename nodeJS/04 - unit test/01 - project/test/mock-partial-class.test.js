import { UserRepository } from "../src/user-repository.js";
import { UserService } from "../src/user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test("mock class findById", () => {
  const user = {
    id: 1,
    name: "aria",
  };

  const findByIdMock = jest.spyOn(repository, "findById");
  findByIdMock.mockReturnValueOnce(user);

  expect(service.findById(1)).toEqual(user);

  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1);

  expect(findByIdMock).toHaveBeenCalled();
  expect(findByIdMock).toHaveBeenCalledWith(1);
});

test.failing("test mock partial findAll", () => {
  service.findAll();
});
