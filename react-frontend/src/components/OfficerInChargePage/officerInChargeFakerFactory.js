
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.lorem.sentence(1),
icNumber: faker.lorem.sentence(1),
designation: faker.lorem.sentence(1),
email: faker.internet.email(),
telephoneNumber: faker.lorem.sentence(1),
organizationName: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
