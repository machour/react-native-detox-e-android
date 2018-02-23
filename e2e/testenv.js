jest.mock('react-native-device-info', () => {
  return {
    getModel: jest.fn(),
  };
});
