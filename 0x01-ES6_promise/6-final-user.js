import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userPromise = await signUpUser(firstName, lastName);
    const photoPromise = await uploadPhoto(fileName);

    return [
      { status: 'fulfilled', value: userPromise },
      { status: 'fulfilled', value: photoPromise },
    ];
  } catch (err) { return [{ status: 'rejected', value: err }]; }
}
