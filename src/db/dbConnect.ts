import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://andrerocha0911:senha123@clusteralura.1apvg6k.mongodb.net/initial-node")

const db = mongoose.connection

export { db }