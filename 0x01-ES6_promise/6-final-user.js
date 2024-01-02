import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const UserPromise = signUpUser(firstName, lastName);
  const PhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([UserPromise, PhotoPromise]).then((values) => {
    const results = [];
    values.forEach((element) => {
      if (element.status === 'fulfilled') {
        results.push({ status: element.status, value: element.value });
      } else {
        results.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return results;
  });
}
