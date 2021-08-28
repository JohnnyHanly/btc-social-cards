import faker from "faker";
import IUserProfile from "types/UserProfile";

const fetchUserProfiles = (count: number): IUserProfile[] => {
  const userProfiles: IUserProfile[] = [];
  for (let i = 0; i < count; i++) {
    userProfiles.push(createUserProfile());
  }
  return userProfiles;
};

const createUserProfile = (): IUserProfile => {
  const userProfile: IUserProfile = {
    info: {
      name: {
        first: faker.name.firstName(),
        last: faker.name.lastName(),
      },
      address: {
        city: faker.address.cityName(),
        street: `${faker.address.streetAddress()} ${faker.address.secondaryAddress()}`,
        state: faker.address.stateAbbr(),
        zipCode: faker.address.zipCode(),
      },
      profilePicUrl: faker.image.avatar(),
      email: faker.internet.email(),
      websiteUrl: faker.internet.domainName(),
      phone: faker.phone.phoneNumber(),
    },

    company: {
      name: faker.company.companyName(),
      motto: faker.company.catchPhrase(),
      logo: faker.image.abstract(100, 50),
    },
    id: faker.datatype.uuid(),
  };
  return userProfile;
};

export default fetchUserProfiles;
