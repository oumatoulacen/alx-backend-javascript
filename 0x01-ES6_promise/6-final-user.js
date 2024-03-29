import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const result = [];
  try {
    const userPromise = await signUpUser(firstName, lastName);
    result.push({ status: 'fulfilled', value: userPromise });
    await uploadPhoto(fileName);
  } catch (err) {
    result.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });
  }
  return result;
}
