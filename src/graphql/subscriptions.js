/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLanguage = /* GraphQL */ `
  subscription OnCreateLanguage {
    onCreateLanguage {
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
export const onUpdateLanguage = /* GraphQL */ `
  subscription OnUpdateLanguage {
    onUpdateLanguage {
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
export const onDeleteLanguage = /* GraphQL */ `
  subscription OnDeleteLanguage {
    onDeleteLanguage {
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
export const onCreateLitDevice = /* GraphQL */ `
  subscription OnCreateLitDevice {
    onCreateLitDevice {
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
export const onUpdateLitDevice = /* GraphQL */ `
  subscription OnUpdateLitDevice {
    onUpdateLitDevice {
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
export const onDeleteLitDevice = /* GraphQL */ `
  subscription OnDeleteLitDevice {
    onDeleteLitDevice {
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
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry {
    onCreateEntry {
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
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry {
    onUpdateEntry {
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
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry {
    onDeleteEntry {
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
export const onCreateDraft = /* GraphQL */ `
  subscription OnCreateDraft($owner: String!) {
    onCreateDraft(owner: $owner) {
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
export const onUpdateDraft = /* GraphQL */ `
  subscription OnUpdateDraft($owner: String) {
    onUpdateDraft(owner: $owner) {
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
export const onDeleteDraft = /* GraphQL */ `
  subscription OnDeleteDraft($owner: String!) {
    onDeleteDraft(owner: $owner) {
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
