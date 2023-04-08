import { AbstractModel } from "../AbstractModel.js";
export class UserModel extends AbstractModel {
    async getAllUsers() {
        // create a fake array of users
        const fakeUsers = [
            { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com' },
            { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@example.com' },
            { id: 3, firstName: 'Bob', lastName: 'Smith', email: 'bobsmith@example.com' },
            { id: 4, firstName: 'Alice', lastName: 'Johnson', email: 'alicejohnson@example.com' },
        ];
        // create a promise that resolves with the fake users
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(fakeUsers);
            }, 1000); // resolve after 1 second to simulate async behavior
        });
    }
}
//# sourceMappingURL=index.js.map