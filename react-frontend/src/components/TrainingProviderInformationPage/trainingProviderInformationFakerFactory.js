
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
organizationName: faker.lorem.sentence(1),
personalContact: faker.lorem.sentence(1),
trainerProviderAddress: faker.lorem.sentence(1),
personalContact1: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
