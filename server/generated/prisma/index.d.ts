// Code generated by Prisma (prisma@1.18.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  label: (where?: LabelWhereInput) => Promise<boolean>;
  zone: (where?: ZoneWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  label: (where: LabelWhereUniqueInput) => Label;
  labels: (
    args?: {
      where?: LabelWhereInput;
      orderBy?: LabelOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<LabelNode>;
  labelsConnection: (
    args?: {
      where?: LabelWhereInput;
      orderBy?: LabelOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => LabelConnection;
  zone: (where: ZoneWhereUniqueInput) => Zone;
  zones: (
    args?: {
      where?: ZoneWhereInput;
      orderBy?: ZoneOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<ZoneNode>;
  zonesConnection: (
    args?: {
      where?: ZoneWhereInput;
      orderBy?: ZoneOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ZoneConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createLabel: (data: LabelCreateInput) => Label;
  updateLabel: (
    args: { data: LabelUpdateInput; where: LabelWhereUniqueInput }
  ) => Label;
  updateManyLabels: (
    args: { data: LabelUpdateInput; where?: LabelWhereInput }
  ) => BatchPayload;
  upsertLabel: (
    args: {
      where: LabelWhereUniqueInput;
      create: LabelCreateInput;
      update: LabelUpdateInput;
    }
  ) => Label;
  deleteLabel: (where: LabelWhereUniqueInput) => Label;
  deleteManyLabels: (where?: LabelWhereInput) => BatchPayload;
  createZone: (data: ZoneCreateInput) => Zone;
  updateZone: (
    args: { data: ZoneUpdateInput; where: ZoneWhereUniqueInput }
  ) => Zone;
  updateManyZones: (
    args: { data: ZoneUpdateInput; where?: ZoneWhereInput }
  ) => BatchPayload;
  upsertZone: (
    args: {
      where: ZoneWhereUniqueInput;
      create: ZoneCreateInput;
      update: ZoneUpdateInput;
    }
  ) => Zone;
  deleteZone: (where: ZoneWhereUniqueInput) => Zone;
  deleteManyZones: (where?: ZoneWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  label: (
    where?: LabelSubscriptionWhereInput
  ) => LabelSubscriptionPayloadSubscription;
  zone: (
    where?: ZoneSubscriptionWhereInput
  ) => ZoneSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type LabelOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "alias_ASC"
  | "alias_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ZoneOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ZoneCreateWithoutLabelsInput {
  name: String;
}

export type LabelWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  alias?: String;
}>;

export interface ZoneUpdateOneRequiredWithoutLabelsInput {
  create?: ZoneCreateWithoutLabelsInput;
  update?: ZoneUpdateWithoutLabelsDataInput;
  upsert?: ZoneUpsertWithoutLabelsInput;
  connect?: ZoneWhereUniqueInput;
}

export interface LabelWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  alias?: String;
  alias_not?: String;
  alias_in?: String[] | String;
  alias_not_in?: String[] | String;
  alias_lt?: String;
  alias_lte?: String;
  alias_gt?: String;
  alias_gte?: String;
  alias_contains?: String;
  alias_not_contains?: String;
  alias_starts_with?: String;
  alias_not_starts_with?: String;
  alias_ends_with?: String;
  alias_not_ends_with?: String;
  zone?: ZoneWhereInput;
  AND?: LabelWhereInput[] | LabelWhereInput;
  OR?: LabelWhereInput[] | LabelWhereInput;
  NOT?: LabelWhereInput[] | LabelWhereInput;
}

export interface LabelCreateWithoutZoneInput {
  alias: String;
}

export interface ZoneUpsertWithoutLabelsInput {
  update: ZoneUpdateWithoutLabelsDataInput;
  create: ZoneCreateWithoutLabelsInput;
}

export interface LabelCreateManyWithoutZoneInput {
  create?: LabelCreateWithoutZoneInput[] | LabelCreateWithoutZoneInput;
  connect?: LabelWhereUniqueInput[] | LabelWhereUniqueInput;
}

export interface ZoneUpdateWithoutLabelsDataInput {
  name?: String;
}

export interface LabelSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: LabelWhereInput;
  AND?: LabelSubscriptionWhereInput[] | LabelSubscriptionWhereInput;
  OR?: LabelSubscriptionWhereInput[] | LabelSubscriptionWhereInput;
  NOT?: LabelSubscriptionWhereInput[] | LabelSubscriptionWhereInput;
}

export interface LabelUpdateWithoutZoneDataInput {
  alias?: String;
}

export interface LabelCreateInput {
  alias: String;
  zone: ZoneCreateOneWithoutLabelsInput;
}

export type ZoneWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  name?: String;
}>;

export interface ZoneWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  labels_every?: LabelWhereInput;
  labels_some?: LabelWhereInput;
  labels_none?: LabelWhereInput;
  AND?: ZoneWhereInput[] | ZoneWhereInput;
  OR?: ZoneWhereInput[] | ZoneWhereInput;
  NOT?: ZoneWhereInput[] | ZoneWhereInput;
}

export interface LabelUpdateInput {
  alias?: String;
  zone?: ZoneUpdateOneRequiredWithoutLabelsInput;
}

export interface ZoneCreateInput {
  name: String;
  labels?: LabelCreateManyWithoutZoneInput;
}

export interface ZoneCreateOneWithoutLabelsInput {
  create?: ZoneCreateWithoutLabelsInput;
  connect?: ZoneWhereUniqueInput;
}

export interface LabelUpdateManyWithoutZoneInput {
  create?: LabelCreateWithoutZoneInput[] | LabelCreateWithoutZoneInput;
  delete?: LabelWhereUniqueInput[] | LabelWhereUniqueInput;
  connect?: LabelWhereUniqueInput[] | LabelWhereUniqueInput;
  disconnect?: LabelWhereUniqueInput[] | LabelWhereUniqueInput;
  update?:
    | LabelUpdateWithWhereUniqueWithoutZoneInput[]
    | LabelUpdateWithWhereUniqueWithoutZoneInput;
  upsert?:
    | LabelUpsertWithWhereUniqueWithoutZoneInput[]
    | LabelUpsertWithWhereUniqueWithoutZoneInput;
}

export interface LabelUpdateWithWhereUniqueWithoutZoneInput {
  where: LabelWhereUniqueInput;
  data: LabelUpdateWithoutZoneDataInput;
}

export interface LabelUpsertWithWhereUniqueWithoutZoneInput {
  where: LabelWhereUniqueInput;
  update: LabelUpdateWithoutZoneDataInput;
  create: LabelCreateWithoutZoneInput;
}

export interface ZoneSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ZoneWhereInput;
  AND?: ZoneSubscriptionWhereInput[] | ZoneSubscriptionWhereInput;
  OR?: ZoneSubscriptionWhereInput[] | ZoneSubscriptionWhereInput;
  NOT?: ZoneSubscriptionWhereInput[] | ZoneSubscriptionWhereInput;
}

export interface ZoneUpdateInput {
  name?: String;
  labels?: LabelUpdateManyWithoutZoneInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface ZonePreviousValuesNode {
  id: ID_Output;
  name: String;
}

export interface ZonePreviousValues
  extends Promise<ZonePreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface ZonePreviousValuesSubscription
  extends Promise<AsyncIterator<ZonePreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface LabelEdgeNode {
  cursor: String;
}

export interface LabelEdge extends Promise<LabelEdgeNode>, Fragmentable {
  node: <T = Label>() => T;
  cursor: () => Promise<String>;
}

export interface LabelEdgeSubscription
  extends Promise<AsyncIterator<LabelEdgeNode>>,
    Fragmentable {
  node: <T = LabelSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ZoneNode {
  id: ID_Output;
  name: String;
}

export interface Zone extends Promise<ZoneNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  labels: <T = FragmentableArray<LabelNode>>(
    args?: {
      where?: LabelWhereInput;
      orderBy?: LabelOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface ZoneSubscription
  extends Promise<AsyncIterator<ZoneNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  labels: <T = Promise<AsyncIterator<LabelSubscription>>>(
    args?: {
      where?: LabelWhereInput;
      orderBy?: LabelOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface LabelPreviousValuesNode {
  id: ID_Output;
  alias: String;
}

export interface LabelPreviousValues
  extends Promise<LabelPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  alias: () => Promise<String>;
}

export interface LabelPreviousValuesSubscription
  extends Promise<AsyncIterator<LabelPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  alias: () => Promise<AsyncIterator<String>>;
}

export interface LabelSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface LabelSubscriptionPayload
  extends Promise<LabelSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Label>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = LabelPreviousValues>() => T;
}

export interface LabelSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<LabelSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = LabelSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = LabelPreviousValuesSubscription>() => T;
}

export interface LabelConnectionNode {}

export interface LabelConnection
  extends Promise<LabelConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<LabelEdgeNode>>() => T;
  aggregate: <T = AggregateLabel>() => T;
}

export interface LabelConnectionSubscription
  extends Promise<AsyncIterator<LabelConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<LabelEdgeSubscription>>>() => T;
  aggregate: <T = AggregateLabelSubscription>() => T;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ZoneSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ZoneSubscriptionPayload
  extends Promise<ZoneSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Zone>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ZonePreviousValues>() => T;
}

export interface ZoneSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ZoneSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ZoneSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ZonePreviousValuesSubscription>() => T;
}

export interface AggregateZoneNode {
  count: Int;
}

export interface AggregateZone
  extends Promise<AggregateZoneNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateZoneSubscription
  extends Promise<AsyncIterator<AggregateZoneNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateLabelNode {
  count: Int;
}

export interface AggregateLabel
  extends Promise<AggregateLabelNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateLabelSubscription
  extends Promise<AsyncIterator<AggregateLabelNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface LabelNode {
  id: ID_Output;
  alias: String;
}

export interface Label extends Promise<LabelNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  alias: () => Promise<String>;
  zone: <T = Zone>() => T;
}

export interface LabelSubscription
  extends Promise<AsyncIterator<LabelNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  alias: () => Promise<AsyncIterator<String>>;
  zone: <T = ZoneSubscription>() => T;
}

export interface ZoneConnectionNode {}

export interface ZoneConnection
  extends Promise<ZoneConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<ZoneEdgeNode>>() => T;
  aggregate: <T = AggregateZone>() => T;
}

export interface ZoneConnectionSubscription
  extends Promise<AsyncIterator<ZoneConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ZoneEdgeSubscription>>>() => T;
  aggregate: <T = AggregateZoneSubscription>() => T;
}

export interface ZoneEdgeNode {
  cursor: String;
}

export interface ZoneEdge extends Promise<ZoneEdgeNode>, Fragmentable {
  node: <T = Zone>() => T;
  cursor: () => Promise<String>;
}

export interface ZoneEdgeSubscription
  extends Promise<AsyncIterator<ZoneEdgeNode>>,
    Fragmentable {
  node: <T = ZoneSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Type Defs
 */

export const prisma: Prisma;
