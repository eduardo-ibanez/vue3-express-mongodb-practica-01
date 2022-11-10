import mongoose from 'mongoose'

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log('Connect DB ok')
}
catch (err){
    console.error('Error de conexión a MongoDB: '+ err)
}