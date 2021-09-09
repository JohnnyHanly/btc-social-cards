import IUserProfile from "types/UserProfile";

export const displayName = (name: IUserProfile["info"]["name"]): string => {
  return `${name.first} ${name.last}`;
};

export const displayAddress = (
  address: IUserProfile["info"]["address"]
): string => {
  return ` ${address.street},  ${address.city}, ${address.state} ${address.zipCode}`;
};

export const displayInitials = (name: IUserProfile["info"]["name"]): string => {
  return `${name.first.charAt(0).toUpperCase()}${name.last
    .charAt(0)
    .toUpperCase()}`;
};