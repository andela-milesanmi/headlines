import mockData from './apiMockData.json';

const mockCall = {
  get() {
    return Promise.resolve(mockData);
  },
};

export default mockCall;
