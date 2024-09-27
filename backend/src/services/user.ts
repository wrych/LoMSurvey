import User from "../models/User.js";

const findOrCreate = async (
  email: string,
  emailVerified: boolean,
  familyName: string,
  givenName: string,
  oAuthProvider: string,
  oAuthId: string
): Promise<[User, boolean]> => {
  const user: [User, boolean] = await User.findOrCreate({
    where: {
      email: email,
      emailVerified: emailVerified,
      familyName: familyName,
      givenName: givenName,
      oAuthProvider: oAuthProvider,
      oAuthId: oAuthId,
    },
  });
  return user;
};

export { findOrCreate };
