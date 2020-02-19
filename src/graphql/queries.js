/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDraft = /* GraphQL */ `
  query GetDraft($id: ID!) {
    getDraft(id: $id) {
      id
      content
      litdevice {
        id
        title
        drafts {
          nextToken
        }
        language {
          id
          name
        }
        entries {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listDrafts = /* GraphQL */ `
  query ListDrafts(
    $filter: ModelDraftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrafts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        litdevice {
          id
          title
        }
        owner
      }
      nextToken
    }
  }
`;
export const listLanguages = /* GraphQL */ `
  query ListLanguages(
    $filter: ModelLanguageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLanguages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        litdevices {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getLanguage = /* GraphQL */ `
  query GetLanguage($id: ID!) {
    getLanguage(id: $id) {
      id
      name
      litdevices {
        items {
          id
          title
        }
        nextToken
      }
    }
  }
`;
export const listLitDevices = /* GraphQL */ `
  query ListLitDevices(
    $filter: ModelLitDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLitDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        drafts {
          nextToken
        }
        language {
          id
          name
        }
        entries {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getLitDevice = /* GraphQL */ `
  query GetLitDevice($id: ID!) {
    getLitDevice(id: $id) {
      id
      title
      drafts {
        items {
          id
          content
          owner
        }
        nextToken
      }
      language {
        id
        name
        litdevices {
          nextToken
        }
      }
      entries {
        items {
          id
          content
        }
        nextToken
      }
    }
  }
`;
export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
      id
      content
      litdevice {
        id
        title
        drafts {
          nextToken
        }
        language {
          id
          name
        }
        entries {
          nextToken
        }
      }
    }
  }
`;
export const listEntrys = /* GraphQL */ `
  query ListEntrys(
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        litdevice {
          id
          title
        }
      }
      nextToken
    }
  }
`;
