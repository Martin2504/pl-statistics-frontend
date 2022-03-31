import User from "../User";

/**
 * Implementation for the Use object, which will hold the User object, stored in the localstorage.
 */
class UserImpl implements User {

  private _accessToken: string | null;
  private _username: string | null;

  constructor(username: string | null, accessToken: string | null) {
    this._username = username;
    this._accessToken = accessToken;
  }

  get accessToken(): string | null {
    return this._accessToken;
  }

  set accessToken(value: string | null) {
    this._accessToken = value;
  }

  get username(): string | null {
    return this._username;
  }

  set username(value: string | null) {
    this._username = value;
  }

}

export default UserImpl;
