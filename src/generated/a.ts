import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AddressBookServiceClient as _addressbook_AddressBookServiceClient, AddressBookServiceDefinition as _addressbook_AddressBookServiceDefinition } from './addressbook/AddressBookService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  addressbook: {
    AddressBookService: SubtypeConstructor<typeof grpc.Client, _addressbook_AddressBookServiceClient> & { service: _addressbook_AddressBookServiceDefinition }
    Empty: MessageTypeDefinition
    GetPersonByAgeRequest: MessageTypeDefinition
    GetPersonByNameRequest: MessageTypeDefinition
    Person: MessageTypeDefinition
    PersonList: MessageTypeDefinition
  }
}

