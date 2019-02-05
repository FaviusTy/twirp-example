import * as $protobuf from "protobufjs";
/** Namespace sample. */
export namespace sample {

    /** Properties of a Sample. */
    interface ISample {
    }

    /** Represents a Sample. */
    class Sample implements ISample {

        /**
         * Constructs a new Sample.
         * @param [properties] Properties to set
         */
        constructor(properties?: sample.ISample);

        /**
         * Creates a new Sample instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Sample instance
         */
        public static create(properties?: sample.ISample): sample.Sample;

        /**
         * Encodes the specified Sample message. Does not implicitly {@link sample.Sample.verify|verify} messages.
         * @param message Sample message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sample.ISample, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Sample message, length delimited. Does not implicitly {@link sample.Sample.verify|verify} messages.
         * @param message Sample message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sample.ISample, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Sample message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Sample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sample.Sample;

        /**
         * Decodes a Sample message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Sample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sample.Sample;

        /**
         * Verifies a Sample message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Sample message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Sample
         */
        public static fromObject(object: { [k: string]: any }): sample.Sample;

        /**
         * Creates a plain object from a Sample message. Also converts values to other types if specified.
         * @param message Sample
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sample.Sample, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Sample to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Sample {

        /** Properties of a Base. */
        interface IBase {

            /** Base str */
            str?: (string|null);

            /** Base int32 */
            int32?: (number|null);

            /** Base int64 */
            int64?: (number|Long|null);

            /** Base uint32 */
            uint32?: (number|null);

            /** Base uint64 */
            uint64?: (number|Long|null);

            /** Base sint32 */
            sint32?: (number|null);

            /** Base sint64 */
            sint64?: (number|Long|null);

            /** Base fixed32 */
            fixed32?: (number|null);

            /** Base fixed64 */
            fixed64?: (number|Long|null);

            /** Base sfixed32 */
            sfixed32?: (number|null);

            /** Base sfixed64 */
            sfixed64?: (number|Long|null);

            /** Base double */
            double?: (number|null);

            /** Base bool */
            bool?: (boolean|null);

            /** Base bytes */
            bytes?: (Uint8Array|null);
        }

        /** Represents a Base. */
        class Base implements IBase {

            /**
             * Constructs a new Base.
             * @param [properties] Properties to set
             */
            constructor(properties?: sample.Sample.IBase);

            /** Base str. */
            public str: string;

            /** Base int32. */
            public int32: number;

            /** Base int64. */
            public int64: (number|Long);

            /** Base uint32. */
            public uint32: number;

            /** Base uint64. */
            public uint64: (number|Long);

            /** Base sint32. */
            public sint32: number;

            /** Base sint64. */
            public sint64: (number|Long);

            /** Base fixed32. */
            public fixed32: number;

            /** Base fixed64. */
            public fixed64: (number|Long);

            /** Base sfixed32. */
            public sfixed32: number;

            /** Base sfixed64. */
            public sfixed64: (number|Long);

            /** Base double. */
            public double: number;

            /** Base bool. */
            public bool: boolean;

            /** Base bytes. */
            public bytes: Uint8Array;

            /**
             * Creates a new Base instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Base instance
             */
            public static create(properties?: sample.Sample.IBase): sample.Sample.Base;

            /**
             * Encodes the specified Base message. Does not implicitly {@link sample.Sample.Base.verify|verify} messages.
             * @param message Base message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sample.Sample.IBase, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Base message, length delimited. Does not implicitly {@link sample.Sample.Base.verify|verify} messages.
             * @param message Base message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sample.Sample.IBase, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Base message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Base
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sample.Sample.Base;

            /**
             * Decodes a Base message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Base
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sample.Sample.Base;

            /**
             * Verifies a Base message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Base message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Base
             */
            public static fromObject(object: { [k: string]: any }): sample.Sample.Base;

            /**
             * Creates a plain object from a Base message. Also converts values to other types if specified.
             * @param message Base
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sample.Sample.Base, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Base to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Repeated. */
        interface IRepeated {

            /** Repeated str */
            str?: (string[]|null);

            /** Repeated int32 */
            int32?: (number[]|null);

            /** Repeated int64 */
            int64?: ((number|Long)[]|null);

            /** Repeated uint32 */
            uint32?: (number[]|null);

            /** Repeated uint64 */
            uint64?: ((number|Long)[]|null);

            /** Repeated sint32 */
            sint32?: (number[]|null);

            /** Repeated sint64 */
            sint64?: ((number|Long)[]|null);

            /** Repeated fixed32 */
            fixed32?: (number[]|null);

            /** Repeated fixed64 */
            fixed64?: ((number|Long)[]|null);

            /** Repeated sfixed32 */
            sfixed32?: (number[]|null);

            /** Repeated sfixed64 */
            sfixed64?: ((number|Long)[]|null);

            /** Repeated double */
            double?: (number[]|null);

            /** Repeated bool */
            bool?: (boolean[]|null);

            /** Repeated bytes */
            bytes?: (Uint8Array[]|null);

            /** Repeated bases */
            bases?: (sample.Sample.IBase[]|null);
        }

        /** Represents a Repeated. */
        class Repeated implements IRepeated {

            /**
             * Constructs a new Repeated.
             * @param [properties] Properties to set
             */
            constructor(properties?: sample.Sample.IRepeated);

            /** Repeated str. */
            public str: string[];

            /** Repeated int32. */
            public int32: number[];

            /** Repeated int64. */
            public int64: (number|Long)[];

            /** Repeated uint32. */
            public uint32: number[];

            /** Repeated uint64. */
            public uint64: (number|Long)[];

            /** Repeated sint32. */
            public sint32: number[];

            /** Repeated sint64. */
            public sint64: (number|Long)[];

            /** Repeated fixed32. */
            public fixed32: number[];

            /** Repeated fixed64. */
            public fixed64: (number|Long)[];

            /** Repeated sfixed32. */
            public sfixed32: number[];

            /** Repeated sfixed64. */
            public sfixed64: (number|Long)[];

            /** Repeated double. */
            public double: number[];

            /** Repeated bool. */
            public bool: boolean[];

            /** Repeated bytes. */
            public bytes: Uint8Array[];

            /** Repeated bases. */
            public bases: sample.Sample.IBase[];

            /**
             * Creates a new Repeated instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Repeated instance
             */
            public static create(properties?: sample.Sample.IRepeated): sample.Sample.Repeated;

            /**
             * Encodes the specified Repeated message. Does not implicitly {@link sample.Sample.Repeated.verify|verify} messages.
             * @param message Repeated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sample.Sample.IRepeated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Repeated message, length delimited. Does not implicitly {@link sample.Sample.Repeated.verify|verify} messages.
             * @param message Repeated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sample.Sample.IRepeated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Repeated message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Repeated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sample.Sample.Repeated;

            /**
             * Decodes a Repeated message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Repeated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sample.Sample.Repeated;

            /**
             * Verifies a Repeated message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Repeated message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Repeated
             */
            public static fromObject(object: { [k: string]: any }): sample.Sample.Repeated;

            /**
             * Creates a plain object from a Repeated message. Also converts values to other types if specified.
             * @param message Repeated
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sample.Sample.Repeated, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Repeated to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Represents an EchoBase */
    class EchoBase extends $protobuf.rpc.Service {

        /**
         * Constructs a new EchoBase service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new EchoBase service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EchoBase;

        /**
         * Calls EchoBase.
         * @param request Base message or plain object
         * @param callback Node-style callback called with the error, if any, and Base
         */
        public echoBase(request: sample.Sample.IBase, callback: sample.EchoBase.EchoBaseCallback): void;

        /**
         * Calls EchoBase.
         * @param request Base message or plain object
         * @returns Promise
         */
        public echoBase(request: sample.Sample.IBase): Promise<sample.Sample.Base>;
    }

    namespace EchoBase {

        /**
         * Callback as used by {@link sample.EchoBase#echoBase}.
         * @param error Error, if any
         * @param [response] Base
         */
        type EchoBaseCallback = (error: (Error|null), response?: sample.Sample.Base) => void;
    }

    /** Represents an EchoRepeated */
    class EchoRepeated extends $protobuf.rpc.Service {

        /**
         * Constructs a new EchoRepeated service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new EchoRepeated service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EchoRepeated;

        /**
         * Calls EchoRepeated.
         * @param request Repeated message or plain object
         * @param callback Node-style callback called with the error, if any, and Repeated
         */
        public echoRepeated(request: sample.Sample.IRepeated, callback: sample.EchoRepeated.EchoRepeatedCallback): void;

        /**
         * Calls EchoRepeated.
         * @param request Repeated message or plain object
         * @returns Promise
         */
        public echoRepeated(request: sample.Sample.IRepeated): Promise<sample.Sample.Repeated>;
    }

    namespace EchoRepeated {

        /**
         * Callback as used by {@link sample.EchoRepeated#echoRepeated}.
         * @param error Error, if any
         * @param [response] Repeated
         */
        type EchoRepeatedCallback = (error: (Error|null), response?: sample.Sample.Repeated) => void;
    }
}
