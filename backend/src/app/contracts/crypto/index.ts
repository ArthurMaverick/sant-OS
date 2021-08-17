export interface IdSlug {
  id (): IdSlug.Result
}

export namespace IdSlug {
  export type Result = {
    slug: string
  }
}
