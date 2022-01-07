export interface SingleuserType {
  userName: String;
  email: String;
  password: String;
  phoneNumber: String;
  address?: { houseNumber: String; city: String; street: String }[];
}
