import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto()
    .then((uploadPhotoRes) => {
      createUser()
        .then((userResponse) => {
          console.log(`${uploadPhotoRes.body} ${userResponse.firstName} ${userResponse.lastName}`);
        })
        .catch(() => {
          console.error('Signup system offline');
        });
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
