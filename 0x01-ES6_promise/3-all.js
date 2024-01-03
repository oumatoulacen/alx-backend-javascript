import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadPhotoRes, createuserRes]) => {
      console.log(`${uploadPhotoRes.body} ${createuserRes.firstName} ${createuserRes.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}