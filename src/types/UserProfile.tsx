export interface IUserProfile {
  name: {
    first: string;
    last: string;
  };
  address: {
    city: {
      name: string;
      suffix: string;
      prefix: string;
    };

    street: {
      name: string;
      prefix: string;
    };

    state: string;
    zipCode: string;
  };

  company: {
    name: string;
    description: string;
    logoUrl: string;
  };

  profilePicUrl: string;
  email: string;
  phone: string;
  websiteUrl: string;
}
