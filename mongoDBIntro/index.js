const mongoose = require("mongoose");
const UserSchema = require("./models/user");

mongoose.connect(`mongodb+srv://jody:i8Bzd3b8kNNFuGh@cluster0-owywn.azure.mongodb.net/people?retryWrites=true&w=majority`, {
    useNewUrlParser: true
});

// const user = new UserSchema({
//     name: "Jody",
//     email: "jody@email.com",
//     password: "password1234",
// });

// const user = new UserSchema({
//     name: "Gillian",
//     email: "gillian@email.com",
//     password: "pass12345",
// });

// const user = new UserSchema({
//     name: "Heather",
//     email: "heather@email.com",
//     password: "word1234",
// });

user.save();













// mongodb+srv://jody:i8Bzd3b8kNNFuGh@cluster0-owywn.azure.mongodb.net/test?retryWrites=true&w=majority
// i8Bzd3b8kNNFuGh