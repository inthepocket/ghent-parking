const unlinkFirebaseMock = jest.fn(() => {});
const linkFirebaseMock = jest.fn(() => unlinkFirebaseMock);
const linkStoreWithPath = jest.fn(() => linkFirebaseMock);

export { linkStoreWithPath, linkFirebaseMock, unlinkFirebaseMock };
