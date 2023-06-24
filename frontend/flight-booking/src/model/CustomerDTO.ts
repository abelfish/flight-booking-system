import { AddressDTO } from './AddressDTO';
import { UserDTO } from './UserDTO';

export interface CustomerDTO {
  id?: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  addressDTO: AddressDTO;
  userDTO: UserDTO|null;
}
