
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
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model TokenAddress
 * 
 */
export type TokenAddress = $Result.DefaultSelection<Prisma.$TokenAddressPayload>
/**
 * Model ChainRef
 * 
 */
export type ChainRef = $Result.DefaultSelection<Prisma.$ChainRefPayload>
/**
 * Model Pool
 * 
 */
export type Pool = $Result.DefaultSelection<Prisma.$PoolPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tokens
 * const tokens = await prisma.token.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Tokens
   * const tokens = await prisma.token.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenAddress`: Exposes CRUD operations for the **TokenAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenAddresses
    * const tokenAddresses = await prisma.tokenAddress.findMany()
    * ```
    */
  get tokenAddress(): Prisma.TokenAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chainRef`: Exposes CRUD operations for the **ChainRef** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChainRefs
    * const chainRefs = await prisma.chainRef.findMany()
    * ```
    */
  get chainRef(): Prisma.ChainRefDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pool`: Exposes CRUD operations for the **Pool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pools
    * const pools = await prisma.pool.findMany()
    * ```
    */
  get pool(): Prisma.PoolDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Token: 'Token',
    TokenAddress: 'TokenAddress',
    ChainRef: 'ChainRef',
    Pool: 'Pool'
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
      modelProps: "token" | "tokenAddress" | "chainRef" | "pool"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      TokenAddress: {
        payload: Prisma.$TokenAddressPayload<ExtArgs>
        fields: Prisma.TokenAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAddressPayload>
          }
          findFirst: {
            args: Prisma.TokenAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAddressPayload>
          }
          findMany: {
            args: Prisma.TokenAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAddressPayload>[]
          }
          create: {
            args: Prisma.TokenAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAddressPayload>
          }
          createMany: {
            args: Prisma.TokenAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAddressPayload>[]
          }
          delete: {
            args: Prisma.TokenAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAddressPayload>
          }
          update: {
            args: Prisma.TokenAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAddressPayload>
          }
          deleteMany: {
            args: Prisma.TokenAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAddressPayload>[]
          }
          upsert: {
            args: Prisma.TokenAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAddressPayload>
          }
          aggregate: {
            args: Prisma.TokenAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenAddress>
          }
          groupBy: {
            args: Prisma.TokenAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenAddressCountArgs<ExtArgs>
            result: $Utils.Optional<TokenAddressCountAggregateOutputType> | number
          }
        }
      }
      ChainRef: {
        payload: Prisma.$ChainRefPayload<ExtArgs>
        fields: Prisma.ChainRefFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChainRefFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainRefPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChainRefFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainRefPayload>
          }
          findFirst: {
            args: Prisma.ChainRefFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainRefPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChainRefFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainRefPayload>
          }
          findMany: {
            args: Prisma.ChainRefFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainRefPayload>[]
          }
          create: {
            args: Prisma.ChainRefCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainRefPayload>
          }
          createMany: {
            args: Prisma.ChainRefCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChainRefCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainRefPayload>[]
          }
          delete: {
            args: Prisma.ChainRefDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainRefPayload>
          }
          update: {
            args: Prisma.ChainRefUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainRefPayload>
          }
          deleteMany: {
            args: Prisma.ChainRefDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChainRefUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChainRefUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainRefPayload>[]
          }
          upsert: {
            args: Prisma.ChainRefUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainRefPayload>
          }
          aggregate: {
            args: Prisma.ChainRefAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChainRef>
          }
          groupBy: {
            args: Prisma.ChainRefGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChainRefGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChainRefCountArgs<ExtArgs>
            result: $Utils.Optional<ChainRefCountAggregateOutputType> | number
          }
        }
      }
      Pool: {
        payload: Prisma.$PoolPayload<ExtArgs>
        fields: Prisma.PoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          findFirst: {
            args: Prisma.PoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          findMany: {
            args: Prisma.PoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>[]
          }
          create: {
            args: Prisma.PoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          createMany: {
            args: Prisma.PoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>[]
          }
          delete: {
            args: Prisma.PoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          update: {
            args: Prisma.PoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          deleteMany: {
            args: Prisma.PoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>[]
          }
          upsert: {
            args: Prisma.PoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          aggregate: {
            args: Prisma.PoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePool>
          }
          groupBy: {
            args: Prisma.PoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoolCountArgs<ExtArgs>
            result: $Utils.Optional<PoolCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    token?: TokenOmit
    tokenAddress?: TokenAddressOmit
    chainRef?: ChainRefOmit
    pool?: PoolOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type TokenCountOutputType
   */

  export type TokenCountOutputType = {
    addresses: number
  }

  export type TokenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | TokenCountOutputTypeCountAddressesArgs
  }

  // Custom InputTypes
  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenCountOutputType
     */
    select?: TokenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenAddressWhereInput
  }


  /**
   * Count Type TokenAddressCountOutputType
   */

  export type TokenAddressCountOutputType = {
    poolsAsToken0: number
    poolsAsToken1: number
  }

  export type TokenAddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poolsAsToken0?: boolean | TokenAddressCountOutputTypeCountPoolsAsToken0Args
    poolsAsToken1?: boolean | TokenAddressCountOutputTypeCountPoolsAsToken1Args
  }

  // Custom InputTypes
  /**
   * TokenAddressCountOutputType without action
   */
  export type TokenAddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddressCountOutputType
     */
    select?: TokenAddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TokenAddressCountOutputType without action
   */
  export type TokenAddressCountOutputTypeCountPoolsAsToken0Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolWhereInput
  }

  /**
   * TokenAddressCountOutputType without action
   */
  export type TokenAddressCountOutputTypeCountPoolsAsToken1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolWhereInput
  }


  /**
   * Count Type ChainRefCountOutputType
   */

  export type ChainRefCountOutputType = {
    tokenAddresses: number
    pools: number
  }

  export type ChainRefCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokenAddresses?: boolean | ChainRefCountOutputTypeCountTokenAddressesArgs
    pools?: boolean | ChainRefCountOutputTypeCountPoolsArgs
  }

  // Custom InputTypes
  /**
   * ChainRefCountOutputType without action
   */
  export type ChainRefCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainRefCountOutputType
     */
    select?: ChainRefCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChainRefCountOutputType without action
   */
  export type ChainRefCountOutputTypeCountTokenAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenAddressWhereInput
  }

  /**
   * ChainRefCountOutputType without action
   */
  export type ChainRefCountOutputTypeCountPoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    tokenDecimals: number | null
  }

  export type TokenSumAggregateOutputType = {
    tokenDecimals: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    tokenName: string | null
    tokenDecimals: number | null
    tokenSymbol: string | null
    logoUrl: string | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    tokenName: string | null
    tokenDecimals: number | null
    tokenSymbol: string | null
    logoUrl: string | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    tokenName: number
    tokenDecimals: number
    tokenSymbol: number
    logoUrl: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    tokenDecimals?: true
  }

  export type TokenSumAggregateInputType = {
    tokenDecimals?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    tokenName?: true
    tokenDecimals?: true
    tokenSymbol?: true
    logoUrl?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    tokenName?: true
    tokenDecimals?: true
    tokenSymbol?: true
    logoUrl?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    tokenName?: true
    tokenDecimals?: true
    tokenSymbol?: true
    logoUrl?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    tokenName: string
    tokenDecimals: number
    tokenSymbol: string
    logoUrl: string | null
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenName?: boolean
    tokenDecimals?: boolean
    tokenSymbol?: boolean
    logoUrl?: boolean
    addresses?: boolean | Token$addressesArgs<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenName?: boolean
    tokenDecimals?: boolean
    tokenSymbol?: boolean
    logoUrl?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenName?: boolean
    tokenDecimals?: boolean
    tokenSymbol?: boolean
    logoUrl?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    tokenName?: boolean
    tokenDecimals?: boolean
    tokenSymbol?: boolean
    logoUrl?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenName" | "tokenDecimals" | "tokenSymbol" | "logoUrl", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | Token$addressesArgs<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      addresses: Prisma.$TokenAddressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenName: string
      tokenDecimals: number
      tokenSymbol: string
      logoUrl: string | null
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends Token$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Token$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly tokenName: FieldRef<"Token", 'String'>
    readonly tokenDecimals: FieldRef<"Token", 'Int'>
    readonly tokenSymbol: FieldRef<"Token", 'String'>
    readonly logoUrl: FieldRef<"Token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token.addresses
   */
  export type Token$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddress
     */
    select?: TokenAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAddress
     */
    omit?: TokenAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAddressInclude<ExtArgs> | null
    where?: TokenAddressWhereInput
    orderBy?: TokenAddressOrderByWithRelationInput | TokenAddressOrderByWithRelationInput[]
    cursor?: TokenAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenAddressScalarFieldEnum | TokenAddressScalarFieldEnum[]
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model TokenAddress
   */

  export type AggregateTokenAddress = {
    _count: TokenAddressCountAggregateOutputType | null
    _min: TokenAddressMinAggregateOutputType | null
    _max: TokenAddressMaxAggregateOutputType | null
  }

  export type TokenAddressMinAggregateOutputType = {
    tokenAddress: string | null
    chainId: string | null
    tokenId: string | null
  }

  export type TokenAddressMaxAggregateOutputType = {
    tokenAddress: string | null
    chainId: string | null
    tokenId: string | null
  }

  export type TokenAddressCountAggregateOutputType = {
    tokenAddress: number
    chainId: number
    tokenId: number
    _all: number
  }


  export type TokenAddressMinAggregateInputType = {
    tokenAddress?: true
    chainId?: true
    tokenId?: true
  }

  export type TokenAddressMaxAggregateInputType = {
    tokenAddress?: true
    chainId?: true
    tokenId?: true
  }

  export type TokenAddressCountAggregateInputType = {
    tokenAddress?: true
    chainId?: true
    tokenId?: true
    _all?: true
  }

  export type TokenAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenAddress to aggregate.
     */
    where?: TokenAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenAddresses to fetch.
     */
    orderBy?: TokenAddressOrderByWithRelationInput | TokenAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenAddresses
    **/
    _count?: true | TokenAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenAddressMaxAggregateInputType
  }

  export type GetTokenAddressAggregateType<T extends TokenAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenAddress[P]>
      : GetScalarType<T[P], AggregateTokenAddress[P]>
  }




  export type TokenAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenAddressWhereInput
    orderBy?: TokenAddressOrderByWithAggregationInput | TokenAddressOrderByWithAggregationInput[]
    by: TokenAddressScalarFieldEnum[] | TokenAddressScalarFieldEnum
    having?: TokenAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenAddressCountAggregateInputType | true
    _min?: TokenAddressMinAggregateInputType
    _max?: TokenAddressMaxAggregateInputType
  }

  export type TokenAddressGroupByOutputType = {
    tokenAddress: string
    chainId: string
    tokenId: string
    _count: TokenAddressCountAggregateOutputType | null
    _min: TokenAddressMinAggregateOutputType | null
    _max: TokenAddressMaxAggregateOutputType | null
  }

  type GetTokenAddressGroupByPayload<T extends TokenAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenAddressGroupByOutputType[P]>
            : GetScalarType<T[P], TokenAddressGroupByOutputType[P]>
        }
      >
    >


  export type TokenAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenAddress?: boolean
    chainId?: boolean
    tokenId?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
    chain?: boolean | ChainRefDefaultArgs<ExtArgs>
    poolsAsToken0?: boolean | TokenAddress$poolsAsToken0Args<ExtArgs>
    poolsAsToken1?: boolean | TokenAddress$poolsAsToken1Args<ExtArgs>
    _count?: boolean | TokenAddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenAddress"]>

  export type TokenAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenAddress?: boolean
    chainId?: boolean
    tokenId?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
    chain?: boolean | ChainRefDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenAddress"]>

  export type TokenAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenAddress?: boolean
    chainId?: boolean
    tokenId?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
    chain?: boolean | ChainRefDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenAddress"]>

  export type TokenAddressSelectScalar = {
    tokenAddress?: boolean
    chainId?: boolean
    tokenId?: boolean
  }

  export type TokenAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tokenAddress" | "chainId" | "tokenId", ExtArgs["result"]["tokenAddress"]>
  export type TokenAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
    chain?: boolean | ChainRefDefaultArgs<ExtArgs>
    poolsAsToken0?: boolean | TokenAddress$poolsAsToken0Args<ExtArgs>
    poolsAsToken1?: boolean | TokenAddress$poolsAsToken1Args<ExtArgs>
    _count?: boolean | TokenAddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TokenAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
    chain?: boolean | ChainRefDefaultArgs<ExtArgs>
  }
  export type TokenAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
    chain?: boolean | ChainRefDefaultArgs<ExtArgs>
  }

  export type $TokenAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenAddress"
    objects: {
      token: Prisma.$TokenPayload<ExtArgs>
      chain: Prisma.$ChainRefPayload<ExtArgs>
      poolsAsToken0: Prisma.$PoolPayload<ExtArgs>[]
      poolsAsToken1: Prisma.$PoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tokenAddress: string
      chainId: string
      tokenId: string
    }, ExtArgs["result"]["tokenAddress"]>
    composites: {}
  }

  type TokenAddressGetPayload<S extends boolean | null | undefined | TokenAddressDefaultArgs> = $Result.GetResult<Prisma.$TokenAddressPayload, S>

  type TokenAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenAddressCountAggregateInputType | true
    }

  export interface TokenAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenAddress'], meta: { name: 'TokenAddress' } }
    /**
     * Find zero or one TokenAddress that matches the filter.
     * @param {TokenAddressFindUniqueArgs} args - Arguments to find a TokenAddress
     * @example
     * // Get one TokenAddress
     * const tokenAddress = await prisma.tokenAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenAddressFindUniqueArgs>(args: SelectSubset<T, TokenAddressFindUniqueArgs<ExtArgs>>): Prisma__TokenAddressClient<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenAddressFindUniqueOrThrowArgs} args - Arguments to find a TokenAddress
     * @example
     * // Get one TokenAddress
     * const tokenAddress = await prisma.tokenAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenAddressClient<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAddressFindFirstArgs} args - Arguments to find a TokenAddress
     * @example
     * // Get one TokenAddress
     * const tokenAddress = await prisma.tokenAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenAddressFindFirstArgs>(args?: SelectSubset<T, TokenAddressFindFirstArgs<ExtArgs>>): Prisma__TokenAddressClient<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAddressFindFirstOrThrowArgs} args - Arguments to find a TokenAddress
     * @example
     * // Get one TokenAddress
     * const tokenAddress = await prisma.tokenAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenAddressClient<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenAddresses
     * const tokenAddresses = await prisma.tokenAddress.findMany()
     * 
     * // Get first 10 TokenAddresses
     * const tokenAddresses = await prisma.tokenAddress.findMany({ take: 10 })
     * 
     * // Only select the `tokenAddress`
     * const tokenAddressWithTokenAddressOnly = await prisma.tokenAddress.findMany({ select: { tokenAddress: true } })
     * 
     */
    findMany<T extends TokenAddressFindManyArgs>(args?: SelectSubset<T, TokenAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenAddress.
     * @param {TokenAddressCreateArgs} args - Arguments to create a TokenAddress.
     * @example
     * // Create one TokenAddress
     * const TokenAddress = await prisma.tokenAddress.create({
     *   data: {
     *     // ... data to create a TokenAddress
     *   }
     * })
     * 
     */
    create<T extends TokenAddressCreateArgs>(args: SelectSubset<T, TokenAddressCreateArgs<ExtArgs>>): Prisma__TokenAddressClient<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenAddresses.
     * @param {TokenAddressCreateManyArgs} args - Arguments to create many TokenAddresses.
     * @example
     * // Create many TokenAddresses
     * const tokenAddress = await prisma.tokenAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenAddressCreateManyArgs>(args?: SelectSubset<T, TokenAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenAddresses and returns the data saved in the database.
     * @param {TokenAddressCreateManyAndReturnArgs} args - Arguments to create many TokenAddresses.
     * @example
     * // Create many TokenAddresses
     * const tokenAddress = await prisma.tokenAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenAddresses and only return the `tokenAddress`
     * const tokenAddressWithTokenAddressOnly = await prisma.tokenAddress.createManyAndReturn({
     *   select: { tokenAddress: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokenAddress.
     * @param {TokenAddressDeleteArgs} args - Arguments to delete one TokenAddress.
     * @example
     * // Delete one TokenAddress
     * const TokenAddress = await prisma.tokenAddress.delete({
     *   where: {
     *     // ... filter to delete one TokenAddress
     *   }
     * })
     * 
     */
    delete<T extends TokenAddressDeleteArgs>(args: SelectSubset<T, TokenAddressDeleteArgs<ExtArgs>>): Prisma__TokenAddressClient<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenAddress.
     * @param {TokenAddressUpdateArgs} args - Arguments to update one TokenAddress.
     * @example
     * // Update one TokenAddress
     * const tokenAddress = await prisma.tokenAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenAddressUpdateArgs>(args: SelectSubset<T, TokenAddressUpdateArgs<ExtArgs>>): Prisma__TokenAddressClient<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenAddresses.
     * @param {TokenAddressDeleteManyArgs} args - Arguments to filter TokenAddresses to delete.
     * @example
     * // Delete a few TokenAddresses
     * const { count } = await prisma.tokenAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenAddressDeleteManyArgs>(args?: SelectSubset<T, TokenAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenAddresses
     * const tokenAddress = await prisma.tokenAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenAddressUpdateManyArgs>(args: SelectSubset<T, TokenAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenAddresses and returns the data updated in the database.
     * @param {TokenAddressUpdateManyAndReturnArgs} args - Arguments to update many TokenAddresses.
     * @example
     * // Update many TokenAddresses
     * const tokenAddress = await prisma.tokenAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokenAddresses and only return the `tokenAddress`
     * const tokenAddressWithTokenAddressOnly = await prisma.tokenAddress.updateManyAndReturn({
     *   select: { tokenAddress: true },
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
    updateManyAndReturn<T extends TokenAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokenAddress.
     * @param {TokenAddressUpsertArgs} args - Arguments to update or create a TokenAddress.
     * @example
     * // Update or create a TokenAddress
     * const tokenAddress = await prisma.tokenAddress.upsert({
     *   create: {
     *     // ... data to create a TokenAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenAddress we want to update
     *   }
     * })
     */
    upsert<T extends TokenAddressUpsertArgs>(args: SelectSubset<T, TokenAddressUpsertArgs<ExtArgs>>): Prisma__TokenAddressClient<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAddressCountArgs} args - Arguments to filter TokenAddresses to count.
     * @example
     * // Count the number of TokenAddresses
     * const count = await prisma.tokenAddress.count({
     *   where: {
     *     // ... the filter for the TokenAddresses we want to count
     *   }
     * })
    **/
    count<T extends TokenAddressCountArgs>(
      args?: Subset<T, TokenAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAddressAggregateArgs>(args: Subset<T, TokenAddressAggregateArgs>): Prisma.PrismaPromise<GetTokenAddressAggregateType<T>>

    /**
     * Group by TokenAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAddressGroupByArgs} args - Group by arguments.
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
      T extends TokenAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenAddressGroupByArgs['orderBy'] }
        : { orderBy?: TokenAddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenAddress model
   */
  readonly fields: TokenAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chain<T extends ChainRefDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChainRefDefaultArgs<ExtArgs>>): Prisma__ChainRefClient<$Result.GetResult<Prisma.$ChainRefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    poolsAsToken0<T extends TokenAddress$poolsAsToken0Args<ExtArgs> = {}>(args?: Subset<T, TokenAddress$poolsAsToken0Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    poolsAsToken1<T extends TokenAddress$poolsAsToken1Args<ExtArgs> = {}>(args?: Subset<T, TokenAddress$poolsAsToken1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TokenAddress model
   */
  interface TokenAddressFieldRefs {
    readonly tokenAddress: FieldRef<"TokenAddress", 'String'>
    readonly chainId: FieldRef<"TokenAddress", 'String'>
    readonly tokenId: FieldRef<"TokenAddress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TokenAddress findUnique
   */
  export type TokenAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddress
     */
    select?: TokenAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAddress
     */
    omit?: TokenAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAddressInclude<ExtArgs> | null
    /**
     * Filter, which TokenAddress to fetch.
     */
    where: TokenAddressWhereUniqueInput
  }

  /**
   * TokenAddress findUniqueOrThrow
   */
  export type TokenAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddress
     */
    select?: TokenAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAddress
     */
    omit?: TokenAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAddressInclude<ExtArgs> | null
    /**
     * Filter, which TokenAddress to fetch.
     */
    where: TokenAddressWhereUniqueInput
  }

  /**
   * TokenAddress findFirst
   */
  export type TokenAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddress
     */
    select?: TokenAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAddress
     */
    omit?: TokenAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAddressInclude<ExtArgs> | null
    /**
     * Filter, which TokenAddress to fetch.
     */
    where?: TokenAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenAddresses to fetch.
     */
    orderBy?: TokenAddressOrderByWithRelationInput | TokenAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenAddresses.
     */
    cursor?: TokenAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenAddresses.
     */
    distinct?: TokenAddressScalarFieldEnum | TokenAddressScalarFieldEnum[]
  }

  /**
   * TokenAddress findFirstOrThrow
   */
  export type TokenAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddress
     */
    select?: TokenAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAddress
     */
    omit?: TokenAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAddressInclude<ExtArgs> | null
    /**
     * Filter, which TokenAddress to fetch.
     */
    where?: TokenAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenAddresses to fetch.
     */
    orderBy?: TokenAddressOrderByWithRelationInput | TokenAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenAddresses.
     */
    cursor?: TokenAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenAddresses.
     */
    distinct?: TokenAddressScalarFieldEnum | TokenAddressScalarFieldEnum[]
  }

  /**
   * TokenAddress findMany
   */
  export type TokenAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddress
     */
    select?: TokenAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAddress
     */
    omit?: TokenAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAddressInclude<ExtArgs> | null
    /**
     * Filter, which TokenAddresses to fetch.
     */
    where?: TokenAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenAddresses to fetch.
     */
    orderBy?: TokenAddressOrderByWithRelationInput | TokenAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenAddresses.
     */
    cursor?: TokenAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenAddresses.
     */
    skip?: number
    distinct?: TokenAddressScalarFieldEnum | TokenAddressScalarFieldEnum[]
  }

  /**
   * TokenAddress create
   */
  export type TokenAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddress
     */
    select?: TokenAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAddress
     */
    omit?: TokenAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenAddress.
     */
    data: XOR<TokenAddressCreateInput, TokenAddressUncheckedCreateInput>
  }

  /**
   * TokenAddress createMany
   */
  export type TokenAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenAddresses.
     */
    data: TokenAddressCreateManyInput | TokenAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenAddress createManyAndReturn
   */
  export type TokenAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddress
     */
    select?: TokenAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAddress
     */
    omit?: TokenAddressOmit<ExtArgs> | null
    /**
     * The data used to create many TokenAddresses.
     */
    data: TokenAddressCreateManyInput | TokenAddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenAddress update
   */
  export type TokenAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddress
     */
    select?: TokenAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAddress
     */
    omit?: TokenAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenAddress.
     */
    data: XOR<TokenAddressUpdateInput, TokenAddressUncheckedUpdateInput>
    /**
     * Choose, which TokenAddress to update.
     */
    where: TokenAddressWhereUniqueInput
  }

  /**
   * TokenAddress updateMany
   */
  export type TokenAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenAddresses.
     */
    data: XOR<TokenAddressUpdateManyMutationInput, TokenAddressUncheckedUpdateManyInput>
    /**
     * Filter which TokenAddresses to update
     */
    where?: TokenAddressWhereInput
    /**
     * Limit how many TokenAddresses to update.
     */
    limit?: number
  }

  /**
   * TokenAddress updateManyAndReturn
   */
  export type TokenAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddress
     */
    select?: TokenAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAddress
     */
    omit?: TokenAddressOmit<ExtArgs> | null
    /**
     * The data used to update TokenAddresses.
     */
    data: XOR<TokenAddressUpdateManyMutationInput, TokenAddressUncheckedUpdateManyInput>
    /**
     * Filter which TokenAddresses to update
     */
    where?: TokenAddressWhereInput
    /**
     * Limit how many TokenAddresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenAddress upsert
   */
  export type TokenAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddress
     */
    select?: TokenAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAddress
     */
    omit?: TokenAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenAddress to update in case it exists.
     */
    where: TokenAddressWhereUniqueInput
    /**
     * In case the TokenAddress found by the `where` argument doesn't exist, create a new TokenAddress with this data.
     */
    create: XOR<TokenAddressCreateInput, TokenAddressUncheckedCreateInput>
    /**
     * In case the TokenAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenAddressUpdateInput, TokenAddressUncheckedUpdateInput>
  }

  /**
   * TokenAddress delete
   */
  export type TokenAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddress
     */
    select?: TokenAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAddress
     */
    omit?: TokenAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAddressInclude<ExtArgs> | null
    /**
     * Filter which TokenAddress to delete.
     */
    where: TokenAddressWhereUniqueInput
  }

  /**
   * TokenAddress deleteMany
   */
  export type TokenAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenAddresses to delete
     */
    where?: TokenAddressWhereInput
    /**
     * Limit how many TokenAddresses to delete.
     */
    limit?: number
  }

  /**
   * TokenAddress.poolsAsToken0
   */
  export type TokenAddress$poolsAsToken0Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    where?: PoolWhereInput
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    cursor?: PoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * TokenAddress.poolsAsToken1
   */
  export type TokenAddress$poolsAsToken1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    where?: PoolWhereInput
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    cursor?: PoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * TokenAddress without action
   */
  export type TokenAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddress
     */
    select?: TokenAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAddress
     */
    omit?: TokenAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAddressInclude<ExtArgs> | null
  }


  /**
   * Model ChainRef
   */

  export type AggregateChainRef = {
    _count: ChainRefCountAggregateOutputType | null
    _min: ChainRefMinAggregateOutputType | null
    _max: ChainRefMaxAggregateOutputType | null
  }

  export type ChainRefMinAggregateOutputType = {
    id: string | null
    networkName: string | null
  }

  export type ChainRefMaxAggregateOutputType = {
    id: string | null
    networkName: string | null
  }

  export type ChainRefCountAggregateOutputType = {
    id: number
    networkName: number
    _all: number
  }


  export type ChainRefMinAggregateInputType = {
    id?: true
    networkName?: true
  }

  export type ChainRefMaxAggregateInputType = {
    id?: true
    networkName?: true
  }

  export type ChainRefCountAggregateInputType = {
    id?: true
    networkName?: true
    _all?: true
  }

  export type ChainRefAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChainRef to aggregate.
     */
    where?: ChainRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChainRefs to fetch.
     */
    orderBy?: ChainRefOrderByWithRelationInput | ChainRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChainRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChainRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChainRefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChainRefs
    **/
    _count?: true | ChainRefCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChainRefMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChainRefMaxAggregateInputType
  }

  export type GetChainRefAggregateType<T extends ChainRefAggregateArgs> = {
        [P in keyof T & keyof AggregateChainRef]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChainRef[P]>
      : GetScalarType<T[P], AggregateChainRef[P]>
  }




  export type ChainRefGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChainRefWhereInput
    orderBy?: ChainRefOrderByWithAggregationInput | ChainRefOrderByWithAggregationInput[]
    by: ChainRefScalarFieldEnum[] | ChainRefScalarFieldEnum
    having?: ChainRefScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChainRefCountAggregateInputType | true
    _min?: ChainRefMinAggregateInputType
    _max?: ChainRefMaxAggregateInputType
  }

  export type ChainRefGroupByOutputType = {
    id: string
    networkName: string | null
    _count: ChainRefCountAggregateOutputType | null
    _min: ChainRefMinAggregateOutputType | null
    _max: ChainRefMaxAggregateOutputType | null
  }

  type GetChainRefGroupByPayload<T extends ChainRefGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChainRefGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChainRefGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChainRefGroupByOutputType[P]>
            : GetScalarType<T[P], ChainRefGroupByOutputType[P]>
        }
      >
    >


  export type ChainRefSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    networkName?: boolean
    tokenAddresses?: boolean | ChainRef$tokenAddressesArgs<ExtArgs>
    pools?: boolean | ChainRef$poolsArgs<ExtArgs>
    _count?: boolean | ChainRefCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chainRef"]>

  export type ChainRefSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    networkName?: boolean
  }, ExtArgs["result"]["chainRef"]>

  export type ChainRefSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    networkName?: boolean
  }, ExtArgs["result"]["chainRef"]>

  export type ChainRefSelectScalar = {
    id?: boolean
    networkName?: boolean
  }

  export type ChainRefOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "networkName", ExtArgs["result"]["chainRef"]>
  export type ChainRefInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokenAddresses?: boolean | ChainRef$tokenAddressesArgs<ExtArgs>
    pools?: boolean | ChainRef$poolsArgs<ExtArgs>
    _count?: boolean | ChainRefCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChainRefIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChainRefIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChainRefPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChainRef"
    objects: {
      tokenAddresses: Prisma.$TokenAddressPayload<ExtArgs>[]
      pools: Prisma.$PoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      networkName: string | null
    }, ExtArgs["result"]["chainRef"]>
    composites: {}
  }

  type ChainRefGetPayload<S extends boolean | null | undefined | ChainRefDefaultArgs> = $Result.GetResult<Prisma.$ChainRefPayload, S>

  type ChainRefCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChainRefFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChainRefCountAggregateInputType | true
    }

  export interface ChainRefDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChainRef'], meta: { name: 'ChainRef' } }
    /**
     * Find zero or one ChainRef that matches the filter.
     * @param {ChainRefFindUniqueArgs} args - Arguments to find a ChainRef
     * @example
     * // Get one ChainRef
     * const chainRef = await prisma.chainRef.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChainRefFindUniqueArgs>(args: SelectSubset<T, ChainRefFindUniqueArgs<ExtArgs>>): Prisma__ChainRefClient<$Result.GetResult<Prisma.$ChainRefPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChainRef that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChainRefFindUniqueOrThrowArgs} args - Arguments to find a ChainRef
     * @example
     * // Get one ChainRef
     * const chainRef = await prisma.chainRef.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChainRefFindUniqueOrThrowArgs>(args: SelectSubset<T, ChainRefFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChainRefClient<$Result.GetResult<Prisma.$ChainRefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChainRef that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainRefFindFirstArgs} args - Arguments to find a ChainRef
     * @example
     * // Get one ChainRef
     * const chainRef = await prisma.chainRef.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChainRefFindFirstArgs>(args?: SelectSubset<T, ChainRefFindFirstArgs<ExtArgs>>): Prisma__ChainRefClient<$Result.GetResult<Prisma.$ChainRefPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChainRef that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainRefFindFirstOrThrowArgs} args - Arguments to find a ChainRef
     * @example
     * // Get one ChainRef
     * const chainRef = await prisma.chainRef.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChainRefFindFirstOrThrowArgs>(args?: SelectSubset<T, ChainRefFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChainRefClient<$Result.GetResult<Prisma.$ChainRefPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChainRefs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainRefFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChainRefs
     * const chainRefs = await prisma.chainRef.findMany()
     * 
     * // Get first 10 ChainRefs
     * const chainRefs = await prisma.chainRef.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chainRefWithIdOnly = await prisma.chainRef.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChainRefFindManyArgs>(args?: SelectSubset<T, ChainRefFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChainRefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChainRef.
     * @param {ChainRefCreateArgs} args - Arguments to create a ChainRef.
     * @example
     * // Create one ChainRef
     * const ChainRef = await prisma.chainRef.create({
     *   data: {
     *     // ... data to create a ChainRef
     *   }
     * })
     * 
     */
    create<T extends ChainRefCreateArgs>(args: SelectSubset<T, ChainRefCreateArgs<ExtArgs>>): Prisma__ChainRefClient<$Result.GetResult<Prisma.$ChainRefPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChainRefs.
     * @param {ChainRefCreateManyArgs} args - Arguments to create many ChainRefs.
     * @example
     * // Create many ChainRefs
     * const chainRef = await prisma.chainRef.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChainRefCreateManyArgs>(args?: SelectSubset<T, ChainRefCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChainRefs and returns the data saved in the database.
     * @param {ChainRefCreateManyAndReturnArgs} args - Arguments to create many ChainRefs.
     * @example
     * // Create many ChainRefs
     * const chainRef = await prisma.chainRef.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChainRefs and only return the `id`
     * const chainRefWithIdOnly = await prisma.chainRef.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChainRefCreateManyAndReturnArgs>(args?: SelectSubset<T, ChainRefCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChainRefPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChainRef.
     * @param {ChainRefDeleteArgs} args - Arguments to delete one ChainRef.
     * @example
     * // Delete one ChainRef
     * const ChainRef = await prisma.chainRef.delete({
     *   where: {
     *     // ... filter to delete one ChainRef
     *   }
     * })
     * 
     */
    delete<T extends ChainRefDeleteArgs>(args: SelectSubset<T, ChainRefDeleteArgs<ExtArgs>>): Prisma__ChainRefClient<$Result.GetResult<Prisma.$ChainRefPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChainRef.
     * @param {ChainRefUpdateArgs} args - Arguments to update one ChainRef.
     * @example
     * // Update one ChainRef
     * const chainRef = await prisma.chainRef.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChainRefUpdateArgs>(args: SelectSubset<T, ChainRefUpdateArgs<ExtArgs>>): Prisma__ChainRefClient<$Result.GetResult<Prisma.$ChainRefPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChainRefs.
     * @param {ChainRefDeleteManyArgs} args - Arguments to filter ChainRefs to delete.
     * @example
     * // Delete a few ChainRefs
     * const { count } = await prisma.chainRef.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChainRefDeleteManyArgs>(args?: SelectSubset<T, ChainRefDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChainRefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainRefUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChainRefs
     * const chainRef = await prisma.chainRef.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChainRefUpdateManyArgs>(args: SelectSubset<T, ChainRefUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChainRefs and returns the data updated in the database.
     * @param {ChainRefUpdateManyAndReturnArgs} args - Arguments to update many ChainRefs.
     * @example
     * // Update many ChainRefs
     * const chainRef = await prisma.chainRef.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChainRefs and only return the `id`
     * const chainRefWithIdOnly = await prisma.chainRef.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ChainRefUpdateManyAndReturnArgs>(args: SelectSubset<T, ChainRefUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChainRefPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChainRef.
     * @param {ChainRefUpsertArgs} args - Arguments to update or create a ChainRef.
     * @example
     * // Update or create a ChainRef
     * const chainRef = await prisma.chainRef.upsert({
     *   create: {
     *     // ... data to create a ChainRef
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChainRef we want to update
     *   }
     * })
     */
    upsert<T extends ChainRefUpsertArgs>(args: SelectSubset<T, ChainRefUpsertArgs<ExtArgs>>): Prisma__ChainRefClient<$Result.GetResult<Prisma.$ChainRefPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChainRefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainRefCountArgs} args - Arguments to filter ChainRefs to count.
     * @example
     * // Count the number of ChainRefs
     * const count = await prisma.chainRef.count({
     *   where: {
     *     // ... the filter for the ChainRefs we want to count
     *   }
     * })
    **/
    count<T extends ChainRefCountArgs>(
      args?: Subset<T, ChainRefCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChainRefCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChainRef.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainRefAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChainRefAggregateArgs>(args: Subset<T, ChainRefAggregateArgs>): Prisma.PrismaPromise<GetChainRefAggregateType<T>>

    /**
     * Group by ChainRef.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainRefGroupByArgs} args - Group by arguments.
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
      T extends ChainRefGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChainRefGroupByArgs['orderBy'] }
        : { orderBy?: ChainRefGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChainRefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChainRefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChainRef model
   */
  readonly fields: ChainRefFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChainRef.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChainRefClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokenAddresses<T extends ChainRef$tokenAddressesArgs<ExtArgs> = {}>(args?: Subset<T, ChainRef$tokenAddressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pools<T extends ChainRef$poolsArgs<ExtArgs> = {}>(args?: Subset<T, ChainRef$poolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChainRef model
   */
  interface ChainRefFieldRefs {
    readonly id: FieldRef<"ChainRef", 'String'>
    readonly networkName: FieldRef<"ChainRef", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChainRef findUnique
   */
  export type ChainRefFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainRef
     */
    select?: ChainRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainRef
     */
    omit?: ChainRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainRefInclude<ExtArgs> | null
    /**
     * Filter, which ChainRef to fetch.
     */
    where: ChainRefWhereUniqueInput
  }

  /**
   * ChainRef findUniqueOrThrow
   */
  export type ChainRefFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainRef
     */
    select?: ChainRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainRef
     */
    omit?: ChainRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainRefInclude<ExtArgs> | null
    /**
     * Filter, which ChainRef to fetch.
     */
    where: ChainRefWhereUniqueInput
  }

  /**
   * ChainRef findFirst
   */
  export type ChainRefFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainRef
     */
    select?: ChainRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainRef
     */
    omit?: ChainRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainRefInclude<ExtArgs> | null
    /**
     * Filter, which ChainRef to fetch.
     */
    where?: ChainRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChainRefs to fetch.
     */
    orderBy?: ChainRefOrderByWithRelationInput | ChainRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChainRefs.
     */
    cursor?: ChainRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChainRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChainRefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChainRefs.
     */
    distinct?: ChainRefScalarFieldEnum | ChainRefScalarFieldEnum[]
  }

  /**
   * ChainRef findFirstOrThrow
   */
  export type ChainRefFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainRef
     */
    select?: ChainRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainRef
     */
    omit?: ChainRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainRefInclude<ExtArgs> | null
    /**
     * Filter, which ChainRef to fetch.
     */
    where?: ChainRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChainRefs to fetch.
     */
    orderBy?: ChainRefOrderByWithRelationInput | ChainRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChainRefs.
     */
    cursor?: ChainRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChainRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChainRefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChainRefs.
     */
    distinct?: ChainRefScalarFieldEnum | ChainRefScalarFieldEnum[]
  }

  /**
   * ChainRef findMany
   */
  export type ChainRefFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainRef
     */
    select?: ChainRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainRef
     */
    omit?: ChainRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainRefInclude<ExtArgs> | null
    /**
     * Filter, which ChainRefs to fetch.
     */
    where?: ChainRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChainRefs to fetch.
     */
    orderBy?: ChainRefOrderByWithRelationInput | ChainRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChainRefs.
     */
    cursor?: ChainRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChainRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChainRefs.
     */
    skip?: number
    distinct?: ChainRefScalarFieldEnum | ChainRefScalarFieldEnum[]
  }

  /**
   * ChainRef create
   */
  export type ChainRefCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainRef
     */
    select?: ChainRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainRef
     */
    omit?: ChainRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainRefInclude<ExtArgs> | null
    /**
     * The data needed to create a ChainRef.
     */
    data: XOR<ChainRefCreateInput, ChainRefUncheckedCreateInput>
  }

  /**
   * ChainRef createMany
   */
  export type ChainRefCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChainRefs.
     */
    data: ChainRefCreateManyInput | ChainRefCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChainRef createManyAndReturn
   */
  export type ChainRefCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainRef
     */
    select?: ChainRefSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChainRef
     */
    omit?: ChainRefOmit<ExtArgs> | null
    /**
     * The data used to create many ChainRefs.
     */
    data: ChainRefCreateManyInput | ChainRefCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChainRef update
   */
  export type ChainRefUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainRef
     */
    select?: ChainRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainRef
     */
    omit?: ChainRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainRefInclude<ExtArgs> | null
    /**
     * The data needed to update a ChainRef.
     */
    data: XOR<ChainRefUpdateInput, ChainRefUncheckedUpdateInput>
    /**
     * Choose, which ChainRef to update.
     */
    where: ChainRefWhereUniqueInput
  }

  /**
   * ChainRef updateMany
   */
  export type ChainRefUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChainRefs.
     */
    data: XOR<ChainRefUpdateManyMutationInput, ChainRefUncheckedUpdateManyInput>
    /**
     * Filter which ChainRefs to update
     */
    where?: ChainRefWhereInput
    /**
     * Limit how many ChainRefs to update.
     */
    limit?: number
  }

  /**
   * ChainRef updateManyAndReturn
   */
  export type ChainRefUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainRef
     */
    select?: ChainRefSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChainRef
     */
    omit?: ChainRefOmit<ExtArgs> | null
    /**
     * The data used to update ChainRefs.
     */
    data: XOR<ChainRefUpdateManyMutationInput, ChainRefUncheckedUpdateManyInput>
    /**
     * Filter which ChainRefs to update
     */
    where?: ChainRefWhereInput
    /**
     * Limit how many ChainRefs to update.
     */
    limit?: number
  }

  /**
   * ChainRef upsert
   */
  export type ChainRefUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainRef
     */
    select?: ChainRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainRef
     */
    omit?: ChainRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainRefInclude<ExtArgs> | null
    /**
     * The filter to search for the ChainRef to update in case it exists.
     */
    where: ChainRefWhereUniqueInput
    /**
     * In case the ChainRef found by the `where` argument doesn't exist, create a new ChainRef with this data.
     */
    create: XOR<ChainRefCreateInput, ChainRefUncheckedCreateInput>
    /**
     * In case the ChainRef was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChainRefUpdateInput, ChainRefUncheckedUpdateInput>
  }

  /**
   * ChainRef delete
   */
  export type ChainRefDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainRef
     */
    select?: ChainRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainRef
     */
    omit?: ChainRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainRefInclude<ExtArgs> | null
    /**
     * Filter which ChainRef to delete.
     */
    where: ChainRefWhereUniqueInput
  }

  /**
   * ChainRef deleteMany
   */
  export type ChainRefDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChainRefs to delete
     */
    where?: ChainRefWhereInput
    /**
     * Limit how many ChainRefs to delete.
     */
    limit?: number
  }

  /**
   * ChainRef.tokenAddresses
   */
  export type ChainRef$tokenAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAddress
     */
    select?: TokenAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAddress
     */
    omit?: TokenAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAddressInclude<ExtArgs> | null
    where?: TokenAddressWhereInput
    orderBy?: TokenAddressOrderByWithRelationInput | TokenAddressOrderByWithRelationInput[]
    cursor?: TokenAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenAddressScalarFieldEnum | TokenAddressScalarFieldEnum[]
  }

  /**
   * ChainRef.pools
   */
  export type ChainRef$poolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    where?: PoolWhereInput
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    cursor?: PoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * ChainRef without action
   */
  export type ChainRefDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainRef
     */
    select?: ChainRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChainRef
     */
    omit?: ChainRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainRefInclude<ExtArgs> | null
  }


  /**
   * Model Pool
   */

  export type AggregatePool = {
    _count: PoolCountAggregateOutputType | null
    _min: PoolMinAggregateOutputType | null
    _max: PoolMaxAggregateOutputType | null
  }

  export type PoolMinAggregateOutputType = {
    poolAddress: string | null
    token0Address: string | null
    token1Address: string | null
    dexName: string | null
    chainId: string | null
  }

  export type PoolMaxAggregateOutputType = {
    poolAddress: string | null
    token0Address: string | null
    token1Address: string | null
    dexName: string | null
    chainId: string | null
  }

  export type PoolCountAggregateOutputType = {
    poolAddress: number
    token0Address: number
    token1Address: number
    dexName: number
    chainId: number
    _all: number
  }


  export type PoolMinAggregateInputType = {
    poolAddress?: true
    token0Address?: true
    token1Address?: true
    dexName?: true
    chainId?: true
  }

  export type PoolMaxAggregateInputType = {
    poolAddress?: true
    token0Address?: true
    token1Address?: true
    dexName?: true
    chainId?: true
  }

  export type PoolCountAggregateInputType = {
    poolAddress?: true
    token0Address?: true
    token1Address?: true
    dexName?: true
    chainId?: true
    _all?: true
  }

  export type PoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pool to aggregate.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pools
    **/
    _count?: true | PoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoolMaxAggregateInputType
  }

  export type GetPoolAggregateType<T extends PoolAggregateArgs> = {
        [P in keyof T & keyof AggregatePool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePool[P]>
      : GetScalarType<T[P], AggregatePool[P]>
  }




  export type PoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolWhereInput
    orderBy?: PoolOrderByWithAggregationInput | PoolOrderByWithAggregationInput[]
    by: PoolScalarFieldEnum[] | PoolScalarFieldEnum
    having?: PoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoolCountAggregateInputType | true
    _min?: PoolMinAggregateInputType
    _max?: PoolMaxAggregateInputType
  }

  export type PoolGroupByOutputType = {
    poolAddress: string
    token0Address: string
    token1Address: string
    dexName: string
    chainId: string
    _count: PoolCountAggregateOutputType | null
    _min: PoolMinAggregateOutputType | null
    _max: PoolMaxAggregateOutputType | null
  }

  type GetPoolGroupByPayload<T extends PoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoolGroupByOutputType[P]>
            : GetScalarType<T[P], PoolGroupByOutputType[P]>
        }
      >
    >


  export type PoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    poolAddress?: boolean
    token0Address?: boolean
    token1Address?: boolean
    dexName?: boolean
    chainId?: boolean
    chain?: boolean | ChainRefDefaultArgs<ExtArgs>
    token0?: boolean | TokenAddressDefaultArgs<ExtArgs>
    token1?: boolean | TokenAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pool"]>

  export type PoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    poolAddress?: boolean
    token0Address?: boolean
    token1Address?: boolean
    dexName?: boolean
    chainId?: boolean
    chain?: boolean | ChainRefDefaultArgs<ExtArgs>
    token0?: boolean | TokenAddressDefaultArgs<ExtArgs>
    token1?: boolean | TokenAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pool"]>

  export type PoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    poolAddress?: boolean
    token0Address?: boolean
    token1Address?: boolean
    dexName?: boolean
    chainId?: boolean
    chain?: boolean | ChainRefDefaultArgs<ExtArgs>
    token0?: boolean | TokenAddressDefaultArgs<ExtArgs>
    token1?: boolean | TokenAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pool"]>

  export type PoolSelectScalar = {
    poolAddress?: boolean
    token0Address?: boolean
    token1Address?: boolean
    dexName?: boolean
    chainId?: boolean
  }

  export type PoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"poolAddress" | "token0Address" | "token1Address" | "dexName" | "chainId", ExtArgs["result"]["pool"]>
  export type PoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | ChainRefDefaultArgs<ExtArgs>
    token0?: boolean | TokenAddressDefaultArgs<ExtArgs>
    token1?: boolean | TokenAddressDefaultArgs<ExtArgs>
  }
  export type PoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | ChainRefDefaultArgs<ExtArgs>
    token0?: boolean | TokenAddressDefaultArgs<ExtArgs>
    token1?: boolean | TokenAddressDefaultArgs<ExtArgs>
  }
  export type PoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | ChainRefDefaultArgs<ExtArgs>
    token0?: boolean | TokenAddressDefaultArgs<ExtArgs>
    token1?: boolean | TokenAddressDefaultArgs<ExtArgs>
  }

  export type $PoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pool"
    objects: {
      chain: Prisma.$ChainRefPayload<ExtArgs>
      token0: Prisma.$TokenAddressPayload<ExtArgs>
      token1: Prisma.$TokenAddressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      poolAddress: string
      token0Address: string
      token1Address: string
      dexName: string
      chainId: string
    }, ExtArgs["result"]["pool"]>
    composites: {}
  }

  type PoolGetPayload<S extends boolean | null | undefined | PoolDefaultArgs> = $Result.GetResult<Prisma.$PoolPayload, S>

  type PoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoolCountAggregateInputType | true
    }

  export interface PoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pool'], meta: { name: 'Pool' } }
    /**
     * Find zero or one Pool that matches the filter.
     * @param {PoolFindUniqueArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoolFindUniqueArgs>(args: SelectSubset<T, PoolFindUniqueArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoolFindUniqueOrThrowArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoolFindUniqueOrThrowArgs>(args: SelectSubset<T, PoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindFirstArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoolFindFirstArgs>(args?: SelectSubset<T, PoolFindFirstArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindFirstOrThrowArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoolFindFirstOrThrowArgs>(args?: SelectSubset<T, PoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pools
     * const pools = await prisma.pool.findMany()
     * 
     * // Get first 10 Pools
     * const pools = await prisma.pool.findMany({ take: 10 })
     * 
     * // Only select the `poolAddress`
     * const poolWithPoolAddressOnly = await prisma.pool.findMany({ select: { poolAddress: true } })
     * 
     */
    findMany<T extends PoolFindManyArgs>(args?: SelectSubset<T, PoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pool.
     * @param {PoolCreateArgs} args - Arguments to create a Pool.
     * @example
     * // Create one Pool
     * const Pool = await prisma.pool.create({
     *   data: {
     *     // ... data to create a Pool
     *   }
     * })
     * 
     */
    create<T extends PoolCreateArgs>(args: SelectSubset<T, PoolCreateArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pools.
     * @param {PoolCreateManyArgs} args - Arguments to create many Pools.
     * @example
     * // Create many Pools
     * const pool = await prisma.pool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoolCreateManyArgs>(args?: SelectSubset<T, PoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pools and returns the data saved in the database.
     * @param {PoolCreateManyAndReturnArgs} args - Arguments to create many Pools.
     * @example
     * // Create many Pools
     * const pool = await prisma.pool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pools and only return the `poolAddress`
     * const poolWithPoolAddressOnly = await prisma.pool.createManyAndReturn({
     *   select: { poolAddress: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoolCreateManyAndReturnArgs>(args?: SelectSubset<T, PoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pool.
     * @param {PoolDeleteArgs} args - Arguments to delete one Pool.
     * @example
     * // Delete one Pool
     * const Pool = await prisma.pool.delete({
     *   where: {
     *     // ... filter to delete one Pool
     *   }
     * })
     * 
     */
    delete<T extends PoolDeleteArgs>(args: SelectSubset<T, PoolDeleteArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pool.
     * @param {PoolUpdateArgs} args - Arguments to update one Pool.
     * @example
     * // Update one Pool
     * const pool = await prisma.pool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoolUpdateArgs>(args: SelectSubset<T, PoolUpdateArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pools.
     * @param {PoolDeleteManyArgs} args - Arguments to filter Pools to delete.
     * @example
     * // Delete a few Pools
     * const { count } = await prisma.pool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoolDeleteManyArgs>(args?: SelectSubset<T, PoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pools
     * const pool = await prisma.pool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoolUpdateManyArgs>(args: SelectSubset<T, PoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pools and returns the data updated in the database.
     * @param {PoolUpdateManyAndReturnArgs} args - Arguments to update many Pools.
     * @example
     * // Update many Pools
     * const pool = await prisma.pool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pools and only return the `poolAddress`
     * const poolWithPoolAddressOnly = await prisma.pool.updateManyAndReturn({
     *   select: { poolAddress: true },
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
    updateManyAndReturn<T extends PoolUpdateManyAndReturnArgs>(args: SelectSubset<T, PoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pool.
     * @param {PoolUpsertArgs} args - Arguments to update or create a Pool.
     * @example
     * // Update or create a Pool
     * const pool = await prisma.pool.upsert({
     *   create: {
     *     // ... data to create a Pool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pool we want to update
     *   }
     * })
     */
    upsert<T extends PoolUpsertArgs>(args: SelectSubset<T, PoolUpsertArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolCountArgs} args - Arguments to filter Pools to count.
     * @example
     * // Count the number of Pools
     * const count = await prisma.pool.count({
     *   where: {
     *     // ... the filter for the Pools we want to count
     *   }
     * })
    **/
    count<T extends PoolCountArgs>(
      args?: Subset<T, PoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PoolAggregateArgs>(args: Subset<T, PoolAggregateArgs>): Prisma.PrismaPromise<GetPoolAggregateType<T>>

    /**
     * Group by Pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolGroupByArgs} args - Group by arguments.
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
      T extends PoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoolGroupByArgs['orderBy'] }
        : { orderBy?: PoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pool model
   */
  readonly fields: PoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chain<T extends ChainRefDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChainRefDefaultArgs<ExtArgs>>): Prisma__ChainRefClient<$Result.GetResult<Prisma.$ChainRefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    token0<T extends TokenAddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenAddressDefaultArgs<ExtArgs>>): Prisma__TokenAddressClient<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    token1<T extends TokenAddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenAddressDefaultArgs<ExtArgs>>): Prisma__TokenAddressClient<$Result.GetResult<Prisma.$TokenAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pool model
   */
  interface PoolFieldRefs {
    readonly poolAddress: FieldRef<"Pool", 'String'>
    readonly token0Address: FieldRef<"Pool", 'String'>
    readonly token1Address: FieldRef<"Pool", 'String'>
    readonly dexName: FieldRef<"Pool", 'String'>
    readonly chainId: FieldRef<"Pool", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pool findUnique
   */
  export type PoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool findUniqueOrThrow
   */
  export type PoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool findFirst
   */
  export type PoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pools.
     */
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * Pool findFirstOrThrow
   */
  export type PoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pools.
     */
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * Pool findMany
   */
  export type PoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pools to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * Pool create
   */
  export type PoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * The data needed to create a Pool.
     */
    data: XOR<PoolCreateInput, PoolUncheckedCreateInput>
  }

  /**
   * Pool createMany
   */
  export type PoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pools.
     */
    data: PoolCreateManyInput | PoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pool createManyAndReturn
   */
  export type PoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * The data used to create many Pools.
     */
    data: PoolCreateManyInput | PoolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pool update
   */
  export type PoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * The data needed to update a Pool.
     */
    data: XOR<PoolUpdateInput, PoolUncheckedUpdateInput>
    /**
     * Choose, which Pool to update.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool updateMany
   */
  export type PoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pools.
     */
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyInput>
    /**
     * Filter which Pools to update
     */
    where?: PoolWhereInput
    /**
     * Limit how many Pools to update.
     */
    limit?: number
  }

  /**
   * Pool updateManyAndReturn
   */
  export type PoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * The data used to update Pools.
     */
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyInput>
    /**
     * Filter which Pools to update
     */
    where?: PoolWhereInput
    /**
     * Limit how many Pools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pool upsert
   */
  export type PoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * The filter to search for the Pool to update in case it exists.
     */
    where: PoolWhereUniqueInput
    /**
     * In case the Pool found by the `where` argument doesn't exist, create a new Pool with this data.
     */
    create: XOR<PoolCreateInput, PoolUncheckedCreateInput>
    /**
     * In case the Pool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoolUpdateInput, PoolUncheckedUpdateInput>
  }

  /**
   * Pool delete
   */
  export type PoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter which Pool to delete.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool deleteMany
   */
  export type PoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pools to delete
     */
    where?: PoolWhereInput
    /**
     * Limit how many Pools to delete.
     */
    limit?: number
  }

  /**
   * Pool without action
   */
  export type PoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
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


  export const TokenScalarFieldEnum: {
    id: 'id',
    tokenName: 'tokenName',
    tokenDecimals: 'tokenDecimals',
    tokenSymbol: 'tokenSymbol',
    logoUrl: 'logoUrl'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const TokenAddressScalarFieldEnum: {
    tokenAddress: 'tokenAddress',
    chainId: 'chainId',
    tokenId: 'tokenId'
  };

  export type TokenAddressScalarFieldEnum = (typeof TokenAddressScalarFieldEnum)[keyof typeof TokenAddressScalarFieldEnum]


  export const ChainRefScalarFieldEnum: {
    id: 'id',
    networkName: 'networkName'
  };

  export type ChainRefScalarFieldEnum = (typeof ChainRefScalarFieldEnum)[keyof typeof ChainRefScalarFieldEnum]


  export const PoolScalarFieldEnum: {
    poolAddress: 'poolAddress',
    token0Address: 'token0Address',
    token1Address: 'token1Address',
    dexName: 'dexName',
    chainId: 'chainId'
  };

  export type PoolScalarFieldEnum = (typeof PoolScalarFieldEnum)[keyof typeof PoolScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    tokenName?: StringFilter<"Token"> | string
    tokenDecimals?: IntFilter<"Token"> | number
    tokenSymbol?: StringFilter<"Token"> | string
    logoUrl?: StringNullableFilter<"Token"> | string | null
    addresses?: TokenAddressListRelationFilter
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    tokenName?: SortOrder
    tokenDecimals?: SortOrder
    tokenSymbol?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    addresses?: TokenAddressOrderByRelationAggregateInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenName?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    tokenDecimals?: IntFilter<"Token"> | number
    tokenSymbol?: StringFilter<"Token"> | string
    logoUrl?: StringNullableFilter<"Token"> | string | null
    addresses?: TokenAddressListRelationFilter
  }, "id" | "tokenName">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    tokenName?: SortOrder
    tokenDecimals?: SortOrder
    tokenSymbol?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    tokenName?: StringWithAggregatesFilter<"Token"> | string
    tokenDecimals?: IntWithAggregatesFilter<"Token"> | number
    tokenSymbol?: StringWithAggregatesFilter<"Token"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Token"> | string | null
  }

  export type TokenAddressWhereInput = {
    AND?: TokenAddressWhereInput | TokenAddressWhereInput[]
    OR?: TokenAddressWhereInput[]
    NOT?: TokenAddressWhereInput | TokenAddressWhereInput[]
    tokenAddress?: StringFilter<"TokenAddress"> | string
    chainId?: StringFilter<"TokenAddress"> | string
    tokenId?: StringFilter<"TokenAddress"> | string
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    chain?: XOR<ChainRefScalarRelationFilter, ChainRefWhereInput>
    poolsAsToken0?: PoolListRelationFilter
    poolsAsToken1?: PoolListRelationFilter
  }

  export type TokenAddressOrderByWithRelationInput = {
    tokenAddress?: SortOrder
    chainId?: SortOrder
    tokenId?: SortOrder
    token?: TokenOrderByWithRelationInput
    chain?: ChainRefOrderByWithRelationInput
    poolsAsToken0?: PoolOrderByRelationAggregateInput
    poolsAsToken1?: PoolOrderByRelationAggregateInput
  }

  export type TokenAddressWhereUniqueInput = Prisma.AtLeast<{
    tokenAddress_chainId?: TokenAddressTokenAddressChainIdCompoundUniqueInput
    AND?: TokenAddressWhereInput | TokenAddressWhereInput[]
    OR?: TokenAddressWhereInput[]
    NOT?: TokenAddressWhereInput | TokenAddressWhereInput[]
    tokenAddress?: StringFilter<"TokenAddress"> | string
    chainId?: StringFilter<"TokenAddress"> | string
    tokenId?: StringFilter<"TokenAddress"> | string
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    chain?: XOR<ChainRefScalarRelationFilter, ChainRefWhereInput>
    poolsAsToken0?: PoolListRelationFilter
    poolsAsToken1?: PoolListRelationFilter
  }, "tokenAddress_chainId">

  export type TokenAddressOrderByWithAggregationInput = {
    tokenAddress?: SortOrder
    chainId?: SortOrder
    tokenId?: SortOrder
    _count?: TokenAddressCountOrderByAggregateInput
    _max?: TokenAddressMaxOrderByAggregateInput
    _min?: TokenAddressMinOrderByAggregateInput
  }

  export type TokenAddressScalarWhereWithAggregatesInput = {
    AND?: TokenAddressScalarWhereWithAggregatesInput | TokenAddressScalarWhereWithAggregatesInput[]
    OR?: TokenAddressScalarWhereWithAggregatesInput[]
    NOT?: TokenAddressScalarWhereWithAggregatesInput | TokenAddressScalarWhereWithAggregatesInput[]
    tokenAddress?: StringWithAggregatesFilter<"TokenAddress"> | string
    chainId?: StringWithAggregatesFilter<"TokenAddress"> | string
    tokenId?: StringWithAggregatesFilter<"TokenAddress"> | string
  }

  export type ChainRefWhereInput = {
    AND?: ChainRefWhereInput | ChainRefWhereInput[]
    OR?: ChainRefWhereInput[]
    NOT?: ChainRefWhereInput | ChainRefWhereInput[]
    id?: StringFilter<"ChainRef"> | string
    networkName?: StringNullableFilter<"ChainRef"> | string | null
    tokenAddresses?: TokenAddressListRelationFilter
    pools?: PoolListRelationFilter
  }

  export type ChainRefOrderByWithRelationInput = {
    id?: SortOrder
    networkName?: SortOrderInput | SortOrder
    tokenAddresses?: TokenAddressOrderByRelationAggregateInput
    pools?: PoolOrderByRelationAggregateInput
  }

  export type ChainRefWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChainRefWhereInput | ChainRefWhereInput[]
    OR?: ChainRefWhereInput[]
    NOT?: ChainRefWhereInput | ChainRefWhereInput[]
    networkName?: StringNullableFilter<"ChainRef"> | string | null
    tokenAddresses?: TokenAddressListRelationFilter
    pools?: PoolListRelationFilter
  }, "id">

  export type ChainRefOrderByWithAggregationInput = {
    id?: SortOrder
    networkName?: SortOrderInput | SortOrder
    _count?: ChainRefCountOrderByAggregateInput
    _max?: ChainRefMaxOrderByAggregateInput
    _min?: ChainRefMinOrderByAggregateInput
  }

  export type ChainRefScalarWhereWithAggregatesInput = {
    AND?: ChainRefScalarWhereWithAggregatesInput | ChainRefScalarWhereWithAggregatesInput[]
    OR?: ChainRefScalarWhereWithAggregatesInput[]
    NOT?: ChainRefScalarWhereWithAggregatesInput | ChainRefScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChainRef"> | string
    networkName?: StringNullableWithAggregatesFilter<"ChainRef"> | string | null
  }

  export type PoolWhereInput = {
    AND?: PoolWhereInput | PoolWhereInput[]
    OR?: PoolWhereInput[]
    NOT?: PoolWhereInput | PoolWhereInput[]
    poolAddress?: StringFilter<"Pool"> | string
    token0Address?: StringFilter<"Pool"> | string
    token1Address?: StringFilter<"Pool"> | string
    dexName?: StringFilter<"Pool"> | string
    chainId?: StringFilter<"Pool"> | string
    chain?: XOR<ChainRefScalarRelationFilter, ChainRefWhereInput>
    token0?: XOR<TokenAddressScalarRelationFilter, TokenAddressWhereInput>
    token1?: XOR<TokenAddressScalarRelationFilter, TokenAddressWhereInput>
  }

  export type PoolOrderByWithRelationInput = {
    poolAddress?: SortOrder
    token0Address?: SortOrder
    token1Address?: SortOrder
    dexName?: SortOrder
    chainId?: SortOrder
    chain?: ChainRefOrderByWithRelationInput
    token0?: TokenAddressOrderByWithRelationInput
    token1?: TokenAddressOrderByWithRelationInput
  }

  export type PoolWhereUniqueInput = Prisma.AtLeast<{
    poolAddress?: string
    poolAddress_chainId?: PoolPoolAddressChainIdCompoundUniqueInput
    AND?: PoolWhereInput | PoolWhereInput[]
    OR?: PoolWhereInput[]
    NOT?: PoolWhereInput | PoolWhereInput[]
    token0Address?: StringFilter<"Pool"> | string
    token1Address?: StringFilter<"Pool"> | string
    dexName?: StringFilter<"Pool"> | string
    chainId?: StringFilter<"Pool"> | string
    chain?: XOR<ChainRefScalarRelationFilter, ChainRefWhereInput>
    token0?: XOR<TokenAddressScalarRelationFilter, TokenAddressWhereInput>
    token1?: XOR<TokenAddressScalarRelationFilter, TokenAddressWhereInput>
  }, "poolAddress_chainId" | "poolAddress">

  export type PoolOrderByWithAggregationInput = {
    poolAddress?: SortOrder
    token0Address?: SortOrder
    token1Address?: SortOrder
    dexName?: SortOrder
    chainId?: SortOrder
    _count?: PoolCountOrderByAggregateInput
    _max?: PoolMaxOrderByAggregateInput
    _min?: PoolMinOrderByAggregateInput
  }

  export type PoolScalarWhereWithAggregatesInput = {
    AND?: PoolScalarWhereWithAggregatesInput | PoolScalarWhereWithAggregatesInput[]
    OR?: PoolScalarWhereWithAggregatesInput[]
    NOT?: PoolScalarWhereWithAggregatesInput | PoolScalarWhereWithAggregatesInput[]
    poolAddress?: StringWithAggregatesFilter<"Pool"> | string
    token0Address?: StringWithAggregatesFilter<"Pool"> | string
    token1Address?: StringWithAggregatesFilter<"Pool"> | string
    dexName?: StringWithAggregatesFilter<"Pool"> | string
    chainId?: StringWithAggregatesFilter<"Pool"> | string
  }

  export type TokenCreateInput = {
    id?: string
    tokenName: string
    tokenDecimals: number
    tokenSymbol: string
    logoUrl?: string | null
    addresses?: TokenAddressCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    tokenName: string
    tokenDecimals: number
    tokenSymbol: string
    logoUrl?: string | null
    addresses?: TokenAddressUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    tokenDecimals?: IntFieldUpdateOperationsInput | number
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    addresses?: TokenAddressUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    tokenDecimals?: IntFieldUpdateOperationsInput | number
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    addresses?: TokenAddressUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenCreateManyInput = {
    id?: string
    tokenName: string
    tokenDecimals: number
    tokenSymbol: string
    logoUrl?: string | null
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    tokenDecimals?: IntFieldUpdateOperationsInput | number
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    tokenDecimals?: IntFieldUpdateOperationsInput | number
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenAddressCreateInput = {
    tokenAddress: string
    token: TokenCreateNestedOneWithoutAddressesInput
    chain: ChainRefCreateNestedOneWithoutTokenAddressesInput
    poolsAsToken0?: PoolCreateNestedManyWithoutToken0Input
    poolsAsToken1?: PoolCreateNestedManyWithoutToken1Input
  }

  export type TokenAddressUncheckedCreateInput = {
    tokenAddress: string
    chainId: string
    tokenId: string
    poolsAsToken0?: PoolUncheckedCreateNestedManyWithoutToken0Input
    poolsAsToken1?: PoolUncheckedCreateNestedManyWithoutToken1Input
  }

  export type TokenAddressUpdateInput = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    token?: TokenUpdateOneRequiredWithoutAddressesNestedInput
    chain?: ChainRefUpdateOneRequiredWithoutTokenAddressesNestedInput
    poolsAsToken0?: PoolUpdateManyWithoutToken0NestedInput
    poolsAsToken1?: PoolUpdateManyWithoutToken1NestedInput
  }

  export type TokenAddressUncheckedUpdateInput = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    chainId?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    poolsAsToken0?: PoolUncheckedUpdateManyWithoutToken0NestedInput
    poolsAsToken1?: PoolUncheckedUpdateManyWithoutToken1NestedInput
  }

  export type TokenAddressCreateManyInput = {
    tokenAddress: string
    chainId: string
    tokenId: string
  }

  export type TokenAddressUpdateManyMutationInput = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
  }

  export type TokenAddressUncheckedUpdateManyInput = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    chainId?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
  }

  export type ChainRefCreateInput = {
    id: string
    networkName?: string | null
    tokenAddresses?: TokenAddressCreateNestedManyWithoutChainInput
    pools?: PoolCreateNestedManyWithoutChainInput
  }

  export type ChainRefUncheckedCreateInput = {
    id: string
    networkName?: string | null
    tokenAddresses?: TokenAddressUncheckedCreateNestedManyWithoutChainInput
    pools?: PoolUncheckedCreateNestedManyWithoutChainInput
  }

  export type ChainRefUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: NullableStringFieldUpdateOperationsInput | string | null
    tokenAddresses?: TokenAddressUpdateManyWithoutChainNestedInput
    pools?: PoolUpdateManyWithoutChainNestedInput
  }

  export type ChainRefUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: NullableStringFieldUpdateOperationsInput | string | null
    tokenAddresses?: TokenAddressUncheckedUpdateManyWithoutChainNestedInput
    pools?: PoolUncheckedUpdateManyWithoutChainNestedInput
  }

  export type ChainRefCreateManyInput = {
    id: string
    networkName?: string | null
  }

  export type ChainRefUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChainRefUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PoolCreateInput = {
    poolAddress: string
    dexName: string
    chain: ChainRefCreateNestedOneWithoutPoolsInput
    token0: TokenAddressCreateNestedOneWithoutPoolsAsToken0Input
    token1: TokenAddressCreateNestedOneWithoutPoolsAsToken1Input
  }

  export type PoolUncheckedCreateInput = {
    poolAddress: string
    token0Address: string
    token1Address: string
    dexName: string
    chainId: string
  }

  export type PoolUpdateInput = {
    poolAddress?: StringFieldUpdateOperationsInput | string
    dexName?: StringFieldUpdateOperationsInput | string
    chain?: ChainRefUpdateOneRequiredWithoutPoolsNestedInput
    token0?: TokenAddressUpdateOneRequiredWithoutPoolsAsToken0NestedInput
    token1?: TokenAddressUpdateOneRequiredWithoutPoolsAsToken1NestedInput
  }

  export type PoolUncheckedUpdateInput = {
    poolAddress?: StringFieldUpdateOperationsInput | string
    token0Address?: StringFieldUpdateOperationsInput | string
    token1Address?: StringFieldUpdateOperationsInput | string
    dexName?: StringFieldUpdateOperationsInput | string
    chainId?: StringFieldUpdateOperationsInput | string
  }

  export type PoolCreateManyInput = {
    poolAddress: string
    token0Address: string
    token1Address: string
    dexName: string
    chainId: string
  }

  export type PoolUpdateManyMutationInput = {
    poolAddress?: StringFieldUpdateOperationsInput | string
    dexName?: StringFieldUpdateOperationsInput | string
  }

  export type PoolUncheckedUpdateManyInput = {
    poolAddress?: StringFieldUpdateOperationsInput | string
    token0Address?: StringFieldUpdateOperationsInput | string
    token1Address?: StringFieldUpdateOperationsInput | string
    dexName?: StringFieldUpdateOperationsInput | string
    chainId?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TokenAddressListRelationFilter = {
    every?: TokenAddressWhereInput
    some?: TokenAddressWhereInput
    none?: TokenAddressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenAddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    tokenName?: SortOrder
    tokenDecimals?: SortOrder
    tokenSymbol?: SortOrder
    logoUrl?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    tokenDecimals?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenName?: SortOrder
    tokenDecimals?: SortOrder
    tokenSymbol?: SortOrder
    logoUrl?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    tokenName?: SortOrder
    tokenDecimals?: SortOrder
    tokenSymbol?: SortOrder
    logoUrl?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    tokenDecimals?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TokenScalarRelationFilter = {
    is?: TokenWhereInput
    isNot?: TokenWhereInput
  }

  export type ChainRefScalarRelationFilter = {
    is?: ChainRefWhereInput
    isNot?: ChainRefWhereInput
  }

  export type PoolListRelationFilter = {
    every?: PoolWhereInput
    some?: PoolWhereInput
    none?: PoolWhereInput
  }

  export type PoolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenAddressTokenAddressChainIdCompoundUniqueInput = {
    tokenAddress: string
    chainId: string
  }

  export type TokenAddressCountOrderByAggregateInput = {
    tokenAddress?: SortOrder
    chainId?: SortOrder
    tokenId?: SortOrder
  }

  export type TokenAddressMaxOrderByAggregateInput = {
    tokenAddress?: SortOrder
    chainId?: SortOrder
    tokenId?: SortOrder
  }

  export type TokenAddressMinOrderByAggregateInput = {
    tokenAddress?: SortOrder
    chainId?: SortOrder
    tokenId?: SortOrder
  }

  export type ChainRefCountOrderByAggregateInput = {
    id?: SortOrder
    networkName?: SortOrder
  }

  export type ChainRefMaxOrderByAggregateInput = {
    id?: SortOrder
    networkName?: SortOrder
  }

  export type ChainRefMinOrderByAggregateInput = {
    id?: SortOrder
    networkName?: SortOrder
  }

  export type TokenAddressScalarRelationFilter = {
    is?: TokenAddressWhereInput
    isNot?: TokenAddressWhereInput
  }

  export type PoolPoolAddressChainIdCompoundUniqueInput = {
    poolAddress: string
    chainId: string
  }

  export type PoolCountOrderByAggregateInput = {
    poolAddress?: SortOrder
    token0Address?: SortOrder
    token1Address?: SortOrder
    dexName?: SortOrder
    chainId?: SortOrder
  }

  export type PoolMaxOrderByAggregateInput = {
    poolAddress?: SortOrder
    token0Address?: SortOrder
    token1Address?: SortOrder
    dexName?: SortOrder
    chainId?: SortOrder
  }

  export type PoolMinOrderByAggregateInput = {
    poolAddress?: SortOrder
    token0Address?: SortOrder
    token1Address?: SortOrder
    dexName?: SortOrder
    chainId?: SortOrder
  }

  export type TokenAddressCreateNestedManyWithoutTokenInput = {
    create?: XOR<TokenAddressCreateWithoutTokenInput, TokenAddressUncheckedCreateWithoutTokenInput> | TokenAddressCreateWithoutTokenInput[] | TokenAddressUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenAddressCreateOrConnectWithoutTokenInput | TokenAddressCreateOrConnectWithoutTokenInput[]
    createMany?: TokenAddressCreateManyTokenInputEnvelope
    connect?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
  }

  export type TokenAddressUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<TokenAddressCreateWithoutTokenInput, TokenAddressUncheckedCreateWithoutTokenInput> | TokenAddressCreateWithoutTokenInput[] | TokenAddressUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenAddressCreateOrConnectWithoutTokenInput | TokenAddressCreateOrConnectWithoutTokenInput[]
    createMany?: TokenAddressCreateManyTokenInputEnvelope
    connect?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TokenAddressUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TokenAddressCreateWithoutTokenInput, TokenAddressUncheckedCreateWithoutTokenInput> | TokenAddressCreateWithoutTokenInput[] | TokenAddressUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenAddressCreateOrConnectWithoutTokenInput | TokenAddressCreateOrConnectWithoutTokenInput[]
    upsert?: TokenAddressUpsertWithWhereUniqueWithoutTokenInput | TokenAddressUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TokenAddressCreateManyTokenInputEnvelope
    set?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    disconnect?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    delete?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    connect?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    update?: TokenAddressUpdateWithWhereUniqueWithoutTokenInput | TokenAddressUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TokenAddressUpdateManyWithWhereWithoutTokenInput | TokenAddressUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TokenAddressScalarWhereInput | TokenAddressScalarWhereInput[]
  }

  export type TokenAddressUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TokenAddressCreateWithoutTokenInput, TokenAddressUncheckedCreateWithoutTokenInput> | TokenAddressCreateWithoutTokenInput[] | TokenAddressUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenAddressCreateOrConnectWithoutTokenInput | TokenAddressCreateOrConnectWithoutTokenInput[]
    upsert?: TokenAddressUpsertWithWhereUniqueWithoutTokenInput | TokenAddressUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TokenAddressCreateManyTokenInputEnvelope
    set?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    disconnect?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    delete?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    connect?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    update?: TokenAddressUpdateWithWhereUniqueWithoutTokenInput | TokenAddressUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TokenAddressUpdateManyWithWhereWithoutTokenInput | TokenAddressUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TokenAddressScalarWhereInput | TokenAddressScalarWhereInput[]
  }

  export type TokenCreateNestedOneWithoutAddressesInput = {
    create?: XOR<TokenCreateWithoutAddressesInput, TokenUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: TokenCreateOrConnectWithoutAddressesInput
    connect?: TokenWhereUniqueInput
  }

  export type ChainRefCreateNestedOneWithoutTokenAddressesInput = {
    create?: XOR<ChainRefCreateWithoutTokenAddressesInput, ChainRefUncheckedCreateWithoutTokenAddressesInput>
    connectOrCreate?: ChainRefCreateOrConnectWithoutTokenAddressesInput
    connect?: ChainRefWhereUniqueInput
  }

  export type PoolCreateNestedManyWithoutToken0Input = {
    create?: XOR<PoolCreateWithoutToken0Input, PoolUncheckedCreateWithoutToken0Input> | PoolCreateWithoutToken0Input[] | PoolUncheckedCreateWithoutToken0Input[]
    connectOrCreate?: PoolCreateOrConnectWithoutToken0Input | PoolCreateOrConnectWithoutToken0Input[]
    createMany?: PoolCreateManyToken0InputEnvelope
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
  }

  export type PoolCreateNestedManyWithoutToken1Input = {
    create?: XOR<PoolCreateWithoutToken1Input, PoolUncheckedCreateWithoutToken1Input> | PoolCreateWithoutToken1Input[] | PoolUncheckedCreateWithoutToken1Input[]
    connectOrCreate?: PoolCreateOrConnectWithoutToken1Input | PoolCreateOrConnectWithoutToken1Input[]
    createMany?: PoolCreateManyToken1InputEnvelope
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
  }

  export type PoolUncheckedCreateNestedManyWithoutToken0Input = {
    create?: XOR<PoolCreateWithoutToken0Input, PoolUncheckedCreateWithoutToken0Input> | PoolCreateWithoutToken0Input[] | PoolUncheckedCreateWithoutToken0Input[]
    connectOrCreate?: PoolCreateOrConnectWithoutToken0Input | PoolCreateOrConnectWithoutToken0Input[]
    createMany?: PoolCreateManyToken0InputEnvelope
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
  }

  export type PoolUncheckedCreateNestedManyWithoutToken1Input = {
    create?: XOR<PoolCreateWithoutToken1Input, PoolUncheckedCreateWithoutToken1Input> | PoolCreateWithoutToken1Input[] | PoolUncheckedCreateWithoutToken1Input[]
    connectOrCreate?: PoolCreateOrConnectWithoutToken1Input | PoolCreateOrConnectWithoutToken1Input[]
    createMany?: PoolCreateManyToken1InputEnvelope
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
  }

  export type TokenUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<TokenCreateWithoutAddressesInput, TokenUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: TokenCreateOrConnectWithoutAddressesInput
    upsert?: TokenUpsertWithoutAddressesInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutAddressesInput, TokenUpdateWithoutAddressesInput>, TokenUncheckedUpdateWithoutAddressesInput>
  }

  export type ChainRefUpdateOneRequiredWithoutTokenAddressesNestedInput = {
    create?: XOR<ChainRefCreateWithoutTokenAddressesInput, ChainRefUncheckedCreateWithoutTokenAddressesInput>
    connectOrCreate?: ChainRefCreateOrConnectWithoutTokenAddressesInput
    upsert?: ChainRefUpsertWithoutTokenAddressesInput
    connect?: ChainRefWhereUniqueInput
    update?: XOR<XOR<ChainRefUpdateToOneWithWhereWithoutTokenAddressesInput, ChainRefUpdateWithoutTokenAddressesInput>, ChainRefUncheckedUpdateWithoutTokenAddressesInput>
  }

  export type PoolUpdateManyWithoutToken0NestedInput = {
    create?: XOR<PoolCreateWithoutToken0Input, PoolUncheckedCreateWithoutToken0Input> | PoolCreateWithoutToken0Input[] | PoolUncheckedCreateWithoutToken0Input[]
    connectOrCreate?: PoolCreateOrConnectWithoutToken0Input | PoolCreateOrConnectWithoutToken0Input[]
    upsert?: PoolUpsertWithWhereUniqueWithoutToken0Input | PoolUpsertWithWhereUniqueWithoutToken0Input[]
    createMany?: PoolCreateManyToken0InputEnvelope
    set?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    disconnect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    delete?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    update?: PoolUpdateWithWhereUniqueWithoutToken0Input | PoolUpdateWithWhereUniqueWithoutToken0Input[]
    updateMany?: PoolUpdateManyWithWhereWithoutToken0Input | PoolUpdateManyWithWhereWithoutToken0Input[]
    deleteMany?: PoolScalarWhereInput | PoolScalarWhereInput[]
  }

  export type PoolUpdateManyWithoutToken1NestedInput = {
    create?: XOR<PoolCreateWithoutToken1Input, PoolUncheckedCreateWithoutToken1Input> | PoolCreateWithoutToken1Input[] | PoolUncheckedCreateWithoutToken1Input[]
    connectOrCreate?: PoolCreateOrConnectWithoutToken1Input | PoolCreateOrConnectWithoutToken1Input[]
    upsert?: PoolUpsertWithWhereUniqueWithoutToken1Input | PoolUpsertWithWhereUniqueWithoutToken1Input[]
    createMany?: PoolCreateManyToken1InputEnvelope
    set?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    disconnect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    delete?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    update?: PoolUpdateWithWhereUniqueWithoutToken1Input | PoolUpdateWithWhereUniqueWithoutToken1Input[]
    updateMany?: PoolUpdateManyWithWhereWithoutToken1Input | PoolUpdateManyWithWhereWithoutToken1Input[]
    deleteMany?: PoolScalarWhereInput | PoolScalarWhereInput[]
  }

  export type PoolUncheckedUpdateManyWithoutToken0NestedInput = {
    create?: XOR<PoolCreateWithoutToken0Input, PoolUncheckedCreateWithoutToken0Input> | PoolCreateWithoutToken0Input[] | PoolUncheckedCreateWithoutToken0Input[]
    connectOrCreate?: PoolCreateOrConnectWithoutToken0Input | PoolCreateOrConnectWithoutToken0Input[]
    upsert?: PoolUpsertWithWhereUniqueWithoutToken0Input | PoolUpsertWithWhereUniqueWithoutToken0Input[]
    createMany?: PoolCreateManyToken0InputEnvelope
    set?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    disconnect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    delete?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    update?: PoolUpdateWithWhereUniqueWithoutToken0Input | PoolUpdateWithWhereUniqueWithoutToken0Input[]
    updateMany?: PoolUpdateManyWithWhereWithoutToken0Input | PoolUpdateManyWithWhereWithoutToken0Input[]
    deleteMany?: PoolScalarWhereInput | PoolScalarWhereInput[]
  }

  export type PoolUncheckedUpdateManyWithoutToken1NestedInput = {
    create?: XOR<PoolCreateWithoutToken1Input, PoolUncheckedCreateWithoutToken1Input> | PoolCreateWithoutToken1Input[] | PoolUncheckedCreateWithoutToken1Input[]
    connectOrCreate?: PoolCreateOrConnectWithoutToken1Input | PoolCreateOrConnectWithoutToken1Input[]
    upsert?: PoolUpsertWithWhereUniqueWithoutToken1Input | PoolUpsertWithWhereUniqueWithoutToken1Input[]
    createMany?: PoolCreateManyToken1InputEnvelope
    set?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    disconnect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    delete?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    update?: PoolUpdateWithWhereUniqueWithoutToken1Input | PoolUpdateWithWhereUniqueWithoutToken1Input[]
    updateMany?: PoolUpdateManyWithWhereWithoutToken1Input | PoolUpdateManyWithWhereWithoutToken1Input[]
    deleteMany?: PoolScalarWhereInput | PoolScalarWhereInput[]
  }

  export type TokenAddressCreateNestedManyWithoutChainInput = {
    create?: XOR<TokenAddressCreateWithoutChainInput, TokenAddressUncheckedCreateWithoutChainInput> | TokenAddressCreateWithoutChainInput[] | TokenAddressUncheckedCreateWithoutChainInput[]
    connectOrCreate?: TokenAddressCreateOrConnectWithoutChainInput | TokenAddressCreateOrConnectWithoutChainInput[]
    createMany?: TokenAddressCreateManyChainInputEnvelope
    connect?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
  }

  export type PoolCreateNestedManyWithoutChainInput = {
    create?: XOR<PoolCreateWithoutChainInput, PoolUncheckedCreateWithoutChainInput> | PoolCreateWithoutChainInput[] | PoolUncheckedCreateWithoutChainInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutChainInput | PoolCreateOrConnectWithoutChainInput[]
    createMany?: PoolCreateManyChainInputEnvelope
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
  }

  export type TokenAddressUncheckedCreateNestedManyWithoutChainInput = {
    create?: XOR<TokenAddressCreateWithoutChainInput, TokenAddressUncheckedCreateWithoutChainInput> | TokenAddressCreateWithoutChainInput[] | TokenAddressUncheckedCreateWithoutChainInput[]
    connectOrCreate?: TokenAddressCreateOrConnectWithoutChainInput | TokenAddressCreateOrConnectWithoutChainInput[]
    createMany?: TokenAddressCreateManyChainInputEnvelope
    connect?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
  }

  export type PoolUncheckedCreateNestedManyWithoutChainInput = {
    create?: XOR<PoolCreateWithoutChainInput, PoolUncheckedCreateWithoutChainInput> | PoolCreateWithoutChainInput[] | PoolUncheckedCreateWithoutChainInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutChainInput | PoolCreateOrConnectWithoutChainInput[]
    createMany?: PoolCreateManyChainInputEnvelope
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
  }

  export type TokenAddressUpdateManyWithoutChainNestedInput = {
    create?: XOR<TokenAddressCreateWithoutChainInput, TokenAddressUncheckedCreateWithoutChainInput> | TokenAddressCreateWithoutChainInput[] | TokenAddressUncheckedCreateWithoutChainInput[]
    connectOrCreate?: TokenAddressCreateOrConnectWithoutChainInput | TokenAddressCreateOrConnectWithoutChainInput[]
    upsert?: TokenAddressUpsertWithWhereUniqueWithoutChainInput | TokenAddressUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: TokenAddressCreateManyChainInputEnvelope
    set?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    disconnect?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    delete?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    connect?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    update?: TokenAddressUpdateWithWhereUniqueWithoutChainInput | TokenAddressUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: TokenAddressUpdateManyWithWhereWithoutChainInput | TokenAddressUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: TokenAddressScalarWhereInput | TokenAddressScalarWhereInput[]
  }

  export type PoolUpdateManyWithoutChainNestedInput = {
    create?: XOR<PoolCreateWithoutChainInput, PoolUncheckedCreateWithoutChainInput> | PoolCreateWithoutChainInput[] | PoolUncheckedCreateWithoutChainInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutChainInput | PoolCreateOrConnectWithoutChainInput[]
    upsert?: PoolUpsertWithWhereUniqueWithoutChainInput | PoolUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: PoolCreateManyChainInputEnvelope
    set?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    disconnect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    delete?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    update?: PoolUpdateWithWhereUniqueWithoutChainInput | PoolUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: PoolUpdateManyWithWhereWithoutChainInput | PoolUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: PoolScalarWhereInput | PoolScalarWhereInput[]
  }

  export type TokenAddressUncheckedUpdateManyWithoutChainNestedInput = {
    create?: XOR<TokenAddressCreateWithoutChainInput, TokenAddressUncheckedCreateWithoutChainInput> | TokenAddressCreateWithoutChainInput[] | TokenAddressUncheckedCreateWithoutChainInput[]
    connectOrCreate?: TokenAddressCreateOrConnectWithoutChainInput | TokenAddressCreateOrConnectWithoutChainInput[]
    upsert?: TokenAddressUpsertWithWhereUniqueWithoutChainInput | TokenAddressUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: TokenAddressCreateManyChainInputEnvelope
    set?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    disconnect?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    delete?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    connect?: TokenAddressWhereUniqueInput | TokenAddressWhereUniqueInput[]
    update?: TokenAddressUpdateWithWhereUniqueWithoutChainInput | TokenAddressUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: TokenAddressUpdateManyWithWhereWithoutChainInput | TokenAddressUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: TokenAddressScalarWhereInput | TokenAddressScalarWhereInput[]
  }

  export type PoolUncheckedUpdateManyWithoutChainNestedInput = {
    create?: XOR<PoolCreateWithoutChainInput, PoolUncheckedCreateWithoutChainInput> | PoolCreateWithoutChainInput[] | PoolUncheckedCreateWithoutChainInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutChainInput | PoolCreateOrConnectWithoutChainInput[]
    upsert?: PoolUpsertWithWhereUniqueWithoutChainInput | PoolUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: PoolCreateManyChainInputEnvelope
    set?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    disconnect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    delete?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    update?: PoolUpdateWithWhereUniqueWithoutChainInput | PoolUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: PoolUpdateManyWithWhereWithoutChainInput | PoolUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: PoolScalarWhereInput | PoolScalarWhereInput[]
  }

  export type ChainRefCreateNestedOneWithoutPoolsInput = {
    create?: XOR<ChainRefCreateWithoutPoolsInput, ChainRefUncheckedCreateWithoutPoolsInput>
    connectOrCreate?: ChainRefCreateOrConnectWithoutPoolsInput
    connect?: ChainRefWhereUniqueInput
  }

  export type TokenAddressCreateNestedOneWithoutPoolsAsToken0Input = {
    create?: XOR<TokenAddressCreateWithoutPoolsAsToken0Input, TokenAddressUncheckedCreateWithoutPoolsAsToken0Input>
    connectOrCreate?: TokenAddressCreateOrConnectWithoutPoolsAsToken0Input
    connect?: TokenAddressWhereUniqueInput
  }

  export type TokenAddressCreateNestedOneWithoutPoolsAsToken1Input = {
    create?: XOR<TokenAddressCreateWithoutPoolsAsToken1Input, TokenAddressUncheckedCreateWithoutPoolsAsToken1Input>
    connectOrCreate?: TokenAddressCreateOrConnectWithoutPoolsAsToken1Input
    connect?: TokenAddressWhereUniqueInput
  }

  export type ChainRefUpdateOneRequiredWithoutPoolsNestedInput = {
    create?: XOR<ChainRefCreateWithoutPoolsInput, ChainRefUncheckedCreateWithoutPoolsInput>
    connectOrCreate?: ChainRefCreateOrConnectWithoutPoolsInput
    upsert?: ChainRefUpsertWithoutPoolsInput
    connect?: ChainRefWhereUniqueInput
    update?: XOR<XOR<ChainRefUpdateToOneWithWhereWithoutPoolsInput, ChainRefUpdateWithoutPoolsInput>, ChainRefUncheckedUpdateWithoutPoolsInput>
  }

  export type TokenAddressUpdateOneRequiredWithoutPoolsAsToken0NestedInput = {
    create?: XOR<TokenAddressCreateWithoutPoolsAsToken0Input, TokenAddressUncheckedCreateWithoutPoolsAsToken0Input>
    connectOrCreate?: TokenAddressCreateOrConnectWithoutPoolsAsToken0Input
    upsert?: TokenAddressUpsertWithoutPoolsAsToken0Input
    connect?: TokenAddressWhereUniqueInput
    update?: XOR<XOR<TokenAddressUpdateToOneWithWhereWithoutPoolsAsToken0Input, TokenAddressUpdateWithoutPoolsAsToken0Input>, TokenAddressUncheckedUpdateWithoutPoolsAsToken0Input>
  }

  export type TokenAddressUpdateOneRequiredWithoutPoolsAsToken1NestedInput = {
    create?: XOR<TokenAddressCreateWithoutPoolsAsToken1Input, TokenAddressUncheckedCreateWithoutPoolsAsToken1Input>
    connectOrCreate?: TokenAddressCreateOrConnectWithoutPoolsAsToken1Input
    upsert?: TokenAddressUpsertWithoutPoolsAsToken1Input
    connect?: TokenAddressWhereUniqueInput
    update?: XOR<XOR<TokenAddressUpdateToOneWithWhereWithoutPoolsAsToken1Input, TokenAddressUpdateWithoutPoolsAsToken1Input>, TokenAddressUncheckedUpdateWithoutPoolsAsToken1Input>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TokenAddressCreateWithoutTokenInput = {
    tokenAddress: string
    chain: ChainRefCreateNestedOneWithoutTokenAddressesInput
    poolsAsToken0?: PoolCreateNestedManyWithoutToken0Input
    poolsAsToken1?: PoolCreateNestedManyWithoutToken1Input
  }

  export type TokenAddressUncheckedCreateWithoutTokenInput = {
    tokenAddress: string
    chainId: string
    poolsAsToken0?: PoolUncheckedCreateNestedManyWithoutToken0Input
    poolsAsToken1?: PoolUncheckedCreateNestedManyWithoutToken1Input
  }

  export type TokenAddressCreateOrConnectWithoutTokenInput = {
    where: TokenAddressWhereUniqueInput
    create: XOR<TokenAddressCreateWithoutTokenInput, TokenAddressUncheckedCreateWithoutTokenInput>
  }

  export type TokenAddressCreateManyTokenInputEnvelope = {
    data: TokenAddressCreateManyTokenInput | TokenAddressCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type TokenAddressUpsertWithWhereUniqueWithoutTokenInput = {
    where: TokenAddressWhereUniqueInput
    update: XOR<TokenAddressUpdateWithoutTokenInput, TokenAddressUncheckedUpdateWithoutTokenInput>
    create: XOR<TokenAddressCreateWithoutTokenInput, TokenAddressUncheckedCreateWithoutTokenInput>
  }

  export type TokenAddressUpdateWithWhereUniqueWithoutTokenInput = {
    where: TokenAddressWhereUniqueInput
    data: XOR<TokenAddressUpdateWithoutTokenInput, TokenAddressUncheckedUpdateWithoutTokenInput>
  }

  export type TokenAddressUpdateManyWithWhereWithoutTokenInput = {
    where: TokenAddressScalarWhereInput
    data: XOR<TokenAddressUpdateManyMutationInput, TokenAddressUncheckedUpdateManyWithoutTokenInput>
  }

  export type TokenAddressScalarWhereInput = {
    AND?: TokenAddressScalarWhereInput | TokenAddressScalarWhereInput[]
    OR?: TokenAddressScalarWhereInput[]
    NOT?: TokenAddressScalarWhereInput | TokenAddressScalarWhereInput[]
    tokenAddress?: StringFilter<"TokenAddress"> | string
    chainId?: StringFilter<"TokenAddress"> | string
    tokenId?: StringFilter<"TokenAddress"> | string
  }

  export type TokenCreateWithoutAddressesInput = {
    id?: string
    tokenName: string
    tokenDecimals: number
    tokenSymbol: string
    logoUrl?: string | null
  }

  export type TokenUncheckedCreateWithoutAddressesInput = {
    id?: string
    tokenName: string
    tokenDecimals: number
    tokenSymbol: string
    logoUrl?: string | null
  }

  export type TokenCreateOrConnectWithoutAddressesInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutAddressesInput, TokenUncheckedCreateWithoutAddressesInput>
  }

  export type ChainRefCreateWithoutTokenAddressesInput = {
    id: string
    networkName?: string | null
    pools?: PoolCreateNestedManyWithoutChainInput
  }

  export type ChainRefUncheckedCreateWithoutTokenAddressesInput = {
    id: string
    networkName?: string | null
    pools?: PoolUncheckedCreateNestedManyWithoutChainInput
  }

  export type ChainRefCreateOrConnectWithoutTokenAddressesInput = {
    where: ChainRefWhereUniqueInput
    create: XOR<ChainRefCreateWithoutTokenAddressesInput, ChainRefUncheckedCreateWithoutTokenAddressesInput>
  }

  export type PoolCreateWithoutToken0Input = {
    poolAddress: string
    dexName: string
    chain: ChainRefCreateNestedOneWithoutPoolsInput
    token1: TokenAddressCreateNestedOneWithoutPoolsAsToken1Input
  }

  export type PoolUncheckedCreateWithoutToken0Input = {
    poolAddress: string
    token1Address: string
    dexName: string
  }

  export type PoolCreateOrConnectWithoutToken0Input = {
    where: PoolWhereUniqueInput
    create: XOR<PoolCreateWithoutToken0Input, PoolUncheckedCreateWithoutToken0Input>
  }

  export type PoolCreateManyToken0InputEnvelope = {
    data: PoolCreateManyToken0Input | PoolCreateManyToken0Input[]
    skipDuplicates?: boolean
  }

  export type PoolCreateWithoutToken1Input = {
    poolAddress: string
    dexName: string
    chain: ChainRefCreateNestedOneWithoutPoolsInput
    token0: TokenAddressCreateNestedOneWithoutPoolsAsToken0Input
  }

  export type PoolUncheckedCreateWithoutToken1Input = {
    poolAddress: string
    token0Address: string
    dexName: string
  }

  export type PoolCreateOrConnectWithoutToken1Input = {
    where: PoolWhereUniqueInput
    create: XOR<PoolCreateWithoutToken1Input, PoolUncheckedCreateWithoutToken1Input>
  }

  export type PoolCreateManyToken1InputEnvelope = {
    data: PoolCreateManyToken1Input | PoolCreateManyToken1Input[]
    skipDuplicates?: boolean
  }

  export type TokenUpsertWithoutAddressesInput = {
    update: XOR<TokenUpdateWithoutAddressesInput, TokenUncheckedUpdateWithoutAddressesInput>
    create: XOR<TokenCreateWithoutAddressesInput, TokenUncheckedCreateWithoutAddressesInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutAddressesInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutAddressesInput, TokenUncheckedUpdateWithoutAddressesInput>
  }

  export type TokenUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    tokenDecimals?: IntFieldUpdateOperationsInput | number
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenUncheckedUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    tokenDecimals?: IntFieldUpdateOperationsInput | number
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChainRefUpsertWithoutTokenAddressesInput = {
    update: XOR<ChainRefUpdateWithoutTokenAddressesInput, ChainRefUncheckedUpdateWithoutTokenAddressesInput>
    create: XOR<ChainRefCreateWithoutTokenAddressesInput, ChainRefUncheckedCreateWithoutTokenAddressesInput>
    where?: ChainRefWhereInput
  }

  export type ChainRefUpdateToOneWithWhereWithoutTokenAddressesInput = {
    where?: ChainRefWhereInput
    data: XOR<ChainRefUpdateWithoutTokenAddressesInput, ChainRefUncheckedUpdateWithoutTokenAddressesInput>
  }

  export type ChainRefUpdateWithoutTokenAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: NullableStringFieldUpdateOperationsInput | string | null
    pools?: PoolUpdateManyWithoutChainNestedInput
  }

  export type ChainRefUncheckedUpdateWithoutTokenAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: NullableStringFieldUpdateOperationsInput | string | null
    pools?: PoolUncheckedUpdateManyWithoutChainNestedInput
  }

  export type PoolUpsertWithWhereUniqueWithoutToken0Input = {
    where: PoolWhereUniqueInput
    update: XOR<PoolUpdateWithoutToken0Input, PoolUncheckedUpdateWithoutToken0Input>
    create: XOR<PoolCreateWithoutToken0Input, PoolUncheckedCreateWithoutToken0Input>
  }

  export type PoolUpdateWithWhereUniqueWithoutToken0Input = {
    where: PoolWhereUniqueInput
    data: XOR<PoolUpdateWithoutToken0Input, PoolUncheckedUpdateWithoutToken0Input>
  }

  export type PoolUpdateManyWithWhereWithoutToken0Input = {
    where: PoolScalarWhereInput
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyWithoutToken0Input>
  }

  export type PoolScalarWhereInput = {
    AND?: PoolScalarWhereInput | PoolScalarWhereInput[]
    OR?: PoolScalarWhereInput[]
    NOT?: PoolScalarWhereInput | PoolScalarWhereInput[]
    poolAddress?: StringFilter<"Pool"> | string
    token0Address?: StringFilter<"Pool"> | string
    token1Address?: StringFilter<"Pool"> | string
    dexName?: StringFilter<"Pool"> | string
    chainId?: StringFilter<"Pool"> | string
  }

  export type PoolUpsertWithWhereUniqueWithoutToken1Input = {
    where: PoolWhereUniqueInput
    update: XOR<PoolUpdateWithoutToken1Input, PoolUncheckedUpdateWithoutToken1Input>
    create: XOR<PoolCreateWithoutToken1Input, PoolUncheckedCreateWithoutToken1Input>
  }

  export type PoolUpdateWithWhereUniqueWithoutToken1Input = {
    where: PoolWhereUniqueInput
    data: XOR<PoolUpdateWithoutToken1Input, PoolUncheckedUpdateWithoutToken1Input>
  }

  export type PoolUpdateManyWithWhereWithoutToken1Input = {
    where: PoolScalarWhereInput
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyWithoutToken1Input>
  }

  export type TokenAddressCreateWithoutChainInput = {
    tokenAddress: string
    token: TokenCreateNestedOneWithoutAddressesInput
    poolsAsToken0?: PoolCreateNestedManyWithoutToken0Input
    poolsAsToken1?: PoolCreateNestedManyWithoutToken1Input
  }

  export type TokenAddressUncheckedCreateWithoutChainInput = {
    tokenAddress: string
    tokenId: string
    poolsAsToken0?: PoolUncheckedCreateNestedManyWithoutToken0Input
    poolsAsToken1?: PoolUncheckedCreateNestedManyWithoutToken1Input
  }

  export type TokenAddressCreateOrConnectWithoutChainInput = {
    where: TokenAddressWhereUniqueInput
    create: XOR<TokenAddressCreateWithoutChainInput, TokenAddressUncheckedCreateWithoutChainInput>
  }

  export type TokenAddressCreateManyChainInputEnvelope = {
    data: TokenAddressCreateManyChainInput | TokenAddressCreateManyChainInput[]
    skipDuplicates?: boolean
  }

  export type PoolCreateWithoutChainInput = {
    poolAddress: string
    dexName: string
    token0: TokenAddressCreateNestedOneWithoutPoolsAsToken0Input
    token1: TokenAddressCreateNestedOneWithoutPoolsAsToken1Input
  }

  export type PoolUncheckedCreateWithoutChainInput = {
    poolAddress: string
    token0Address: string
    token1Address: string
    dexName: string
  }

  export type PoolCreateOrConnectWithoutChainInput = {
    where: PoolWhereUniqueInput
    create: XOR<PoolCreateWithoutChainInput, PoolUncheckedCreateWithoutChainInput>
  }

  export type PoolCreateManyChainInputEnvelope = {
    data: PoolCreateManyChainInput | PoolCreateManyChainInput[]
    skipDuplicates?: boolean
  }

  export type TokenAddressUpsertWithWhereUniqueWithoutChainInput = {
    where: TokenAddressWhereUniqueInput
    update: XOR<TokenAddressUpdateWithoutChainInput, TokenAddressUncheckedUpdateWithoutChainInput>
    create: XOR<TokenAddressCreateWithoutChainInput, TokenAddressUncheckedCreateWithoutChainInput>
  }

  export type TokenAddressUpdateWithWhereUniqueWithoutChainInput = {
    where: TokenAddressWhereUniqueInput
    data: XOR<TokenAddressUpdateWithoutChainInput, TokenAddressUncheckedUpdateWithoutChainInput>
  }

  export type TokenAddressUpdateManyWithWhereWithoutChainInput = {
    where: TokenAddressScalarWhereInput
    data: XOR<TokenAddressUpdateManyMutationInput, TokenAddressUncheckedUpdateManyWithoutChainInput>
  }

  export type PoolUpsertWithWhereUniqueWithoutChainInput = {
    where: PoolWhereUniqueInput
    update: XOR<PoolUpdateWithoutChainInput, PoolUncheckedUpdateWithoutChainInput>
    create: XOR<PoolCreateWithoutChainInput, PoolUncheckedCreateWithoutChainInput>
  }

  export type PoolUpdateWithWhereUniqueWithoutChainInput = {
    where: PoolWhereUniqueInput
    data: XOR<PoolUpdateWithoutChainInput, PoolUncheckedUpdateWithoutChainInput>
  }

  export type PoolUpdateManyWithWhereWithoutChainInput = {
    where: PoolScalarWhereInput
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyWithoutChainInput>
  }

  export type ChainRefCreateWithoutPoolsInput = {
    id: string
    networkName?: string | null
    tokenAddresses?: TokenAddressCreateNestedManyWithoutChainInput
  }

  export type ChainRefUncheckedCreateWithoutPoolsInput = {
    id: string
    networkName?: string | null
    tokenAddresses?: TokenAddressUncheckedCreateNestedManyWithoutChainInput
  }

  export type ChainRefCreateOrConnectWithoutPoolsInput = {
    where: ChainRefWhereUniqueInput
    create: XOR<ChainRefCreateWithoutPoolsInput, ChainRefUncheckedCreateWithoutPoolsInput>
  }

  export type TokenAddressCreateWithoutPoolsAsToken0Input = {
    tokenAddress: string
    token: TokenCreateNestedOneWithoutAddressesInput
    chain: ChainRefCreateNestedOneWithoutTokenAddressesInput
    poolsAsToken1?: PoolCreateNestedManyWithoutToken1Input
  }

  export type TokenAddressUncheckedCreateWithoutPoolsAsToken0Input = {
    tokenAddress: string
    chainId: string
    tokenId: string
    poolsAsToken1?: PoolUncheckedCreateNestedManyWithoutToken1Input
  }

  export type TokenAddressCreateOrConnectWithoutPoolsAsToken0Input = {
    where: TokenAddressWhereUniqueInput
    create: XOR<TokenAddressCreateWithoutPoolsAsToken0Input, TokenAddressUncheckedCreateWithoutPoolsAsToken0Input>
  }

  export type TokenAddressCreateWithoutPoolsAsToken1Input = {
    tokenAddress: string
    token: TokenCreateNestedOneWithoutAddressesInput
    chain: ChainRefCreateNestedOneWithoutTokenAddressesInput
    poolsAsToken0?: PoolCreateNestedManyWithoutToken0Input
  }

  export type TokenAddressUncheckedCreateWithoutPoolsAsToken1Input = {
    tokenAddress: string
    chainId: string
    tokenId: string
    poolsAsToken0?: PoolUncheckedCreateNestedManyWithoutToken0Input
  }

  export type TokenAddressCreateOrConnectWithoutPoolsAsToken1Input = {
    where: TokenAddressWhereUniqueInput
    create: XOR<TokenAddressCreateWithoutPoolsAsToken1Input, TokenAddressUncheckedCreateWithoutPoolsAsToken1Input>
  }

  export type ChainRefUpsertWithoutPoolsInput = {
    update: XOR<ChainRefUpdateWithoutPoolsInput, ChainRefUncheckedUpdateWithoutPoolsInput>
    create: XOR<ChainRefCreateWithoutPoolsInput, ChainRefUncheckedCreateWithoutPoolsInput>
    where?: ChainRefWhereInput
  }

  export type ChainRefUpdateToOneWithWhereWithoutPoolsInput = {
    where?: ChainRefWhereInput
    data: XOR<ChainRefUpdateWithoutPoolsInput, ChainRefUncheckedUpdateWithoutPoolsInput>
  }

  export type ChainRefUpdateWithoutPoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: NullableStringFieldUpdateOperationsInput | string | null
    tokenAddresses?: TokenAddressUpdateManyWithoutChainNestedInput
  }

  export type ChainRefUncheckedUpdateWithoutPoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkName?: NullableStringFieldUpdateOperationsInput | string | null
    tokenAddresses?: TokenAddressUncheckedUpdateManyWithoutChainNestedInput
  }

  export type TokenAddressUpsertWithoutPoolsAsToken0Input = {
    update: XOR<TokenAddressUpdateWithoutPoolsAsToken0Input, TokenAddressUncheckedUpdateWithoutPoolsAsToken0Input>
    create: XOR<TokenAddressCreateWithoutPoolsAsToken0Input, TokenAddressUncheckedCreateWithoutPoolsAsToken0Input>
    where?: TokenAddressWhereInput
  }

  export type TokenAddressUpdateToOneWithWhereWithoutPoolsAsToken0Input = {
    where?: TokenAddressWhereInput
    data: XOR<TokenAddressUpdateWithoutPoolsAsToken0Input, TokenAddressUncheckedUpdateWithoutPoolsAsToken0Input>
  }

  export type TokenAddressUpdateWithoutPoolsAsToken0Input = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    token?: TokenUpdateOneRequiredWithoutAddressesNestedInput
    chain?: ChainRefUpdateOneRequiredWithoutTokenAddressesNestedInput
    poolsAsToken1?: PoolUpdateManyWithoutToken1NestedInput
  }

  export type TokenAddressUncheckedUpdateWithoutPoolsAsToken0Input = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    chainId?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    poolsAsToken1?: PoolUncheckedUpdateManyWithoutToken1NestedInput
  }

  export type TokenAddressUpsertWithoutPoolsAsToken1Input = {
    update: XOR<TokenAddressUpdateWithoutPoolsAsToken1Input, TokenAddressUncheckedUpdateWithoutPoolsAsToken1Input>
    create: XOR<TokenAddressCreateWithoutPoolsAsToken1Input, TokenAddressUncheckedCreateWithoutPoolsAsToken1Input>
    where?: TokenAddressWhereInput
  }

  export type TokenAddressUpdateToOneWithWhereWithoutPoolsAsToken1Input = {
    where?: TokenAddressWhereInput
    data: XOR<TokenAddressUpdateWithoutPoolsAsToken1Input, TokenAddressUncheckedUpdateWithoutPoolsAsToken1Input>
  }

  export type TokenAddressUpdateWithoutPoolsAsToken1Input = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    token?: TokenUpdateOneRequiredWithoutAddressesNestedInput
    chain?: ChainRefUpdateOneRequiredWithoutTokenAddressesNestedInput
    poolsAsToken0?: PoolUpdateManyWithoutToken0NestedInput
  }

  export type TokenAddressUncheckedUpdateWithoutPoolsAsToken1Input = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    chainId?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    poolsAsToken0?: PoolUncheckedUpdateManyWithoutToken0NestedInput
  }

  export type TokenAddressCreateManyTokenInput = {
    tokenAddress: string
    chainId: string
  }

  export type TokenAddressUpdateWithoutTokenInput = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    chain?: ChainRefUpdateOneRequiredWithoutTokenAddressesNestedInput
    poolsAsToken0?: PoolUpdateManyWithoutToken0NestedInput
    poolsAsToken1?: PoolUpdateManyWithoutToken1NestedInput
  }

  export type TokenAddressUncheckedUpdateWithoutTokenInput = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    chainId?: StringFieldUpdateOperationsInput | string
    poolsAsToken0?: PoolUncheckedUpdateManyWithoutToken0NestedInput
    poolsAsToken1?: PoolUncheckedUpdateManyWithoutToken1NestedInput
  }

  export type TokenAddressUncheckedUpdateManyWithoutTokenInput = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    chainId?: StringFieldUpdateOperationsInput | string
  }

  export type PoolCreateManyToken0Input = {
    poolAddress: string
    token1Address: string
    dexName: string
  }

  export type PoolCreateManyToken1Input = {
    poolAddress: string
    token0Address: string
    dexName: string
  }

  export type PoolUpdateWithoutToken0Input = {
    poolAddress?: StringFieldUpdateOperationsInput | string
    dexName?: StringFieldUpdateOperationsInput | string
    chain?: ChainRefUpdateOneRequiredWithoutPoolsNestedInput
    token1?: TokenAddressUpdateOneRequiredWithoutPoolsAsToken1NestedInput
  }

  export type PoolUncheckedUpdateWithoutToken0Input = {
    poolAddress?: StringFieldUpdateOperationsInput | string
    token1Address?: StringFieldUpdateOperationsInput | string
    dexName?: StringFieldUpdateOperationsInput | string
  }

  export type PoolUncheckedUpdateManyWithoutToken0Input = {
    poolAddress?: StringFieldUpdateOperationsInput | string
    token1Address?: StringFieldUpdateOperationsInput | string
    dexName?: StringFieldUpdateOperationsInput | string
  }

  export type PoolUpdateWithoutToken1Input = {
    poolAddress?: StringFieldUpdateOperationsInput | string
    dexName?: StringFieldUpdateOperationsInput | string
    chain?: ChainRefUpdateOneRequiredWithoutPoolsNestedInput
    token0?: TokenAddressUpdateOneRequiredWithoutPoolsAsToken0NestedInput
  }

  export type PoolUncheckedUpdateWithoutToken1Input = {
    poolAddress?: StringFieldUpdateOperationsInput | string
    token0Address?: StringFieldUpdateOperationsInput | string
    dexName?: StringFieldUpdateOperationsInput | string
  }

  export type PoolUncheckedUpdateManyWithoutToken1Input = {
    poolAddress?: StringFieldUpdateOperationsInput | string
    token0Address?: StringFieldUpdateOperationsInput | string
    dexName?: StringFieldUpdateOperationsInput | string
  }

  export type TokenAddressCreateManyChainInput = {
    tokenAddress: string
    tokenId: string
  }

  export type PoolCreateManyChainInput = {
    poolAddress: string
    token0Address: string
    token1Address: string
    dexName: string
  }

  export type TokenAddressUpdateWithoutChainInput = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    token?: TokenUpdateOneRequiredWithoutAddressesNestedInput
    poolsAsToken0?: PoolUpdateManyWithoutToken0NestedInput
    poolsAsToken1?: PoolUpdateManyWithoutToken1NestedInput
  }

  export type TokenAddressUncheckedUpdateWithoutChainInput = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    poolsAsToken0?: PoolUncheckedUpdateManyWithoutToken0NestedInput
    poolsAsToken1?: PoolUncheckedUpdateManyWithoutToken1NestedInput
  }

  export type TokenAddressUncheckedUpdateManyWithoutChainInput = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
  }

  export type PoolUpdateWithoutChainInput = {
    poolAddress?: StringFieldUpdateOperationsInput | string
    dexName?: StringFieldUpdateOperationsInput | string
    token0?: TokenAddressUpdateOneRequiredWithoutPoolsAsToken0NestedInput
    token1?: TokenAddressUpdateOneRequiredWithoutPoolsAsToken1NestedInput
  }

  export type PoolUncheckedUpdateWithoutChainInput = {
    poolAddress?: StringFieldUpdateOperationsInput | string
    token0Address?: StringFieldUpdateOperationsInput | string
    token1Address?: StringFieldUpdateOperationsInput | string
    dexName?: StringFieldUpdateOperationsInput | string
  }

  export type PoolUncheckedUpdateManyWithoutChainInput = {
    poolAddress?: StringFieldUpdateOperationsInput | string
    token0Address?: StringFieldUpdateOperationsInput | string
    token1Address?: StringFieldUpdateOperationsInput | string
    dexName?: StringFieldUpdateOperationsInput | string
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