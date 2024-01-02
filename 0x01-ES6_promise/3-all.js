import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo1 = uploadPhoto();
  const photo2 = createUser();

  return Promise.all([photo1, photo2]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
