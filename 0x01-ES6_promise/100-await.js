import { uploadPhoto, createUser } from './utils';

export default async function firstasyncUploadUser() {
  const user = await createUser();
  const photo = await uploadPhoto();
  return {
    photo: user,
    user: photo,
  };
}
