import firebase from 'firebase';
import { linkStoreWithPath, linkFirebaseMock, unlinkFirebaseMock } from 'firebase-redux';
import { startFirebase, stopFirebase } from '../firebase';

jest.mock('firebase');
jest.mock('firebase-redux');

describe('Firebase Util tests', () => {
  it('Expect firebase to be initialized and linked to redux.', () => {
    startFirebase({});
    expect(firebase.initializeApp.mock.calls.length).toBe(1);
    expect(linkStoreWithPath.mock.calls.length).toBe(1);
    expect(linkFirebaseMock.mock.calls.length).toBe(1);
  });
  it('Expect firebase to be unlinked from redux.', () => {
    stopFirebase();
    expect(unlinkFirebaseMock.mock.calls.length).toBe(1);
  });
});
