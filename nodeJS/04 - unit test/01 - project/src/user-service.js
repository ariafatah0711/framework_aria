import { UserRepository } from "./user-repository";

export class UserService {
  constructor(UserRepository) {
    if (UserRepository) {
      this.UserRepository = UserRepository;
    } else {
      this.UserRepository = new UserRepository();
    }
  }

  save(user) {
    return this.UserRepository.save(user);
  }

  findById(id) {
    return this.UserRepository.findById(id);
  }

  findAll() {
    return this.UserRepository.findAll();
  }
}
