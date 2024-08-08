const {dbusername,password}=process.env;

export const connectionStr="mongodb+srv://"+dbusername+":"+password+"@cluster0.t1cyq.mongodb.net/nextDB?retryWrites=true&w=majority&appName=Cluster0"