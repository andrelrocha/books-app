import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://andrerocha0911:senha123@clusterinitialnode.aglnfvg.mongodb.net/Initial-Node")

const db = mongoose.connection

export { db }