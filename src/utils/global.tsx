import IUserProfile, { IUserInfoEditState } from "types/UserProfile";

export const mapUserStateToProfile = (updatedUser: IUserInfoEditState) => {
  return {
    info: {
      name: {
        first: updatedUser.firstname,
        last: updatedUser.lastname,
      },
      address: {
        city: updatedUser.city,
        street: updatedUser.street,
        state: updatedUser.state,
        zipCode: updatedUser.zipcode,
      },
      profilePicUrl: updatedUser.profilePicUrl,
      email: updatedUser.email,
      phone: updatedUser.phone,
      websiteUrl: updatedUser.websiteurl,
    },
    company: {
      name: updatedUser.companyname,
      motto: updatedUser.companymotto,
      logo: updatedUser.companylogo,
    },
    id: updatedUser.id,
  } as IUserProfile;
};

export const mapUserProfileToState = (userState: IUserProfile) => {
  return {
    firstname: userState.info.name.first,
    lastname: userState.info.name.last,
    city: userState.info.address.city,
    street: userState.info.address.street,
    state: userState.info.address.state,
    zipcode: userState.info.address.zipCode,
    profilePicUrl: userState.info.profilePicUrl,
    email: userState.info.email,
    phone: userState.info.phone,
    websiteurl: userState.info.websiteUrl,
    companyname: userState.company.name,
    companymotto: userState.company.motto,
    companylogo: userState.company.logo,
    id: userState.id,
  } as IUserInfoEditState;
};
