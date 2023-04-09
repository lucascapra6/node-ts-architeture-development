/// <reference types="mongoose/types/aggregate.js" />
/// <reference types="mongoose/types/callback.js" />
/// <reference types="mongoose/types/collection.js" />
/// <reference types="mongoose/types/connection.js" />
/// <reference types="mongoose/types/cursor.js" />
/// <reference types="mongoose/types/document.js" />
/// <reference types="mongoose/types/error.js" />
/// <reference types="mongoose/types/expressions.js" />
/// <reference types="mongoose/types/helpers.js" />
/// <reference types="mongoose/types/middlewares.js" />
/// <reference types="mongoose/types/indexes.js" />
/// <reference types="mongoose/types/models.js" />
/// <reference types="mongoose/types/mongooseoptions.js" />
/// <reference types="mongoose/types/pipelinestage.js" />
/// <reference types="mongoose/types/populate.js" />
/// <reference types="mongoose/types/query.js" />
/// <reference types="mongoose/types/schemaoptions.js" />
/// <reference types="mongoose/types/schematypes.js" />
/// <reference types="mongoose/types/session.js" />
/// <reference types="mongoose/types/types.js" />
/// <reference types="mongoose/types/utility.js" />
/// <reference types="mongoose/types/validation.js" />
/// <reference types="mongoose/types/virtuals.js" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype.js" />
import { UserModel } from "../schemas/Users.js";
import { IUsersRepository } from "../../../interfaces/Users/UsersRepository/index.js";
import { Users } from "../../../interfaces/Users/index.js";
export declare class UsersRepository implements IUsersRepository {
    model: import("mongoose").Model<{
        id: string;
        name: string;
        lastName: string;
        password: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        id: string;
        name: string;
        lastName: string;
        password: string;
    }> & Omit<{
        id: string;
        name: string;
        lastName: string;
        password: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        id: string;
        name: string;
        lastName: string;
        password: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        id: string;
        name: string;
        lastName: string;
        password: string;
    }>> & Omit<import("mongoose").FlatRecord<{
        id: string;
        name: string;
        lastName: string;
        password: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>>;
    constructor(model: typeof UserModel);
    getUsers(): Promise<(import("mongoose").Document<unknown, {}, {
        id: string;
        name: string;
        lastName: string;
        password: string;
    }> & Omit<{
        id: string;
        name: string;
        lastName: string;
        password: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    insertUser(user: Users): Promise<(import("mongoose").Document<unknown, {}, {
        id: string;
        name: string;
        lastName: string;
        password: string;
    }> & Omit<{
        id: string;
        name: string;
        lastName: string;
        password: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
}
