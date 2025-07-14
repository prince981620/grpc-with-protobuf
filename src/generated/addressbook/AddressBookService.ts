// Original file: src/a.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _addressbook_Empty, Empty__Output as _addressbook_Empty__Output } from '../addressbook/Empty';
import type { GetPersonByAgeRequest as _addressbook_GetPersonByAgeRequest, GetPersonByAgeRequest__Output as _addressbook_GetPersonByAgeRequest__Output } from '../addressbook/GetPersonByAgeRequest';
import type { GetPersonByNameRequest as _addressbook_GetPersonByNameRequest, GetPersonByNameRequest__Output as _addressbook_GetPersonByNameRequest__Output } from '../addressbook/GetPersonByNameRequest';
import type { Person as _addressbook_Person, Person__Output as _addressbook_Person__Output } from '../addressbook/Person';
import type { PersonList as _addressbook_PersonList, PersonList__Output as _addressbook_PersonList__Output } from '../addressbook/PersonList';

export interface AddressBookServiceClient extends grpc.Client {
  AddPerson(argument: _addressbook_Person, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  AddPerson(argument: _addressbook_Person, metadata: grpc.Metadata, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  AddPerson(argument: _addressbook_Person, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  AddPerson(argument: _addressbook_Person, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  addPerson(argument: _addressbook_Person, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  addPerson(argument: _addressbook_Person, metadata: grpc.Metadata, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  addPerson(argument: _addressbook_Person, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  addPerson(argument: _addressbook_Person, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  
  DeletePersonByName(argument: _addressbook_GetPersonByNameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  DeletePersonByName(argument: _addressbook_GetPersonByNameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  DeletePersonByName(argument: _addressbook_GetPersonByNameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  DeletePersonByName(argument: _addressbook_GetPersonByNameRequest, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  deletePersonByName(argument: _addressbook_GetPersonByNameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  deletePersonByName(argument: _addressbook_GetPersonByNameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  deletePersonByName(argument: _addressbook_GetPersonByNameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  deletePersonByName(argument: _addressbook_GetPersonByNameRequest, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  
  GetAllPersons(argument: _addressbook_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  GetAllPersons(argument: _addressbook_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  GetAllPersons(argument: _addressbook_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  GetAllPersons(argument: _addressbook_Empty, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  getAllPersons(argument: _addressbook_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  getAllPersons(argument: _addressbook_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  getAllPersons(argument: _addressbook_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  getAllPersons(argument: _addressbook_Empty, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  
  GetPersonByName(argument: _addressbook_GetPersonByNameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  GetPersonByName(argument: _addressbook_GetPersonByNameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  GetPersonByName(argument: _addressbook_GetPersonByNameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  GetPersonByName(argument: _addressbook_GetPersonByNameRequest, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  getPersonByName(argument: _addressbook_GetPersonByNameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  getPersonByName(argument: _addressbook_GetPersonByNameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  getPersonByName(argument: _addressbook_GetPersonByNameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  getPersonByName(argument: _addressbook_GetPersonByNameRequest, callback: grpc.requestCallback<_addressbook_Person__Output>): grpc.ClientUnaryCall;
  
  GetPersonsByAge(argument: _addressbook_GetPersonByAgeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  GetPersonsByAge(argument: _addressbook_GetPersonByAgeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  GetPersonsByAge(argument: _addressbook_GetPersonByAgeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  GetPersonsByAge(argument: _addressbook_GetPersonByAgeRequest, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  getPersonsByAge(argument: _addressbook_GetPersonByAgeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  getPersonsByAge(argument: _addressbook_GetPersonByAgeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  getPersonsByAge(argument: _addressbook_GetPersonByAgeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  getPersonsByAge(argument: _addressbook_GetPersonByAgeRequest, callback: grpc.requestCallback<_addressbook_PersonList__Output>): grpc.ClientUnaryCall;
  
}

export interface AddressBookServiceHandlers extends grpc.UntypedServiceImplementation {
  AddPerson: grpc.handleUnaryCall<_addressbook_Person__Output, _addressbook_Person>;
  
  DeletePersonByName: grpc.handleUnaryCall<_addressbook_GetPersonByNameRequest__Output, _addressbook_Person>;
  
  GetAllPersons: grpc.handleUnaryCall<_addressbook_Empty__Output, _addressbook_PersonList>;
  
  GetPersonByName: grpc.handleUnaryCall<_addressbook_GetPersonByNameRequest__Output, _addressbook_Person>;
  
  GetPersonsByAge: grpc.handleUnaryCall<_addressbook_GetPersonByAgeRequest__Output, _addressbook_PersonList>;
  
}

export interface AddressBookServiceDefinition extends grpc.ServiceDefinition {
  AddPerson: MethodDefinition<_addressbook_Person, _addressbook_Person, _addressbook_Person__Output, _addressbook_Person__Output>
  DeletePersonByName: MethodDefinition<_addressbook_GetPersonByNameRequest, _addressbook_Person, _addressbook_GetPersonByNameRequest__Output, _addressbook_Person__Output>
  GetAllPersons: MethodDefinition<_addressbook_Empty, _addressbook_PersonList, _addressbook_Empty__Output, _addressbook_PersonList__Output>
  GetPersonByName: MethodDefinition<_addressbook_GetPersonByNameRequest, _addressbook_Person, _addressbook_GetPersonByNameRequest__Output, _addressbook_Person__Output>
  GetPersonsByAge: MethodDefinition<_addressbook_GetPersonByAgeRequest, _addressbook_PersonList, _addressbook_GetPersonByAgeRequest__Output, _addressbook_PersonList__Output>
}
