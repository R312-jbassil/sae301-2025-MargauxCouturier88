import PocketBase from 'pocketbase';
type TypedPocketBase = InstanceType<typeof PocketBase>;
var path='';
if(import.meta.env.MODE === 'development')
    path = 'http://localhost:8090'    //localhost = machine de dev
else path = 'https://sae301.margaux-couturier.fr:443'   //url du site 
const pb = new PocketBase(path) as TypedPocketBase;
export default pb;