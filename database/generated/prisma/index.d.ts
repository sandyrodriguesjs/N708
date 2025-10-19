
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model livros
 * 
 */
export type livros = $Result.DefaultSelection<Prisma.$livrosPayload>
/**
 * Model exemplares
 * 
 */
export type exemplares = $Result.DefaultSelection<Prisma.$exemplaresPayload>
/**
 * Model emprestimos
 * 
 */
export type emprestimos = $Result.DefaultSelection<Prisma.$emprestimosPayload>
/**
 * Model reservas
 * 
 */
export type reservas = $Result.DefaultSelection<Prisma.$reservasPayload>
/**
 * Model avaliacoes
 * 
 */
export type avaliacoes = $Result.DefaultSelection<Prisma.$avaliacoesPayload>
/**
 * Model historico
 * 
 */
export type historico = $Result.DefaultSelection<Prisma.$historicoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuarios.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuarios.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livros`: Exposes CRUD operations for the **livros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livros
    * const livros = await prisma.livros.findMany()
    * ```
    */
  get livros(): Prisma.livrosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exemplares`: Exposes CRUD operations for the **exemplares** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exemplares
    * const exemplares = await prisma.exemplares.findMany()
    * ```
    */
  get exemplares(): Prisma.exemplaresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emprestimos`: Exposes CRUD operations for the **emprestimos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emprestimos
    * const emprestimos = await prisma.emprestimos.findMany()
    * ```
    */
  get emprestimos(): Prisma.emprestimosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservas`: Exposes CRUD operations for the **reservas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reservas.findMany()
    * ```
    */
  get reservas(): Prisma.reservasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacoes`: Exposes CRUD operations for the **avaliacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacoes
    * const avaliacoes = await prisma.avaliacoes.findMany()
    * ```
    */
  get avaliacoes(): Prisma.avaliacoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historico`: Exposes CRUD operations for the **historico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historicos
    * const historicos = await prisma.historico.findMany()
    * ```
    */
  get historico(): Prisma.historicoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    usuarios: 'usuarios',
    livros: 'livros',
    exemplares: 'exemplares',
    emprestimos: 'emprestimos',
    reservas: 'reservas',
    avaliacoes: 'avaliacoes',
    historico: 'historico'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuarios" | "livros" | "exemplares" | "emprestimos" | "reservas" | "avaliacoes" | "historico"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      livros: {
        payload: Prisma.$livrosPayload<ExtArgs>
        fields: Prisma.livrosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.livrosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.livrosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosPayload>
          }
          findFirst: {
            args: Prisma.livrosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.livrosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosPayload>
          }
          findMany: {
            args: Prisma.livrosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosPayload>[]
          }
          create: {
            args: Prisma.livrosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosPayload>
          }
          createMany: {
            args: Prisma.livrosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.livrosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosPayload>[]
          }
          delete: {
            args: Prisma.livrosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosPayload>
          }
          update: {
            args: Prisma.livrosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosPayload>
          }
          deleteMany: {
            args: Prisma.livrosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.livrosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.livrosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosPayload>[]
          }
          upsert: {
            args: Prisma.livrosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosPayload>
          }
          aggregate: {
            args: Prisma.LivrosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivros>
          }
          groupBy: {
            args: Prisma.livrosGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivrosGroupByOutputType>[]
          }
          count: {
            args: Prisma.livrosCountArgs<ExtArgs>
            result: $Utils.Optional<LivrosCountAggregateOutputType> | number
          }
        }
      }
      exemplares: {
        payload: Prisma.$exemplaresPayload<ExtArgs>
        fields: Prisma.exemplaresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exemplaresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exemplaresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exemplaresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exemplaresPayload>
          }
          findFirst: {
            args: Prisma.exemplaresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exemplaresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exemplaresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exemplaresPayload>
          }
          findMany: {
            args: Prisma.exemplaresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exemplaresPayload>[]
          }
          create: {
            args: Prisma.exemplaresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exemplaresPayload>
          }
          createMany: {
            args: Prisma.exemplaresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.exemplaresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exemplaresPayload>[]
          }
          delete: {
            args: Prisma.exemplaresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exemplaresPayload>
          }
          update: {
            args: Prisma.exemplaresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exemplaresPayload>
          }
          deleteMany: {
            args: Prisma.exemplaresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exemplaresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.exemplaresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exemplaresPayload>[]
          }
          upsert: {
            args: Prisma.exemplaresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exemplaresPayload>
          }
          aggregate: {
            args: Prisma.ExemplaresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExemplares>
          }
          groupBy: {
            args: Prisma.exemplaresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExemplaresGroupByOutputType>[]
          }
          count: {
            args: Prisma.exemplaresCountArgs<ExtArgs>
            result: $Utils.Optional<ExemplaresCountAggregateOutputType> | number
          }
        }
      }
      emprestimos: {
        payload: Prisma.$emprestimosPayload<ExtArgs>
        fields: Prisma.emprestimosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.emprestimosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.emprestimosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimosPayload>
          }
          findFirst: {
            args: Prisma.emprestimosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.emprestimosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimosPayload>
          }
          findMany: {
            args: Prisma.emprestimosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimosPayload>[]
          }
          create: {
            args: Prisma.emprestimosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimosPayload>
          }
          createMany: {
            args: Prisma.emprestimosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.emprestimosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimosPayload>[]
          }
          delete: {
            args: Prisma.emprestimosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimosPayload>
          }
          update: {
            args: Prisma.emprestimosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimosPayload>
          }
          deleteMany: {
            args: Prisma.emprestimosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.emprestimosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.emprestimosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimosPayload>[]
          }
          upsert: {
            args: Prisma.emprestimosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimosPayload>
          }
          aggregate: {
            args: Prisma.EmprestimosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmprestimos>
          }
          groupBy: {
            args: Prisma.emprestimosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmprestimosGroupByOutputType>[]
          }
          count: {
            args: Prisma.emprestimosCountArgs<ExtArgs>
            result: $Utils.Optional<EmprestimosCountAggregateOutputType> | number
          }
        }
      }
      reservas: {
        payload: Prisma.$reservasPayload<ExtArgs>
        fields: Prisma.reservasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reservasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reservasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          findFirst: {
            args: Prisma.reservasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reservasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          findMany: {
            args: Prisma.reservasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>[]
          }
          create: {
            args: Prisma.reservasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          createMany: {
            args: Prisma.reservasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reservasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>[]
          }
          delete: {
            args: Prisma.reservasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          update: {
            args: Prisma.reservasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          deleteMany: {
            args: Prisma.reservasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reservasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reservasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>[]
          }
          upsert: {
            args: Prisma.reservasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          aggregate: {
            args: Prisma.ReservasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservas>
          }
          groupBy: {
            args: Prisma.reservasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservasGroupByOutputType>[]
          }
          count: {
            args: Prisma.reservasCountArgs<ExtArgs>
            result: $Utils.Optional<ReservasCountAggregateOutputType> | number
          }
        }
      }
      avaliacoes: {
        payload: Prisma.$avaliacoesPayload<ExtArgs>
        fields: Prisma.avaliacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.avaliacoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.avaliacoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>
          }
          findFirst: {
            args: Prisma.avaliacoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.avaliacoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>
          }
          findMany: {
            args: Prisma.avaliacoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>[]
          }
          create: {
            args: Prisma.avaliacoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>
          }
          createMany: {
            args: Prisma.avaliacoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.avaliacoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>[]
          }
          delete: {
            args: Prisma.avaliacoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>
          }
          update: {
            args: Prisma.avaliacoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>
          }
          deleteMany: {
            args: Prisma.avaliacoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.avaliacoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.avaliacoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>[]
          }
          upsert: {
            args: Prisma.avaliacoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>
          }
          aggregate: {
            args: Prisma.AvaliacoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacoes>
          }
          groupBy: {
            args: Prisma.avaliacoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.avaliacoesCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacoesCountAggregateOutputType> | number
          }
        }
      }
      historico: {
        payload: Prisma.$historicoPayload<ExtArgs>
        fields: Prisma.historicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoPayload>
          }
          findFirst: {
            args: Prisma.historicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoPayload>
          }
          findMany: {
            args: Prisma.historicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoPayload>[]
          }
          create: {
            args: Prisma.historicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoPayload>
          }
          createMany: {
            args: Prisma.historicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.historicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoPayload>[]
          }
          delete: {
            args: Prisma.historicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoPayload>
          }
          update: {
            args: Prisma.historicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoPayload>
          }
          deleteMany: {
            args: Prisma.historicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.historicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.historicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoPayload>[]
          }
          upsert: {
            args: Prisma.historicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoPayload>
          }
          aggregate: {
            args: Prisma.HistoricoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorico>
          }
          groupBy: {
            args: Prisma.historicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoGroupByOutputType>[]
          }
          count: {
            args: Prisma.historicoCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuarios?: usuariosOmit
    livros?: livrosOmit
    exemplares?: exemplaresOmit
    emprestimos?: emprestimosOmit
    reservas?: reservasOmit
    avaliacoes?: avaliacoesOmit
    historico?: historicoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    emprestimos: number
    reservas: number
    avaliacoes: number
    historico: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | UsuariosCountOutputTypeCountEmprestimosArgs
    reservas?: boolean | UsuariosCountOutputTypeCountReservasArgs
    avaliacoes?: boolean | UsuariosCountOutputTypeCountAvaliacoesArgs
    historico?: boolean | UsuariosCountOutputTypeCountHistoricoArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emprestimosWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avaliacoesWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historicoWhereInput
  }


  /**
   * Count Type LivrosCountOutputType
   */

  export type LivrosCountOutputType = {
    exemplares: number
    reservas: number
    avaliacoes: number
  }

  export type LivrosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exemplares?: boolean | LivrosCountOutputTypeCountExemplaresArgs
    reservas?: boolean | LivrosCountOutputTypeCountReservasArgs
    avaliacoes?: boolean | LivrosCountOutputTypeCountAvaliacoesArgs
  }

  // Custom InputTypes
  /**
   * LivrosCountOutputType without action
   */
  export type LivrosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivrosCountOutputType
     */
    select?: LivrosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LivrosCountOutputType without action
   */
  export type LivrosCountOutputTypeCountExemplaresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exemplaresWhereInput
  }

  /**
   * LivrosCountOutputType without action
   */
  export type LivrosCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasWhereInput
  }

  /**
   * LivrosCountOutputType without action
   */
  export type LivrosCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avaliacoesWhereInput
  }


  /**
   * Count Type ExemplaresCountOutputType
   */

  export type ExemplaresCountOutputType = {
    emprestimos: number
    historico: number
  }

  export type ExemplaresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | ExemplaresCountOutputTypeCountEmprestimosArgs
    historico?: boolean | ExemplaresCountOutputTypeCountHistoricoArgs
  }

  // Custom InputTypes
  /**
   * ExemplaresCountOutputType without action
   */
  export type ExemplaresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExemplaresCountOutputType
     */
    select?: ExemplaresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExemplaresCountOutputType without action
   */
  export type ExemplaresCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emprestimosWhereInput
  }

  /**
   * ExemplaresCountOutputType without action
   */
  export type ExemplaresCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historicoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    name: string | null
    email: string | null
    password: string | null
    status: string | null
    data_cadastro: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    name: string | null
    email: string | null
    password: string | null
    status: string | null
    data_cadastro: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    name: number
    email: number
    password: number
    status: number
    data_cadastro: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    name?: true
    email?: true
    password?: true
    status?: true
    data_cadastro?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    name?: true
    email?: true
    password?: true
    status?: true
    data_cadastro?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    name?: true
    email?: true
    password?: true
    status?: true
    data_cadastro?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: number
    name: string
    email: string
    password: string
    status: string
    data_cadastro: Date
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    data_cadastro?: boolean
    emprestimos?: boolean | usuarios$emprestimosArgs<ExtArgs>
    reservas?: boolean | usuarios$reservasArgs<ExtArgs>
    avaliacoes?: boolean | usuarios$avaliacoesArgs<ExtArgs>
    historico?: boolean | usuarios$historicoArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id_usuario?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    data_cadastro?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "name" | "email" | "password" | "status" | "data_cadastro", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | usuarios$emprestimosArgs<ExtArgs>
    reservas?: boolean | usuarios$reservasArgs<ExtArgs>
    avaliacoes?: boolean | usuarios$avaliacoesArgs<ExtArgs>
    historico?: boolean | usuarios$historicoArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      emprestimos: Prisma.$emprestimosPayload<ExtArgs>[]
      reservas: Prisma.$reservasPayload<ExtArgs>[]
      avaliacoes: Prisma.$avaliacoesPayload<ExtArgs>[]
      historico: Prisma.$historicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      name: string
      email: string
      password: string
      status: string
      data_cadastro: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emprestimos<T extends usuarios$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emprestimosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservas<T extends usuarios$reservasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacoes<T extends usuarios$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historico<T extends usuarios$historicoArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id_usuario: FieldRef<"usuarios", 'Int'>
    readonly name: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly password: FieldRef<"usuarios", 'String'>
    readonly status: FieldRef<"usuarios", 'String'>
    readonly data_cadastro: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.emprestimos
   */
  export type usuarios$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimos
     */
    select?: emprestimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimos
     */
    omit?: emprestimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimosInclude<ExtArgs> | null
    where?: emprestimosWhereInput
    orderBy?: emprestimosOrderByWithRelationInput | emprestimosOrderByWithRelationInput[]
    cursor?: emprestimosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestimosScalarFieldEnum | EmprestimosScalarFieldEnum[]
  }

  /**
   * usuarios.reservas
   */
  export type usuarios$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    where?: reservasWhereInput
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    cursor?: reservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * usuarios.avaliacoes
   */
  export type usuarios$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    where?: avaliacoesWhereInput
    orderBy?: avaliacoesOrderByWithRelationInput | avaliacoesOrderByWithRelationInput[]
    cursor?: avaliacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacoesScalarFieldEnum | AvaliacoesScalarFieldEnum[]
  }

  /**
   * usuarios.historico
   */
  export type usuarios$historicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico
     */
    select?: historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico
     */
    omit?: historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoInclude<ExtArgs> | null
    where?: historicoWhereInput
    orderBy?: historicoOrderByWithRelationInput | historicoOrderByWithRelationInput[]
    cursor?: historicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model livros
   */

  export type AggregateLivros = {
    _count: LivrosCountAggregateOutputType | null
    _avg: LivrosAvgAggregateOutputType | null
    _sum: LivrosSumAggregateOutputType | null
    _min: LivrosMinAggregateOutputType | null
    _max: LivrosMaxAggregateOutputType | null
  }

  export type LivrosAvgAggregateOutputType = {
    id_livro: number | null
    ano_publicacao: number | null
  }

  export type LivrosSumAggregateOutputType = {
    id_livro: number | null
    ano_publicacao: number | null
  }

  export type LivrosMinAggregateOutputType = {
    id_livro: number | null
    isbn: string | null
    titulo: string | null
    autor: string | null
    editora: string | null
    ano_publicacao: number | null
    sinopse: string | null
  }

  export type LivrosMaxAggregateOutputType = {
    id_livro: number | null
    isbn: string | null
    titulo: string | null
    autor: string | null
    editora: string | null
    ano_publicacao: number | null
    sinopse: string | null
  }

  export type LivrosCountAggregateOutputType = {
    id_livro: number
    isbn: number
    titulo: number
    autor: number
    editora: number
    ano_publicacao: number
    sinopse: number
    _all: number
  }


  export type LivrosAvgAggregateInputType = {
    id_livro?: true
    ano_publicacao?: true
  }

  export type LivrosSumAggregateInputType = {
    id_livro?: true
    ano_publicacao?: true
  }

  export type LivrosMinAggregateInputType = {
    id_livro?: true
    isbn?: true
    titulo?: true
    autor?: true
    editora?: true
    ano_publicacao?: true
    sinopse?: true
  }

  export type LivrosMaxAggregateInputType = {
    id_livro?: true
    isbn?: true
    titulo?: true
    autor?: true
    editora?: true
    ano_publicacao?: true
    sinopse?: true
  }

  export type LivrosCountAggregateInputType = {
    id_livro?: true
    isbn?: true
    titulo?: true
    autor?: true
    editora?: true
    ano_publicacao?: true
    sinopse?: true
    _all?: true
  }

  export type LivrosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which livros to aggregate.
     */
    where?: livrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livros to fetch.
     */
    orderBy?: livrosOrderByWithRelationInput | livrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: livrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned livros
    **/
    _count?: true | LivrosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivrosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivrosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivrosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivrosMaxAggregateInputType
  }

  export type GetLivrosAggregateType<T extends LivrosAggregateArgs> = {
        [P in keyof T & keyof AggregateLivros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivros[P]>
      : GetScalarType<T[P], AggregateLivros[P]>
  }




  export type livrosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: livrosWhereInput
    orderBy?: livrosOrderByWithAggregationInput | livrosOrderByWithAggregationInput[]
    by: LivrosScalarFieldEnum[] | LivrosScalarFieldEnum
    having?: livrosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivrosCountAggregateInputType | true
    _avg?: LivrosAvgAggregateInputType
    _sum?: LivrosSumAggregateInputType
    _min?: LivrosMinAggregateInputType
    _max?: LivrosMaxAggregateInputType
  }

  export type LivrosGroupByOutputType = {
    id_livro: number
    isbn: string
    titulo: string
    autor: string
    editora: string
    ano_publicacao: number
    sinopse: string
    _count: LivrosCountAggregateOutputType | null
    _avg: LivrosAvgAggregateOutputType | null
    _sum: LivrosSumAggregateOutputType | null
    _min: LivrosMinAggregateOutputType | null
    _max: LivrosMaxAggregateOutputType | null
  }

  type GetLivrosGroupByPayload<T extends livrosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivrosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivrosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivrosGroupByOutputType[P]>
            : GetScalarType<T[P], LivrosGroupByOutputType[P]>
        }
      >
    >


  export type livrosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_livro?: boolean
    isbn?: boolean
    titulo?: boolean
    autor?: boolean
    editora?: boolean
    ano_publicacao?: boolean
    sinopse?: boolean
    exemplares?: boolean | livros$exemplaresArgs<ExtArgs>
    reservas?: boolean | livros$reservasArgs<ExtArgs>
    avaliacoes?: boolean | livros$avaliacoesArgs<ExtArgs>
    _count?: boolean | LivrosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livros"]>

  export type livrosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_livro?: boolean
    isbn?: boolean
    titulo?: boolean
    autor?: boolean
    editora?: boolean
    ano_publicacao?: boolean
    sinopse?: boolean
  }, ExtArgs["result"]["livros"]>

  export type livrosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_livro?: boolean
    isbn?: boolean
    titulo?: boolean
    autor?: boolean
    editora?: boolean
    ano_publicacao?: boolean
    sinopse?: boolean
  }, ExtArgs["result"]["livros"]>

  export type livrosSelectScalar = {
    id_livro?: boolean
    isbn?: boolean
    titulo?: boolean
    autor?: boolean
    editora?: boolean
    ano_publicacao?: boolean
    sinopse?: boolean
  }

  export type livrosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_livro" | "isbn" | "titulo" | "autor" | "editora" | "ano_publicacao" | "sinopse", ExtArgs["result"]["livros"]>
  export type livrosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exemplares?: boolean | livros$exemplaresArgs<ExtArgs>
    reservas?: boolean | livros$reservasArgs<ExtArgs>
    avaliacoes?: boolean | livros$avaliacoesArgs<ExtArgs>
    _count?: boolean | LivrosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type livrosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type livrosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $livrosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "livros"
    objects: {
      exemplares: Prisma.$exemplaresPayload<ExtArgs>[]
      reservas: Prisma.$reservasPayload<ExtArgs>[]
      avaliacoes: Prisma.$avaliacoesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_livro: number
      isbn: string
      titulo: string
      autor: string
      editora: string
      ano_publicacao: number
      sinopse: string
    }, ExtArgs["result"]["livros"]>
    composites: {}
  }

  type livrosGetPayload<S extends boolean | null | undefined | livrosDefaultArgs> = $Result.GetResult<Prisma.$livrosPayload, S>

  type livrosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<livrosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivrosCountAggregateInputType | true
    }

  export interface livrosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['livros'], meta: { name: 'livros' } }
    /**
     * Find zero or one Livros that matches the filter.
     * @param {livrosFindUniqueArgs} args - Arguments to find a Livros
     * @example
     * // Get one Livros
     * const livros = await prisma.livros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends livrosFindUniqueArgs>(args: SelectSubset<T, livrosFindUniqueArgs<ExtArgs>>): Prisma__livrosClient<$Result.GetResult<Prisma.$livrosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livros that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {livrosFindUniqueOrThrowArgs} args - Arguments to find a Livros
     * @example
     * // Get one Livros
     * const livros = await prisma.livros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends livrosFindUniqueOrThrowArgs>(args: SelectSubset<T, livrosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__livrosClient<$Result.GetResult<Prisma.$livrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livrosFindFirstArgs} args - Arguments to find a Livros
     * @example
     * // Get one Livros
     * const livros = await prisma.livros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends livrosFindFirstArgs>(args?: SelectSubset<T, livrosFindFirstArgs<ExtArgs>>): Prisma__livrosClient<$Result.GetResult<Prisma.$livrosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livrosFindFirstOrThrowArgs} args - Arguments to find a Livros
     * @example
     * // Get one Livros
     * const livros = await prisma.livros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends livrosFindFirstOrThrowArgs>(args?: SelectSubset<T, livrosFindFirstOrThrowArgs<ExtArgs>>): Prisma__livrosClient<$Result.GetResult<Prisma.$livrosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livrosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livros
     * const livros = await prisma.livros.findMany()
     * 
     * // Get first 10 Livros
     * const livros = await prisma.livros.findMany({ take: 10 })
     * 
     * // Only select the `id_livro`
     * const livrosWithId_livroOnly = await prisma.livros.findMany({ select: { id_livro: true } })
     * 
     */
    findMany<T extends livrosFindManyArgs>(args?: SelectSubset<T, livrosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livros.
     * @param {livrosCreateArgs} args - Arguments to create a Livros.
     * @example
     * // Create one Livros
     * const Livros = await prisma.livros.create({
     *   data: {
     *     // ... data to create a Livros
     *   }
     * })
     * 
     */
    create<T extends livrosCreateArgs>(args: SelectSubset<T, livrosCreateArgs<ExtArgs>>): Prisma__livrosClient<$Result.GetResult<Prisma.$livrosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livros.
     * @param {livrosCreateManyArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livros = await prisma.livros.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends livrosCreateManyArgs>(args?: SelectSubset<T, livrosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Livros and returns the data saved in the database.
     * @param {livrosCreateManyAndReturnArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livros = await prisma.livros.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Livros and only return the `id_livro`
     * const livrosWithId_livroOnly = await prisma.livros.createManyAndReturn({
     *   select: { id_livro: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends livrosCreateManyAndReturnArgs>(args?: SelectSubset<T, livrosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livrosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Livros.
     * @param {livrosDeleteArgs} args - Arguments to delete one Livros.
     * @example
     * // Delete one Livros
     * const Livros = await prisma.livros.delete({
     *   where: {
     *     // ... filter to delete one Livros
     *   }
     * })
     * 
     */
    delete<T extends livrosDeleteArgs>(args: SelectSubset<T, livrosDeleteArgs<ExtArgs>>): Prisma__livrosClient<$Result.GetResult<Prisma.$livrosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livros.
     * @param {livrosUpdateArgs} args - Arguments to update one Livros.
     * @example
     * // Update one Livros
     * const livros = await prisma.livros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends livrosUpdateArgs>(args: SelectSubset<T, livrosUpdateArgs<ExtArgs>>): Prisma__livrosClient<$Result.GetResult<Prisma.$livrosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livros.
     * @param {livrosDeleteManyArgs} args - Arguments to filter Livros to delete.
     * @example
     * // Delete a few Livros
     * const { count } = await prisma.livros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends livrosDeleteManyArgs>(args?: SelectSubset<T, livrosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livrosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livros
     * const livros = await prisma.livros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends livrosUpdateManyArgs>(args: SelectSubset<T, livrosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros and returns the data updated in the database.
     * @param {livrosUpdateManyAndReturnArgs} args - Arguments to update many Livros.
     * @example
     * // Update many Livros
     * const livros = await prisma.livros.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Livros and only return the `id_livro`
     * const livrosWithId_livroOnly = await prisma.livros.updateManyAndReturn({
     *   select: { id_livro: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends livrosUpdateManyAndReturnArgs>(args: SelectSubset<T, livrosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livrosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Livros.
     * @param {livrosUpsertArgs} args - Arguments to update or create a Livros.
     * @example
     * // Update or create a Livros
     * const livros = await prisma.livros.upsert({
     *   create: {
     *     // ... data to create a Livros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livros we want to update
     *   }
     * })
     */
    upsert<T extends livrosUpsertArgs>(args: SelectSubset<T, livrosUpsertArgs<ExtArgs>>): Prisma__livrosClient<$Result.GetResult<Prisma.$livrosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livrosCountArgs} args - Arguments to filter Livros to count.
     * @example
     * // Count the number of Livros
     * const count = await prisma.livros.count({
     *   where: {
     *     // ... the filter for the Livros we want to count
     *   }
     * })
    **/
    count<T extends livrosCountArgs>(
      args?: Subset<T, livrosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivrosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivrosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LivrosAggregateArgs>(args: Subset<T, LivrosAggregateArgs>): Prisma.PrismaPromise<GetLivrosAggregateType<T>>

    /**
     * Group by Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livrosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends livrosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: livrosGroupByArgs['orderBy'] }
        : { orderBy?: livrosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, livrosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivrosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the livros model
   */
  readonly fields: livrosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for livros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__livrosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exemplares<T extends livros$exemplaresArgs<ExtArgs> = {}>(args?: Subset<T, livros$exemplaresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exemplaresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservas<T extends livros$reservasArgs<ExtArgs> = {}>(args?: Subset<T, livros$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacoes<T extends livros$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, livros$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the livros model
   */
  interface livrosFieldRefs {
    readonly id_livro: FieldRef<"livros", 'Int'>
    readonly isbn: FieldRef<"livros", 'String'>
    readonly titulo: FieldRef<"livros", 'String'>
    readonly autor: FieldRef<"livros", 'String'>
    readonly editora: FieldRef<"livros", 'String'>
    readonly ano_publicacao: FieldRef<"livros", 'Int'>
    readonly sinopse: FieldRef<"livros", 'String'>
  }
    

  // Custom InputTypes
  /**
   * livros findUnique
   */
  export type livrosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livros
     */
    select?: livrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livros
     */
    omit?: livrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosInclude<ExtArgs> | null
    /**
     * Filter, which livros to fetch.
     */
    where: livrosWhereUniqueInput
  }

  /**
   * livros findUniqueOrThrow
   */
  export type livrosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livros
     */
    select?: livrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livros
     */
    omit?: livrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosInclude<ExtArgs> | null
    /**
     * Filter, which livros to fetch.
     */
    where: livrosWhereUniqueInput
  }

  /**
   * livros findFirst
   */
  export type livrosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livros
     */
    select?: livrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livros
     */
    omit?: livrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosInclude<ExtArgs> | null
    /**
     * Filter, which livros to fetch.
     */
    where?: livrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livros to fetch.
     */
    orderBy?: livrosOrderByWithRelationInput | livrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for livros.
     */
    cursor?: livrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of livros.
     */
    distinct?: LivrosScalarFieldEnum | LivrosScalarFieldEnum[]
  }

  /**
   * livros findFirstOrThrow
   */
  export type livrosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livros
     */
    select?: livrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livros
     */
    omit?: livrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosInclude<ExtArgs> | null
    /**
     * Filter, which livros to fetch.
     */
    where?: livrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livros to fetch.
     */
    orderBy?: livrosOrderByWithRelationInput | livrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for livros.
     */
    cursor?: livrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of livros.
     */
    distinct?: LivrosScalarFieldEnum | LivrosScalarFieldEnum[]
  }

  /**
   * livros findMany
   */
  export type livrosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livros
     */
    select?: livrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livros
     */
    omit?: livrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosInclude<ExtArgs> | null
    /**
     * Filter, which livros to fetch.
     */
    where?: livrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livros to fetch.
     */
    orderBy?: livrosOrderByWithRelationInput | livrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing livros.
     */
    cursor?: livrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livros.
     */
    skip?: number
    distinct?: LivrosScalarFieldEnum | LivrosScalarFieldEnum[]
  }

  /**
   * livros create
   */
  export type livrosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livros
     */
    select?: livrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livros
     */
    omit?: livrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosInclude<ExtArgs> | null
    /**
     * The data needed to create a livros.
     */
    data: XOR<livrosCreateInput, livrosUncheckedCreateInput>
  }

  /**
   * livros createMany
   */
  export type livrosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many livros.
     */
    data: livrosCreateManyInput | livrosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * livros createManyAndReturn
   */
  export type livrosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livros
     */
    select?: livrosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the livros
     */
    omit?: livrosOmit<ExtArgs> | null
    /**
     * The data used to create many livros.
     */
    data: livrosCreateManyInput | livrosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * livros update
   */
  export type livrosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livros
     */
    select?: livrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livros
     */
    omit?: livrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosInclude<ExtArgs> | null
    /**
     * The data needed to update a livros.
     */
    data: XOR<livrosUpdateInput, livrosUncheckedUpdateInput>
    /**
     * Choose, which livros to update.
     */
    where: livrosWhereUniqueInput
  }

  /**
   * livros updateMany
   */
  export type livrosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update livros.
     */
    data: XOR<livrosUpdateManyMutationInput, livrosUncheckedUpdateManyInput>
    /**
     * Filter which livros to update
     */
    where?: livrosWhereInput
    /**
     * Limit how many livros to update.
     */
    limit?: number
  }

  /**
   * livros updateManyAndReturn
   */
  export type livrosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livros
     */
    select?: livrosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the livros
     */
    omit?: livrosOmit<ExtArgs> | null
    /**
     * The data used to update livros.
     */
    data: XOR<livrosUpdateManyMutationInput, livrosUncheckedUpdateManyInput>
    /**
     * Filter which livros to update
     */
    where?: livrosWhereInput
    /**
     * Limit how many livros to update.
     */
    limit?: number
  }

  /**
   * livros upsert
   */
  export type livrosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livros
     */
    select?: livrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livros
     */
    omit?: livrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosInclude<ExtArgs> | null
    /**
     * The filter to search for the livros to update in case it exists.
     */
    where: livrosWhereUniqueInput
    /**
     * In case the livros found by the `where` argument doesn't exist, create a new livros with this data.
     */
    create: XOR<livrosCreateInput, livrosUncheckedCreateInput>
    /**
     * In case the livros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<livrosUpdateInput, livrosUncheckedUpdateInput>
  }

  /**
   * livros delete
   */
  export type livrosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livros
     */
    select?: livrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livros
     */
    omit?: livrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosInclude<ExtArgs> | null
    /**
     * Filter which livros to delete.
     */
    where: livrosWhereUniqueInput
  }

  /**
   * livros deleteMany
   */
  export type livrosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which livros to delete
     */
    where?: livrosWhereInput
    /**
     * Limit how many livros to delete.
     */
    limit?: number
  }

  /**
   * livros.exemplares
   */
  export type livros$exemplaresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exemplares
     */
    select?: exemplaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exemplares
     */
    omit?: exemplaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exemplaresInclude<ExtArgs> | null
    where?: exemplaresWhereInput
    orderBy?: exemplaresOrderByWithRelationInput | exemplaresOrderByWithRelationInput[]
    cursor?: exemplaresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExemplaresScalarFieldEnum | ExemplaresScalarFieldEnum[]
  }

  /**
   * livros.reservas
   */
  export type livros$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    where?: reservasWhereInput
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    cursor?: reservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * livros.avaliacoes
   */
  export type livros$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    where?: avaliacoesWhereInput
    orderBy?: avaliacoesOrderByWithRelationInput | avaliacoesOrderByWithRelationInput[]
    cursor?: avaliacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacoesScalarFieldEnum | AvaliacoesScalarFieldEnum[]
  }

  /**
   * livros without action
   */
  export type livrosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livros
     */
    select?: livrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livros
     */
    omit?: livrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosInclude<ExtArgs> | null
  }


  /**
   * Model exemplares
   */

  export type AggregateExemplares = {
    _count: ExemplaresCountAggregateOutputType | null
    _avg: ExemplaresAvgAggregateOutputType | null
    _sum: ExemplaresSumAggregateOutputType | null
    _min: ExemplaresMinAggregateOutputType | null
    _max: ExemplaresMaxAggregateOutputType | null
  }

  export type ExemplaresAvgAggregateOutputType = {
    id_exemplar: number | null
    id_livro: number | null
  }

  export type ExemplaresSumAggregateOutputType = {
    id_exemplar: number | null
    id_livro: number | null
  }

  export type ExemplaresMinAggregateOutputType = {
    id_exemplar: number | null
    id_livro: number | null
    codigo_exemplar: string | null
    status: string | null
  }

  export type ExemplaresMaxAggregateOutputType = {
    id_exemplar: number | null
    id_livro: number | null
    codigo_exemplar: string | null
    status: string | null
  }

  export type ExemplaresCountAggregateOutputType = {
    id_exemplar: number
    id_livro: number
    codigo_exemplar: number
    status: number
    _all: number
  }


  export type ExemplaresAvgAggregateInputType = {
    id_exemplar?: true
    id_livro?: true
  }

  export type ExemplaresSumAggregateInputType = {
    id_exemplar?: true
    id_livro?: true
  }

  export type ExemplaresMinAggregateInputType = {
    id_exemplar?: true
    id_livro?: true
    codigo_exemplar?: true
    status?: true
  }

  export type ExemplaresMaxAggregateInputType = {
    id_exemplar?: true
    id_livro?: true
    codigo_exemplar?: true
    status?: true
  }

  export type ExemplaresCountAggregateInputType = {
    id_exemplar?: true
    id_livro?: true
    codigo_exemplar?: true
    status?: true
    _all?: true
  }

  export type ExemplaresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exemplares to aggregate.
     */
    where?: exemplaresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exemplares to fetch.
     */
    orderBy?: exemplaresOrderByWithRelationInput | exemplaresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exemplaresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exemplares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exemplares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exemplares
    **/
    _count?: true | ExemplaresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExemplaresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExemplaresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExemplaresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExemplaresMaxAggregateInputType
  }

  export type GetExemplaresAggregateType<T extends ExemplaresAggregateArgs> = {
        [P in keyof T & keyof AggregateExemplares]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExemplares[P]>
      : GetScalarType<T[P], AggregateExemplares[P]>
  }




  export type exemplaresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exemplaresWhereInput
    orderBy?: exemplaresOrderByWithAggregationInput | exemplaresOrderByWithAggregationInput[]
    by: ExemplaresScalarFieldEnum[] | ExemplaresScalarFieldEnum
    having?: exemplaresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExemplaresCountAggregateInputType | true
    _avg?: ExemplaresAvgAggregateInputType
    _sum?: ExemplaresSumAggregateInputType
    _min?: ExemplaresMinAggregateInputType
    _max?: ExemplaresMaxAggregateInputType
  }

  export type ExemplaresGroupByOutputType = {
    id_exemplar: number
    id_livro: number
    codigo_exemplar: string
    status: string
    _count: ExemplaresCountAggregateOutputType | null
    _avg: ExemplaresAvgAggregateOutputType | null
    _sum: ExemplaresSumAggregateOutputType | null
    _min: ExemplaresMinAggregateOutputType | null
    _max: ExemplaresMaxAggregateOutputType | null
  }

  type GetExemplaresGroupByPayload<T extends exemplaresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExemplaresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExemplaresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExemplaresGroupByOutputType[P]>
            : GetScalarType<T[P], ExemplaresGroupByOutputType[P]>
        }
      >
    >


  export type exemplaresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_exemplar?: boolean
    id_livro?: boolean
    codigo_exemplar?: boolean
    status?: boolean
    livro?: boolean | livrosDefaultArgs<ExtArgs>
    emprestimos?: boolean | exemplares$emprestimosArgs<ExtArgs>
    historico?: boolean | exemplares$historicoArgs<ExtArgs>
    _count?: boolean | ExemplaresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exemplares"]>

  export type exemplaresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_exemplar?: boolean
    id_livro?: boolean
    codigo_exemplar?: boolean
    status?: boolean
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exemplares"]>

  export type exemplaresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_exemplar?: boolean
    id_livro?: boolean
    codigo_exemplar?: boolean
    status?: boolean
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exemplares"]>

  export type exemplaresSelectScalar = {
    id_exemplar?: boolean
    id_livro?: boolean
    codigo_exemplar?: boolean
    status?: boolean
  }

  export type exemplaresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_exemplar" | "id_livro" | "codigo_exemplar" | "status", ExtArgs["result"]["exemplares"]>
  export type exemplaresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | livrosDefaultArgs<ExtArgs>
    emprestimos?: boolean | exemplares$emprestimosArgs<ExtArgs>
    historico?: boolean | exemplares$historicoArgs<ExtArgs>
    _count?: boolean | ExemplaresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type exemplaresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }
  export type exemplaresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }

  export type $exemplaresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exemplares"
    objects: {
      livro: Prisma.$livrosPayload<ExtArgs>
      emprestimos: Prisma.$emprestimosPayload<ExtArgs>[]
      historico: Prisma.$historicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_exemplar: number
      id_livro: number
      codigo_exemplar: string
      status: string
    }, ExtArgs["result"]["exemplares"]>
    composites: {}
  }

  type exemplaresGetPayload<S extends boolean | null | undefined | exemplaresDefaultArgs> = $Result.GetResult<Prisma.$exemplaresPayload, S>

  type exemplaresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exemplaresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExemplaresCountAggregateInputType | true
    }

  export interface exemplaresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exemplares'], meta: { name: 'exemplares' } }
    /**
     * Find zero or one Exemplares that matches the filter.
     * @param {exemplaresFindUniqueArgs} args - Arguments to find a Exemplares
     * @example
     * // Get one Exemplares
     * const exemplares = await prisma.exemplares.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exemplaresFindUniqueArgs>(args: SelectSubset<T, exemplaresFindUniqueArgs<ExtArgs>>): Prisma__exemplaresClient<$Result.GetResult<Prisma.$exemplaresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exemplares that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exemplaresFindUniqueOrThrowArgs} args - Arguments to find a Exemplares
     * @example
     * // Get one Exemplares
     * const exemplares = await prisma.exemplares.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exemplaresFindUniqueOrThrowArgs>(args: SelectSubset<T, exemplaresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exemplaresClient<$Result.GetResult<Prisma.$exemplaresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exemplares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exemplaresFindFirstArgs} args - Arguments to find a Exemplares
     * @example
     * // Get one Exemplares
     * const exemplares = await prisma.exemplares.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exemplaresFindFirstArgs>(args?: SelectSubset<T, exemplaresFindFirstArgs<ExtArgs>>): Prisma__exemplaresClient<$Result.GetResult<Prisma.$exemplaresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exemplares that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exemplaresFindFirstOrThrowArgs} args - Arguments to find a Exemplares
     * @example
     * // Get one Exemplares
     * const exemplares = await prisma.exemplares.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exemplaresFindFirstOrThrowArgs>(args?: SelectSubset<T, exemplaresFindFirstOrThrowArgs<ExtArgs>>): Prisma__exemplaresClient<$Result.GetResult<Prisma.$exemplaresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exemplares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exemplaresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exemplares
     * const exemplares = await prisma.exemplares.findMany()
     * 
     * // Get first 10 Exemplares
     * const exemplares = await prisma.exemplares.findMany({ take: 10 })
     * 
     * // Only select the `id_exemplar`
     * const exemplaresWithId_exemplarOnly = await prisma.exemplares.findMany({ select: { id_exemplar: true } })
     * 
     */
    findMany<T extends exemplaresFindManyArgs>(args?: SelectSubset<T, exemplaresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exemplaresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exemplares.
     * @param {exemplaresCreateArgs} args - Arguments to create a Exemplares.
     * @example
     * // Create one Exemplares
     * const Exemplares = await prisma.exemplares.create({
     *   data: {
     *     // ... data to create a Exemplares
     *   }
     * })
     * 
     */
    create<T extends exemplaresCreateArgs>(args: SelectSubset<T, exemplaresCreateArgs<ExtArgs>>): Prisma__exemplaresClient<$Result.GetResult<Prisma.$exemplaresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exemplares.
     * @param {exemplaresCreateManyArgs} args - Arguments to create many Exemplares.
     * @example
     * // Create many Exemplares
     * const exemplares = await prisma.exemplares.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exemplaresCreateManyArgs>(args?: SelectSubset<T, exemplaresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exemplares and returns the data saved in the database.
     * @param {exemplaresCreateManyAndReturnArgs} args - Arguments to create many Exemplares.
     * @example
     * // Create many Exemplares
     * const exemplares = await prisma.exemplares.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exemplares and only return the `id_exemplar`
     * const exemplaresWithId_exemplarOnly = await prisma.exemplares.createManyAndReturn({
     *   select: { id_exemplar: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends exemplaresCreateManyAndReturnArgs>(args?: SelectSubset<T, exemplaresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exemplaresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exemplares.
     * @param {exemplaresDeleteArgs} args - Arguments to delete one Exemplares.
     * @example
     * // Delete one Exemplares
     * const Exemplares = await prisma.exemplares.delete({
     *   where: {
     *     // ... filter to delete one Exemplares
     *   }
     * })
     * 
     */
    delete<T extends exemplaresDeleteArgs>(args: SelectSubset<T, exemplaresDeleteArgs<ExtArgs>>): Prisma__exemplaresClient<$Result.GetResult<Prisma.$exemplaresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exemplares.
     * @param {exemplaresUpdateArgs} args - Arguments to update one Exemplares.
     * @example
     * // Update one Exemplares
     * const exemplares = await prisma.exemplares.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exemplaresUpdateArgs>(args: SelectSubset<T, exemplaresUpdateArgs<ExtArgs>>): Prisma__exemplaresClient<$Result.GetResult<Prisma.$exemplaresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exemplares.
     * @param {exemplaresDeleteManyArgs} args - Arguments to filter Exemplares to delete.
     * @example
     * // Delete a few Exemplares
     * const { count } = await prisma.exemplares.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exemplaresDeleteManyArgs>(args?: SelectSubset<T, exemplaresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exemplares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exemplaresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exemplares
     * const exemplares = await prisma.exemplares.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exemplaresUpdateManyArgs>(args: SelectSubset<T, exemplaresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exemplares and returns the data updated in the database.
     * @param {exemplaresUpdateManyAndReturnArgs} args - Arguments to update many Exemplares.
     * @example
     * // Update many Exemplares
     * const exemplares = await prisma.exemplares.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exemplares and only return the `id_exemplar`
     * const exemplaresWithId_exemplarOnly = await prisma.exemplares.updateManyAndReturn({
     *   select: { id_exemplar: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends exemplaresUpdateManyAndReturnArgs>(args: SelectSubset<T, exemplaresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exemplaresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exemplares.
     * @param {exemplaresUpsertArgs} args - Arguments to update or create a Exemplares.
     * @example
     * // Update or create a Exemplares
     * const exemplares = await prisma.exemplares.upsert({
     *   create: {
     *     // ... data to create a Exemplares
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exemplares we want to update
     *   }
     * })
     */
    upsert<T extends exemplaresUpsertArgs>(args: SelectSubset<T, exemplaresUpsertArgs<ExtArgs>>): Prisma__exemplaresClient<$Result.GetResult<Prisma.$exemplaresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exemplares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exemplaresCountArgs} args - Arguments to filter Exemplares to count.
     * @example
     * // Count the number of Exemplares
     * const count = await prisma.exemplares.count({
     *   where: {
     *     // ... the filter for the Exemplares we want to count
     *   }
     * })
    **/
    count<T extends exemplaresCountArgs>(
      args?: Subset<T, exemplaresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExemplaresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exemplares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExemplaresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExemplaresAggregateArgs>(args: Subset<T, ExemplaresAggregateArgs>): Prisma.PrismaPromise<GetExemplaresAggregateType<T>>

    /**
     * Group by Exemplares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exemplaresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends exemplaresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exemplaresGroupByArgs['orderBy'] }
        : { orderBy?: exemplaresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, exemplaresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExemplaresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exemplares model
   */
  readonly fields: exemplaresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exemplares.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exemplaresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livro<T extends livrosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, livrosDefaultArgs<ExtArgs>>): Prisma__livrosClient<$Result.GetResult<Prisma.$livrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emprestimos<T extends exemplares$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, exemplares$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emprestimosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historico<T extends exemplares$historicoArgs<ExtArgs> = {}>(args?: Subset<T, exemplares$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exemplares model
   */
  interface exemplaresFieldRefs {
    readonly id_exemplar: FieldRef<"exemplares", 'Int'>
    readonly id_livro: FieldRef<"exemplares", 'Int'>
    readonly codigo_exemplar: FieldRef<"exemplares", 'String'>
    readonly status: FieldRef<"exemplares", 'String'>
  }
    

  // Custom InputTypes
  /**
   * exemplares findUnique
   */
  export type exemplaresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exemplares
     */
    select?: exemplaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exemplares
     */
    omit?: exemplaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exemplaresInclude<ExtArgs> | null
    /**
     * Filter, which exemplares to fetch.
     */
    where: exemplaresWhereUniqueInput
  }

  /**
   * exemplares findUniqueOrThrow
   */
  export type exemplaresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exemplares
     */
    select?: exemplaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exemplares
     */
    omit?: exemplaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exemplaresInclude<ExtArgs> | null
    /**
     * Filter, which exemplares to fetch.
     */
    where: exemplaresWhereUniqueInput
  }

  /**
   * exemplares findFirst
   */
  export type exemplaresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exemplares
     */
    select?: exemplaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exemplares
     */
    omit?: exemplaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exemplaresInclude<ExtArgs> | null
    /**
     * Filter, which exemplares to fetch.
     */
    where?: exemplaresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exemplares to fetch.
     */
    orderBy?: exemplaresOrderByWithRelationInput | exemplaresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exemplares.
     */
    cursor?: exemplaresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exemplares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exemplares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exemplares.
     */
    distinct?: ExemplaresScalarFieldEnum | ExemplaresScalarFieldEnum[]
  }

  /**
   * exemplares findFirstOrThrow
   */
  export type exemplaresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exemplares
     */
    select?: exemplaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exemplares
     */
    omit?: exemplaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exemplaresInclude<ExtArgs> | null
    /**
     * Filter, which exemplares to fetch.
     */
    where?: exemplaresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exemplares to fetch.
     */
    orderBy?: exemplaresOrderByWithRelationInput | exemplaresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exemplares.
     */
    cursor?: exemplaresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exemplares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exemplares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exemplares.
     */
    distinct?: ExemplaresScalarFieldEnum | ExemplaresScalarFieldEnum[]
  }

  /**
   * exemplares findMany
   */
  export type exemplaresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exemplares
     */
    select?: exemplaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exemplares
     */
    omit?: exemplaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exemplaresInclude<ExtArgs> | null
    /**
     * Filter, which exemplares to fetch.
     */
    where?: exemplaresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exemplares to fetch.
     */
    orderBy?: exemplaresOrderByWithRelationInput | exemplaresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exemplares.
     */
    cursor?: exemplaresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exemplares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exemplares.
     */
    skip?: number
    distinct?: ExemplaresScalarFieldEnum | ExemplaresScalarFieldEnum[]
  }

  /**
   * exemplares create
   */
  export type exemplaresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exemplares
     */
    select?: exemplaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exemplares
     */
    omit?: exemplaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exemplaresInclude<ExtArgs> | null
    /**
     * The data needed to create a exemplares.
     */
    data: XOR<exemplaresCreateInput, exemplaresUncheckedCreateInput>
  }

  /**
   * exemplares createMany
   */
  export type exemplaresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exemplares.
     */
    data: exemplaresCreateManyInput | exemplaresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exemplares createManyAndReturn
   */
  export type exemplaresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exemplares
     */
    select?: exemplaresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exemplares
     */
    omit?: exemplaresOmit<ExtArgs> | null
    /**
     * The data used to create many exemplares.
     */
    data: exemplaresCreateManyInput | exemplaresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exemplaresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * exemplares update
   */
  export type exemplaresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exemplares
     */
    select?: exemplaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exemplares
     */
    omit?: exemplaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exemplaresInclude<ExtArgs> | null
    /**
     * The data needed to update a exemplares.
     */
    data: XOR<exemplaresUpdateInput, exemplaresUncheckedUpdateInput>
    /**
     * Choose, which exemplares to update.
     */
    where: exemplaresWhereUniqueInput
  }

  /**
   * exemplares updateMany
   */
  export type exemplaresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exemplares.
     */
    data: XOR<exemplaresUpdateManyMutationInput, exemplaresUncheckedUpdateManyInput>
    /**
     * Filter which exemplares to update
     */
    where?: exemplaresWhereInput
    /**
     * Limit how many exemplares to update.
     */
    limit?: number
  }

  /**
   * exemplares updateManyAndReturn
   */
  export type exemplaresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exemplares
     */
    select?: exemplaresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exemplares
     */
    omit?: exemplaresOmit<ExtArgs> | null
    /**
     * The data used to update exemplares.
     */
    data: XOR<exemplaresUpdateManyMutationInput, exemplaresUncheckedUpdateManyInput>
    /**
     * Filter which exemplares to update
     */
    where?: exemplaresWhereInput
    /**
     * Limit how many exemplares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exemplaresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * exemplares upsert
   */
  export type exemplaresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exemplares
     */
    select?: exemplaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exemplares
     */
    omit?: exemplaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exemplaresInclude<ExtArgs> | null
    /**
     * The filter to search for the exemplares to update in case it exists.
     */
    where: exemplaresWhereUniqueInput
    /**
     * In case the exemplares found by the `where` argument doesn't exist, create a new exemplares with this data.
     */
    create: XOR<exemplaresCreateInput, exemplaresUncheckedCreateInput>
    /**
     * In case the exemplares was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exemplaresUpdateInput, exemplaresUncheckedUpdateInput>
  }

  /**
   * exemplares delete
   */
  export type exemplaresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exemplares
     */
    select?: exemplaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exemplares
     */
    omit?: exemplaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exemplaresInclude<ExtArgs> | null
    /**
     * Filter which exemplares to delete.
     */
    where: exemplaresWhereUniqueInput
  }

  /**
   * exemplares deleteMany
   */
  export type exemplaresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exemplares to delete
     */
    where?: exemplaresWhereInput
    /**
     * Limit how many exemplares to delete.
     */
    limit?: number
  }

  /**
   * exemplares.emprestimos
   */
  export type exemplares$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimos
     */
    select?: emprestimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimos
     */
    omit?: emprestimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimosInclude<ExtArgs> | null
    where?: emprestimosWhereInput
    orderBy?: emprestimosOrderByWithRelationInput | emprestimosOrderByWithRelationInput[]
    cursor?: emprestimosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestimosScalarFieldEnum | EmprestimosScalarFieldEnum[]
  }

  /**
   * exemplares.historico
   */
  export type exemplares$historicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico
     */
    select?: historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico
     */
    omit?: historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoInclude<ExtArgs> | null
    where?: historicoWhereInput
    orderBy?: historicoOrderByWithRelationInput | historicoOrderByWithRelationInput[]
    cursor?: historicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * exemplares without action
   */
  export type exemplaresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exemplares
     */
    select?: exemplaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exemplares
     */
    omit?: exemplaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exemplaresInclude<ExtArgs> | null
  }


  /**
   * Model emprestimos
   */

  export type AggregateEmprestimos = {
    _count: EmprestimosCountAggregateOutputType | null
    _avg: EmprestimosAvgAggregateOutputType | null
    _sum: EmprestimosSumAggregateOutputType | null
    _min: EmprestimosMinAggregateOutputType | null
    _max: EmprestimosMaxAggregateOutputType | null
  }

  export type EmprestimosAvgAggregateOutputType = {
    id_emprestimo: number | null
    id_usuario: number | null
    id_exemplar: number | null
  }

  export type EmprestimosSumAggregateOutputType = {
    id_emprestimo: number | null
    id_usuario: number | null
    id_exemplar: number | null
  }

  export type EmprestimosMinAggregateOutputType = {
    id_emprestimo: number | null
    id_usuario: number | null
    id_exemplar: number | null
    data_retirada: Date | null
    data_prevista_devolucao: Date | null
    data_devolucao: Date | null
    renovado: boolean | null
  }

  export type EmprestimosMaxAggregateOutputType = {
    id_emprestimo: number | null
    id_usuario: number | null
    id_exemplar: number | null
    data_retirada: Date | null
    data_prevista_devolucao: Date | null
    data_devolucao: Date | null
    renovado: boolean | null
  }

  export type EmprestimosCountAggregateOutputType = {
    id_emprestimo: number
    id_usuario: number
    id_exemplar: number
    data_retirada: number
    data_prevista_devolucao: number
    data_devolucao: number
    renovado: number
    _all: number
  }


  export type EmprestimosAvgAggregateInputType = {
    id_emprestimo?: true
    id_usuario?: true
    id_exemplar?: true
  }

  export type EmprestimosSumAggregateInputType = {
    id_emprestimo?: true
    id_usuario?: true
    id_exemplar?: true
  }

  export type EmprestimosMinAggregateInputType = {
    id_emprestimo?: true
    id_usuario?: true
    id_exemplar?: true
    data_retirada?: true
    data_prevista_devolucao?: true
    data_devolucao?: true
    renovado?: true
  }

  export type EmprestimosMaxAggregateInputType = {
    id_emprestimo?: true
    id_usuario?: true
    id_exemplar?: true
    data_retirada?: true
    data_prevista_devolucao?: true
    data_devolucao?: true
    renovado?: true
  }

  export type EmprestimosCountAggregateInputType = {
    id_emprestimo?: true
    id_usuario?: true
    id_exemplar?: true
    data_retirada?: true
    data_prevista_devolucao?: true
    data_devolucao?: true
    renovado?: true
    _all?: true
  }

  export type EmprestimosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which emprestimos to aggregate.
     */
    where?: emprestimosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emprestimos to fetch.
     */
    orderBy?: emprestimosOrderByWithRelationInput | emprestimosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: emprestimosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned emprestimos
    **/
    _count?: true | EmprestimosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmprestimosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmprestimosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmprestimosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmprestimosMaxAggregateInputType
  }

  export type GetEmprestimosAggregateType<T extends EmprestimosAggregateArgs> = {
        [P in keyof T & keyof AggregateEmprestimos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmprestimos[P]>
      : GetScalarType<T[P], AggregateEmprestimos[P]>
  }




  export type emprestimosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emprestimosWhereInput
    orderBy?: emprestimosOrderByWithAggregationInput | emprestimosOrderByWithAggregationInput[]
    by: EmprestimosScalarFieldEnum[] | EmprestimosScalarFieldEnum
    having?: emprestimosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmprestimosCountAggregateInputType | true
    _avg?: EmprestimosAvgAggregateInputType
    _sum?: EmprestimosSumAggregateInputType
    _min?: EmprestimosMinAggregateInputType
    _max?: EmprestimosMaxAggregateInputType
  }

  export type EmprestimosGroupByOutputType = {
    id_emprestimo: number
    id_usuario: number
    id_exemplar: number
    data_retirada: Date
    data_prevista_devolucao: Date
    data_devolucao: Date
    renovado: boolean
    _count: EmprestimosCountAggregateOutputType | null
    _avg: EmprestimosAvgAggregateOutputType | null
    _sum: EmprestimosSumAggregateOutputType | null
    _min: EmprestimosMinAggregateOutputType | null
    _max: EmprestimosMaxAggregateOutputType | null
  }

  type GetEmprestimosGroupByPayload<T extends emprestimosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmprestimosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmprestimosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmprestimosGroupByOutputType[P]>
            : GetScalarType<T[P], EmprestimosGroupByOutputType[P]>
        }
      >
    >


  export type emprestimosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_emprestimo?: boolean
    id_usuario?: boolean
    id_exemplar?: boolean
    data_retirada?: boolean
    data_prevista_devolucao?: boolean
    data_devolucao?: boolean
    renovado?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    exemplar?: boolean | exemplaresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimos"]>

  export type emprestimosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_emprestimo?: boolean
    id_usuario?: boolean
    id_exemplar?: boolean
    data_retirada?: boolean
    data_prevista_devolucao?: boolean
    data_devolucao?: boolean
    renovado?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    exemplar?: boolean | exemplaresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimos"]>

  export type emprestimosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_emprestimo?: boolean
    id_usuario?: boolean
    id_exemplar?: boolean
    data_retirada?: boolean
    data_prevista_devolucao?: boolean
    data_devolucao?: boolean
    renovado?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    exemplar?: boolean | exemplaresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimos"]>

  export type emprestimosSelectScalar = {
    id_emprestimo?: boolean
    id_usuario?: boolean
    id_exemplar?: boolean
    data_retirada?: boolean
    data_prevista_devolucao?: boolean
    data_devolucao?: boolean
    renovado?: boolean
  }

  export type emprestimosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_emprestimo" | "id_usuario" | "id_exemplar" | "data_retirada" | "data_prevista_devolucao" | "data_devolucao" | "renovado", ExtArgs["result"]["emprestimos"]>
  export type emprestimosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    exemplar?: boolean | exemplaresDefaultArgs<ExtArgs>
  }
  export type emprestimosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    exemplar?: boolean | exemplaresDefaultArgs<ExtArgs>
  }
  export type emprestimosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    exemplar?: boolean | exemplaresDefaultArgs<ExtArgs>
  }

  export type $emprestimosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "emprestimos"
    objects: {
      usuario: Prisma.$usuariosPayload<ExtArgs>
      exemplar: Prisma.$exemplaresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_emprestimo: number
      id_usuario: number
      id_exemplar: number
      data_retirada: Date
      data_prevista_devolucao: Date
      data_devolucao: Date
      renovado: boolean
    }, ExtArgs["result"]["emprestimos"]>
    composites: {}
  }

  type emprestimosGetPayload<S extends boolean | null | undefined | emprestimosDefaultArgs> = $Result.GetResult<Prisma.$emprestimosPayload, S>

  type emprestimosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<emprestimosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmprestimosCountAggregateInputType | true
    }

  export interface emprestimosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['emprestimos'], meta: { name: 'emprestimos' } }
    /**
     * Find zero or one Emprestimos that matches the filter.
     * @param {emprestimosFindUniqueArgs} args - Arguments to find a Emprestimos
     * @example
     * // Get one Emprestimos
     * const emprestimos = await prisma.emprestimos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends emprestimosFindUniqueArgs>(args: SelectSubset<T, emprestimosFindUniqueArgs<ExtArgs>>): Prisma__emprestimosClient<$Result.GetResult<Prisma.$emprestimosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emprestimos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {emprestimosFindUniqueOrThrowArgs} args - Arguments to find a Emprestimos
     * @example
     * // Get one Emprestimos
     * const emprestimos = await prisma.emprestimos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends emprestimosFindUniqueOrThrowArgs>(args: SelectSubset<T, emprestimosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__emprestimosClient<$Result.GetResult<Prisma.$emprestimosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprestimos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emprestimosFindFirstArgs} args - Arguments to find a Emprestimos
     * @example
     * // Get one Emprestimos
     * const emprestimos = await prisma.emprestimos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends emprestimosFindFirstArgs>(args?: SelectSubset<T, emprestimosFindFirstArgs<ExtArgs>>): Prisma__emprestimosClient<$Result.GetResult<Prisma.$emprestimosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprestimos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emprestimosFindFirstOrThrowArgs} args - Arguments to find a Emprestimos
     * @example
     * // Get one Emprestimos
     * const emprestimos = await prisma.emprestimos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends emprestimosFindFirstOrThrowArgs>(args?: SelectSubset<T, emprestimosFindFirstOrThrowArgs<ExtArgs>>): Prisma__emprestimosClient<$Result.GetResult<Prisma.$emprestimosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emprestimos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emprestimosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emprestimos
     * const emprestimos = await prisma.emprestimos.findMany()
     * 
     * // Get first 10 Emprestimos
     * const emprestimos = await prisma.emprestimos.findMany({ take: 10 })
     * 
     * // Only select the `id_emprestimo`
     * const emprestimosWithId_emprestimoOnly = await prisma.emprestimos.findMany({ select: { id_emprestimo: true } })
     * 
     */
    findMany<T extends emprestimosFindManyArgs>(args?: SelectSubset<T, emprestimosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emprestimosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emprestimos.
     * @param {emprestimosCreateArgs} args - Arguments to create a Emprestimos.
     * @example
     * // Create one Emprestimos
     * const Emprestimos = await prisma.emprestimos.create({
     *   data: {
     *     // ... data to create a Emprestimos
     *   }
     * })
     * 
     */
    create<T extends emprestimosCreateArgs>(args: SelectSubset<T, emprestimosCreateArgs<ExtArgs>>): Prisma__emprestimosClient<$Result.GetResult<Prisma.$emprestimosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emprestimos.
     * @param {emprestimosCreateManyArgs} args - Arguments to create many Emprestimos.
     * @example
     * // Create many Emprestimos
     * const emprestimos = await prisma.emprestimos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends emprestimosCreateManyArgs>(args?: SelectSubset<T, emprestimosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emprestimos and returns the data saved in the database.
     * @param {emprestimosCreateManyAndReturnArgs} args - Arguments to create many Emprestimos.
     * @example
     * // Create many Emprestimos
     * const emprestimos = await prisma.emprestimos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emprestimos and only return the `id_emprestimo`
     * const emprestimosWithId_emprestimoOnly = await prisma.emprestimos.createManyAndReturn({
     *   select: { id_emprestimo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends emprestimosCreateManyAndReturnArgs>(args?: SelectSubset<T, emprestimosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emprestimosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emprestimos.
     * @param {emprestimosDeleteArgs} args - Arguments to delete one Emprestimos.
     * @example
     * // Delete one Emprestimos
     * const Emprestimos = await prisma.emprestimos.delete({
     *   where: {
     *     // ... filter to delete one Emprestimos
     *   }
     * })
     * 
     */
    delete<T extends emprestimosDeleteArgs>(args: SelectSubset<T, emprestimosDeleteArgs<ExtArgs>>): Prisma__emprestimosClient<$Result.GetResult<Prisma.$emprestimosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emprestimos.
     * @param {emprestimosUpdateArgs} args - Arguments to update one Emprestimos.
     * @example
     * // Update one Emprestimos
     * const emprestimos = await prisma.emprestimos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends emprestimosUpdateArgs>(args: SelectSubset<T, emprestimosUpdateArgs<ExtArgs>>): Prisma__emprestimosClient<$Result.GetResult<Prisma.$emprestimosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emprestimos.
     * @param {emprestimosDeleteManyArgs} args - Arguments to filter Emprestimos to delete.
     * @example
     * // Delete a few Emprestimos
     * const { count } = await prisma.emprestimos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends emprestimosDeleteManyArgs>(args?: SelectSubset<T, emprestimosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emprestimosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emprestimos
     * const emprestimos = await prisma.emprestimos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends emprestimosUpdateManyArgs>(args: SelectSubset<T, emprestimosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestimos and returns the data updated in the database.
     * @param {emprestimosUpdateManyAndReturnArgs} args - Arguments to update many Emprestimos.
     * @example
     * // Update many Emprestimos
     * const emprestimos = await prisma.emprestimos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emprestimos and only return the `id_emprestimo`
     * const emprestimosWithId_emprestimoOnly = await prisma.emprestimos.updateManyAndReturn({
     *   select: { id_emprestimo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends emprestimosUpdateManyAndReturnArgs>(args: SelectSubset<T, emprestimosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emprestimosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emprestimos.
     * @param {emprestimosUpsertArgs} args - Arguments to update or create a Emprestimos.
     * @example
     * // Update or create a Emprestimos
     * const emprestimos = await prisma.emprestimos.upsert({
     *   create: {
     *     // ... data to create a Emprestimos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emprestimos we want to update
     *   }
     * })
     */
    upsert<T extends emprestimosUpsertArgs>(args: SelectSubset<T, emprestimosUpsertArgs<ExtArgs>>): Prisma__emprestimosClient<$Result.GetResult<Prisma.$emprestimosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emprestimosCountArgs} args - Arguments to filter Emprestimos to count.
     * @example
     * // Count the number of Emprestimos
     * const count = await prisma.emprestimos.count({
     *   where: {
     *     // ... the filter for the Emprestimos we want to count
     *   }
     * })
    **/
    count<T extends emprestimosCountArgs>(
      args?: Subset<T, emprestimosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmprestimosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmprestimosAggregateArgs>(args: Subset<T, EmprestimosAggregateArgs>): Prisma.PrismaPromise<GetEmprestimosAggregateType<T>>

    /**
     * Group by Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emprestimosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends emprestimosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: emprestimosGroupByArgs['orderBy'] }
        : { orderBy?: emprestimosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, emprestimosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmprestimosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the emprestimos model
   */
  readonly fields: emprestimosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for emprestimos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__emprestimosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exemplar<T extends exemplaresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, exemplaresDefaultArgs<ExtArgs>>): Prisma__exemplaresClient<$Result.GetResult<Prisma.$exemplaresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the emprestimos model
   */
  interface emprestimosFieldRefs {
    readonly id_emprestimo: FieldRef<"emprestimos", 'Int'>
    readonly id_usuario: FieldRef<"emprestimos", 'Int'>
    readonly id_exemplar: FieldRef<"emprestimos", 'Int'>
    readonly data_retirada: FieldRef<"emprestimos", 'DateTime'>
    readonly data_prevista_devolucao: FieldRef<"emprestimos", 'DateTime'>
    readonly data_devolucao: FieldRef<"emprestimos", 'DateTime'>
    readonly renovado: FieldRef<"emprestimos", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * emprestimos findUnique
   */
  export type emprestimosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimos
     */
    select?: emprestimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimos
     */
    omit?: emprestimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimosInclude<ExtArgs> | null
    /**
     * Filter, which emprestimos to fetch.
     */
    where: emprestimosWhereUniqueInput
  }

  /**
   * emprestimos findUniqueOrThrow
   */
  export type emprestimosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimos
     */
    select?: emprestimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimos
     */
    omit?: emprestimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimosInclude<ExtArgs> | null
    /**
     * Filter, which emprestimos to fetch.
     */
    where: emprestimosWhereUniqueInput
  }

  /**
   * emprestimos findFirst
   */
  export type emprestimosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimos
     */
    select?: emprestimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimos
     */
    omit?: emprestimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimosInclude<ExtArgs> | null
    /**
     * Filter, which emprestimos to fetch.
     */
    where?: emprestimosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emprestimos to fetch.
     */
    orderBy?: emprestimosOrderByWithRelationInput | emprestimosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emprestimos.
     */
    cursor?: emprestimosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emprestimos.
     */
    distinct?: EmprestimosScalarFieldEnum | EmprestimosScalarFieldEnum[]
  }

  /**
   * emprestimos findFirstOrThrow
   */
  export type emprestimosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimos
     */
    select?: emprestimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimos
     */
    omit?: emprestimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimosInclude<ExtArgs> | null
    /**
     * Filter, which emprestimos to fetch.
     */
    where?: emprestimosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emprestimos to fetch.
     */
    orderBy?: emprestimosOrderByWithRelationInput | emprestimosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emprestimos.
     */
    cursor?: emprestimosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emprestimos.
     */
    distinct?: EmprestimosScalarFieldEnum | EmprestimosScalarFieldEnum[]
  }

  /**
   * emprestimos findMany
   */
  export type emprestimosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimos
     */
    select?: emprestimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimos
     */
    omit?: emprestimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimosInclude<ExtArgs> | null
    /**
     * Filter, which emprestimos to fetch.
     */
    where?: emprestimosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emprestimos to fetch.
     */
    orderBy?: emprestimosOrderByWithRelationInput | emprestimosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing emprestimos.
     */
    cursor?: emprestimosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emprestimos.
     */
    skip?: number
    distinct?: EmprestimosScalarFieldEnum | EmprestimosScalarFieldEnum[]
  }

  /**
   * emprestimos create
   */
  export type emprestimosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimos
     */
    select?: emprestimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimos
     */
    omit?: emprestimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimosInclude<ExtArgs> | null
    /**
     * The data needed to create a emprestimos.
     */
    data: XOR<emprestimosCreateInput, emprestimosUncheckedCreateInput>
  }

  /**
   * emprestimos createMany
   */
  export type emprestimosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many emprestimos.
     */
    data: emprestimosCreateManyInput | emprestimosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * emprestimos createManyAndReturn
   */
  export type emprestimosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimos
     */
    select?: emprestimosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimos
     */
    omit?: emprestimosOmit<ExtArgs> | null
    /**
     * The data used to create many emprestimos.
     */
    data: emprestimosCreateManyInput | emprestimosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * emprestimos update
   */
  export type emprestimosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimos
     */
    select?: emprestimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimos
     */
    omit?: emprestimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimosInclude<ExtArgs> | null
    /**
     * The data needed to update a emprestimos.
     */
    data: XOR<emprestimosUpdateInput, emprestimosUncheckedUpdateInput>
    /**
     * Choose, which emprestimos to update.
     */
    where: emprestimosWhereUniqueInput
  }

  /**
   * emprestimos updateMany
   */
  export type emprestimosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update emprestimos.
     */
    data: XOR<emprestimosUpdateManyMutationInput, emprestimosUncheckedUpdateManyInput>
    /**
     * Filter which emprestimos to update
     */
    where?: emprestimosWhereInput
    /**
     * Limit how many emprestimos to update.
     */
    limit?: number
  }

  /**
   * emprestimos updateManyAndReturn
   */
  export type emprestimosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimos
     */
    select?: emprestimosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimos
     */
    omit?: emprestimosOmit<ExtArgs> | null
    /**
     * The data used to update emprestimos.
     */
    data: XOR<emprestimosUpdateManyMutationInput, emprestimosUncheckedUpdateManyInput>
    /**
     * Filter which emprestimos to update
     */
    where?: emprestimosWhereInput
    /**
     * Limit how many emprestimos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * emprestimos upsert
   */
  export type emprestimosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimos
     */
    select?: emprestimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimos
     */
    omit?: emprestimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimosInclude<ExtArgs> | null
    /**
     * The filter to search for the emprestimos to update in case it exists.
     */
    where: emprestimosWhereUniqueInput
    /**
     * In case the emprestimos found by the `where` argument doesn't exist, create a new emprestimos with this data.
     */
    create: XOR<emprestimosCreateInput, emprestimosUncheckedCreateInput>
    /**
     * In case the emprestimos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<emprestimosUpdateInput, emprestimosUncheckedUpdateInput>
  }

  /**
   * emprestimos delete
   */
  export type emprestimosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimos
     */
    select?: emprestimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimos
     */
    omit?: emprestimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimosInclude<ExtArgs> | null
    /**
     * Filter which emprestimos to delete.
     */
    where: emprestimosWhereUniqueInput
  }

  /**
   * emprestimos deleteMany
   */
  export type emprestimosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which emprestimos to delete
     */
    where?: emprestimosWhereInput
    /**
     * Limit how many emprestimos to delete.
     */
    limit?: number
  }

  /**
   * emprestimos without action
   */
  export type emprestimosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimos
     */
    select?: emprestimosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimos
     */
    omit?: emprestimosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimosInclude<ExtArgs> | null
  }


  /**
   * Model reservas
   */

  export type AggregateReservas = {
    _count: ReservasCountAggregateOutputType | null
    _avg: ReservasAvgAggregateOutputType | null
    _sum: ReservasSumAggregateOutputType | null
    _min: ReservasMinAggregateOutputType | null
    _max: ReservasMaxAggregateOutputType | null
  }

  export type ReservasAvgAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    id_livro: number | null
    posicao_fila: number | null
  }

  export type ReservasSumAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    id_livro: number | null
    posicao_fila: number | null
  }

  export type ReservasMinAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    id_livro: number | null
    data_reserva: Date | null
    status: string | null
    posicao_fila: number | null
  }

  export type ReservasMaxAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    id_livro: number | null
    data_reserva: Date | null
    status: string | null
    posicao_fila: number | null
  }

  export type ReservasCountAggregateOutputType = {
    id_reserva: number
    id_usuario: number
    id_livro: number
    data_reserva: number
    status: number
    posicao_fila: number
    _all: number
  }


  export type ReservasAvgAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_livro?: true
    posicao_fila?: true
  }

  export type ReservasSumAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_livro?: true
    posicao_fila?: true
  }

  export type ReservasMinAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_livro?: true
    data_reserva?: true
    status?: true
    posicao_fila?: true
  }

  export type ReservasMaxAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_livro?: true
    data_reserva?: true
    status?: true
    posicao_fila?: true
  }

  export type ReservasCountAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_livro?: true
    data_reserva?: true
    status?: true
    posicao_fila?: true
    _all?: true
  }

  export type ReservasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservas to aggregate.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reservas
    **/
    _count?: true | ReservasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservasMaxAggregateInputType
  }

  export type GetReservasAggregateType<T extends ReservasAggregateArgs> = {
        [P in keyof T & keyof AggregateReservas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservas[P]>
      : GetScalarType<T[P], AggregateReservas[P]>
  }




  export type reservasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasWhereInput
    orderBy?: reservasOrderByWithAggregationInput | reservasOrderByWithAggregationInput[]
    by: ReservasScalarFieldEnum[] | ReservasScalarFieldEnum
    having?: reservasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservasCountAggregateInputType | true
    _avg?: ReservasAvgAggregateInputType
    _sum?: ReservasSumAggregateInputType
    _min?: ReservasMinAggregateInputType
    _max?: ReservasMaxAggregateInputType
  }

  export type ReservasGroupByOutputType = {
    id_reserva: number
    id_usuario: number
    id_livro: number
    data_reserva: Date
    status: string
    posicao_fila: number
    _count: ReservasCountAggregateOutputType | null
    _avg: ReservasAvgAggregateOutputType | null
    _sum: ReservasSumAggregateOutputType | null
    _min: ReservasMinAggregateOutputType | null
    _max: ReservasMaxAggregateOutputType | null
  }

  type GetReservasGroupByPayload<T extends reservasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservasGroupByOutputType[P]>
            : GetScalarType<T[P], ReservasGroupByOutputType[P]>
        }
      >
    >


  export type reservasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    id_usuario?: boolean
    id_livro?: boolean
    data_reserva?: boolean
    status?: boolean
    posicao_fila?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservas"]>

  export type reservasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    id_usuario?: boolean
    id_livro?: boolean
    data_reserva?: boolean
    status?: boolean
    posicao_fila?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservas"]>

  export type reservasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    id_usuario?: boolean
    id_livro?: boolean
    data_reserva?: boolean
    status?: boolean
    posicao_fila?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservas"]>

  export type reservasSelectScalar = {
    id_reserva?: boolean
    id_usuario?: boolean
    id_livro?: boolean
    data_reserva?: boolean
    status?: boolean
    posicao_fila?: boolean
  }

  export type reservasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reserva" | "id_usuario" | "id_livro" | "data_reserva" | "status" | "posicao_fila", ExtArgs["result"]["reservas"]>
  export type reservasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }
  export type reservasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }
  export type reservasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }

  export type $reservasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reservas"
    objects: {
      usuario: Prisma.$usuariosPayload<ExtArgs>
      livro: Prisma.$livrosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reserva: number
      id_usuario: number
      id_livro: number
      data_reserva: Date
      status: string
      posicao_fila: number
    }, ExtArgs["result"]["reservas"]>
    composites: {}
  }

  type reservasGetPayload<S extends boolean | null | undefined | reservasDefaultArgs> = $Result.GetResult<Prisma.$reservasPayload, S>

  type reservasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reservasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservasCountAggregateInputType | true
    }

  export interface reservasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reservas'], meta: { name: 'reservas' } }
    /**
     * Find zero or one Reservas that matches the filter.
     * @param {reservasFindUniqueArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reservasFindUniqueArgs>(args: SelectSubset<T, reservasFindUniqueArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reservasFindUniqueOrThrowArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reservasFindUniqueOrThrowArgs>(args: SelectSubset<T, reservasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindFirstArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reservasFindFirstArgs>(args?: SelectSubset<T, reservasFindFirstArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindFirstOrThrowArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reservasFindFirstOrThrowArgs>(args?: SelectSubset<T, reservasFindFirstOrThrowArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reservas.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reservas.findMany({ take: 10 })
     * 
     * // Only select the `id_reserva`
     * const reservasWithId_reservaOnly = await prisma.reservas.findMany({ select: { id_reserva: true } })
     * 
     */
    findMany<T extends reservasFindManyArgs>(args?: SelectSubset<T, reservasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservas.
     * @param {reservasCreateArgs} args - Arguments to create a Reservas.
     * @example
     * // Create one Reservas
     * const Reservas = await prisma.reservas.create({
     *   data: {
     *     // ... data to create a Reservas
     *   }
     * })
     * 
     */
    create<T extends reservasCreateArgs>(args: SelectSubset<T, reservasCreateArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {reservasCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reservas = await prisma.reservas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reservasCreateManyArgs>(args?: SelectSubset<T, reservasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {reservasCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reservas = await prisma.reservas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id_reserva`
     * const reservasWithId_reservaOnly = await prisma.reservas.createManyAndReturn({
     *   select: { id_reserva: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reservasCreateManyAndReturnArgs>(args?: SelectSubset<T, reservasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservas.
     * @param {reservasDeleteArgs} args - Arguments to delete one Reservas.
     * @example
     * // Delete one Reservas
     * const Reservas = await prisma.reservas.delete({
     *   where: {
     *     // ... filter to delete one Reservas
     *   }
     * })
     * 
     */
    delete<T extends reservasDeleteArgs>(args: SelectSubset<T, reservasDeleteArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservas.
     * @param {reservasUpdateArgs} args - Arguments to update one Reservas.
     * @example
     * // Update one Reservas
     * const reservas = await prisma.reservas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reservasUpdateArgs>(args: SelectSubset<T, reservasUpdateArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {reservasDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reservas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reservasDeleteManyArgs>(args?: SelectSubset<T, reservasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reservas = await prisma.reservas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reservasUpdateManyArgs>(args: SelectSubset<T, reservasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {reservasUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reservas = await prisma.reservas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id_reserva`
     * const reservasWithId_reservaOnly = await prisma.reservas.updateManyAndReturn({
     *   select: { id_reserva: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reservasUpdateManyAndReturnArgs>(args: SelectSubset<T, reservasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservas.
     * @param {reservasUpsertArgs} args - Arguments to update or create a Reservas.
     * @example
     * // Update or create a Reservas
     * const reservas = await prisma.reservas.upsert({
     *   create: {
     *     // ... data to create a Reservas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservas we want to update
     *   }
     * })
     */
    upsert<T extends reservasUpsertArgs>(args: SelectSubset<T, reservasUpsertArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reservas.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends reservasCountArgs>(
      args?: Subset<T, reservasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservasAggregateArgs>(args: Subset<T, ReservasAggregateArgs>): Prisma.PrismaPromise<GetReservasAggregateType<T>>

    /**
     * Group by Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reservasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservasGroupByArgs['orderBy'] }
        : { orderBy?: reservasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reservasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reservas model
   */
  readonly fields: reservasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reservas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    livro<T extends livrosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, livrosDefaultArgs<ExtArgs>>): Prisma__livrosClient<$Result.GetResult<Prisma.$livrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reservas model
   */
  interface reservasFieldRefs {
    readonly id_reserva: FieldRef<"reservas", 'Int'>
    readonly id_usuario: FieldRef<"reservas", 'Int'>
    readonly id_livro: FieldRef<"reservas", 'Int'>
    readonly data_reserva: FieldRef<"reservas", 'DateTime'>
    readonly status: FieldRef<"reservas", 'String'>
    readonly posicao_fila: FieldRef<"reservas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * reservas findUnique
   */
  export type reservasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas findUniqueOrThrow
   */
  export type reservasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas findFirst
   */
  export type reservasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas findFirstOrThrow
   */
  export type reservasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas findMany
   */
  export type reservasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas create
   */
  export type reservasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * The data needed to create a reservas.
     */
    data: XOR<reservasCreateInput, reservasUncheckedCreateInput>
  }

  /**
   * reservas createMany
   */
  export type reservasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservas.
     */
    data: reservasCreateManyInput | reservasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reservas createManyAndReturn
   */
  export type reservasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * The data used to create many reservas.
     */
    data: reservasCreateManyInput | reservasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reservas update
   */
  export type reservasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * The data needed to update a reservas.
     */
    data: XOR<reservasUpdateInput, reservasUncheckedUpdateInput>
    /**
     * Choose, which reservas to update.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas updateMany
   */
  export type reservasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservas.
     */
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyInput>
    /**
     * Filter which reservas to update
     */
    where?: reservasWhereInput
    /**
     * Limit how many reservas to update.
     */
    limit?: number
  }

  /**
   * reservas updateManyAndReturn
   */
  export type reservasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * The data used to update reservas.
     */
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyInput>
    /**
     * Filter which reservas to update
     */
    where?: reservasWhereInput
    /**
     * Limit how many reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reservas upsert
   */
  export type reservasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * The filter to search for the reservas to update in case it exists.
     */
    where: reservasWhereUniqueInput
    /**
     * In case the reservas found by the `where` argument doesn't exist, create a new reservas with this data.
     */
    create: XOR<reservasCreateInput, reservasUncheckedCreateInput>
    /**
     * In case the reservas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservasUpdateInput, reservasUncheckedUpdateInput>
  }

  /**
   * reservas delete
   */
  export type reservasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter which reservas to delete.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas deleteMany
   */
  export type reservasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservas to delete
     */
    where?: reservasWhereInput
    /**
     * Limit how many reservas to delete.
     */
    limit?: number
  }

  /**
   * reservas without action
   */
  export type reservasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
  }


  /**
   * Model avaliacoes
   */

  export type AggregateAvaliacoes = {
    _count: AvaliacoesCountAggregateOutputType | null
    _avg: AvaliacoesAvgAggregateOutputType | null
    _sum: AvaliacoesSumAggregateOutputType | null
    _min: AvaliacoesMinAggregateOutputType | null
    _max: AvaliacoesMaxAggregateOutputType | null
  }

  export type AvaliacoesAvgAggregateOutputType = {
    id_avaliacao: number | null
    id_usuario: number | null
    id_livro: number | null
    nota: number | null
  }

  export type AvaliacoesSumAggregateOutputType = {
    id_avaliacao: number | null
    id_usuario: number | null
    id_livro: number | null
    nota: number | null
  }

  export type AvaliacoesMinAggregateOutputType = {
    id_avaliacao: number | null
    id_usuario: number | null
    id_livro: number | null
    nota: number | null
    comentario: string | null
    data_avaliacao: Date | null
  }

  export type AvaliacoesMaxAggregateOutputType = {
    id_avaliacao: number | null
    id_usuario: number | null
    id_livro: number | null
    nota: number | null
    comentario: string | null
    data_avaliacao: Date | null
  }

  export type AvaliacoesCountAggregateOutputType = {
    id_avaliacao: number
    id_usuario: number
    id_livro: number
    nota: number
    comentario: number
    data_avaliacao: number
    _all: number
  }


  export type AvaliacoesAvgAggregateInputType = {
    id_avaliacao?: true
    id_usuario?: true
    id_livro?: true
    nota?: true
  }

  export type AvaliacoesSumAggregateInputType = {
    id_avaliacao?: true
    id_usuario?: true
    id_livro?: true
    nota?: true
  }

  export type AvaliacoesMinAggregateInputType = {
    id_avaliacao?: true
    id_usuario?: true
    id_livro?: true
    nota?: true
    comentario?: true
    data_avaliacao?: true
  }

  export type AvaliacoesMaxAggregateInputType = {
    id_avaliacao?: true
    id_usuario?: true
    id_livro?: true
    nota?: true
    comentario?: true
    data_avaliacao?: true
  }

  export type AvaliacoesCountAggregateInputType = {
    id_avaliacao?: true
    id_usuario?: true
    id_livro?: true
    nota?: true
    comentario?: true
    data_avaliacao?: true
    _all?: true
  }

  export type AvaliacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avaliacoes to aggregate.
     */
    where?: avaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacoes to fetch.
     */
    orderBy?: avaliacoesOrderByWithRelationInput | avaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: avaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned avaliacoes
    **/
    _count?: true | AvaliacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacoesMaxAggregateInputType
  }

  export type GetAvaliacoesAggregateType<T extends AvaliacoesAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacoes[P]>
      : GetScalarType<T[P], AggregateAvaliacoes[P]>
  }




  export type avaliacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avaliacoesWhereInput
    orderBy?: avaliacoesOrderByWithAggregationInput | avaliacoesOrderByWithAggregationInput[]
    by: AvaliacoesScalarFieldEnum[] | AvaliacoesScalarFieldEnum
    having?: avaliacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacoesCountAggregateInputType | true
    _avg?: AvaliacoesAvgAggregateInputType
    _sum?: AvaliacoesSumAggregateInputType
    _min?: AvaliacoesMinAggregateInputType
    _max?: AvaliacoesMaxAggregateInputType
  }

  export type AvaliacoesGroupByOutputType = {
    id_avaliacao: number
    id_usuario: number
    id_livro: number
    nota: number
    comentario: string
    data_avaliacao: Date
    _count: AvaliacoesCountAggregateOutputType | null
    _avg: AvaliacoesAvgAggregateOutputType | null
    _sum: AvaliacoesSumAggregateOutputType | null
    _min: AvaliacoesMinAggregateOutputType | null
    _max: AvaliacoesMaxAggregateOutputType | null
  }

  type GetAvaliacoesGroupByPayload<T extends avaliacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacoesGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacoesGroupByOutputType[P]>
        }
      >
    >


  export type avaliacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_avaliacao?: boolean
    id_usuario?: boolean
    id_livro?: boolean
    nota?: boolean
    comentario?: boolean
    data_avaliacao?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacoes"]>

  export type avaliacoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_avaliacao?: boolean
    id_usuario?: boolean
    id_livro?: boolean
    nota?: boolean
    comentario?: boolean
    data_avaliacao?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacoes"]>

  export type avaliacoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_avaliacao?: boolean
    id_usuario?: boolean
    id_livro?: boolean
    nota?: boolean
    comentario?: boolean
    data_avaliacao?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacoes"]>

  export type avaliacoesSelectScalar = {
    id_avaliacao?: boolean
    id_usuario?: boolean
    id_livro?: boolean
    nota?: boolean
    comentario?: boolean
    data_avaliacao?: boolean
  }

  export type avaliacoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_avaliacao" | "id_usuario" | "id_livro" | "nota" | "comentario" | "data_avaliacao", ExtArgs["result"]["avaliacoes"]>
  export type avaliacoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }
  export type avaliacoesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }
  export type avaliacoesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    livro?: boolean | livrosDefaultArgs<ExtArgs>
  }

  export type $avaliacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "avaliacoes"
    objects: {
      usuario: Prisma.$usuariosPayload<ExtArgs>
      livro: Prisma.$livrosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_avaliacao: number
      id_usuario: number
      id_livro: number
      nota: number
      comentario: string
      data_avaliacao: Date
    }, ExtArgs["result"]["avaliacoes"]>
    composites: {}
  }

  type avaliacoesGetPayload<S extends boolean | null | undefined | avaliacoesDefaultArgs> = $Result.GetResult<Prisma.$avaliacoesPayload, S>

  type avaliacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<avaliacoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacoesCountAggregateInputType | true
    }

  export interface avaliacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['avaliacoes'], meta: { name: 'avaliacoes' } }
    /**
     * Find zero or one Avaliacoes that matches the filter.
     * @param {avaliacoesFindUniqueArgs} args - Arguments to find a Avaliacoes
     * @example
     * // Get one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends avaliacoesFindUniqueArgs>(args: SelectSubset<T, avaliacoesFindUniqueArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {avaliacoesFindUniqueOrThrowArgs} args - Arguments to find a Avaliacoes
     * @example
     * // Get one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends avaliacoesFindUniqueOrThrowArgs>(args: SelectSubset<T, avaliacoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesFindFirstArgs} args - Arguments to find a Avaliacoes
     * @example
     * // Get one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends avaliacoesFindFirstArgs>(args?: SelectSubset<T, avaliacoesFindFirstArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesFindFirstOrThrowArgs} args - Arguments to find a Avaliacoes
     * @example
     * // Get one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends avaliacoesFindFirstOrThrowArgs>(args?: SelectSubset<T, avaliacoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findMany()
     * 
     * // Get first 10 Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findMany({ take: 10 })
     * 
     * // Only select the `id_avaliacao`
     * const avaliacoesWithId_avaliacaoOnly = await prisma.avaliacoes.findMany({ select: { id_avaliacao: true } })
     * 
     */
    findMany<T extends avaliacoesFindManyArgs>(args?: SelectSubset<T, avaliacoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacoes.
     * @param {avaliacoesCreateArgs} args - Arguments to create a Avaliacoes.
     * @example
     * // Create one Avaliacoes
     * const Avaliacoes = await prisma.avaliacoes.create({
     *   data: {
     *     // ... data to create a Avaliacoes
     *   }
     * })
     * 
     */
    create<T extends avaliacoesCreateArgs>(args: SelectSubset<T, avaliacoesCreateArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacoes.
     * @param {avaliacoesCreateManyArgs} args - Arguments to create many Avaliacoes.
     * @example
     * // Create many Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends avaliacoesCreateManyArgs>(args?: SelectSubset<T, avaliacoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacoes and returns the data saved in the database.
     * @param {avaliacoesCreateManyAndReturnArgs} args - Arguments to create many Avaliacoes.
     * @example
     * // Create many Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacoes and only return the `id_avaliacao`
     * const avaliacoesWithId_avaliacaoOnly = await prisma.avaliacoes.createManyAndReturn({
     *   select: { id_avaliacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends avaliacoesCreateManyAndReturnArgs>(args?: SelectSubset<T, avaliacoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avaliacoes.
     * @param {avaliacoesDeleteArgs} args - Arguments to delete one Avaliacoes.
     * @example
     * // Delete one Avaliacoes
     * const Avaliacoes = await prisma.avaliacoes.delete({
     *   where: {
     *     // ... filter to delete one Avaliacoes
     *   }
     * })
     * 
     */
    delete<T extends avaliacoesDeleteArgs>(args: SelectSubset<T, avaliacoesDeleteArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacoes.
     * @param {avaliacoesUpdateArgs} args - Arguments to update one Avaliacoes.
     * @example
     * // Update one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends avaliacoesUpdateArgs>(args: SelectSubset<T, avaliacoesUpdateArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacoes.
     * @param {avaliacoesDeleteManyArgs} args - Arguments to filter Avaliacoes to delete.
     * @example
     * // Delete a few Avaliacoes
     * const { count } = await prisma.avaliacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends avaliacoesDeleteManyArgs>(args?: SelectSubset<T, avaliacoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends avaliacoesUpdateManyArgs>(args: SelectSubset<T, avaliacoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacoes and returns the data updated in the database.
     * @param {avaliacoesUpdateManyAndReturnArgs} args - Arguments to update many Avaliacoes.
     * @example
     * // Update many Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avaliacoes and only return the `id_avaliacao`
     * const avaliacoesWithId_avaliacaoOnly = await prisma.avaliacoes.updateManyAndReturn({
     *   select: { id_avaliacao: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends avaliacoesUpdateManyAndReturnArgs>(args: SelectSubset<T, avaliacoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avaliacoes.
     * @param {avaliacoesUpsertArgs} args - Arguments to update or create a Avaliacoes.
     * @example
     * // Update or create a Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.upsert({
     *   create: {
     *     // ... data to create a Avaliacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacoes we want to update
     *   }
     * })
     */
    upsert<T extends avaliacoesUpsertArgs>(args: SelectSubset<T, avaliacoesUpsertArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesCountArgs} args - Arguments to filter Avaliacoes to count.
     * @example
     * // Count the number of Avaliacoes
     * const count = await prisma.avaliacoes.count({
     *   where: {
     *     // ... the filter for the Avaliacoes we want to count
     *   }
     * })
    **/
    count<T extends avaliacoesCountArgs>(
      args?: Subset<T, avaliacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvaliacoesAggregateArgs>(args: Subset<T, AvaliacoesAggregateArgs>): Prisma.PrismaPromise<GetAvaliacoesAggregateType<T>>

    /**
     * Group by Avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends avaliacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: avaliacoesGroupByArgs['orderBy'] }
        : { orderBy?: avaliacoesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, avaliacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the avaliacoes model
   */
  readonly fields: avaliacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for avaliacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__avaliacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    livro<T extends livrosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, livrosDefaultArgs<ExtArgs>>): Prisma__livrosClient<$Result.GetResult<Prisma.$livrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the avaliacoes model
   */
  interface avaliacoesFieldRefs {
    readonly id_avaliacao: FieldRef<"avaliacoes", 'Int'>
    readonly id_usuario: FieldRef<"avaliacoes", 'Int'>
    readonly id_livro: FieldRef<"avaliacoes", 'Int'>
    readonly nota: FieldRef<"avaliacoes", 'Int'>
    readonly comentario: FieldRef<"avaliacoes", 'String'>
    readonly data_avaliacao: FieldRef<"avaliacoes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * avaliacoes findUnique
   */
  export type avaliacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which avaliacoes to fetch.
     */
    where: avaliacoesWhereUniqueInput
  }

  /**
   * avaliacoes findUniqueOrThrow
   */
  export type avaliacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which avaliacoes to fetch.
     */
    where: avaliacoesWhereUniqueInput
  }

  /**
   * avaliacoes findFirst
   */
  export type avaliacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which avaliacoes to fetch.
     */
    where?: avaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacoes to fetch.
     */
    orderBy?: avaliacoesOrderByWithRelationInput | avaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avaliacoes.
     */
    cursor?: avaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avaliacoes.
     */
    distinct?: AvaliacoesScalarFieldEnum | AvaliacoesScalarFieldEnum[]
  }

  /**
   * avaliacoes findFirstOrThrow
   */
  export type avaliacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which avaliacoes to fetch.
     */
    where?: avaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacoes to fetch.
     */
    orderBy?: avaliacoesOrderByWithRelationInput | avaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avaliacoes.
     */
    cursor?: avaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avaliacoes.
     */
    distinct?: AvaliacoesScalarFieldEnum | AvaliacoesScalarFieldEnum[]
  }

  /**
   * avaliacoes findMany
   */
  export type avaliacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which avaliacoes to fetch.
     */
    where?: avaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacoes to fetch.
     */
    orderBy?: avaliacoesOrderByWithRelationInput | avaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing avaliacoes.
     */
    cursor?: avaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacoes.
     */
    skip?: number
    distinct?: AvaliacoesScalarFieldEnum | AvaliacoesScalarFieldEnum[]
  }

  /**
   * avaliacoes create
   */
  export type avaliacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * The data needed to create a avaliacoes.
     */
    data: XOR<avaliacoesCreateInput, avaliacoesUncheckedCreateInput>
  }

  /**
   * avaliacoes createMany
   */
  export type avaliacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many avaliacoes.
     */
    data: avaliacoesCreateManyInput | avaliacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * avaliacoes createManyAndReturn
   */
  export type avaliacoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * The data used to create many avaliacoes.
     */
    data: avaliacoesCreateManyInput | avaliacoesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * avaliacoes update
   */
  export type avaliacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * The data needed to update a avaliacoes.
     */
    data: XOR<avaliacoesUpdateInput, avaliacoesUncheckedUpdateInput>
    /**
     * Choose, which avaliacoes to update.
     */
    where: avaliacoesWhereUniqueInput
  }

  /**
   * avaliacoes updateMany
   */
  export type avaliacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update avaliacoes.
     */
    data: XOR<avaliacoesUpdateManyMutationInput, avaliacoesUncheckedUpdateManyInput>
    /**
     * Filter which avaliacoes to update
     */
    where?: avaliacoesWhereInput
    /**
     * Limit how many avaliacoes to update.
     */
    limit?: number
  }

  /**
   * avaliacoes updateManyAndReturn
   */
  export type avaliacoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * The data used to update avaliacoes.
     */
    data: XOR<avaliacoesUpdateManyMutationInput, avaliacoesUncheckedUpdateManyInput>
    /**
     * Filter which avaliacoes to update
     */
    where?: avaliacoesWhereInput
    /**
     * Limit how many avaliacoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * avaliacoes upsert
   */
  export type avaliacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * The filter to search for the avaliacoes to update in case it exists.
     */
    where: avaliacoesWhereUniqueInput
    /**
     * In case the avaliacoes found by the `where` argument doesn't exist, create a new avaliacoes with this data.
     */
    create: XOR<avaliacoesCreateInput, avaliacoesUncheckedCreateInput>
    /**
     * In case the avaliacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<avaliacoesUpdateInput, avaliacoesUncheckedUpdateInput>
  }

  /**
   * avaliacoes delete
   */
  export type avaliacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * Filter which avaliacoes to delete.
     */
    where: avaliacoesWhereUniqueInput
  }

  /**
   * avaliacoes deleteMany
   */
  export type avaliacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avaliacoes to delete
     */
    where?: avaliacoesWhereInput
    /**
     * Limit how many avaliacoes to delete.
     */
    limit?: number
  }

  /**
   * avaliacoes without action
   */
  export type avaliacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
  }


  /**
   * Model historico
   */

  export type AggregateHistorico = {
    _count: HistoricoCountAggregateOutputType | null
    _avg: HistoricoAvgAggregateOutputType | null
    _sum: HistoricoSumAggregateOutputType | null
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  export type HistoricoAvgAggregateOutputType = {
    id_historico: number | null
    id_usuario: number | null
    id_exemplar: number | null
  }

  export type HistoricoSumAggregateOutputType = {
    id_historico: number | null
    id_usuario: number | null
    id_exemplar: number | null
  }

  export type HistoricoMinAggregateOutputType = {
    id_historico: number | null
    id_usuario: number | null
    id_exemplar: number | null
    acao: string | null
    data_acao: Date | null
  }

  export type HistoricoMaxAggregateOutputType = {
    id_historico: number | null
    id_usuario: number | null
    id_exemplar: number | null
    acao: string | null
    data_acao: Date | null
  }

  export type HistoricoCountAggregateOutputType = {
    id_historico: number
    id_usuario: number
    id_exemplar: number
    acao: number
    data_acao: number
    _all: number
  }


  export type HistoricoAvgAggregateInputType = {
    id_historico?: true
    id_usuario?: true
    id_exemplar?: true
  }

  export type HistoricoSumAggregateInputType = {
    id_historico?: true
    id_usuario?: true
    id_exemplar?: true
  }

  export type HistoricoMinAggregateInputType = {
    id_historico?: true
    id_usuario?: true
    id_exemplar?: true
    acao?: true
    data_acao?: true
  }

  export type HistoricoMaxAggregateInputType = {
    id_historico?: true
    id_usuario?: true
    id_exemplar?: true
    acao?: true
    data_acao?: true
  }

  export type HistoricoCountAggregateInputType = {
    id_historico?: true
    id_usuario?: true
    id_exemplar?: true
    acao?: true
    data_acao?: true
    _all?: true
  }

  export type HistoricoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historico to aggregate.
     */
    where?: historicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historicos to fetch.
     */
    orderBy?: historicoOrderByWithRelationInput | historicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned historicos
    **/
    _count?: true | HistoricoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoMaxAggregateInputType
  }

  export type GetHistoricoAggregateType<T extends HistoricoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorico[P]>
      : GetScalarType<T[P], AggregateHistorico[P]>
  }




  export type historicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historicoWhereInput
    orderBy?: historicoOrderByWithAggregationInput | historicoOrderByWithAggregationInput[]
    by: HistoricoScalarFieldEnum[] | HistoricoScalarFieldEnum
    having?: historicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoCountAggregateInputType | true
    _avg?: HistoricoAvgAggregateInputType
    _sum?: HistoricoSumAggregateInputType
    _min?: HistoricoMinAggregateInputType
    _max?: HistoricoMaxAggregateInputType
  }

  export type HistoricoGroupByOutputType = {
    id_historico: number
    id_usuario: number
    id_exemplar: number
    acao: string
    data_acao: Date
    _count: HistoricoCountAggregateOutputType | null
    _avg: HistoricoAvgAggregateOutputType | null
    _sum: HistoricoSumAggregateOutputType | null
    _min: HistoricoMinAggregateOutputType | null
    _max: HistoricoMaxAggregateOutputType | null
  }

  type GetHistoricoGroupByPayload<T extends historicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoGroupByOutputType[P]>
        }
      >
    >


  export type historicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_historico?: boolean
    id_usuario?: boolean
    id_exemplar?: boolean
    acao?: boolean
    data_acao?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    exemplar?: boolean | exemplaresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>

  export type historicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_historico?: boolean
    id_usuario?: boolean
    id_exemplar?: boolean
    acao?: boolean
    data_acao?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    exemplar?: boolean | exemplaresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>

  export type historicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_historico?: boolean
    id_usuario?: boolean
    id_exemplar?: boolean
    acao?: boolean
    data_acao?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    exemplar?: boolean | exemplaresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico"]>

  export type historicoSelectScalar = {
    id_historico?: boolean
    id_usuario?: boolean
    id_exemplar?: boolean
    acao?: boolean
    data_acao?: boolean
  }

  export type historicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_historico" | "id_usuario" | "id_exemplar" | "acao" | "data_acao", ExtArgs["result"]["historico"]>
  export type historicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    exemplar?: boolean | exemplaresDefaultArgs<ExtArgs>
  }
  export type historicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    exemplar?: boolean | exemplaresDefaultArgs<ExtArgs>
  }
  export type historicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    exemplar?: boolean | exemplaresDefaultArgs<ExtArgs>
  }

  export type $historicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "historico"
    objects: {
      usuario: Prisma.$usuariosPayload<ExtArgs>
      exemplar: Prisma.$exemplaresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_historico: number
      id_usuario: number
      id_exemplar: number
      acao: string
      data_acao: Date
    }, ExtArgs["result"]["historico"]>
    composites: {}
  }

  type historicoGetPayload<S extends boolean | null | undefined | historicoDefaultArgs> = $Result.GetResult<Prisma.$historicoPayload, S>

  type historicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<historicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoCountAggregateInputType | true
    }

  export interface historicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['historico'], meta: { name: 'historico' } }
    /**
     * Find zero or one Historico that matches the filter.
     * @param {historicoFindUniqueArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends historicoFindUniqueArgs>(args: SelectSubset<T, historicoFindUniqueArgs<ExtArgs>>): Prisma__historicoClient<$Result.GetResult<Prisma.$historicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {historicoFindUniqueOrThrowArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends historicoFindUniqueOrThrowArgs>(args: SelectSubset<T, historicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__historicoClient<$Result.GetResult<Prisma.$historicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoFindFirstArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends historicoFindFirstArgs>(args?: SelectSubset<T, historicoFindFirstArgs<ExtArgs>>): Prisma__historicoClient<$Result.GetResult<Prisma.$historicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoFindFirstOrThrowArgs} args - Arguments to find a Historico
     * @example
     * // Get one Historico
     * const historico = await prisma.historico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends historicoFindFirstOrThrowArgs>(args?: SelectSubset<T, historicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__historicoClient<$Result.GetResult<Prisma.$historicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historicos
     * const historicos = await prisma.historico.findMany()
     * 
     * // Get first 10 Historicos
     * const historicos = await prisma.historico.findMany({ take: 10 })
     * 
     * // Only select the `id_historico`
     * const historicoWithId_historicoOnly = await prisma.historico.findMany({ select: { id_historico: true } })
     * 
     */
    findMany<T extends historicoFindManyArgs>(args?: SelectSubset<T, historicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historico.
     * @param {historicoCreateArgs} args - Arguments to create a Historico.
     * @example
     * // Create one Historico
     * const Historico = await prisma.historico.create({
     *   data: {
     *     // ... data to create a Historico
     *   }
     * })
     * 
     */
    create<T extends historicoCreateArgs>(args: SelectSubset<T, historicoCreateArgs<ExtArgs>>): Prisma__historicoClient<$Result.GetResult<Prisma.$historicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historicos.
     * @param {historicoCreateManyArgs} args - Arguments to create many Historicos.
     * @example
     * // Create many Historicos
     * const historico = await prisma.historico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends historicoCreateManyArgs>(args?: SelectSubset<T, historicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historicos and returns the data saved in the database.
     * @param {historicoCreateManyAndReturnArgs} args - Arguments to create many Historicos.
     * @example
     * // Create many Historicos
     * const historico = await prisma.historico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historicos and only return the `id_historico`
     * const historicoWithId_historicoOnly = await prisma.historico.createManyAndReturn({
     *   select: { id_historico: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends historicoCreateManyAndReturnArgs>(args?: SelectSubset<T, historicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historico.
     * @param {historicoDeleteArgs} args - Arguments to delete one Historico.
     * @example
     * // Delete one Historico
     * const Historico = await prisma.historico.delete({
     *   where: {
     *     // ... filter to delete one Historico
     *   }
     * })
     * 
     */
    delete<T extends historicoDeleteArgs>(args: SelectSubset<T, historicoDeleteArgs<ExtArgs>>): Prisma__historicoClient<$Result.GetResult<Prisma.$historicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historico.
     * @param {historicoUpdateArgs} args - Arguments to update one Historico.
     * @example
     * // Update one Historico
     * const historico = await prisma.historico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends historicoUpdateArgs>(args: SelectSubset<T, historicoUpdateArgs<ExtArgs>>): Prisma__historicoClient<$Result.GetResult<Prisma.$historicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historicos.
     * @param {historicoDeleteManyArgs} args - Arguments to filter Historicos to delete.
     * @example
     * // Delete a few Historicos
     * const { count } = await prisma.historico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends historicoDeleteManyArgs>(args?: SelectSubset<T, historicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historicos
     * const historico = await prisma.historico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends historicoUpdateManyArgs>(args: SelectSubset<T, historicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historicos and returns the data updated in the database.
     * @param {historicoUpdateManyAndReturnArgs} args - Arguments to update many Historicos.
     * @example
     * // Update many Historicos
     * const historico = await prisma.historico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historicos and only return the `id_historico`
     * const historicoWithId_historicoOnly = await prisma.historico.updateManyAndReturn({
     *   select: { id_historico: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends historicoUpdateManyAndReturnArgs>(args: SelectSubset<T, historicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historico.
     * @param {historicoUpsertArgs} args - Arguments to update or create a Historico.
     * @example
     * // Update or create a Historico
     * const historico = await prisma.historico.upsert({
     *   create: {
     *     // ... data to create a Historico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historico we want to update
     *   }
     * })
     */
    upsert<T extends historicoUpsertArgs>(args: SelectSubset<T, historicoUpsertArgs<ExtArgs>>): Prisma__historicoClient<$Result.GetResult<Prisma.$historicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoCountArgs} args - Arguments to filter Historicos to count.
     * @example
     * // Count the number of Historicos
     * const count = await prisma.historico.count({
     *   where: {
     *     // ... the filter for the Historicos we want to count
     *   }
     * })
    **/
    count<T extends historicoCountArgs>(
      args?: Subset<T, historicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoricoAggregateArgs>(args: Subset<T, HistoricoAggregateArgs>): Prisma.PrismaPromise<GetHistoricoAggregateType<T>>

    /**
     * Group by Historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends historicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historicoGroupByArgs['orderBy'] }
        : { orderBy?: historicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, historicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the historico model
   */
  readonly fields: historicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for historico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__historicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exemplar<T extends exemplaresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, exemplaresDefaultArgs<ExtArgs>>): Prisma__exemplaresClient<$Result.GetResult<Prisma.$exemplaresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the historico model
   */
  interface historicoFieldRefs {
    readonly id_historico: FieldRef<"historico", 'Int'>
    readonly id_usuario: FieldRef<"historico", 'Int'>
    readonly id_exemplar: FieldRef<"historico", 'Int'>
    readonly acao: FieldRef<"historico", 'String'>
    readonly data_acao: FieldRef<"historico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * historico findUnique
   */
  export type historicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico
     */
    select?: historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico
     */
    omit?: historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoInclude<ExtArgs> | null
    /**
     * Filter, which historico to fetch.
     */
    where: historicoWhereUniqueInput
  }

  /**
   * historico findUniqueOrThrow
   */
  export type historicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico
     */
    select?: historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico
     */
    omit?: historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoInclude<ExtArgs> | null
    /**
     * Filter, which historico to fetch.
     */
    where: historicoWhereUniqueInput
  }

  /**
   * historico findFirst
   */
  export type historicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico
     */
    select?: historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico
     */
    omit?: historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoInclude<ExtArgs> | null
    /**
     * Filter, which historico to fetch.
     */
    where?: historicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historicos to fetch.
     */
    orderBy?: historicoOrderByWithRelationInput | historicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historicos.
     */
    cursor?: historicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historicos.
     */
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * historico findFirstOrThrow
   */
  export type historicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico
     */
    select?: historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico
     */
    omit?: historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoInclude<ExtArgs> | null
    /**
     * Filter, which historico to fetch.
     */
    where?: historicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historicos to fetch.
     */
    orderBy?: historicoOrderByWithRelationInput | historicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historicos.
     */
    cursor?: historicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historicos.
     */
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * historico findMany
   */
  export type historicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico
     */
    select?: historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico
     */
    omit?: historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoInclude<ExtArgs> | null
    /**
     * Filter, which historicos to fetch.
     */
    where?: historicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historicos to fetch.
     */
    orderBy?: historicoOrderByWithRelationInput | historicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing historicos.
     */
    cursor?: historicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historicos.
     */
    skip?: number
    distinct?: HistoricoScalarFieldEnum | HistoricoScalarFieldEnum[]
  }

  /**
   * historico create
   */
  export type historicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico
     */
    select?: historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico
     */
    omit?: historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoInclude<ExtArgs> | null
    /**
     * The data needed to create a historico.
     */
    data: XOR<historicoCreateInput, historicoUncheckedCreateInput>
  }

  /**
   * historico createMany
   */
  export type historicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many historicos.
     */
    data: historicoCreateManyInput | historicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * historico createManyAndReturn
   */
  export type historicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico
     */
    select?: historicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the historico
     */
    omit?: historicoOmit<ExtArgs> | null
    /**
     * The data used to create many historicos.
     */
    data: historicoCreateManyInput | historicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * historico update
   */
  export type historicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico
     */
    select?: historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico
     */
    omit?: historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoInclude<ExtArgs> | null
    /**
     * The data needed to update a historico.
     */
    data: XOR<historicoUpdateInput, historicoUncheckedUpdateInput>
    /**
     * Choose, which historico to update.
     */
    where: historicoWhereUniqueInput
  }

  /**
   * historico updateMany
   */
  export type historicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update historicos.
     */
    data: XOR<historicoUpdateManyMutationInput, historicoUncheckedUpdateManyInput>
    /**
     * Filter which historicos to update
     */
    where?: historicoWhereInput
    /**
     * Limit how many historicos to update.
     */
    limit?: number
  }

  /**
   * historico updateManyAndReturn
   */
  export type historicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico
     */
    select?: historicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the historico
     */
    omit?: historicoOmit<ExtArgs> | null
    /**
     * The data used to update historicos.
     */
    data: XOR<historicoUpdateManyMutationInput, historicoUncheckedUpdateManyInput>
    /**
     * Filter which historicos to update
     */
    where?: historicoWhereInput
    /**
     * Limit how many historicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * historico upsert
   */
  export type historicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico
     */
    select?: historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico
     */
    omit?: historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoInclude<ExtArgs> | null
    /**
     * The filter to search for the historico to update in case it exists.
     */
    where: historicoWhereUniqueInput
    /**
     * In case the historico found by the `where` argument doesn't exist, create a new historico with this data.
     */
    create: XOR<historicoCreateInput, historicoUncheckedCreateInput>
    /**
     * In case the historico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historicoUpdateInput, historicoUncheckedUpdateInput>
  }

  /**
   * historico delete
   */
  export type historicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico
     */
    select?: historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico
     */
    omit?: historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoInclude<ExtArgs> | null
    /**
     * Filter which historico to delete.
     */
    where: historicoWhereUniqueInput
  }

  /**
   * historico deleteMany
   */
  export type historicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historicos to delete
     */
    where?: historicoWhereInput
    /**
     * Limit how many historicos to delete.
     */
    limit?: number
  }

  /**
   * historico without action
   */
  export type historicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico
     */
    select?: historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico
     */
    omit?: historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    name: 'name',
    email: 'email',
    password: 'password',
    status: 'status',
    data_cadastro: 'data_cadastro'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const LivrosScalarFieldEnum: {
    id_livro: 'id_livro',
    isbn: 'isbn',
    titulo: 'titulo',
    autor: 'autor',
    editora: 'editora',
    ano_publicacao: 'ano_publicacao',
    sinopse: 'sinopse'
  };

  export type LivrosScalarFieldEnum = (typeof LivrosScalarFieldEnum)[keyof typeof LivrosScalarFieldEnum]


  export const ExemplaresScalarFieldEnum: {
    id_exemplar: 'id_exemplar',
    id_livro: 'id_livro',
    codigo_exemplar: 'codigo_exemplar',
    status: 'status'
  };

  export type ExemplaresScalarFieldEnum = (typeof ExemplaresScalarFieldEnum)[keyof typeof ExemplaresScalarFieldEnum]


  export const EmprestimosScalarFieldEnum: {
    id_emprestimo: 'id_emprestimo',
    id_usuario: 'id_usuario',
    id_exemplar: 'id_exemplar',
    data_retirada: 'data_retirada',
    data_prevista_devolucao: 'data_prevista_devolucao',
    data_devolucao: 'data_devolucao',
    renovado: 'renovado'
  };

  export type EmprestimosScalarFieldEnum = (typeof EmprestimosScalarFieldEnum)[keyof typeof EmprestimosScalarFieldEnum]


  export const ReservasScalarFieldEnum: {
    id_reserva: 'id_reserva',
    id_usuario: 'id_usuario',
    id_livro: 'id_livro',
    data_reserva: 'data_reserva',
    status: 'status',
    posicao_fila: 'posicao_fila'
  };

  export type ReservasScalarFieldEnum = (typeof ReservasScalarFieldEnum)[keyof typeof ReservasScalarFieldEnum]


  export const AvaliacoesScalarFieldEnum: {
    id_avaliacao: 'id_avaliacao',
    id_usuario: 'id_usuario',
    id_livro: 'id_livro',
    nota: 'nota',
    comentario: 'comentario',
    data_avaliacao: 'data_avaliacao'
  };

  export type AvaliacoesScalarFieldEnum = (typeof AvaliacoesScalarFieldEnum)[keyof typeof AvaliacoesScalarFieldEnum]


  export const HistoricoScalarFieldEnum: {
    id_historico: 'id_historico',
    id_usuario: 'id_usuario',
    id_exemplar: 'id_exemplar',
    acao: 'acao',
    data_acao: 'data_acao'
  };

  export type HistoricoScalarFieldEnum = (typeof HistoricoScalarFieldEnum)[keyof typeof HistoricoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    name?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    password?: StringFilter<"usuarios"> | string
    status?: StringFilter<"usuarios"> | string
    data_cadastro?: DateTimeFilter<"usuarios"> | Date | string
    emprestimos?: EmprestimosListRelationFilter
    reservas?: ReservasListRelationFilter
    avaliacoes?: AvaliacoesListRelationFilter
    historico?: HistoricoListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    data_cadastro?: SortOrder
    emprestimos?: emprestimosOrderByRelationAggregateInput
    reservas?: reservasOrderByRelationAggregateInput
    avaliacoes?: avaliacoesOrderByRelationAggregateInput
    historico?: historicoOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    name?: StringFilter<"usuarios"> | string
    password?: StringFilter<"usuarios"> | string
    status?: StringFilter<"usuarios"> | string
    data_cadastro?: DateTimeFilter<"usuarios"> | Date | string
    emprestimos?: EmprestimosListRelationFilter
    reservas?: ReservasListRelationFilter
    avaliacoes?: AvaliacoesListRelationFilter
    historico?: HistoricoListRelationFilter
  }, "id_usuario" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    data_cadastro?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    name?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    password?: StringWithAggregatesFilter<"usuarios"> | string
    status?: StringWithAggregatesFilter<"usuarios"> | string
    data_cadastro?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
  }

  export type livrosWhereInput = {
    AND?: livrosWhereInput | livrosWhereInput[]
    OR?: livrosWhereInput[]
    NOT?: livrosWhereInput | livrosWhereInput[]
    id_livro?: IntFilter<"livros"> | number
    isbn?: StringFilter<"livros"> | string
    titulo?: StringFilter<"livros"> | string
    autor?: StringFilter<"livros"> | string
    editora?: StringFilter<"livros"> | string
    ano_publicacao?: IntFilter<"livros"> | number
    sinopse?: StringFilter<"livros"> | string
    exemplares?: ExemplaresListRelationFilter
    reservas?: ReservasListRelationFilter
    avaliacoes?: AvaliacoesListRelationFilter
  }

  export type livrosOrderByWithRelationInput = {
    id_livro?: SortOrder
    isbn?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    editora?: SortOrder
    ano_publicacao?: SortOrder
    sinopse?: SortOrder
    exemplares?: exemplaresOrderByRelationAggregateInput
    reservas?: reservasOrderByRelationAggregateInput
    avaliacoes?: avaliacoesOrderByRelationAggregateInput
  }

  export type livrosWhereUniqueInput = Prisma.AtLeast<{
    id_livro?: number
    isbn?: string
    AND?: livrosWhereInput | livrosWhereInput[]
    OR?: livrosWhereInput[]
    NOT?: livrosWhereInput | livrosWhereInput[]
    titulo?: StringFilter<"livros"> | string
    autor?: StringFilter<"livros"> | string
    editora?: StringFilter<"livros"> | string
    ano_publicacao?: IntFilter<"livros"> | number
    sinopse?: StringFilter<"livros"> | string
    exemplares?: ExemplaresListRelationFilter
    reservas?: ReservasListRelationFilter
    avaliacoes?: AvaliacoesListRelationFilter
  }, "id_livro" | "isbn">

  export type livrosOrderByWithAggregationInput = {
    id_livro?: SortOrder
    isbn?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    editora?: SortOrder
    ano_publicacao?: SortOrder
    sinopse?: SortOrder
    _count?: livrosCountOrderByAggregateInput
    _avg?: livrosAvgOrderByAggregateInput
    _max?: livrosMaxOrderByAggregateInput
    _min?: livrosMinOrderByAggregateInput
    _sum?: livrosSumOrderByAggregateInput
  }

  export type livrosScalarWhereWithAggregatesInput = {
    AND?: livrosScalarWhereWithAggregatesInput | livrosScalarWhereWithAggregatesInput[]
    OR?: livrosScalarWhereWithAggregatesInput[]
    NOT?: livrosScalarWhereWithAggregatesInput | livrosScalarWhereWithAggregatesInput[]
    id_livro?: IntWithAggregatesFilter<"livros"> | number
    isbn?: StringWithAggregatesFilter<"livros"> | string
    titulo?: StringWithAggregatesFilter<"livros"> | string
    autor?: StringWithAggregatesFilter<"livros"> | string
    editora?: StringWithAggregatesFilter<"livros"> | string
    ano_publicacao?: IntWithAggregatesFilter<"livros"> | number
    sinopse?: StringWithAggregatesFilter<"livros"> | string
  }

  export type exemplaresWhereInput = {
    AND?: exemplaresWhereInput | exemplaresWhereInput[]
    OR?: exemplaresWhereInput[]
    NOT?: exemplaresWhereInput | exemplaresWhereInput[]
    id_exemplar?: IntFilter<"exemplares"> | number
    id_livro?: IntFilter<"exemplares"> | number
    codigo_exemplar?: StringFilter<"exemplares"> | string
    status?: StringFilter<"exemplares"> | string
    livro?: XOR<LivrosScalarRelationFilter, livrosWhereInput>
    emprestimos?: EmprestimosListRelationFilter
    historico?: HistoricoListRelationFilter
  }

  export type exemplaresOrderByWithRelationInput = {
    id_exemplar?: SortOrder
    id_livro?: SortOrder
    codigo_exemplar?: SortOrder
    status?: SortOrder
    livro?: livrosOrderByWithRelationInput
    emprestimos?: emprestimosOrderByRelationAggregateInput
    historico?: historicoOrderByRelationAggregateInput
  }

  export type exemplaresWhereUniqueInput = Prisma.AtLeast<{
    id_exemplar?: number
    codigo_exemplar?: string
    AND?: exemplaresWhereInput | exemplaresWhereInput[]
    OR?: exemplaresWhereInput[]
    NOT?: exemplaresWhereInput | exemplaresWhereInput[]
    id_livro?: IntFilter<"exemplares"> | number
    status?: StringFilter<"exemplares"> | string
    livro?: XOR<LivrosScalarRelationFilter, livrosWhereInput>
    emprestimos?: EmprestimosListRelationFilter
    historico?: HistoricoListRelationFilter
  }, "id_exemplar" | "codigo_exemplar">

  export type exemplaresOrderByWithAggregationInput = {
    id_exemplar?: SortOrder
    id_livro?: SortOrder
    codigo_exemplar?: SortOrder
    status?: SortOrder
    _count?: exemplaresCountOrderByAggregateInput
    _avg?: exemplaresAvgOrderByAggregateInput
    _max?: exemplaresMaxOrderByAggregateInput
    _min?: exemplaresMinOrderByAggregateInput
    _sum?: exemplaresSumOrderByAggregateInput
  }

  export type exemplaresScalarWhereWithAggregatesInput = {
    AND?: exemplaresScalarWhereWithAggregatesInput | exemplaresScalarWhereWithAggregatesInput[]
    OR?: exemplaresScalarWhereWithAggregatesInput[]
    NOT?: exemplaresScalarWhereWithAggregatesInput | exemplaresScalarWhereWithAggregatesInput[]
    id_exemplar?: IntWithAggregatesFilter<"exemplares"> | number
    id_livro?: IntWithAggregatesFilter<"exemplares"> | number
    codigo_exemplar?: StringWithAggregatesFilter<"exemplares"> | string
    status?: StringWithAggregatesFilter<"exemplares"> | string
  }

  export type emprestimosWhereInput = {
    AND?: emprestimosWhereInput | emprestimosWhereInput[]
    OR?: emprestimosWhereInput[]
    NOT?: emprestimosWhereInput | emprestimosWhereInput[]
    id_emprestimo?: IntFilter<"emprestimos"> | number
    id_usuario?: IntFilter<"emprestimos"> | number
    id_exemplar?: IntFilter<"emprestimos"> | number
    data_retirada?: DateTimeFilter<"emprestimos"> | Date | string
    data_prevista_devolucao?: DateTimeFilter<"emprestimos"> | Date | string
    data_devolucao?: DateTimeFilter<"emprestimos"> | Date | string
    renovado?: BoolFilter<"emprestimos"> | boolean
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    exemplar?: XOR<ExemplaresScalarRelationFilter, exemplaresWhereInput>
  }

  export type emprestimosOrderByWithRelationInput = {
    id_emprestimo?: SortOrder
    id_usuario?: SortOrder
    id_exemplar?: SortOrder
    data_retirada?: SortOrder
    data_prevista_devolucao?: SortOrder
    data_devolucao?: SortOrder
    renovado?: SortOrder
    usuario?: usuariosOrderByWithRelationInput
    exemplar?: exemplaresOrderByWithRelationInput
  }

  export type emprestimosWhereUniqueInput = Prisma.AtLeast<{
    id_emprestimo?: number
    AND?: emprestimosWhereInput | emprestimosWhereInput[]
    OR?: emprestimosWhereInput[]
    NOT?: emprestimosWhereInput | emprestimosWhereInput[]
    id_usuario?: IntFilter<"emprestimos"> | number
    id_exemplar?: IntFilter<"emprestimos"> | number
    data_retirada?: DateTimeFilter<"emprestimos"> | Date | string
    data_prevista_devolucao?: DateTimeFilter<"emprestimos"> | Date | string
    data_devolucao?: DateTimeFilter<"emprestimos"> | Date | string
    renovado?: BoolFilter<"emprestimos"> | boolean
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    exemplar?: XOR<ExemplaresScalarRelationFilter, exemplaresWhereInput>
  }, "id_emprestimo">

  export type emprestimosOrderByWithAggregationInput = {
    id_emprestimo?: SortOrder
    id_usuario?: SortOrder
    id_exemplar?: SortOrder
    data_retirada?: SortOrder
    data_prevista_devolucao?: SortOrder
    data_devolucao?: SortOrder
    renovado?: SortOrder
    _count?: emprestimosCountOrderByAggregateInput
    _avg?: emprestimosAvgOrderByAggregateInput
    _max?: emprestimosMaxOrderByAggregateInput
    _min?: emprestimosMinOrderByAggregateInput
    _sum?: emprestimosSumOrderByAggregateInput
  }

  export type emprestimosScalarWhereWithAggregatesInput = {
    AND?: emprestimosScalarWhereWithAggregatesInput | emprestimosScalarWhereWithAggregatesInput[]
    OR?: emprestimosScalarWhereWithAggregatesInput[]
    NOT?: emprestimosScalarWhereWithAggregatesInput | emprestimosScalarWhereWithAggregatesInput[]
    id_emprestimo?: IntWithAggregatesFilter<"emprestimos"> | number
    id_usuario?: IntWithAggregatesFilter<"emprestimos"> | number
    id_exemplar?: IntWithAggregatesFilter<"emprestimos"> | number
    data_retirada?: DateTimeWithAggregatesFilter<"emprestimos"> | Date | string
    data_prevista_devolucao?: DateTimeWithAggregatesFilter<"emprestimos"> | Date | string
    data_devolucao?: DateTimeWithAggregatesFilter<"emprestimos"> | Date | string
    renovado?: BoolWithAggregatesFilter<"emprestimos"> | boolean
  }

  export type reservasWhereInput = {
    AND?: reservasWhereInput | reservasWhereInput[]
    OR?: reservasWhereInput[]
    NOT?: reservasWhereInput | reservasWhereInput[]
    id_reserva?: IntFilter<"reservas"> | number
    id_usuario?: IntFilter<"reservas"> | number
    id_livro?: IntFilter<"reservas"> | number
    data_reserva?: DateTimeFilter<"reservas"> | Date | string
    status?: StringFilter<"reservas"> | string
    posicao_fila?: IntFilter<"reservas"> | number
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    livro?: XOR<LivrosScalarRelationFilter, livrosWhereInput>
  }

  export type reservasOrderByWithRelationInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_livro?: SortOrder
    data_reserva?: SortOrder
    status?: SortOrder
    posicao_fila?: SortOrder
    usuario?: usuariosOrderByWithRelationInput
    livro?: livrosOrderByWithRelationInput
  }

  export type reservasWhereUniqueInput = Prisma.AtLeast<{
    id_reserva?: number
    AND?: reservasWhereInput | reservasWhereInput[]
    OR?: reservasWhereInput[]
    NOT?: reservasWhereInput | reservasWhereInput[]
    id_usuario?: IntFilter<"reservas"> | number
    id_livro?: IntFilter<"reservas"> | number
    data_reserva?: DateTimeFilter<"reservas"> | Date | string
    status?: StringFilter<"reservas"> | string
    posicao_fila?: IntFilter<"reservas"> | number
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    livro?: XOR<LivrosScalarRelationFilter, livrosWhereInput>
  }, "id_reserva">

  export type reservasOrderByWithAggregationInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_livro?: SortOrder
    data_reserva?: SortOrder
    status?: SortOrder
    posicao_fila?: SortOrder
    _count?: reservasCountOrderByAggregateInput
    _avg?: reservasAvgOrderByAggregateInput
    _max?: reservasMaxOrderByAggregateInput
    _min?: reservasMinOrderByAggregateInput
    _sum?: reservasSumOrderByAggregateInput
  }

  export type reservasScalarWhereWithAggregatesInput = {
    AND?: reservasScalarWhereWithAggregatesInput | reservasScalarWhereWithAggregatesInput[]
    OR?: reservasScalarWhereWithAggregatesInput[]
    NOT?: reservasScalarWhereWithAggregatesInput | reservasScalarWhereWithAggregatesInput[]
    id_reserva?: IntWithAggregatesFilter<"reservas"> | number
    id_usuario?: IntWithAggregatesFilter<"reservas"> | number
    id_livro?: IntWithAggregatesFilter<"reservas"> | number
    data_reserva?: DateTimeWithAggregatesFilter<"reservas"> | Date | string
    status?: StringWithAggregatesFilter<"reservas"> | string
    posicao_fila?: IntWithAggregatesFilter<"reservas"> | number
  }

  export type avaliacoesWhereInput = {
    AND?: avaliacoesWhereInput | avaliacoesWhereInput[]
    OR?: avaliacoesWhereInput[]
    NOT?: avaliacoesWhereInput | avaliacoesWhereInput[]
    id_avaliacao?: IntFilter<"avaliacoes"> | number
    id_usuario?: IntFilter<"avaliacoes"> | number
    id_livro?: IntFilter<"avaliacoes"> | number
    nota?: IntFilter<"avaliacoes"> | number
    comentario?: StringFilter<"avaliacoes"> | string
    data_avaliacao?: DateTimeFilter<"avaliacoes"> | Date | string
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    livro?: XOR<LivrosScalarRelationFilter, livrosWhereInput>
  }

  export type avaliacoesOrderByWithRelationInput = {
    id_avaliacao?: SortOrder
    id_usuario?: SortOrder
    id_livro?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    data_avaliacao?: SortOrder
    usuario?: usuariosOrderByWithRelationInput
    livro?: livrosOrderByWithRelationInput
  }

  export type avaliacoesWhereUniqueInput = Prisma.AtLeast<{
    id_avaliacao?: number
    AND?: avaliacoesWhereInput | avaliacoesWhereInput[]
    OR?: avaliacoesWhereInput[]
    NOT?: avaliacoesWhereInput | avaliacoesWhereInput[]
    id_usuario?: IntFilter<"avaliacoes"> | number
    id_livro?: IntFilter<"avaliacoes"> | number
    nota?: IntFilter<"avaliacoes"> | number
    comentario?: StringFilter<"avaliacoes"> | string
    data_avaliacao?: DateTimeFilter<"avaliacoes"> | Date | string
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    livro?: XOR<LivrosScalarRelationFilter, livrosWhereInput>
  }, "id_avaliacao">

  export type avaliacoesOrderByWithAggregationInput = {
    id_avaliacao?: SortOrder
    id_usuario?: SortOrder
    id_livro?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    data_avaliacao?: SortOrder
    _count?: avaliacoesCountOrderByAggregateInput
    _avg?: avaliacoesAvgOrderByAggregateInput
    _max?: avaliacoesMaxOrderByAggregateInput
    _min?: avaliacoesMinOrderByAggregateInput
    _sum?: avaliacoesSumOrderByAggregateInput
  }

  export type avaliacoesScalarWhereWithAggregatesInput = {
    AND?: avaliacoesScalarWhereWithAggregatesInput | avaliacoesScalarWhereWithAggregatesInput[]
    OR?: avaliacoesScalarWhereWithAggregatesInput[]
    NOT?: avaliacoesScalarWhereWithAggregatesInput | avaliacoesScalarWhereWithAggregatesInput[]
    id_avaliacao?: IntWithAggregatesFilter<"avaliacoes"> | number
    id_usuario?: IntWithAggregatesFilter<"avaliacoes"> | number
    id_livro?: IntWithAggregatesFilter<"avaliacoes"> | number
    nota?: IntWithAggregatesFilter<"avaliacoes"> | number
    comentario?: StringWithAggregatesFilter<"avaliacoes"> | string
    data_avaliacao?: DateTimeWithAggregatesFilter<"avaliacoes"> | Date | string
  }

  export type historicoWhereInput = {
    AND?: historicoWhereInput | historicoWhereInput[]
    OR?: historicoWhereInput[]
    NOT?: historicoWhereInput | historicoWhereInput[]
    id_historico?: IntFilter<"historico"> | number
    id_usuario?: IntFilter<"historico"> | number
    id_exemplar?: IntFilter<"historico"> | number
    acao?: StringFilter<"historico"> | string
    data_acao?: DateTimeFilter<"historico"> | Date | string
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    exemplar?: XOR<ExemplaresScalarRelationFilter, exemplaresWhereInput>
  }

  export type historicoOrderByWithRelationInput = {
    id_historico?: SortOrder
    id_usuario?: SortOrder
    id_exemplar?: SortOrder
    acao?: SortOrder
    data_acao?: SortOrder
    usuario?: usuariosOrderByWithRelationInput
    exemplar?: exemplaresOrderByWithRelationInput
  }

  export type historicoWhereUniqueInput = Prisma.AtLeast<{
    id_historico?: number
    AND?: historicoWhereInput | historicoWhereInput[]
    OR?: historicoWhereInput[]
    NOT?: historicoWhereInput | historicoWhereInput[]
    id_usuario?: IntFilter<"historico"> | number
    id_exemplar?: IntFilter<"historico"> | number
    acao?: StringFilter<"historico"> | string
    data_acao?: DateTimeFilter<"historico"> | Date | string
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    exemplar?: XOR<ExemplaresScalarRelationFilter, exemplaresWhereInput>
  }, "id_historico">

  export type historicoOrderByWithAggregationInput = {
    id_historico?: SortOrder
    id_usuario?: SortOrder
    id_exemplar?: SortOrder
    acao?: SortOrder
    data_acao?: SortOrder
    _count?: historicoCountOrderByAggregateInput
    _avg?: historicoAvgOrderByAggregateInput
    _max?: historicoMaxOrderByAggregateInput
    _min?: historicoMinOrderByAggregateInput
    _sum?: historicoSumOrderByAggregateInput
  }

  export type historicoScalarWhereWithAggregatesInput = {
    AND?: historicoScalarWhereWithAggregatesInput | historicoScalarWhereWithAggregatesInput[]
    OR?: historicoScalarWhereWithAggregatesInput[]
    NOT?: historicoScalarWhereWithAggregatesInput | historicoScalarWhereWithAggregatesInput[]
    id_historico?: IntWithAggregatesFilter<"historico"> | number
    id_usuario?: IntWithAggregatesFilter<"historico"> | number
    id_exemplar?: IntWithAggregatesFilter<"historico"> | number
    acao?: StringWithAggregatesFilter<"historico"> | string
    data_acao?: DateTimeWithAggregatesFilter<"historico"> | Date | string
  }

  export type usuariosCreateInput = {
    name: string
    email: string
    password: string
    status: string
    data_cadastro?: Date | string
    emprestimos?: emprestimosCreateNestedManyWithoutUsuarioInput
    reservas?: reservasCreateNestedManyWithoutUsuarioInput
    avaliacoes?: avaliacoesCreateNestedManyWithoutUsuarioInput
    historico?: historicoCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: number
    name: string
    email: string
    password: string
    status: string
    data_cadastro?: Date | string
    emprestimos?: emprestimosUncheckedCreateNestedManyWithoutUsuarioInput
    reservas?: reservasUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: avaliacoesUncheckedCreateNestedManyWithoutUsuarioInput
    historico?: historicoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: emprestimosUpdateManyWithoutUsuarioNestedInput
    reservas?: reservasUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: avaliacoesUpdateManyWithoutUsuarioNestedInput
    historico?: historicoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: emprestimosUncheckedUpdateManyWithoutUsuarioNestedInput
    reservas?: reservasUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: avaliacoesUncheckedUpdateManyWithoutUsuarioNestedInput
    historico?: historicoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosCreateManyInput = {
    id_usuario?: number
    name: string
    email: string
    password: string
    status: string
    data_cadastro?: Date | string
  }

  export type usuariosUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type livrosCreateInput = {
    isbn: string
    titulo: string
    autor: string
    editora: string
    ano_publicacao: number
    sinopse: string
    exemplares?: exemplaresCreateNestedManyWithoutLivroInput
    reservas?: reservasCreateNestedManyWithoutLivroInput
    avaliacoes?: avaliacoesCreateNestedManyWithoutLivroInput
  }

  export type livrosUncheckedCreateInput = {
    id_livro?: number
    isbn: string
    titulo: string
    autor: string
    editora: string
    ano_publicacao: number
    sinopse: string
    exemplares?: exemplaresUncheckedCreateNestedManyWithoutLivroInput
    reservas?: reservasUncheckedCreateNestedManyWithoutLivroInput
    avaliacoes?: avaliacoesUncheckedCreateNestedManyWithoutLivroInput
  }

  export type livrosUpdateInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    ano_publicacao?: IntFieldUpdateOperationsInput | number
    sinopse?: StringFieldUpdateOperationsInput | string
    exemplares?: exemplaresUpdateManyWithoutLivroNestedInput
    reservas?: reservasUpdateManyWithoutLivroNestedInput
    avaliacoes?: avaliacoesUpdateManyWithoutLivroNestedInput
  }

  export type livrosUncheckedUpdateInput = {
    id_livro?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    ano_publicacao?: IntFieldUpdateOperationsInput | number
    sinopse?: StringFieldUpdateOperationsInput | string
    exemplares?: exemplaresUncheckedUpdateManyWithoutLivroNestedInput
    reservas?: reservasUncheckedUpdateManyWithoutLivroNestedInput
    avaliacoes?: avaliacoesUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type livrosCreateManyInput = {
    id_livro?: number
    isbn: string
    titulo: string
    autor: string
    editora: string
    ano_publicacao: number
    sinopse: string
  }

  export type livrosUpdateManyMutationInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    ano_publicacao?: IntFieldUpdateOperationsInput | number
    sinopse?: StringFieldUpdateOperationsInput | string
  }

  export type livrosUncheckedUpdateManyInput = {
    id_livro?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    ano_publicacao?: IntFieldUpdateOperationsInput | number
    sinopse?: StringFieldUpdateOperationsInput | string
  }

  export type exemplaresCreateInput = {
    codigo_exemplar: string
    status: string
    livro: livrosCreateNestedOneWithoutExemplaresInput
    emprestimos?: emprestimosCreateNestedManyWithoutExemplarInput
    historico?: historicoCreateNestedManyWithoutExemplarInput
  }

  export type exemplaresUncheckedCreateInput = {
    id_exemplar?: number
    id_livro: number
    codigo_exemplar: string
    status: string
    emprestimos?: emprestimosUncheckedCreateNestedManyWithoutExemplarInput
    historico?: historicoUncheckedCreateNestedManyWithoutExemplarInput
  }

  export type exemplaresUpdateInput = {
    codigo_exemplar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    livro?: livrosUpdateOneRequiredWithoutExemplaresNestedInput
    emprestimos?: emprestimosUpdateManyWithoutExemplarNestedInput
    historico?: historicoUpdateManyWithoutExemplarNestedInput
  }

  export type exemplaresUncheckedUpdateInput = {
    id_exemplar?: IntFieldUpdateOperationsInput | number
    id_livro?: IntFieldUpdateOperationsInput | number
    codigo_exemplar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    emprestimos?: emprestimosUncheckedUpdateManyWithoutExemplarNestedInput
    historico?: historicoUncheckedUpdateManyWithoutExemplarNestedInput
  }

  export type exemplaresCreateManyInput = {
    id_exemplar?: number
    id_livro: number
    codigo_exemplar: string
    status: string
  }

  export type exemplaresUpdateManyMutationInput = {
    codigo_exemplar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type exemplaresUncheckedUpdateManyInput = {
    id_exemplar?: IntFieldUpdateOperationsInput | number
    id_livro?: IntFieldUpdateOperationsInput | number
    codigo_exemplar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type emprestimosCreateInput = {
    data_retirada: Date | string
    data_prevista_devolucao: Date | string
    data_devolucao: Date | string
    renovado: boolean
    usuario: usuariosCreateNestedOneWithoutEmprestimosInput
    exemplar: exemplaresCreateNestedOneWithoutEmprestimosInput
  }

  export type emprestimosUncheckedCreateInput = {
    id_emprestimo?: number
    id_usuario: number
    id_exemplar: number
    data_retirada: Date | string
    data_prevista_devolucao: Date | string
    data_devolucao: Date | string
    renovado: boolean
  }

  export type emprestimosUpdateInput = {
    data_retirada?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prevista_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    renovado?: BoolFieldUpdateOperationsInput | boolean
    usuario?: usuariosUpdateOneRequiredWithoutEmprestimosNestedInput
    exemplar?: exemplaresUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type emprestimosUncheckedUpdateInput = {
    id_emprestimo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_exemplar?: IntFieldUpdateOperationsInput | number
    data_retirada?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prevista_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    renovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type emprestimosCreateManyInput = {
    id_emprestimo?: number
    id_usuario: number
    id_exemplar: number
    data_retirada: Date | string
    data_prevista_devolucao: Date | string
    data_devolucao: Date | string
    renovado: boolean
  }

  export type emprestimosUpdateManyMutationInput = {
    data_retirada?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prevista_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    renovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type emprestimosUncheckedUpdateManyInput = {
    id_emprestimo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_exemplar?: IntFieldUpdateOperationsInput | number
    data_retirada?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prevista_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    renovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type reservasCreateInput = {
    data_reserva: Date | string
    status: string
    posicao_fila: number
    usuario: usuariosCreateNestedOneWithoutReservasInput
    livro: livrosCreateNestedOneWithoutReservasInput
  }

  export type reservasUncheckedCreateInput = {
    id_reserva?: number
    id_usuario: number
    id_livro: number
    data_reserva: Date | string
    status: string
    posicao_fila: number
  }

  export type reservasUpdateInput = {
    data_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    posicao_fila?: IntFieldUpdateOperationsInput | number
    usuario?: usuariosUpdateOneRequiredWithoutReservasNestedInput
    livro?: livrosUpdateOneRequiredWithoutReservasNestedInput
  }

  export type reservasUncheckedUpdateInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_livro?: IntFieldUpdateOperationsInput | number
    data_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    posicao_fila?: IntFieldUpdateOperationsInput | number
  }

  export type reservasCreateManyInput = {
    id_reserva?: number
    id_usuario: number
    id_livro: number
    data_reserva: Date | string
    status: string
    posicao_fila: number
  }

  export type reservasUpdateManyMutationInput = {
    data_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    posicao_fila?: IntFieldUpdateOperationsInput | number
  }

  export type reservasUncheckedUpdateManyInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_livro?: IntFieldUpdateOperationsInput | number
    data_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    posicao_fila?: IntFieldUpdateOperationsInput | number
  }

  export type avaliacoesCreateInput = {
    nota: number
    comentario: string
    data_avaliacao?: Date | string
    usuario: usuariosCreateNestedOneWithoutAvaliacoesInput
    livro: livrosCreateNestedOneWithoutAvaliacoesInput
  }

  export type avaliacoesUncheckedCreateInput = {
    id_avaliacao?: number
    id_usuario: number
    id_livro: number
    nota: number
    comentario: string
    data_avaliacao?: Date | string
  }

  export type avaliacoesUpdateInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuariosUpdateOneRequiredWithoutAvaliacoesNestedInput
    livro?: livrosUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type avaliacoesUncheckedUpdateInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_livro?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type avaliacoesCreateManyInput = {
    id_avaliacao?: number
    id_usuario: number
    id_livro: number
    nota: number
    comentario: string
    data_avaliacao?: Date | string
  }

  export type avaliacoesUpdateManyMutationInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type avaliacoesUncheckedUpdateManyInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_livro?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historicoCreateInput = {
    acao: string
    data_acao?: Date | string
    usuario: usuariosCreateNestedOneWithoutHistoricoInput
    exemplar: exemplaresCreateNestedOneWithoutHistoricoInput
  }

  export type historicoUncheckedCreateInput = {
    id_historico?: number
    id_usuario: number
    id_exemplar: number
    acao: string
    data_acao?: Date | string
  }

  export type historicoUpdateInput = {
    acao?: StringFieldUpdateOperationsInput | string
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuariosUpdateOneRequiredWithoutHistoricoNestedInput
    exemplar?: exemplaresUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type historicoUncheckedUpdateInput = {
    id_historico?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_exemplar?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historicoCreateManyInput = {
    id_historico?: number
    id_usuario: number
    id_exemplar: number
    acao: string
    data_acao?: Date | string
  }

  export type historicoUpdateManyMutationInput = {
    acao?: StringFieldUpdateOperationsInput | string
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historicoUncheckedUpdateManyInput = {
    id_historico?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_exemplar?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmprestimosListRelationFilter = {
    every?: emprestimosWhereInput
    some?: emprestimosWhereInput
    none?: emprestimosWhereInput
  }

  export type ReservasListRelationFilter = {
    every?: reservasWhereInput
    some?: reservasWhereInput
    none?: reservasWhereInput
  }

  export type AvaliacoesListRelationFilter = {
    every?: avaliacoesWhereInput
    some?: avaliacoesWhereInput
    none?: avaliacoesWhereInput
  }

  export type HistoricoListRelationFilter = {
    every?: historicoWhereInput
    some?: historicoWhereInput
    none?: historicoWhereInput
  }

  export type emprestimosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reservasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type avaliacoesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type historicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    data_cadastro?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    data_cadastro?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    data_cadastro?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ExemplaresListRelationFilter = {
    every?: exemplaresWhereInput
    some?: exemplaresWhereInput
    none?: exemplaresWhereInput
  }

  export type exemplaresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type livrosCountOrderByAggregateInput = {
    id_livro?: SortOrder
    isbn?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    editora?: SortOrder
    ano_publicacao?: SortOrder
    sinopse?: SortOrder
  }

  export type livrosAvgOrderByAggregateInput = {
    id_livro?: SortOrder
    ano_publicacao?: SortOrder
  }

  export type livrosMaxOrderByAggregateInput = {
    id_livro?: SortOrder
    isbn?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    editora?: SortOrder
    ano_publicacao?: SortOrder
    sinopse?: SortOrder
  }

  export type livrosMinOrderByAggregateInput = {
    id_livro?: SortOrder
    isbn?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    editora?: SortOrder
    ano_publicacao?: SortOrder
    sinopse?: SortOrder
  }

  export type livrosSumOrderByAggregateInput = {
    id_livro?: SortOrder
    ano_publicacao?: SortOrder
  }

  export type LivrosScalarRelationFilter = {
    is?: livrosWhereInput
    isNot?: livrosWhereInput
  }

  export type exemplaresCountOrderByAggregateInput = {
    id_exemplar?: SortOrder
    id_livro?: SortOrder
    codigo_exemplar?: SortOrder
    status?: SortOrder
  }

  export type exemplaresAvgOrderByAggregateInput = {
    id_exemplar?: SortOrder
    id_livro?: SortOrder
  }

  export type exemplaresMaxOrderByAggregateInput = {
    id_exemplar?: SortOrder
    id_livro?: SortOrder
    codigo_exemplar?: SortOrder
    status?: SortOrder
  }

  export type exemplaresMinOrderByAggregateInput = {
    id_exemplar?: SortOrder
    id_livro?: SortOrder
    codigo_exemplar?: SortOrder
    status?: SortOrder
  }

  export type exemplaresSumOrderByAggregateInput = {
    id_exemplar?: SortOrder
    id_livro?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type ExemplaresScalarRelationFilter = {
    is?: exemplaresWhereInput
    isNot?: exemplaresWhereInput
  }

  export type emprestimosCountOrderByAggregateInput = {
    id_emprestimo?: SortOrder
    id_usuario?: SortOrder
    id_exemplar?: SortOrder
    data_retirada?: SortOrder
    data_prevista_devolucao?: SortOrder
    data_devolucao?: SortOrder
    renovado?: SortOrder
  }

  export type emprestimosAvgOrderByAggregateInput = {
    id_emprestimo?: SortOrder
    id_usuario?: SortOrder
    id_exemplar?: SortOrder
  }

  export type emprestimosMaxOrderByAggregateInput = {
    id_emprestimo?: SortOrder
    id_usuario?: SortOrder
    id_exemplar?: SortOrder
    data_retirada?: SortOrder
    data_prevista_devolucao?: SortOrder
    data_devolucao?: SortOrder
    renovado?: SortOrder
  }

  export type emprestimosMinOrderByAggregateInput = {
    id_emprestimo?: SortOrder
    id_usuario?: SortOrder
    id_exemplar?: SortOrder
    data_retirada?: SortOrder
    data_prevista_devolucao?: SortOrder
    data_devolucao?: SortOrder
    renovado?: SortOrder
  }

  export type emprestimosSumOrderByAggregateInput = {
    id_emprestimo?: SortOrder
    id_usuario?: SortOrder
    id_exemplar?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type reservasCountOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_livro?: SortOrder
    data_reserva?: SortOrder
    status?: SortOrder
    posicao_fila?: SortOrder
  }

  export type reservasAvgOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_livro?: SortOrder
    posicao_fila?: SortOrder
  }

  export type reservasMaxOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_livro?: SortOrder
    data_reserva?: SortOrder
    status?: SortOrder
    posicao_fila?: SortOrder
  }

  export type reservasMinOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_livro?: SortOrder
    data_reserva?: SortOrder
    status?: SortOrder
    posicao_fila?: SortOrder
  }

  export type reservasSumOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_livro?: SortOrder
    posicao_fila?: SortOrder
  }

  export type avaliacoesCountOrderByAggregateInput = {
    id_avaliacao?: SortOrder
    id_usuario?: SortOrder
    id_livro?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    data_avaliacao?: SortOrder
  }

  export type avaliacoesAvgOrderByAggregateInput = {
    id_avaliacao?: SortOrder
    id_usuario?: SortOrder
    id_livro?: SortOrder
    nota?: SortOrder
  }

  export type avaliacoesMaxOrderByAggregateInput = {
    id_avaliacao?: SortOrder
    id_usuario?: SortOrder
    id_livro?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    data_avaliacao?: SortOrder
  }

  export type avaliacoesMinOrderByAggregateInput = {
    id_avaliacao?: SortOrder
    id_usuario?: SortOrder
    id_livro?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    data_avaliacao?: SortOrder
  }

  export type avaliacoesSumOrderByAggregateInput = {
    id_avaliacao?: SortOrder
    id_usuario?: SortOrder
    id_livro?: SortOrder
    nota?: SortOrder
  }

  export type historicoCountOrderByAggregateInput = {
    id_historico?: SortOrder
    id_usuario?: SortOrder
    id_exemplar?: SortOrder
    acao?: SortOrder
    data_acao?: SortOrder
  }

  export type historicoAvgOrderByAggregateInput = {
    id_historico?: SortOrder
    id_usuario?: SortOrder
    id_exemplar?: SortOrder
  }

  export type historicoMaxOrderByAggregateInput = {
    id_historico?: SortOrder
    id_usuario?: SortOrder
    id_exemplar?: SortOrder
    acao?: SortOrder
    data_acao?: SortOrder
  }

  export type historicoMinOrderByAggregateInput = {
    id_historico?: SortOrder
    id_usuario?: SortOrder
    id_exemplar?: SortOrder
    acao?: SortOrder
    data_acao?: SortOrder
  }

  export type historicoSumOrderByAggregateInput = {
    id_historico?: SortOrder
    id_usuario?: SortOrder
    id_exemplar?: SortOrder
  }

  export type emprestimosCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<emprestimosCreateWithoutUsuarioInput, emprestimosUncheckedCreateWithoutUsuarioInput> | emprestimosCreateWithoutUsuarioInput[] | emprestimosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: emprestimosCreateOrConnectWithoutUsuarioInput | emprestimosCreateOrConnectWithoutUsuarioInput[]
    createMany?: emprestimosCreateManyUsuarioInputEnvelope
    connect?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
  }

  export type reservasCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<reservasCreateWithoutUsuarioInput, reservasUncheckedCreateWithoutUsuarioInput> | reservasCreateWithoutUsuarioInput[] | reservasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuarioInput | reservasCreateOrConnectWithoutUsuarioInput[]
    createMany?: reservasCreateManyUsuarioInputEnvelope
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
  }

  export type avaliacoesCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<avaliacoesCreateWithoutUsuarioInput, avaliacoesUncheckedCreateWithoutUsuarioInput> | avaliacoesCreateWithoutUsuarioInput[] | avaliacoesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: avaliacoesCreateOrConnectWithoutUsuarioInput | avaliacoesCreateOrConnectWithoutUsuarioInput[]
    createMany?: avaliacoesCreateManyUsuarioInputEnvelope
    connect?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
  }

  export type historicoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<historicoCreateWithoutUsuarioInput, historicoUncheckedCreateWithoutUsuarioInput> | historicoCreateWithoutUsuarioInput[] | historicoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: historicoCreateOrConnectWithoutUsuarioInput | historicoCreateOrConnectWithoutUsuarioInput[]
    createMany?: historicoCreateManyUsuarioInputEnvelope
    connect?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
  }

  export type emprestimosUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<emprestimosCreateWithoutUsuarioInput, emprestimosUncheckedCreateWithoutUsuarioInput> | emprestimosCreateWithoutUsuarioInput[] | emprestimosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: emprestimosCreateOrConnectWithoutUsuarioInput | emprestimosCreateOrConnectWithoutUsuarioInput[]
    createMany?: emprestimosCreateManyUsuarioInputEnvelope
    connect?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
  }

  export type reservasUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<reservasCreateWithoutUsuarioInput, reservasUncheckedCreateWithoutUsuarioInput> | reservasCreateWithoutUsuarioInput[] | reservasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuarioInput | reservasCreateOrConnectWithoutUsuarioInput[]
    createMany?: reservasCreateManyUsuarioInputEnvelope
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
  }

  export type avaliacoesUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<avaliacoesCreateWithoutUsuarioInput, avaliacoesUncheckedCreateWithoutUsuarioInput> | avaliacoesCreateWithoutUsuarioInput[] | avaliacoesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: avaliacoesCreateOrConnectWithoutUsuarioInput | avaliacoesCreateOrConnectWithoutUsuarioInput[]
    createMany?: avaliacoesCreateManyUsuarioInputEnvelope
    connect?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
  }

  export type historicoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<historicoCreateWithoutUsuarioInput, historicoUncheckedCreateWithoutUsuarioInput> | historicoCreateWithoutUsuarioInput[] | historicoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: historicoCreateOrConnectWithoutUsuarioInput | historicoCreateOrConnectWithoutUsuarioInput[]
    createMany?: historicoCreateManyUsuarioInputEnvelope
    connect?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type emprestimosUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<emprestimosCreateWithoutUsuarioInput, emprestimosUncheckedCreateWithoutUsuarioInput> | emprestimosCreateWithoutUsuarioInput[] | emprestimosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: emprestimosCreateOrConnectWithoutUsuarioInput | emprestimosCreateOrConnectWithoutUsuarioInput[]
    upsert?: emprestimosUpsertWithWhereUniqueWithoutUsuarioInput | emprestimosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: emprestimosCreateManyUsuarioInputEnvelope
    set?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    disconnect?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    delete?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    connect?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    update?: emprestimosUpdateWithWhereUniqueWithoutUsuarioInput | emprestimosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: emprestimosUpdateManyWithWhereWithoutUsuarioInput | emprestimosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: emprestimosScalarWhereInput | emprestimosScalarWhereInput[]
  }

  export type reservasUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<reservasCreateWithoutUsuarioInput, reservasUncheckedCreateWithoutUsuarioInput> | reservasCreateWithoutUsuarioInput[] | reservasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuarioInput | reservasCreateOrConnectWithoutUsuarioInput[]
    upsert?: reservasUpsertWithWhereUniqueWithoutUsuarioInput | reservasUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: reservasCreateManyUsuarioInputEnvelope
    set?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    disconnect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    delete?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    update?: reservasUpdateWithWhereUniqueWithoutUsuarioInput | reservasUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: reservasUpdateManyWithWhereWithoutUsuarioInput | reservasUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: reservasScalarWhereInput | reservasScalarWhereInput[]
  }

  export type avaliacoesUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<avaliacoesCreateWithoutUsuarioInput, avaliacoesUncheckedCreateWithoutUsuarioInput> | avaliacoesCreateWithoutUsuarioInput[] | avaliacoesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: avaliacoesCreateOrConnectWithoutUsuarioInput | avaliacoesCreateOrConnectWithoutUsuarioInput[]
    upsert?: avaliacoesUpsertWithWhereUniqueWithoutUsuarioInput | avaliacoesUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: avaliacoesCreateManyUsuarioInputEnvelope
    set?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    disconnect?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    delete?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    connect?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    update?: avaliacoesUpdateWithWhereUniqueWithoutUsuarioInput | avaliacoesUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: avaliacoesUpdateManyWithWhereWithoutUsuarioInput | avaliacoesUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: avaliacoesScalarWhereInput | avaliacoesScalarWhereInput[]
  }

  export type historicoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<historicoCreateWithoutUsuarioInput, historicoUncheckedCreateWithoutUsuarioInput> | historicoCreateWithoutUsuarioInput[] | historicoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: historicoCreateOrConnectWithoutUsuarioInput | historicoCreateOrConnectWithoutUsuarioInput[]
    upsert?: historicoUpsertWithWhereUniqueWithoutUsuarioInput | historicoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: historicoCreateManyUsuarioInputEnvelope
    set?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    disconnect?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    delete?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    connect?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    update?: historicoUpdateWithWhereUniqueWithoutUsuarioInput | historicoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: historicoUpdateManyWithWhereWithoutUsuarioInput | historicoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: historicoScalarWhereInput | historicoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type emprestimosUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<emprestimosCreateWithoutUsuarioInput, emprestimosUncheckedCreateWithoutUsuarioInput> | emprestimosCreateWithoutUsuarioInput[] | emprestimosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: emprestimosCreateOrConnectWithoutUsuarioInput | emprestimosCreateOrConnectWithoutUsuarioInput[]
    upsert?: emprestimosUpsertWithWhereUniqueWithoutUsuarioInput | emprestimosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: emprestimosCreateManyUsuarioInputEnvelope
    set?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    disconnect?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    delete?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    connect?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    update?: emprestimosUpdateWithWhereUniqueWithoutUsuarioInput | emprestimosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: emprestimosUpdateManyWithWhereWithoutUsuarioInput | emprestimosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: emprestimosScalarWhereInput | emprestimosScalarWhereInput[]
  }

  export type reservasUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<reservasCreateWithoutUsuarioInput, reservasUncheckedCreateWithoutUsuarioInput> | reservasCreateWithoutUsuarioInput[] | reservasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuarioInput | reservasCreateOrConnectWithoutUsuarioInput[]
    upsert?: reservasUpsertWithWhereUniqueWithoutUsuarioInput | reservasUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: reservasCreateManyUsuarioInputEnvelope
    set?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    disconnect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    delete?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    update?: reservasUpdateWithWhereUniqueWithoutUsuarioInput | reservasUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: reservasUpdateManyWithWhereWithoutUsuarioInput | reservasUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: reservasScalarWhereInput | reservasScalarWhereInput[]
  }

  export type avaliacoesUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<avaliacoesCreateWithoutUsuarioInput, avaliacoesUncheckedCreateWithoutUsuarioInput> | avaliacoesCreateWithoutUsuarioInput[] | avaliacoesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: avaliacoesCreateOrConnectWithoutUsuarioInput | avaliacoesCreateOrConnectWithoutUsuarioInput[]
    upsert?: avaliacoesUpsertWithWhereUniqueWithoutUsuarioInput | avaliacoesUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: avaliacoesCreateManyUsuarioInputEnvelope
    set?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    disconnect?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    delete?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    connect?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    update?: avaliacoesUpdateWithWhereUniqueWithoutUsuarioInput | avaliacoesUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: avaliacoesUpdateManyWithWhereWithoutUsuarioInput | avaliacoesUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: avaliacoesScalarWhereInput | avaliacoesScalarWhereInput[]
  }

  export type historicoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<historicoCreateWithoutUsuarioInput, historicoUncheckedCreateWithoutUsuarioInput> | historicoCreateWithoutUsuarioInput[] | historicoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: historicoCreateOrConnectWithoutUsuarioInput | historicoCreateOrConnectWithoutUsuarioInput[]
    upsert?: historicoUpsertWithWhereUniqueWithoutUsuarioInput | historicoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: historicoCreateManyUsuarioInputEnvelope
    set?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    disconnect?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    delete?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    connect?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    update?: historicoUpdateWithWhereUniqueWithoutUsuarioInput | historicoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: historicoUpdateManyWithWhereWithoutUsuarioInput | historicoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: historicoScalarWhereInput | historicoScalarWhereInput[]
  }

  export type exemplaresCreateNestedManyWithoutLivroInput = {
    create?: XOR<exemplaresCreateWithoutLivroInput, exemplaresUncheckedCreateWithoutLivroInput> | exemplaresCreateWithoutLivroInput[] | exemplaresUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: exemplaresCreateOrConnectWithoutLivroInput | exemplaresCreateOrConnectWithoutLivroInput[]
    createMany?: exemplaresCreateManyLivroInputEnvelope
    connect?: exemplaresWhereUniqueInput | exemplaresWhereUniqueInput[]
  }

  export type reservasCreateNestedManyWithoutLivroInput = {
    create?: XOR<reservasCreateWithoutLivroInput, reservasUncheckedCreateWithoutLivroInput> | reservasCreateWithoutLivroInput[] | reservasUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutLivroInput | reservasCreateOrConnectWithoutLivroInput[]
    createMany?: reservasCreateManyLivroInputEnvelope
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
  }

  export type avaliacoesCreateNestedManyWithoutLivroInput = {
    create?: XOR<avaliacoesCreateWithoutLivroInput, avaliacoesUncheckedCreateWithoutLivroInput> | avaliacoesCreateWithoutLivroInput[] | avaliacoesUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: avaliacoesCreateOrConnectWithoutLivroInput | avaliacoesCreateOrConnectWithoutLivroInput[]
    createMany?: avaliacoesCreateManyLivroInputEnvelope
    connect?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
  }

  export type exemplaresUncheckedCreateNestedManyWithoutLivroInput = {
    create?: XOR<exemplaresCreateWithoutLivroInput, exemplaresUncheckedCreateWithoutLivroInput> | exemplaresCreateWithoutLivroInput[] | exemplaresUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: exemplaresCreateOrConnectWithoutLivroInput | exemplaresCreateOrConnectWithoutLivroInput[]
    createMany?: exemplaresCreateManyLivroInputEnvelope
    connect?: exemplaresWhereUniqueInput | exemplaresWhereUniqueInput[]
  }

  export type reservasUncheckedCreateNestedManyWithoutLivroInput = {
    create?: XOR<reservasCreateWithoutLivroInput, reservasUncheckedCreateWithoutLivroInput> | reservasCreateWithoutLivroInput[] | reservasUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutLivroInput | reservasCreateOrConnectWithoutLivroInput[]
    createMany?: reservasCreateManyLivroInputEnvelope
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
  }

  export type avaliacoesUncheckedCreateNestedManyWithoutLivroInput = {
    create?: XOR<avaliacoesCreateWithoutLivroInput, avaliacoesUncheckedCreateWithoutLivroInput> | avaliacoesCreateWithoutLivroInput[] | avaliacoesUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: avaliacoesCreateOrConnectWithoutLivroInput | avaliacoesCreateOrConnectWithoutLivroInput[]
    createMany?: avaliacoesCreateManyLivroInputEnvelope
    connect?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
  }

  export type exemplaresUpdateManyWithoutLivroNestedInput = {
    create?: XOR<exemplaresCreateWithoutLivroInput, exemplaresUncheckedCreateWithoutLivroInput> | exemplaresCreateWithoutLivroInput[] | exemplaresUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: exemplaresCreateOrConnectWithoutLivroInput | exemplaresCreateOrConnectWithoutLivroInput[]
    upsert?: exemplaresUpsertWithWhereUniqueWithoutLivroInput | exemplaresUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: exemplaresCreateManyLivroInputEnvelope
    set?: exemplaresWhereUniqueInput | exemplaresWhereUniqueInput[]
    disconnect?: exemplaresWhereUniqueInput | exemplaresWhereUniqueInput[]
    delete?: exemplaresWhereUniqueInput | exemplaresWhereUniqueInput[]
    connect?: exemplaresWhereUniqueInput | exemplaresWhereUniqueInput[]
    update?: exemplaresUpdateWithWhereUniqueWithoutLivroInput | exemplaresUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: exemplaresUpdateManyWithWhereWithoutLivroInput | exemplaresUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: exemplaresScalarWhereInput | exemplaresScalarWhereInput[]
  }

  export type reservasUpdateManyWithoutLivroNestedInput = {
    create?: XOR<reservasCreateWithoutLivroInput, reservasUncheckedCreateWithoutLivroInput> | reservasCreateWithoutLivroInput[] | reservasUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutLivroInput | reservasCreateOrConnectWithoutLivroInput[]
    upsert?: reservasUpsertWithWhereUniqueWithoutLivroInput | reservasUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: reservasCreateManyLivroInputEnvelope
    set?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    disconnect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    delete?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    update?: reservasUpdateWithWhereUniqueWithoutLivroInput | reservasUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: reservasUpdateManyWithWhereWithoutLivroInput | reservasUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: reservasScalarWhereInput | reservasScalarWhereInput[]
  }

  export type avaliacoesUpdateManyWithoutLivroNestedInput = {
    create?: XOR<avaliacoesCreateWithoutLivroInput, avaliacoesUncheckedCreateWithoutLivroInput> | avaliacoesCreateWithoutLivroInput[] | avaliacoesUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: avaliacoesCreateOrConnectWithoutLivroInput | avaliacoesCreateOrConnectWithoutLivroInput[]
    upsert?: avaliacoesUpsertWithWhereUniqueWithoutLivroInput | avaliacoesUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: avaliacoesCreateManyLivroInputEnvelope
    set?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    disconnect?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    delete?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    connect?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    update?: avaliacoesUpdateWithWhereUniqueWithoutLivroInput | avaliacoesUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: avaliacoesUpdateManyWithWhereWithoutLivroInput | avaliacoesUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: avaliacoesScalarWhereInput | avaliacoesScalarWhereInput[]
  }

  export type exemplaresUncheckedUpdateManyWithoutLivroNestedInput = {
    create?: XOR<exemplaresCreateWithoutLivroInput, exemplaresUncheckedCreateWithoutLivroInput> | exemplaresCreateWithoutLivroInput[] | exemplaresUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: exemplaresCreateOrConnectWithoutLivroInput | exemplaresCreateOrConnectWithoutLivroInput[]
    upsert?: exemplaresUpsertWithWhereUniqueWithoutLivroInput | exemplaresUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: exemplaresCreateManyLivroInputEnvelope
    set?: exemplaresWhereUniqueInput | exemplaresWhereUniqueInput[]
    disconnect?: exemplaresWhereUniqueInput | exemplaresWhereUniqueInput[]
    delete?: exemplaresWhereUniqueInput | exemplaresWhereUniqueInput[]
    connect?: exemplaresWhereUniqueInput | exemplaresWhereUniqueInput[]
    update?: exemplaresUpdateWithWhereUniqueWithoutLivroInput | exemplaresUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: exemplaresUpdateManyWithWhereWithoutLivroInput | exemplaresUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: exemplaresScalarWhereInput | exemplaresScalarWhereInput[]
  }

  export type reservasUncheckedUpdateManyWithoutLivroNestedInput = {
    create?: XOR<reservasCreateWithoutLivroInput, reservasUncheckedCreateWithoutLivroInput> | reservasCreateWithoutLivroInput[] | reservasUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutLivroInput | reservasCreateOrConnectWithoutLivroInput[]
    upsert?: reservasUpsertWithWhereUniqueWithoutLivroInput | reservasUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: reservasCreateManyLivroInputEnvelope
    set?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    disconnect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    delete?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    update?: reservasUpdateWithWhereUniqueWithoutLivroInput | reservasUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: reservasUpdateManyWithWhereWithoutLivroInput | reservasUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: reservasScalarWhereInput | reservasScalarWhereInput[]
  }

  export type avaliacoesUncheckedUpdateManyWithoutLivroNestedInput = {
    create?: XOR<avaliacoesCreateWithoutLivroInput, avaliacoesUncheckedCreateWithoutLivroInput> | avaliacoesCreateWithoutLivroInput[] | avaliacoesUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: avaliacoesCreateOrConnectWithoutLivroInput | avaliacoesCreateOrConnectWithoutLivroInput[]
    upsert?: avaliacoesUpsertWithWhereUniqueWithoutLivroInput | avaliacoesUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: avaliacoesCreateManyLivroInputEnvelope
    set?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    disconnect?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    delete?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    connect?: avaliacoesWhereUniqueInput | avaliacoesWhereUniqueInput[]
    update?: avaliacoesUpdateWithWhereUniqueWithoutLivroInput | avaliacoesUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: avaliacoesUpdateManyWithWhereWithoutLivroInput | avaliacoesUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: avaliacoesScalarWhereInput | avaliacoesScalarWhereInput[]
  }

  export type livrosCreateNestedOneWithoutExemplaresInput = {
    create?: XOR<livrosCreateWithoutExemplaresInput, livrosUncheckedCreateWithoutExemplaresInput>
    connectOrCreate?: livrosCreateOrConnectWithoutExemplaresInput
    connect?: livrosWhereUniqueInput
  }

  export type emprestimosCreateNestedManyWithoutExemplarInput = {
    create?: XOR<emprestimosCreateWithoutExemplarInput, emprestimosUncheckedCreateWithoutExemplarInput> | emprestimosCreateWithoutExemplarInput[] | emprestimosUncheckedCreateWithoutExemplarInput[]
    connectOrCreate?: emprestimosCreateOrConnectWithoutExemplarInput | emprestimosCreateOrConnectWithoutExemplarInput[]
    createMany?: emprestimosCreateManyExemplarInputEnvelope
    connect?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
  }

  export type historicoCreateNestedManyWithoutExemplarInput = {
    create?: XOR<historicoCreateWithoutExemplarInput, historicoUncheckedCreateWithoutExemplarInput> | historicoCreateWithoutExemplarInput[] | historicoUncheckedCreateWithoutExemplarInput[]
    connectOrCreate?: historicoCreateOrConnectWithoutExemplarInput | historicoCreateOrConnectWithoutExemplarInput[]
    createMany?: historicoCreateManyExemplarInputEnvelope
    connect?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
  }

  export type emprestimosUncheckedCreateNestedManyWithoutExemplarInput = {
    create?: XOR<emprestimosCreateWithoutExemplarInput, emprestimosUncheckedCreateWithoutExemplarInput> | emprestimosCreateWithoutExemplarInput[] | emprestimosUncheckedCreateWithoutExemplarInput[]
    connectOrCreate?: emprestimosCreateOrConnectWithoutExemplarInput | emprestimosCreateOrConnectWithoutExemplarInput[]
    createMany?: emprestimosCreateManyExemplarInputEnvelope
    connect?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
  }

  export type historicoUncheckedCreateNestedManyWithoutExemplarInput = {
    create?: XOR<historicoCreateWithoutExemplarInput, historicoUncheckedCreateWithoutExemplarInput> | historicoCreateWithoutExemplarInput[] | historicoUncheckedCreateWithoutExemplarInput[]
    connectOrCreate?: historicoCreateOrConnectWithoutExemplarInput | historicoCreateOrConnectWithoutExemplarInput[]
    createMany?: historicoCreateManyExemplarInputEnvelope
    connect?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
  }

  export type livrosUpdateOneRequiredWithoutExemplaresNestedInput = {
    create?: XOR<livrosCreateWithoutExemplaresInput, livrosUncheckedCreateWithoutExemplaresInput>
    connectOrCreate?: livrosCreateOrConnectWithoutExemplaresInput
    upsert?: livrosUpsertWithoutExemplaresInput
    connect?: livrosWhereUniqueInput
    update?: XOR<XOR<livrosUpdateToOneWithWhereWithoutExemplaresInput, livrosUpdateWithoutExemplaresInput>, livrosUncheckedUpdateWithoutExemplaresInput>
  }

  export type emprestimosUpdateManyWithoutExemplarNestedInput = {
    create?: XOR<emprestimosCreateWithoutExemplarInput, emprestimosUncheckedCreateWithoutExemplarInput> | emprestimosCreateWithoutExemplarInput[] | emprestimosUncheckedCreateWithoutExemplarInput[]
    connectOrCreate?: emprestimosCreateOrConnectWithoutExemplarInput | emprestimosCreateOrConnectWithoutExemplarInput[]
    upsert?: emprestimosUpsertWithWhereUniqueWithoutExemplarInput | emprestimosUpsertWithWhereUniqueWithoutExemplarInput[]
    createMany?: emprestimosCreateManyExemplarInputEnvelope
    set?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    disconnect?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    delete?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    connect?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    update?: emprestimosUpdateWithWhereUniqueWithoutExemplarInput | emprestimosUpdateWithWhereUniqueWithoutExemplarInput[]
    updateMany?: emprestimosUpdateManyWithWhereWithoutExemplarInput | emprestimosUpdateManyWithWhereWithoutExemplarInput[]
    deleteMany?: emprestimosScalarWhereInput | emprestimosScalarWhereInput[]
  }

  export type historicoUpdateManyWithoutExemplarNestedInput = {
    create?: XOR<historicoCreateWithoutExemplarInput, historicoUncheckedCreateWithoutExemplarInput> | historicoCreateWithoutExemplarInput[] | historicoUncheckedCreateWithoutExemplarInput[]
    connectOrCreate?: historicoCreateOrConnectWithoutExemplarInput | historicoCreateOrConnectWithoutExemplarInput[]
    upsert?: historicoUpsertWithWhereUniqueWithoutExemplarInput | historicoUpsertWithWhereUniqueWithoutExemplarInput[]
    createMany?: historicoCreateManyExemplarInputEnvelope
    set?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    disconnect?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    delete?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    connect?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    update?: historicoUpdateWithWhereUniqueWithoutExemplarInput | historicoUpdateWithWhereUniqueWithoutExemplarInput[]
    updateMany?: historicoUpdateManyWithWhereWithoutExemplarInput | historicoUpdateManyWithWhereWithoutExemplarInput[]
    deleteMany?: historicoScalarWhereInput | historicoScalarWhereInput[]
  }

  export type emprestimosUncheckedUpdateManyWithoutExemplarNestedInput = {
    create?: XOR<emprestimosCreateWithoutExemplarInput, emprestimosUncheckedCreateWithoutExemplarInput> | emprestimosCreateWithoutExemplarInput[] | emprestimosUncheckedCreateWithoutExemplarInput[]
    connectOrCreate?: emprestimosCreateOrConnectWithoutExemplarInput | emprestimosCreateOrConnectWithoutExemplarInput[]
    upsert?: emprestimosUpsertWithWhereUniqueWithoutExemplarInput | emprestimosUpsertWithWhereUniqueWithoutExemplarInput[]
    createMany?: emprestimosCreateManyExemplarInputEnvelope
    set?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    disconnect?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    delete?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    connect?: emprestimosWhereUniqueInput | emprestimosWhereUniqueInput[]
    update?: emprestimosUpdateWithWhereUniqueWithoutExemplarInput | emprestimosUpdateWithWhereUniqueWithoutExemplarInput[]
    updateMany?: emprestimosUpdateManyWithWhereWithoutExemplarInput | emprestimosUpdateManyWithWhereWithoutExemplarInput[]
    deleteMany?: emprestimosScalarWhereInput | emprestimosScalarWhereInput[]
  }

  export type historicoUncheckedUpdateManyWithoutExemplarNestedInput = {
    create?: XOR<historicoCreateWithoutExemplarInput, historicoUncheckedCreateWithoutExemplarInput> | historicoCreateWithoutExemplarInput[] | historicoUncheckedCreateWithoutExemplarInput[]
    connectOrCreate?: historicoCreateOrConnectWithoutExemplarInput | historicoCreateOrConnectWithoutExemplarInput[]
    upsert?: historicoUpsertWithWhereUniqueWithoutExemplarInput | historicoUpsertWithWhereUniqueWithoutExemplarInput[]
    createMany?: historicoCreateManyExemplarInputEnvelope
    set?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    disconnect?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    delete?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    connect?: historicoWhereUniqueInput | historicoWhereUniqueInput[]
    update?: historicoUpdateWithWhereUniqueWithoutExemplarInput | historicoUpdateWithWhereUniqueWithoutExemplarInput[]
    updateMany?: historicoUpdateManyWithWhereWithoutExemplarInput | historicoUpdateManyWithWhereWithoutExemplarInput[]
    deleteMany?: historicoScalarWhereInput | historicoScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<usuariosCreateWithoutEmprestimosInput, usuariosUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutEmprestimosInput
    connect?: usuariosWhereUniqueInput
  }

  export type exemplaresCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<exemplaresCreateWithoutEmprestimosInput, exemplaresUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: exemplaresCreateOrConnectWithoutEmprestimosInput
    connect?: exemplaresWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usuariosUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<usuariosCreateWithoutEmprestimosInput, usuariosUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutEmprestimosInput
    upsert?: usuariosUpsertWithoutEmprestimosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutEmprestimosInput, usuariosUpdateWithoutEmprestimosInput>, usuariosUncheckedUpdateWithoutEmprestimosInput>
  }

  export type exemplaresUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<exemplaresCreateWithoutEmprestimosInput, exemplaresUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: exemplaresCreateOrConnectWithoutEmprestimosInput
    upsert?: exemplaresUpsertWithoutEmprestimosInput
    connect?: exemplaresWhereUniqueInput
    update?: XOR<XOR<exemplaresUpdateToOneWithWhereWithoutEmprestimosInput, exemplaresUpdateWithoutEmprestimosInput>, exemplaresUncheckedUpdateWithoutEmprestimosInput>
  }

  export type usuariosCreateNestedOneWithoutReservasInput = {
    create?: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReservasInput
    connect?: usuariosWhereUniqueInput
  }

  export type livrosCreateNestedOneWithoutReservasInput = {
    create?: XOR<livrosCreateWithoutReservasInput, livrosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: livrosCreateOrConnectWithoutReservasInput
    connect?: livrosWhereUniqueInput
  }

  export type usuariosUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReservasInput
    upsert?: usuariosUpsertWithoutReservasInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutReservasInput, usuariosUpdateWithoutReservasInput>, usuariosUncheckedUpdateWithoutReservasInput>
  }

  export type livrosUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<livrosCreateWithoutReservasInput, livrosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: livrosCreateOrConnectWithoutReservasInput
    upsert?: livrosUpsertWithoutReservasInput
    connect?: livrosWhereUniqueInput
    update?: XOR<XOR<livrosUpdateToOneWithWhereWithoutReservasInput, livrosUpdateWithoutReservasInput>, livrosUncheckedUpdateWithoutReservasInput>
  }

  export type usuariosCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<usuariosCreateWithoutAvaliacoesInput, usuariosUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutAvaliacoesInput
    connect?: usuariosWhereUniqueInput
  }

  export type livrosCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<livrosCreateWithoutAvaliacoesInput, livrosUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: livrosCreateOrConnectWithoutAvaliacoesInput
    connect?: livrosWhereUniqueInput
  }

  export type usuariosUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<usuariosCreateWithoutAvaliacoesInput, usuariosUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutAvaliacoesInput
    upsert?: usuariosUpsertWithoutAvaliacoesInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutAvaliacoesInput, usuariosUpdateWithoutAvaliacoesInput>, usuariosUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type livrosUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<livrosCreateWithoutAvaliacoesInput, livrosUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: livrosCreateOrConnectWithoutAvaliacoesInput
    upsert?: livrosUpsertWithoutAvaliacoesInput
    connect?: livrosWhereUniqueInput
    update?: XOR<XOR<livrosUpdateToOneWithWhereWithoutAvaliacoesInput, livrosUpdateWithoutAvaliacoesInput>, livrosUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type usuariosCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<usuariosCreateWithoutHistoricoInput, usuariosUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutHistoricoInput
    connect?: usuariosWhereUniqueInput
  }

  export type exemplaresCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<exemplaresCreateWithoutHistoricoInput, exemplaresUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: exemplaresCreateOrConnectWithoutHistoricoInput
    connect?: exemplaresWhereUniqueInput
  }

  export type usuariosUpdateOneRequiredWithoutHistoricoNestedInput = {
    create?: XOR<usuariosCreateWithoutHistoricoInput, usuariosUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutHistoricoInput
    upsert?: usuariosUpsertWithoutHistoricoInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutHistoricoInput, usuariosUpdateWithoutHistoricoInput>, usuariosUncheckedUpdateWithoutHistoricoInput>
  }

  export type exemplaresUpdateOneRequiredWithoutHistoricoNestedInput = {
    create?: XOR<exemplaresCreateWithoutHistoricoInput, exemplaresUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: exemplaresCreateOrConnectWithoutHistoricoInput
    upsert?: exemplaresUpsertWithoutHistoricoInput
    connect?: exemplaresWhereUniqueInput
    update?: XOR<XOR<exemplaresUpdateToOneWithWhereWithoutHistoricoInput, exemplaresUpdateWithoutHistoricoInput>, exemplaresUncheckedUpdateWithoutHistoricoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type emprestimosCreateWithoutUsuarioInput = {
    data_retirada: Date | string
    data_prevista_devolucao: Date | string
    data_devolucao: Date | string
    renovado: boolean
    exemplar: exemplaresCreateNestedOneWithoutEmprestimosInput
  }

  export type emprestimosUncheckedCreateWithoutUsuarioInput = {
    id_emprestimo?: number
    id_exemplar: number
    data_retirada: Date | string
    data_prevista_devolucao: Date | string
    data_devolucao: Date | string
    renovado: boolean
  }

  export type emprestimosCreateOrConnectWithoutUsuarioInput = {
    where: emprestimosWhereUniqueInput
    create: XOR<emprestimosCreateWithoutUsuarioInput, emprestimosUncheckedCreateWithoutUsuarioInput>
  }

  export type emprestimosCreateManyUsuarioInputEnvelope = {
    data: emprestimosCreateManyUsuarioInput | emprestimosCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type reservasCreateWithoutUsuarioInput = {
    data_reserva: Date | string
    status: string
    posicao_fila: number
    livro: livrosCreateNestedOneWithoutReservasInput
  }

  export type reservasUncheckedCreateWithoutUsuarioInput = {
    id_reserva?: number
    id_livro: number
    data_reserva: Date | string
    status: string
    posicao_fila: number
  }

  export type reservasCreateOrConnectWithoutUsuarioInput = {
    where: reservasWhereUniqueInput
    create: XOR<reservasCreateWithoutUsuarioInput, reservasUncheckedCreateWithoutUsuarioInput>
  }

  export type reservasCreateManyUsuarioInputEnvelope = {
    data: reservasCreateManyUsuarioInput | reservasCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type avaliacoesCreateWithoutUsuarioInput = {
    nota: number
    comentario: string
    data_avaliacao?: Date | string
    livro: livrosCreateNestedOneWithoutAvaliacoesInput
  }

  export type avaliacoesUncheckedCreateWithoutUsuarioInput = {
    id_avaliacao?: number
    id_livro: number
    nota: number
    comentario: string
    data_avaliacao?: Date | string
  }

  export type avaliacoesCreateOrConnectWithoutUsuarioInput = {
    where: avaliacoesWhereUniqueInput
    create: XOR<avaliacoesCreateWithoutUsuarioInput, avaliacoesUncheckedCreateWithoutUsuarioInput>
  }

  export type avaliacoesCreateManyUsuarioInputEnvelope = {
    data: avaliacoesCreateManyUsuarioInput | avaliacoesCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type historicoCreateWithoutUsuarioInput = {
    acao: string
    data_acao?: Date | string
    exemplar: exemplaresCreateNestedOneWithoutHistoricoInput
  }

  export type historicoUncheckedCreateWithoutUsuarioInput = {
    id_historico?: number
    id_exemplar: number
    acao: string
    data_acao?: Date | string
  }

  export type historicoCreateOrConnectWithoutUsuarioInput = {
    where: historicoWhereUniqueInput
    create: XOR<historicoCreateWithoutUsuarioInput, historicoUncheckedCreateWithoutUsuarioInput>
  }

  export type historicoCreateManyUsuarioInputEnvelope = {
    data: historicoCreateManyUsuarioInput | historicoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type emprestimosUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: emprestimosWhereUniqueInput
    update: XOR<emprestimosUpdateWithoutUsuarioInput, emprestimosUncheckedUpdateWithoutUsuarioInput>
    create: XOR<emprestimosCreateWithoutUsuarioInput, emprestimosUncheckedCreateWithoutUsuarioInput>
  }

  export type emprestimosUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: emprestimosWhereUniqueInput
    data: XOR<emprestimosUpdateWithoutUsuarioInput, emprestimosUncheckedUpdateWithoutUsuarioInput>
  }

  export type emprestimosUpdateManyWithWhereWithoutUsuarioInput = {
    where: emprestimosScalarWhereInput
    data: XOR<emprestimosUpdateManyMutationInput, emprestimosUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type emprestimosScalarWhereInput = {
    AND?: emprestimosScalarWhereInput | emprestimosScalarWhereInput[]
    OR?: emprestimosScalarWhereInput[]
    NOT?: emprestimosScalarWhereInput | emprestimosScalarWhereInput[]
    id_emprestimo?: IntFilter<"emprestimos"> | number
    id_usuario?: IntFilter<"emprestimos"> | number
    id_exemplar?: IntFilter<"emprestimos"> | number
    data_retirada?: DateTimeFilter<"emprestimos"> | Date | string
    data_prevista_devolucao?: DateTimeFilter<"emprestimos"> | Date | string
    data_devolucao?: DateTimeFilter<"emprestimos"> | Date | string
    renovado?: BoolFilter<"emprestimos"> | boolean
  }

  export type reservasUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: reservasWhereUniqueInput
    update: XOR<reservasUpdateWithoutUsuarioInput, reservasUncheckedUpdateWithoutUsuarioInput>
    create: XOR<reservasCreateWithoutUsuarioInput, reservasUncheckedCreateWithoutUsuarioInput>
  }

  export type reservasUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: reservasWhereUniqueInput
    data: XOR<reservasUpdateWithoutUsuarioInput, reservasUncheckedUpdateWithoutUsuarioInput>
  }

  export type reservasUpdateManyWithWhereWithoutUsuarioInput = {
    where: reservasScalarWhereInput
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type reservasScalarWhereInput = {
    AND?: reservasScalarWhereInput | reservasScalarWhereInput[]
    OR?: reservasScalarWhereInput[]
    NOT?: reservasScalarWhereInput | reservasScalarWhereInput[]
    id_reserva?: IntFilter<"reservas"> | number
    id_usuario?: IntFilter<"reservas"> | number
    id_livro?: IntFilter<"reservas"> | number
    data_reserva?: DateTimeFilter<"reservas"> | Date | string
    status?: StringFilter<"reservas"> | string
    posicao_fila?: IntFilter<"reservas"> | number
  }

  export type avaliacoesUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: avaliacoesWhereUniqueInput
    update: XOR<avaliacoesUpdateWithoutUsuarioInput, avaliacoesUncheckedUpdateWithoutUsuarioInput>
    create: XOR<avaliacoesCreateWithoutUsuarioInput, avaliacoesUncheckedCreateWithoutUsuarioInput>
  }

  export type avaliacoesUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: avaliacoesWhereUniqueInput
    data: XOR<avaliacoesUpdateWithoutUsuarioInput, avaliacoesUncheckedUpdateWithoutUsuarioInput>
  }

  export type avaliacoesUpdateManyWithWhereWithoutUsuarioInput = {
    where: avaliacoesScalarWhereInput
    data: XOR<avaliacoesUpdateManyMutationInput, avaliacoesUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type avaliacoesScalarWhereInput = {
    AND?: avaliacoesScalarWhereInput | avaliacoesScalarWhereInput[]
    OR?: avaliacoesScalarWhereInput[]
    NOT?: avaliacoesScalarWhereInput | avaliacoesScalarWhereInput[]
    id_avaliacao?: IntFilter<"avaliacoes"> | number
    id_usuario?: IntFilter<"avaliacoes"> | number
    id_livro?: IntFilter<"avaliacoes"> | number
    nota?: IntFilter<"avaliacoes"> | number
    comentario?: StringFilter<"avaliacoes"> | string
    data_avaliacao?: DateTimeFilter<"avaliacoes"> | Date | string
  }

  export type historicoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: historicoWhereUniqueInput
    update: XOR<historicoUpdateWithoutUsuarioInput, historicoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<historicoCreateWithoutUsuarioInput, historicoUncheckedCreateWithoutUsuarioInput>
  }

  export type historicoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: historicoWhereUniqueInput
    data: XOR<historicoUpdateWithoutUsuarioInput, historicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type historicoUpdateManyWithWhereWithoutUsuarioInput = {
    where: historicoScalarWhereInput
    data: XOR<historicoUpdateManyMutationInput, historicoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type historicoScalarWhereInput = {
    AND?: historicoScalarWhereInput | historicoScalarWhereInput[]
    OR?: historicoScalarWhereInput[]
    NOT?: historicoScalarWhereInput | historicoScalarWhereInput[]
    id_historico?: IntFilter<"historico"> | number
    id_usuario?: IntFilter<"historico"> | number
    id_exemplar?: IntFilter<"historico"> | number
    acao?: StringFilter<"historico"> | string
    data_acao?: DateTimeFilter<"historico"> | Date | string
  }

  export type exemplaresCreateWithoutLivroInput = {
    codigo_exemplar: string
    status: string
    emprestimos?: emprestimosCreateNestedManyWithoutExemplarInput
    historico?: historicoCreateNestedManyWithoutExemplarInput
  }

  export type exemplaresUncheckedCreateWithoutLivroInput = {
    id_exemplar?: number
    codigo_exemplar: string
    status: string
    emprestimos?: emprestimosUncheckedCreateNestedManyWithoutExemplarInput
    historico?: historicoUncheckedCreateNestedManyWithoutExemplarInput
  }

  export type exemplaresCreateOrConnectWithoutLivroInput = {
    where: exemplaresWhereUniqueInput
    create: XOR<exemplaresCreateWithoutLivroInput, exemplaresUncheckedCreateWithoutLivroInput>
  }

  export type exemplaresCreateManyLivroInputEnvelope = {
    data: exemplaresCreateManyLivroInput | exemplaresCreateManyLivroInput[]
    skipDuplicates?: boolean
  }

  export type reservasCreateWithoutLivroInput = {
    data_reserva: Date | string
    status: string
    posicao_fila: number
    usuario: usuariosCreateNestedOneWithoutReservasInput
  }

  export type reservasUncheckedCreateWithoutLivroInput = {
    id_reserva?: number
    id_usuario: number
    data_reserva: Date | string
    status: string
    posicao_fila: number
  }

  export type reservasCreateOrConnectWithoutLivroInput = {
    where: reservasWhereUniqueInput
    create: XOR<reservasCreateWithoutLivroInput, reservasUncheckedCreateWithoutLivroInput>
  }

  export type reservasCreateManyLivroInputEnvelope = {
    data: reservasCreateManyLivroInput | reservasCreateManyLivroInput[]
    skipDuplicates?: boolean
  }

  export type avaliacoesCreateWithoutLivroInput = {
    nota: number
    comentario: string
    data_avaliacao?: Date | string
    usuario: usuariosCreateNestedOneWithoutAvaliacoesInput
  }

  export type avaliacoesUncheckedCreateWithoutLivroInput = {
    id_avaliacao?: number
    id_usuario: number
    nota: number
    comentario: string
    data_avaliacao?: Date | string
  }

  export type avaliacoesCreateOrConnectWithoutLivroInput = {
    where: avaliacoesWhereUniqueInput
    create: XOR<avaliacoesCreateWithoutLivroInput, avaliacoesUncheckedCreateWithoutLivroInput>
  }

  export type avaliacoesCreateManyLivroInputEnvelope = {
    data: avaliacoesCreateManyLivroInput | avaliacoesCreateManyLivroInput[]
    skipDuplicates?: boolean
  }

  export type exemplaresUpsertWithWhereUniqueWithoutLivroInput = {
    where: exemplaresWhereUniqueInput
    update: XOR<exemplaresUpdateWithoutLivroInput, exemplaresUncheckedUpdateWithoutLivroInput>
    create: XOR<exemplaresCreateWithoutLivroInput, exemplaresUncheckedCreateWithoutLivroInput>
  }

  export type exemplaresUpdateWithWhereUniqueWithoutLivroInput = {
    where: exemplaresWhereUniqueInput
    data: XOR<exemplaresUpdateWithoutLivroInput, exemplaresUncheckedUpdateWithoutLivroInput>
  }

  export type exemplaresUpdateManyWithWhereWithoutLivroInput = {
    where: exemplaresScalarWhereInput
    data: XOR<exemplaresUpdateManyMutationInput, exemplaresUncheckedUpdateManyWithoutLivroInput>
  }

  export type exemplaresScalarWhereInput = {
    AND?: exemplaresScalarWhereInput | exemplaresScalarWhereInput[]
    OR?: exemplaresScalarWhereInput[]
    NOT?: exemplaresScalarWhereInput | exemplaresScalarWhereInput[]
    id_exemplar?: IntFilter<"exemplares"> | number
    id_livro?: IntFilter<"exemplares"> | number
    codigo_exemplar?: StringFilter<"exemplares"> | string
    status?: StringFilter<"exemplares"> | string
  }

  export type reservasUpsertWithWhereUniqueWithoutLivroInput = {
    where: reservasWhereUniqueInput
    update: XOR<reservasUpdateWithoutLivroInput, reservasUncheckedUpdateWithoutLivroInput>
    create: XOR<reservasCreateWithoutLivroInput, reservasUncheckedCreateWithoutLivroInput>
  }

  export type reservasUpdateWithWhereUniqueWithoutLivroInput = {
    where: reservasWhereUniqueInput
    data: XOR<reservasUpdateWithoutLivroInput, reservasUncheckedUpdateWithoutLivroInput>
  }

  export type reservasUpdateManyWithWhereWithoutLivroInput = {
    where: reservasScalarWhereInput
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyWithoutLivroInput>
  }

  export type avaliacoesUpsertWithWhereUniqueWithoutLivroInput = {
    where: avaliacoesWhereUniqueInput
    update: XOR<avaliacoesUpdateWithoutLivroInput, avaliacoesUncheckedUpdateWithoutLivroInput>
    create: XOR<avaliacoesCreateWithoutLivroInput, avaliacoesUncheckedCreateWithoutLivroInput>
  }

  export type avaliacoesUpdateWithWhereUniqueWithoutLivroInput = {
    where: avaliacoesWhereUniqueInput
    data: XOR<avaliacoesUpdateWithoutLivroInput, avaliacoesUncheckedUpdateWithoutLivroInput>
  }

  export type avaliacoesUpdateManyWithWhereWithoutLivroInput = {
    where: avaliacoesScalarWhereInput
    data: XOR<avaliacoesUpdateManyMutationInput, avaliacoesUncheckedUpdateManyWithoutLivroInput>
  }

  export type livrosCreateWithoutExemplaresInput = {
    isbn: string
    titulo: string
    autor: string
    editora: string
    ano_publicacao: number
    sinopse: string
    reservas?: reservasCreateNestedManyWithoutLivroInput
    avaliacoes?: avaliacoesCreateNestedManyWithoutLivroInput
  }

  export type livrosUncheckedCreateWithoutExemplaresInput = {
    id_livro?: number
    isbn: string
    titulo: string
    autor: string
    editora: string
    ano_publicacao: number
    sinopse: string
    reservas?: reservasUncheckedCreateNestedManyWithoutLivroInput
    avaliacoes?: avaliacoesUncheckedCreateNestedManyWithoutLivroInput
  }

  export type livrosCreateOrConnectWithoutExemplaresInput = {
    where: livrosWhereUniqueInput
    create: XOR<livrosCreateWithoutExemplaresInput, livrosUncheckedCreateWithoutExemplaresInput>
  }

  export type emprestimosCreateWithoutExemplarInput = {
    data_retirada: Date | string
    data_prevista_devolucao: Date | string
    data_devolucao: Date | string
    renovado: boolean
    usuario: usuariosCreateNestedOneWithoutEmprestimosInput
  }

  export type emprestimosUncheckedCreateWithoutExemplarInput = {
    id_emprestimo?: number
    id_usuario: number
    data_retirada: Date | string
    data_prevista_devolucao: Date | string
    data_devolucao: Date | string
    renovado: boolean
  }

  export type emprestimosCreateOrConnectWithoutExemplarInput = {
    where: emprestimosWhereUniqueInput
    create: XOR<emprestimosCreateWithoutExemplarInput, emprestimosUncheckedCreateWithoutExemplarInput>
  }

  export type emprestimosCreateManyExemplarInputEnvelope = {
    data: emprestimosCreateManyExemplarInput | emprestimosCreateManyExemplarInput[]
    skipDuplicates?: boolean
  }

  export type historicoCreateWithoutExemplarInput = {
    acao: string
    data_acao?: Date | string
    usuario: usuariosCreateNestedOneWithoutHistoricoInput
  }

  export type historicoUncheckedCreateWithoutExemplarInput = {
    id_historico?: number
    id_usuario: number
    acao: string
    data_acao?: Date | string
  }

  export type historicoCreateOrConnectWithoutExemplarInput = {
    where: historicoWhereUniqueInput
    create: XOR<historicoCreateWithoutExemplarInput, historicoUncheckedCreateWithoutExemplarInput>
  }

  export type historicoCreateManyExemplarInputEnvelope = {
    data: historicoCreateManyExemplarInput | historicoCreateManyExemplarInput[]
    skipDuplicates?: boolean
  }

  export type livrosUpsertWithoutExemplaresInput = {
    update: XOR<livrosUpdateWithoutExemplaresInput, livrosUncheckedUpdateWithoutExemplaresInput>
    create: XOR<livrosCreateWithoutExemplaresInput, livrosUncheckedCreateWithoutExemplaresInput>
    where?: livrosWhereInput
  }

  export type livrosUpdateToOneWithWhereWithoutExemplaresInput = {
    where?: livrosWhereInput
    data: XOR<livrosUpdateWithoutExemplaresInput, livrosUncheckedUpdateWithoutExemplaresInput>
  }

  export type livrosUpdateWithoutExemplaresInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    ano_publicacao?: IntFieldUpdateOperationsInput | number
    sinopse?: StringFieldUpdateOperationsInput | string
    reservas?: reservasUpdateManyWithoutLivroNestedInput
    avaliacoes?: avaliacoesUpdateManyWithoutLivroNestedInput
  }

  export type livrosUncheckedUpdateWithoutExemplaresInput = {
    id_livro?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    ano_publicacao?: IntFieldUpdateOperationsInput | number
    sinopse?: StringFieldUpdateOperationsInput | string
    reservas?: reservasUncheckedUpdateManyWithoutLivroNestedInput
    avaliacoes?: avaliacoesUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type emprestimosUpsertWithWhereUniqueWithoutExemplarInput = {
    where: emprestimosWhereUniqueInput
    update: XOR<emprestimosUpdateWithoutExemplarInput, emprestimosUncheckedUpdateWithoutExemplarInput>
    create: XOR<emprestimosCreateWithoutExemplarInput, emprestimosUncheckedCreateWithoutExemplarInput>
  }

  export type emprestimosUpdateWithWhereUniqueWithoutExemplarInput = {
    where: emprestimosWhereUniqueInput
    data: XOR<emprestimosUpdateWithoutExemplarInput, emprestimosUncheckedUpdateWithoutExemplarInput>
  }

  export type emprestimosUpdateManyWithWhereWithoutExemplarInput = {
    where: emprestimosScalarWhereInput
    data: XOR<emprestimosUpdateManyMutationInput, emprestimosUncheckedUpdateManyWithoutExemplarInput>
  }

  export type historicoUpsertWithWhereUniqueWithoutExemplarInput = {
    where: historicoWhereUniqueInput
    update: XOR<historicoUpdateWithoutExemplarInput, historicoUncheckedUpdateWithoutExemplarInput>
    create: XOR<historicoCreateWithoutExemplarInput, historicoUncheckedCreateWithoutExemplarInput>
  }

  export type historicoUpdateWithWhereUniqueWithoutExemplarInput = {
    where: historicoWhereUniqueInput
    data: XOR<historicoUpdateWithoutExemplarInput, historicoUncheckedUpdateWithoutExemplarInput>
  }

  export type historicoUpdateManyWithWhereWithoutExemplarInput = {
    where: historicoScalarWhereInput
    data: XOR<historicoUpdateManyMutationInput, historicoUncheckedUpdateManyWithoutExemplarInput>
  }

  export type usuariosCreateWithoutEmprestimosInput = {
    name: string
    email: string
    password: string
    status: string
    data_cadastro?: Date | string
    reservas?: reservasCreateNestedManyWithoutUsuarioInput
    avaliacoes?: avaliacoesCreateNestedManyWithoutUsuarioInput
    historico?: historicoCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateWithoutEmprestimosInput = {
    id_usuario?: number
    name: string
    email: string
    password: string
    status: string
    data_cadastro?: Date | string
    reservas?: reservasUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: avaliacoesUncheckedCreateNestedManyWithoutUsuarioInput
    historico?: historicoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosCreateOrConnectWithoutEmprestimosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutEmprestimosInput, usuariosUncheckedCreateWithoutEmprestimosInput>
  }

  export type exemplaresCreateWithoutEmprestimosInput = {
    codigo_exemplar: string
    status: string
    livro: livrosCreateNestedOneWithoutExemplaresInput
    historico?: historicoCreateNestedManyWithoutExemplarInput
  }

  export type exemplaresUncheckedCreateWithoutEmprestimosInput = {
    id_exemplar?: number
    id_livro: number
    codigo_exemplar: string
    status: string
    historico?: historicoUncheckedCreateNestedManyWithoutExemplarInput
  }

  export type exemplaresCreateOrConnectWithoutEmprestimosInput = {
    where: exemplaresWhereUniqueInput
    create: XOR<exemplaresCreateWithoutEmprestimosInput, exemplaresUncheckedCreateWithoutEmprestimosInput>
  }

  export type usuariosUpsertWithoutEmprestimosInput = {
    update: XOR<usuariosUpdateWithoutEmprestimosInput, usuariosUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<usuariosCreateWithoutEmprestimosInput, usuariosUncheckedCreateWithoutEmprestimosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutEmprestimosInput, usuariosUncheckedUpdateWithoutEmprestimosInput>
  }

  export type usuariosUpdateWithoutEmprestimosInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: reservasUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: avaliacoesUpdateManyWithoutUsuarioNestedInput
    historico?: historicoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateWithoutEmprestimosInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: reservasUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: avaliacoesUncheckedUpdateManyWithoutUsuarioNestedInput
    historico?: historicoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type exemplaresUpsertWithoutEmprestimosInput = {
    update: XOR<exemplaresUpdateWithoutEmprestimosInput, exemplaresUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<exemplaresCreateWithoutEmprestimosInput, exemplaresUncheckedCreateWithoutEmprestimosInput>
    where?: exemplaresWhereInput
  }

  export type exemplaresUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: exemplaresWhereInput
    data: XOR<exemplaresUpdateWithoutEmprestimosInput, exemplaresUncheckedUpdateWithoutEmprestimosInput>
  }

  export type exemplaresUpdateWithoutEmprestimosInput = {
    codigo_exemplar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    livro?: livrosUpdateOneRequiredWithoutExemplaresNestedInput
    historico?: historicoUpdateManyWithoutExemplarNestedInput
  }

  export type exemplaresUncheckedUpdateWithoutEmprestimosInput = {
    id_exemplar?: IntFieldUpdateOperationsInput | number
    id_livro?: IntFieldUpdateOperationsInput | number
    codigo_exemplar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    historico?: historicoUncheckedUpdateManyWithoutExemplarNestedInput
  }

  export type usuariosCreateWithoutReservasInput = {
    name: string
    email: string
    password: string
    status: string
    data_cadastro?: Date | string
    emprestimos?: emprestimosCreateNestedManyWithoutUsuarioInput
    avaliacoes?: avaliacoesCreateNestedManyWithoutUsuarioInput
    historico?: historicoCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateWithoutReservasInput = {
    id_usuario?: number
    name: string
    email: string
    password: string
    status: string
    data_cadastro?: Date | string
    emprestimos?: emprestimosUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: avaliacoesUncheckedCreateNestedManyWithoutUsuarioInput
    historico?: historicoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosCreateOrConnectWithoutReservasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
  }

  export type livrosCreateWithoutReservasInput = {
    isbn: string
    titulo: string
    autor: string
    editora: string
    ano_publicacao: number
    sinopse: string
    exemplares?: exemplaresCreateNestedManyWithoutLivroInput
    avaliacoes?: avaliacoesCreateNestedManyWithoutLivroInput
  }

  export type livrosUncheckedCreateWithoutReservasInput = {
    id_livro?: number
    isbn: string
    titulo: string
    autor: string
    editora: string
    ano_publicacao: number
    sinopse: string
    exemplares?: exemplaresUncheckedCreateNestedManyWithoutLivroInput
    avaliacoes?: avaliacoesUncheckedCreateNestedManyWithoutLivroInput
  }

  export type livrosCreateOrConnectWithoutReservasInput = {
    where: livrosWhereUniqueInput
    create: XOR<livrosCreateWithoutReservasInput, livrosUncheckedCreateWithoutReservasInput>
  }

  export type usuariosUpsertWithoutReservasInput = {
    update: XOR<usuariosUpdateWithoutReservasInput, usuariosUncheckedUpdateWithoutReservasInput>
    create: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutReservasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutReservasInput, usuariosUncheckedUpdateWithoutReservasInput>
  }

  export type usuariosUpdateWithoutReservasInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: emprestimosUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: avaliacoesUpdateManyWithoutUsuarioNestedInput
    historico?: historicoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateWithoutReservasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: emprestimosUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: avaliacoesUncheckedUpdateManyWithoutUsuarioNestedInput
    historico?: historicoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type livrosUpsertWithoutReservasInput = {
    update: XOR<livrosUpdateWithoutReservasInput, livrosUncheckedUpdateWithoutReservasInput>
    create: XOR<livrosCreateWithoutReservasInput, livrosUncheckedCreateWithoutReservasInput>
    where?: livrosWhereInput
  }

  export type livrosUpdateToOneWithWhereWithoutReservasInput = {
    where?: livrosWhereInput
    data: XOR<livrosUpdateWithoutReservasInput, livrosUncheckedUpdateWithoutReservasInput>
  }

  export type livrosUpdateWithoutReservasInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    ano_publicacao?: IntFieldUpdateOperationsInput | number
    sinopse?: StringFieldUpdateOperationsInput | string
    exemplares?: exemplaresUpdateManyWithoutLivroNestedInput
    avaliacoes?: avaliacoesUpdateManyWithoutLivroNestedInput
  }

  export type livrosUncheckedUpdateWithoutReservasInput = {
    id_livro?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    ano_publicacao?: IntFieldUpdateOperationsInput | number
    sinopse?: StringFieldUpdateOperationsInput | string
    exemplares?: exemplaresUncheckedUpdateManyWithoutLivroNestedInput
    avaliacoes?: avaliacoesUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type usuariosCreateWithoutAvaliacoesInput = {
    name: string
    email: string
    password: string
    status: string
    data_cadastro?: Date | string
    emprestimos?: emprestimosCreateNestedManyWithoutUsuarioInput
    reservas?: reservasCreateNestedManyWithoutUsuarioInput
    historico?: historicoCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateWithoutAvaliacoesInput = {
    id_usuario?: number
    name: string
    email: string
    password: string
    status: string
    data_cadastro?: Date | string
    emprestimos?: emprestimosUncheckedCreateNestedManyWithoutUsuarioInput
    reservas?: reservasUncheckedCreateNestedManyWithoutUsuarioInput
    historico?: historicoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosCreateOrConnectWithoutAvaliacoesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutAvaliacoesInput, usuariosUncheckedCreateWithoutAvaliacoesInput>
  }

  export type livrosCreateWithoutAvaliacoesInput = {
    isbn: string
    titulo: string
    autor: string
    editora: string
    ano_publicacao: number
    sinopse: string
    exemplares?: exemplaresCreateNestedManyWithoutLivroInput
    reservas?: reservasCreateNestedManyWithoutLivroInput
  }

  export type livrosUncheckedCreateWithoutAvaliacoesInput = {
    id_livro?: number
    isbn: string
    titulo: string
    autor: string
    editora: string
    ano_publicacao: number
    sinopse: string
    exemplares?: exemplaresUncheckedCreateNestedManyWithoutLivroInput
    reservas?: reservasUncheckedCreateNestedManyWithoutLivroInput
  }

  export type livrosCreateOrConnectWithoutAvaliacoesInput = {
    where: livrosWhereUniqueInput
    create: XOR<livrosCreateWithoutAvaliacoesInput, livrosUncheckedCreateWithoutAvaliacoesInput>
  }

  export type usuariosUpsertWithoutAvaliacoesInput = {
    update: XOR<usuariosUpdateWithoutAvaliacoesInput, usuariosUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<usuariosCreateWithoutAvaliacoesInput, usuariosUncheckedCreateWithoutAvaliacoesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutAvaliacoesInput, usuariosUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type usuariosUpdateWithoutAvaliacoesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: emprestimosUpdateManyWithoutUsuarioNestedInput
    reservas?: reservasUpdateManyWithoutUsuarioNestedInput
    historico?: historicoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateWithoutAvaliacoesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: emprestimosUncheckedUpdateManyWithoutUsuarioNestedInput
    reservas?: reservasUncheckedUpdateManyWithoutUsuarioNestedInput
    historico?: historicoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type livrosUpsertWithoutAvaliacoesInput = {
    update: XOR<livrosUpdateWithoutAvaliacoesInput, livrosUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<livrosCreateWithoutAvaliacoesInput, livrosUncheckedCreateWithoutAvaliacoesInput>
    where?: livrosWhereInput
  }

  export type livrosUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: livrosWhereInput
    data: XOR<livrosUpdateWithoutAvaliacoesInput, livrosUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type livrosUpdateWithoutAvaliacoesInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    ano_publicacao?: IntFieldUpdateOperationsInput | number
    sinopse?: StringFieldUpdateOperationsInput | string
    exemplares?: exemplaresUpdateManyWithoutLivroNestedInput
    reservas?: reservasUpdateManyWithoutLivroNestedInput
  }

  export type livrosUncheckedUpdateWithoutAvaliacoesInput = {
    id_livro?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    ano_publicacao?: IntFieldUpdateOperationsInput | number
    sinopse?: StringFieldUpdateOperationsInput | string
    exemplares?: exemplaresUncheckedUpdateManyWithoutLivroNestedInput
    reservas?: reservasUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type usuariosCreateWithoutHistoricoInput = {
    name: string
    email: string
    password: string
    status: string
    data_cadastro?: Date | string
    emprestimos?: emprestimosCreateNestedManyWithoutUsuarioInput
    reservas?: reservasCreateNestedManyWithoutUsuarioInput
    avaliacoes?: avaliacoesCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateWithoutHistoricoInput = {
    id_usuario?: number
    name: string
    email: string
    password: string
    status: string
    data_cadastro?: Date | string
    emprestimos?: emprestimosUncheckedCreateNestedManyWithoutUsuarioInput
    reservas?: reservasUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: avaliacoesUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosCreateOrConnectWithoutHistoricoInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutHistoricoInput, usuariosUncheckedCreateWithoutHistoricoInput>
  }

  export type exemplaresCreateWithoutHistoricoInput = {
    codigo_exemplar: string
    status: string
    livro: livrosCreateNestedOneWithoutExemplaresInput
    emprestimos?: emprestimosCreateNestedManyWithoutExemplarInput
  }

  export type exemplaresUncheckedCreateWithoutHistoricoInput = {
    id_exemplar?: number
    id_livro: number
    codigo_exemplar: string
    status: string
    emprestimos?: emprestimosUncheckedCreateNestedManyWithoutExemplarInput
  }

  export type exemplaresCreateOrConnectWithoutHistoricoInput = {
    where: exemplaresWhereUniqueInput
    create: XOR<exemplaresCreateWithoutHistoricoInput, exemplaresUncheckedCreateWithoutHistoricoInput>
  }

  export type usuariosUpsertWithoutHistoricoInput = {
    update: XOR<usuariosUpdateWithoutHistoricoInput, usuariosUncheckedUpdateWithoutHistoricoInput>
    create: XOR<usuariosCreateWithoutHistoricoInput, usuariosUncheckedCreateWithoutHistoricoInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutHistoricoInput, usuariosUncheckedUpdateWithoutHistoricoInput>
  }

  export type usuariosUpdateWithoutHistoricoInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: emprestimosUpdateManyWithoutUsuarioNestedInput
    reservas?: reservasUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: avaliacoesUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateWithoutHistoricoInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: emprestimosUncheckedUpdateManyWithoutUsuarioNestedInput
    reservas?: reservasUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: avaliacoesUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type exemplaresUpsertWithoutHistoricoInput = {
    update: XOR<exemplaresUpdateWithoutHistoricoInput, exemplaresUncheckedUpdateWithoutHistoricoInput>
    create: XOR<exemplaresCreateWithoutHistoricoInput, exemplaresUncheckedCreateWithoutHistoricoInput>
    where?: exemplaresWhereInput
  }

  export type exemplaresUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: exemplaresWhereInput
    data: XOR<exemplaresUpdateWithoutHistoricoInput, exemplaresUncheckedUpdateWithoutHistoricoInput>
  }

  export type exemplaresUpdateWithoutHistoricoInput = {
    codigo_exemplar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    livro?: livrosUpdateOneRequiredWithoutExemplaresNestedInput
    emprestimos?: emprestimosUpdateManyWithoutExemplarNestedInput
  }

  export type exemplaresUncheckedUpdateWithoutHistoricoInput = {
    id_exemplar?: IntFieldUpdateOperationsInput | number
    id_livro?: IntFieldUpdateOperationsInput | number
    codigo_exemplar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    emprestimos?: emprestimosUncheckedUpdateManyWithoutExemplarNestedInput
  }

  export type emprestimosCreateManyUsuarioInput = {
    id_emprestimo?: number
    id_exemplar: number
    data_retirada: Date | string
    data_prevista_devolucao: Date | string
    data_devolucao: Date | string
    renovado: boolean
  }

  export type reservasCreateManyUsuarioInput = {
    id_reserva?: number
    id_livro: number
    data_reserva: Date | string
    status: string
    posicao_fila: number
  }

  export type avaliacoesCreateManyUsuarioInput = {
    id_avaliacao?: number
    id_livro: number
    nota: number
    comentario: string
    data_avaliacao?: Date | string
  }

  export type historicoCreateManyUsuarioInput = {
    id_historico?: number
    id_exemplar: number
    acao: string
    data_acao?: Date | string
  }

  export type emprestimosUpdateWithoutUsuarioInput = {
    data_retirada?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prevista_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    renovado?: BoolFieldUpdateOperationsInput | boolean
    exemplar?: exemplaresUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type emprestimosUncheckedUpdateWithoutUsuarioInput = {
    id_emprestimo?: IntFieldUpdateOperationsInput | number
    id_exemplar?: IntFieldUpdateOperationsInput | number
    data_retirada?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prevista_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    renovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type emprestimosUncheckedUpdateManyWithoutUsuarioInput = {
    id_emprestimo?: IntFieldUpdateOperationsInput | number
    id_exemplar?: IntFieldUpdateOperationsInput | number
    data_retirada?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prevista_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    renovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type reservasUpdateWithoutUsuarioInput = {
    data_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    posicao_fila?: IntFieldUpdateOperationsInput | number
    livro?: livrosUpdateOneRequiredWithoutReservasNestedInput
  }

  export type reservasUncheckedUpdateWithoutUsuarioInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_livro?: IntFieldUpdateOperationsInput | number
    data_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    posicao_fila?: IntFieldUpdateOperationsInput | number
  }

  export type reservasUncheckedUpdateManyWithoutUsuarioInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_livro?: IntFieldUpdateOperationsInput | number
    data_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    posicao_fila?: IntFieldUpdateOperationsInput | number
  }

  export type avaliacoesUpdateWithoutUsuarioInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    livro?: livrosUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type avaliacoesUncheckedUpdateWithoutUsuarioInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    id_livro?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type avaliacoesUncheckedUpdateManyWithoutUsuarioInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    id_livro?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historicoUpdateWithoutUsuarioInput = {
    acao?: StringFieldUpdateOperationsInput | string
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
    exemplar?: exemplaresUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type historicoUncheckedUpdateWithoutUsuarioInput = {
    id_historico?: IntFieldUpdateOperationsInput | number
    id_exemplar?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historicoUncheckedUpdateManyWithoutUsuarioInput = {
    id_historico?: IntFieldUpdateOperationsInput | number
    id_exemplar?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type exemplaresCreateManyLivroInput = {
    id_exemplar?: number
    codigo_exemplar: string
    status: string
  }

  export type reservasCreateManyLivroInput = {
    id_reserva?: number
    id_usuario: number
    data_reserva: Date | string
    status: string
    posicao_fila: number
  }

  export type avaliacoesCreateManyLivroInput = {
    id_avaliacao?: number
    id_usuario: number
    nota: number
    comentario: string
    data_avaliacao?: Date | string
  }

  export type exemplaresUpdateWithoutLivroInput = {
    codigo_exemplar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    emprestimos?: emprestimosUpdateManyWithoutExemplarNestedInput
    historico?: historicoUpdateManyWithoutExemplarNestedInput
  }

  export type exemplaresUncheckedUpdateWithoutLivroInput = {
    id_exemplar?: IntFieldUpdateOperationsInput | number
    codigo_exemplar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    emprestimos?: emprestimosUncheckedUpdateManyWithoutExemplarNestedInput
    historico?: historicoUncheckedUpdateManyWithoutExemplarNestedInput
  }

  export type exemplaresUncheckedUpdateManyWithoutLivroInput = {
    id_exemplar?: IntFieldUpdateOperationsInput | number
    codigo_exemplar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type reservasUpdateWithoutLivroInput = {
    data_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    posicao_fila?: IntFieldUpdateOperationsInput | number
    usuario?: usuariosUpdateOneRequiredWithoutReservasNestedInput
  }

  export type reservasUncheckedUpdateWithoutLivroInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    data_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    posicao_fila?: IntFieldUpdateOperationsInput | number
  }

  export type reservasUncheckedUpdateManyWithoutLivroInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    data_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    posicao_fila?: IntFieldUpdateOperationsInput | number
  }

  export type avaliacoesUpdateWithoutLivroInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuariosUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type avaliacoesUncheckedUpdateWithoutLivroInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type avaliacoesUncheckedUpdateManyWithoutLivroInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type emprestimosCreateManyExemplarInput = {
    id_emprestimo?: number
    id_usuario: number
    data_retirada: Date | string
    data_prevista_devolucao: Date | string
    data_devolucao: Date | string
    renovado: boolean
  }

  export type historicoCreateManyExemplarInput = {
    id_historico?: number
    id_usuario: number
    acao: string
    data_acao?: Date | string
  }

  export type emprestimosUpdateWithoutExemplarInput = {
    data_retirada?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prevista_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    renovado?: BoolFieldUpdateOperationsInput | boolean
    usuario?: usuariosUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type emprestimosUncheckedUpdateWithoutExemplarInput = {
    id_emprestimo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    data_retirada?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prevista_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    renovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type emprestimosUncheckedUpdateManyWithoutExemplarInput = {
    id_emprestimo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    data_retirada?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prevista_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_devolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    renovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type historicoUpdateWithoutExemplarInput = {
    acao?: StringFieldUpdateOperationsInput | string
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuariosUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type historicoUncheckedUpdateWithoutExemplarInput = {
    id_historico?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historicoUncheckedUpdateManyWithoutExemplarInput = {
    id_historico?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    data_acao?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}