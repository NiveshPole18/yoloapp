import { faker } from '@faker-js/faker';

export const generateCardData = () => {
  return {
    number: faker.finance.creditCardNumber('################'),
    expiry: '01/28',
    cvv: faker.finance.creditCardCVV(),
  };
};