const proxyquire = require('proxyquire').noCallThru();
const adminMock = {
  initializeApp: jest.fn(),
  firestore: jest.fn(() => ({
    runTransaction: jest.fn(async (cb) => {
      // simulate a transaction by invoking the callback with a fake object
      await cb({
        get: async () => ({ exists: false, data: () => ({}) }),
        set: jest.fn()
      });
    })
  }))
};

// require the functions with the admin mock
const fn = proxyquire('../index.js', { 'firebase-admin': adminMock });

describe('Cloud Function like aggregation', () => {
  test('onLikeCreated triggers transaction', async () => {
    const fakeSnap = { id: 'likeId', data: () => ({}) };
    const fakeContext = { params: { postId: 'p1', mediaIndex: '0', uid: 'u1' } };

    // call the handler if it exists
    expect(typeof fn.onLikeCreated === 'function').toBeTruthy();
    await fn.onLikeCreated(fakeSnap, fakeContext);
    // ensure firestore.runTransaction was called
    expect(adminMock.firestore().runTransaction).toHaveBeenCalled();
  });

  test('onLikeDeleted triggers transaction', async () => {
    const fakeSnap = { id: 'likeId', data: () => ({}) };
    const fakeContext = { params: { postId: 'p1', mediaIndex: '0', uid: 'u1' } };

    expect(typeof fn.onLikeDeleted === 'function').toBeTruthy();
    await fn.onLikeDeleted(fakeSnap, fakeContext);
    expect(adminMock.firestore().runTransaction).toHaveBeenCalled();
  });
});
