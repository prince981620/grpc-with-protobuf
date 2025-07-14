import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./generated/a";
import { AddressBookServiceHandlers } from "./generated/addressbook/AddressBookService";

const PROTO_PATH = path.join(__dirname, "../src/a.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH);

const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;
const addressBook = proto.addressbook;

const PERSONS: any[] = [];

const handlers: AddressBookServiceHandlers = {
  AddPerson(call, callback) {
    const person = {
      name: call.request.name,
      age: call.request.age,
    };

    PERSONS.push(person);
    callback(null, person);
  },

  GetAllPersons(call, callback) {
    callback(null, { people: PERSONS });
  },
  
  GetPersonByName(call, callback) {
    const { name } = call.request;
    const person = PERSONS.find((p) => p.name === name);
    callback(null, person || {});
  },

  GetPersonsByAge(call, callback) {
    const { age } = call.request;
    const matched = PERSONS.filter((p) => p.age === age);
    callback(null, { people: matched });
  },

  DeletePersonByName(call, callback) {
    const { name } = call.request;
    const index = PERSONS.findIndex((p) => p.name === name);

    if (index >= 0) {
      const [removed] = PERSONS.splice(index, 1);
      callback(null, removed);
    } else {
      callback(null, {});
    }
  }
};

// gRPC server
const server = new grpc.Server();
server.addService(addressBook.AddressBookService.service, handlers);

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("gRPC server running on port 50051");
    server.start();
  }
);
