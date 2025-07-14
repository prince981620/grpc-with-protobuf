import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const PROTO_PATH = path.join(__dirname, "../src/a.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition) as any;
const addressBook = proto.addressbook;

const PERSONS: any[] = [];

// Add a person
// @ts-ignore
function addPerson(call, callback) {
  const person = {
    name: call.request.name,
    age: call.request.age,
  };

  PERSONS.push(person);
  callback(null, person);
}

// Get all person
// @ts-ignore
function getAllPersons(call, callback) {
  callback(null, { people: PERSONS });
}

// Get a person by name
// @ts-ignore
function getPersonByName(call, callback) {
  const { name } = call.request;
  const person = PERSONS.find((p) => p.name === name);
  callback(null, person || {});
}

// Get persons by age
// @ts-ignore
function getPersonsByAge(call, callback) {
  const { age } = call.request;
  const matched = PERSONS.filter((p) => p.age === age);
  callback(null, { people: matched });
}

// Delete person by name
// @ts-ignore
function deletePersonByName(call, callback) {
  const { name } = call.request;
  const index = PERSONS.findIndex((p) => p.name === name);

  if (index >= 0) {
    const [removed] = PERSONS.splice(index, 1);
    callback(null, removed);
  } else {
    callback(null, {});
  }
}



// gRPC server
const server = new grpc.Server();
server.addService(addressBook.AddressBookService.service, {
  AddPerson: addPerson,
  GetAllPersons: getAllPersons,
  GetPersonByName: getPersonByName,
  GetPersonsByAge: getPersonsByAge,
  DeletePersonByName: deletePersonByName,
});

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => {
  console.log("gRPC server running on port 50051");
  server.start();
});
