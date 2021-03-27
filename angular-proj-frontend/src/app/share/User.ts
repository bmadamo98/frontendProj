export class RegisterUser{
    constructor(
      public username: string,
      public email: string,
      public password: string,
      remember?: boolean
    ) {  }
  }

  export class User{
    constructor(
      public username: string,
      public password: string
    ) {  }
  }