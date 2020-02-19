/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLanguage = /* GraphQL */ `
  mutation CreateLanguage(
    $input: CreateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    createLanguage(input: $input, condition: $condition) {
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
export const updateLanguage = /* GraphQL */ `
  mutation UpdateLanguage(
    $input: UpdateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    updateLanguage(input: $input, condition: $condition) {
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
export const deleteLanguage = /* GraphQL */ `
  mutation DeleteLanguage(
    $input: DeleteLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    deleteLanguage(input: $input, condition: $condition) {
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
export const createLitDevice = /* GraphQL */ `
  mutation CreateLitDevice(
    $input: CreateLitDeviceInput!
    $condition: ModelLitDeviceConditionInput
  ) {
    createLitDevice(input: $input, condition: $condition) {
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
export const updateLitDevice = /* GraphQL */ `
  mutation UpdateLitDevice(
    $input: UpdateLitDeviceInput!
    $condition: ModelLitDeviceConditionInput
  ) {
    updateLitDevice(input: $input, condition: $condition) {
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
export const deleteLitDevice = /* GraphQL */ `
  mutation DeleteLitDevice(
    $input: DeleteLitDeviceInput!
    $condition: ModelLitDeviceConditionInput
  ) {
    deleteLitDevice(input: $input, condition: $condition) {
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
export const createEntry = /* GraphQL */ `
  mutation CreateEntry(
    $input: CreateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    createEntry(input: $input, condition: $condition) {
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
export const updateEntry = /* GraphQL */ `
  mutation UpdateEntry(
    $input: UpdateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    updateEntry(input: $input, condition: $condition) {
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
export const deleteEntry = /* GraphQL */ `
  mutation DeleteEntry(
    $input: DeleteEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    deleteEntry(input: $input, condition: $condition) {
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
export const createDraft = /* GraphQL */ `
  mutation CreateDraft(
    $input: CreateDraftInput!
    $condition: ModelDraftConditionInput
  ) {
    createDraft(input: $input, condition: $condition) {
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
export const updateDraft = /* GraphQL */ `
  mutation UpdateDraft(
    $input: UpdateDraftInput!
    $condition: ModelDraftConditionInput
  ) {
    updateDraft(input: $input, condition: $condition) {
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
export const deleteDraft = /* GraphQL */ `
  mutation DeleteDraft(
    $input: DeleteDraftInput!
    $condition: ModelDraftConditionInput
  ) {
    deleteDraft(input: $input, condition: $condition) {
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
