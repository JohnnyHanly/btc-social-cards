export default interface IUserProfile {
  info: {
    name: {
      first: string;
      last: string;
    };
    address: {
      city: string;
      street: string;
      state: string;
      zipCode: string;
    };

    profilePicUrl: string;
    email: string;
    phone: string;
    websiteUrl: string;
  };
  company: {
    name: string;
    motto: string;
    logo: string;
  };
  id: string;
}

export type IUserInfoEditState = {
  firstname: string;
  lastname: string;
  city: string;
  street: string;
  state: string;
  zipcode: string;
  profilepicurl: string;
  email: string;
  phone: string;
  websiteurl: string;
  companyname: string;
  companymotto: string;
  companylogo: string;
  id: string;
};
