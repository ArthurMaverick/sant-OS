export interface IUserLogin {
  login (_params: UserLogin.Params): Promise<UserLogin.Result>
}

export namespace UserLogin {
  export type Params = {
    email: string,
    password: string,
  };
  export type Result = {
    result: boolean
  }

}
