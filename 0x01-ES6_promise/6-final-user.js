import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userPromise = await signUpUser(firstName, lastName);
    const photoPromise = await uploadPhoto(fileName);

    const [userResult, photoResult] = await Promise.all([userPromise, photoPromise]);

    return [
      { status: 'fulfilled', value: userResult },
      { status: 'fulfilled', value: photoResult },
    ];
  } catch (err) { return [{ status: 'fulfilled', value: err }]; }
}
