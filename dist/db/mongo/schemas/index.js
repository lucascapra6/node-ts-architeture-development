const Mongoose = require('mongoose');
const usersSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    id: {
        type: String,
        default: true
    },
    password: {
        type: String,
        default: true
    }
});
export default Mongoose.model('users', usersSchema);
//# sourceMappingURL=index.js.map