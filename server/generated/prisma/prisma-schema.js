module.exports = {
        typeDefs: /* GraphQL */ `type AggregateLabel {
  count: Int!
}

type AggregateZone {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Label {
  id: ID!
  alias: String!
  zone: Zone!
}

type LabelConnection {
  pageInfo: PageInfo!
  edges: [LabelEdge]!
  aggregate: AggregateLabel!
}

input LabelCreateInput {
  alias: String!
  zone: ZoneCreateOneWithoutLabelsInput!
}

input LabelCreateManyWithoutZoneInput {
  create: [LabelCreateWithoutZoneInput!]
  connect: [LabelWhereUniqueInput!]
}

input LabelCreateWithoutZoneInput {
  alias: String!
}

type LabelEdge {
  node: Label!
  cursor: String!
}

enum LabelOrderByInput {
  id_ASC
  id_DESC
  alias_ASC
  alias_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LabelPreviousValues {
  id: ID!
  alias: String!
}

type LabelSubscriptionPayload {
  mutation: MutationType!
  node: Label
  updatedFields: [String!]
  previousValues: LabelPreviousValues
}

input LabelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LabelWhereInput
  AND: [LabelSubscriptionWhereInput!]
  OR: [LabelSubscriptionWhereInput!]
  NOT: [LabelSubscriptionWhereInput!]
}

input LabelUpdateInput {
  alias: String
  zone: ZoneUpdateOneRequiredWithoutLabelsInput
}

input LabelUpdateManyWithoutZoneInput {
  create: [LabelCreateWithoutZoneInput!]
  delete: [LabelWhereUniqueInput!]
  connect: [LabelWhereUniqueInput!]
  disconnect: [LabelWhereUniqueInput!]
  update: [LabelUpdateWithWhereUniqueWithoutZoneInput!]
  upsert: [LabelUpsertWithWhereUniqueWithoutZoneInput!]
}

input LabelUpdateWithoutZoneDataInput {
  alias: String
}

input LabelUpdateWithWhereUniqueWithoutZoneInput {
  where: LabelWhereUniqueInput!
  data: LabelUpdateWithoutZoneDataInput!
}

input LabelUpsertWithWhereUniqueWithoutZoneInput {
  where: LabelWhereUniqueInput!
  update: LabelUpdateWithoutZoneDataInput!
  create: LabelCreateWithoutZoneInput!
}

input LabelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  alias: String
  alias_not: String
  alias_in: [String!]
  alias_not_in: [String!]
  alias_lt: String
  alias_lte: String
  alias_gt: String
  alias_gte: String
  alias_contains: String
  alias_not_contains: String
  alias_starts_with: String
  alias_not_starts_with: String
  alias_ends_with: String
  alias_not_ends_with: String
  zone: ZoneWhereInput
  AND: [LabelWhereInput!]
  OR: [LabelWhereInput!]
  NOT: [LabelWhereInput!]
}

input LabelWhereUniqueInput {
  id: ID
  alias: String
}

scalar Long

type Mutation {
  createLabel(data: LabelCreateInput!): Label!
  updateLabel(data: LabelUpdateInput!, where: LabelWhereUniqueInput!): Label
  updateManyLabels(data: LabelUpdateInput!, where: LabelWhereInput): BatchPayload!
  upsertLabel(where: LabelWhereUniqueInput!, create: LabelCreateInput!, update: LabelUpdateInput!): Label!
  deleteLabel(where: LabelWhereUniqueInput!): Label
  deleteManyLabels(where: LabelWhereInput): BatchPayload!
  createZone(data: ZoneCreateInput!): Zone!
  updateZone(data: ZoneUpdateInput!, where: ZoneWhereUniqueInput!): Zone
  updateManyZones(data: ZoneUpdateInput!, where: ZoneWhereInput): BatchPayload!
  upsertZone(where: ZoneWhereUniqueInput!, create: ZoneCreateInput!, update: ZoneUpdateInput!): Zone!
  deleteZone(where: ZoneWhereUniqueInput!): Zone
  deleteManyZones(where: ZoneWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  label(where: LabelWhereUniqueInput!): Label
  labels(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Label]!
  labelsConnection(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LabelConnection!
  zone(where: ZoneWhereUniqueInput!): Zone
  zones(where: ZoneWhereInput, orderBy: ZoneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Zone]!
  zonesConnection(where: ZoneWhereInput, orderBy: ZoneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ZoneConnection!
  node(id: ID!): Node
}

type Subscription {
  label(where: LabelSubscriptionWhereInput): LabelSubscriptionPayload
  zone(where: ZoneSubscriptionWhereInput): ZoneSubscriptionPayload
}

type Zone {
  id: ID!
  name: String!
  labels(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Label!]
}

type ZoneConnection {
  pageInfo: PageInfo!
  edges: [ZoneEdge]!
  aggregate: AggregateZone!
}

input ZoneCreateInput {
  name: String!
  labels: LabelCreateManyWithoutZoneInput
}

input ZoneCreateOneWithoutLabelsInput {
  create: ZoneCreateWithoutLabelsInput
  connect: ZoneWhereUniqueInput
}

input ZoneCreateWithoutLabelsInput {
  name: String!
}

type ZoneEdge {
  node: Zone!
  cursor: String!
}

enum ZoneOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ZonePreviousValues {
  id: ID!
  name: String!
}

type ZoneSubscriptionPayload {
  mutation: MutationType!
  node: Zone
  updatedFields: [String!]
  previousValues: ZonePreviousValues
}

input ZoneSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ZoneWhereInput
  AND: [ZoneSubscriptionWhereInput!]
  OR: [ZoneSubscriptionWhereInput!]
  NOT: [ZoneSubscriptionWhereInput!]
}

input ZoneUpdateInput {
  name: String
  labels: LabelUpdateManyWithoutZoneInput
}

input ZoneUpdateOneRequiredWithoutLabelsInput {
  create: ZoneCreateWithoutLabelsInput
  update: ZoneUpdateWithoutLabelsDataInput
  upsert: ZoneUpsertWithoutLabelsInput
  connect: ZoneWhereUniqueInput
}

input ZoneUpdateWithoutLabelsDataInput {
  name: String
}

input ZoneUpsertWithoutLabelsInput {
  update: ZoneUpdateWithoutLabelsDataInput!
  create: ZoneCreateWithoutLabelsInput!
}

input ZoneWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  labels_every: LabelWhereInput
  labels_some: LabelWhereInput
  labels_none: LabelWhereInput
  AND: [ZoneWhereInput!]
  OR: [ZoneWhereInput!]
  NOT: [ZoneWhereInput!]
}

input ZoneWhereUniqueInput {
  id: ID
  name: String
}
`
      }
    