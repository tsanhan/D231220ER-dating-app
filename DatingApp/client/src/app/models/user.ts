import { Gender } from "./Gender.enum";

export interface User {
  username: string;
  token: string;
  photoUrl: string;
  knownAs: string;
  gender: Gender;
}
