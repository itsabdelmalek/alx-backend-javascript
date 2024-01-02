import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const promise1 = await uploadPhoto();
    const promise2 = await createUser();

    return ({ photo: promise1, user: promise2 });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
