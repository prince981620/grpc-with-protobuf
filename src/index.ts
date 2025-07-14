import path from 'path';
import * as grpc from '@grpc/grpc-js';
import { GrpcObject, ServiceClientConstructor } from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader';


const packageDefinition = protoLoader.loadSync(path.join(__dirname, './a.proto'));

const personProto = grpc.loadPackageDefinition(packageDefinition);

const PERSONS = [
    {
        name: "Prince",
        age: 23
    },
    {
        name: "Raman",
        age: 32
    }
];

//@ts-ignore
function addPerson(call, callback) {
    console.log(call);

    let person = {
        name: call.request.name,
        age: call.request.age
    };

    PERSONS.push(person);

    callback(null, person);

}
