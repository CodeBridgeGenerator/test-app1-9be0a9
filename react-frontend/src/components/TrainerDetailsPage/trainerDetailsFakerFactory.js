
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
trainerIcNumber: faker.lorem.sentence(1),
name: faker.lorem.sentence(1),
employmentType: faker.lorem.sentence(1),
nationality: faker.lorem.sentence(1),
organizationName: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
