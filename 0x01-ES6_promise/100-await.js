import { uploadPhoto, createUser } from './utils';

export default async function firstasyncUploadUser() {
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    return {
      photo,
      user,
    };
  } catch (error) {
    // console.error('An error occurred:', error.message);
    return {
      photo: null,
      user: null,
    };
  }
}
