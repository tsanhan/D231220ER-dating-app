import { Gender } from "./Gender.enum";
import { User } from "./user";

export class UserParams {
  gender: Gender;
  minAge = 18;
  maxAge = 150;
  pageNumber = 1;
  pageSize = 5;

  constructor({ gender }: User) {
    this.gender = gender === Gender.female ? Gender.male : Gender.female;
  }
}
