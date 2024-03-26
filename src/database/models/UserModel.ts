import IUser from "../../user/interface/IUser.ts"
import IConnection from "../connection/IConnection.ts"
import BaseModel from "./BaseModel.ts"
import IModel from "./IModel.ts"

class UserModel extends BaseModel implements IModel {
  private connection: IConnection

  constructor(_connection: IConnection) {
    super()
    this.connection = _connection
  }

  public getAll(): Promise<IUser[] | string> {
    return new Promise((resolve, reject) => {
      this.connection
        .execute(`SELECT * FROM user`)
        .then((resulte: IUser[]) => {
          resolve(resulte)
        })
        .catch((error: string) => {
          reject(error)
        })
    })
  }

  public getById(_id: number): Promise<any[] | string> {
    return new Promise((resolve, reject) => {
      this.connection
        .execute(`SELECT * FROM user WHERE id = ?`, [_id])
        .then((results: any[]) => {
          resolve(results)
        })
        .catch((error: string) => {
          {
            reject(error)
          }
        })
    })
  }

  public getByColumn(_target: object): Promise<any[] | string> {
    const column = this.getColumns(_target)[0]
    const value = this.getValues(_target)[0]

    return new Promise((resolve, reject) => {
      this.connection
        .execute(`SELECT * FROM user WHERE ${column} = ?`, [value])
        .then((results: any[]) => {
          resolve(results)
        })
        .catch((error: string) => {
          reject(error)
        })
    })
  }

  public create(_values: object): Promise<object | string> {
    const [query, values] = this.getInsertQuery(_values, "user")

    return new Promise((resolve, reject) => {
      this.connection
        .execute(query, values)
        .then((results: object) => {
          resolve(results)
        })
        .catch((error: string) => {
          reject(error)
        })
    })
  }

  public update(_values: IUser): Promise<object | string> {
    const [query, values] = this.getUpdateQuery(_values, "user")

    return new Promise((resolve, reject) => {
      this.connection
        .execute(query, values)
        .then((results: object) => {
          resolve(results)
        })
        .catch((error: string) => {
          reject(error)
        })
    })
  }

  public delete(_id: number): Promise<object | string> {
    return new Promise((resolve, reject) => {
      this.connection
        .execute("DELETE FROM user WHERE id = ?", [_id])
        .then((results: object) => {
          resolve(results)
        })
        .catch((error: string) => {
          reject(error)
        })
    })
  }
}

export default UserModel
