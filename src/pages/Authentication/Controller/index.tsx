import auth from '@react-native-firebase/auth';
import {FormValues} from '../Types';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import appleAuth from '@invertase/react-native-apple-authentication';

export const handleSignIn = (data: FormValues, navigation: any) => {
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
        resolve('Logged in');
      })
      .catch(err => {
        reject(err.code);
      });
  });
};

export const handleSignUp = (data: FormValues, navigation: any) => {
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        navigation.reset({
          index: 0,
          router: [{name: 'Home'}],
        });
        resolve('User account created & signed in!');
      })
      .catch(error => {
        reject(error.code);
      });
  });
};

export const handleGoogleSignIn = async () => {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};

export const handleAppleSignIn = async () => {
  // performs login request
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    // Note: it appears putting FULL_NAME first is important, see issue #293
    requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
  });

  if (!appleAuthRequestResponse.identityToken) {
    throw new Error('Apple Sign-In failed - no identify token returned');
  }

  // Create a Firebase credential from the response
  const {identityToken, nonce} = appleAuthRequestResponse;
  const appleCredential = auth.AppleAuthProvider.credential(
    identityToken,
    nonce,
  );

  return auth().signInWithCredential(appleCredential);
};
