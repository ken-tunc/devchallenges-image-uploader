import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCPW9YqPWFOhyyjxg18R7iy9-keZWF0a10',
  storageBucket: 'gs://devchallenges-image-uplo-dc22c.appspot.com'
}

firebase.initializeApp(config);

export const uploadImageFileAndRetrieveUrl = async (file: File): Promise<string> => {
  const fileRef = firebase.storage().ref().child(`public/${file.name}`);
  const snapshot = await fileRef.put(file);
  return snapshot.ref.getDownloadURL();
};
