/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.sample = (function() {
    
        /**
         * Namespace sample.
         * @exports sample
         * @namespace
         */
        var sample = {};
    
        sample.Sample = (function() {
    
            /**
             * Properties of a Sample.
             * @memberof sample
             * @interface ISample
             */
    
            /**
             * Constructs a new Sample.
             * @memberof sample
             * @classdesc Represents a Sample.
             * @implements ISample
             * @constructor
             * @param {sample.ISample=} [properties] Properties to set
             */
            function Sample(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new Sample instance using the specified properties.
             * @function create
             * @memberof sample.Sample
             * @static
             * @param {sample.ISample=} [properties] Properties to set
             * @returns {sample.Sample} Sample instance
             */
            Sample.create = function create(properties) {
                return new Sample(properties);
            };
    
            /**
             * Encodes the specified Sample message. Does not implicitly {@link sample.Sample.verify|verify} messages.
             * @function encode
             * @memberof sample.Sample
             * @static
             * @param {sample.ISample} message Sample message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Sample.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Sample message, length delimited. Does not implicitly {@link sample.Sample.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sample.Sample
             * @static
             * @param {sample.ISample} message Sample message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Sample.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Sample message from the specified reader or buffer.
             * @function decode
             * @memberof sample.Sample
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sample.Sample} Sample
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Sample.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sample.Sample();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Sample message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sample.Sample
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sample.Sample} Sample
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Sample.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Sample message.
             * @function verify
             * @memberof sample.Sample
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Sample.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a Sample message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sample.Sample
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sample.Sample} Sample
             */
            Sample.fromObject = function fromObject(object) {
                if (object instanceof $root.sample.Sample)
                    return object;
                return new $root.sample.Sample();
            };
    
            /**
             * Creates a plain object from a Sample message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sample.Sample
             * @static
             * @param {sample.Sample} message Sample
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Sample.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Sample to JSON.
             * @function toJSON
             * @memberof sample.Sample
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Sample.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            Sample.Base = (function() {
    
                /**
                 * Properties of a Base.
                 * @memberof sample.Sample
                 * @interface IBase
                 * @property {string|null} [str] Base str
                 * @property {number|null} [int32] Base int32
                 * @property {number|Long|null} [int64] Base int64
                 * @property {number|null} [uint32] Base uint32
                 * @property {number|Long|null} [uint64] Base uint64
                 * @property {number|null} [sint32] Base sint32
                 * @property {number|Long|null} [sint64] Base sint64
                 * @property {number|null} [fixed32] Base fixed32
                 * @property {number|Long|null} [fixed64] Base fixed64
                 * @property {number|null} [sfixed32] Base sfixed32
                 * @property {number|Long|null} [sfixed64] Base sfixed64
                 * @property {number|null} [double] Base double
                 * @property {boolean|null} [bool] Base bool
                 * @property {Uint8Array|null} [bytes] Base bytes
                 */
    
                /**
                 * Constructs a new Base.
                 * @memberof sample.Sample
                 * @classdesc Represents a Base.
                 * @implements IBase
                 * @constructor
                 * @param {sample.Sample.IBase=} [properties] Properties to set
                 */
                function Base(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Base str.
                 * @member {string} str
                 * @memberof sample.Sample.Base
                 * @instance
                 */
                Base.prototype.str = "";
    
                /**
                 * Base int32.
                 * @member {number} int32
                 * @memberof sample.Sample.Base
                 * @instance
                 */
                Base.prototype.int32 = 0;
    
                /**
                 * Base int64.
                 * @member {number|Long} int64
                 * @memberof sample.Sample.Base
                 * @instance
                 */
                Base.prototype.int64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Base uint32.
                 * @member {number} uint32
                 * @memberof sample.Sample.Base
                 * @instance
                 */
                Base.prototype.uint32 = 0;
    
                /**
                 * Base uint64.
                 * @member {number|Long} uint64
                 * @memberof sample.Sample.Base
                 * @instance
                 */
                Base.prototype.uint64 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * Base sint32.
                 * @member {number} sint32
                 * @memberof sample.Sample.Base
                 * @instance
                 */
                Base.prototype.sint32 = 0;
    
                /**
                 * Base sint64.
                 * @member {number|Long} sint64
                 * @memberof sample.Sample.Base
                 * @instance
                 */
                Base.prototype.sint64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Base fixed32.
                 * @member {number} fixed32
                 * @memberof sample.Sample.Base
                 * @instance
                 */
                Base.prototype.fixed32 = 0;
    
                /**
                 * Base fixed64.
                 * @member {number|Long} fixed64
                 * @memberof sample.Sample.Base
                 * @instance
                 */
                Base.prototype.fixed64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Base sfixed32.
                 * @member {number} sfixed32
                 * @memberof sample.Sample.Base
                 * @instance
                 */
                Base.prototype.sfixed32 = 0;
    
                /**
                 * Base sfixed64.
                 * @member {number|Long} sfixed64
                 * @memberof sample.Sample.Base
                 * @instance
                 */
                Base.prototype.sfixed64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Base double.
                 * @member {number} double
                 * @memberof sample.Sample.Base
                 * @instance
                 */
                Base.prototype.double = 0;
    
                /**
                 * Base bool.
                 * @member {boolean} bool
                 * @memberof sample.Sample.Base
                 * @instance
                 */
                Base.prototype.bool = false;
    
                /**
                 * Base bytes.
                 * @member {Uint8Array} bytes
                 * @memberof sample.Sample.Base
                 * @instance
                 */
                Base.prototype.bytes = $util.newBuffer([]);
    
                /**
                 * Creates a new Base instance using the specified properties.
                 * @function create
                 * @memberof sample.Sample.Base
                 * @static
                 * @param {sample.Sample.IBase=} [properties] Properties to set
                 * @returns {sample.Sample.Base} Base instance
                 */
                Base.create = function create(properties) {
                    return new Base(properties);
                };
    
                /**
                 * Encodes the specified Base message. Does not implicitly {@link sample.Sample.Base.verify|verify} messages.
                 * @function encode
                 * @memberof sample.Sample.Base
                 * @static
                 * @param {sample.Sample.IBase} message Base message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Base.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.str != null && message.hasOwnProperty("str"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.str);
                    if (message.int32 != null && message.hasOwnProperty("int32"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.int32);
                    if (message.int64 != null && message.hasOwnProperty("int64"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.int64);
                    if (message.uint32 != null && message.hasOwnProperty("uint32"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.uint32);
                    if (message.uint64 != null && message.hasOwnProperty("uint64"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.uint64);
                    if (message.sint32 != null && message.hasOwnProperty("sint32"))
                        writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.sint32);
                    if (message.sint64 != null && message.hasOwnProperty("sint64"))
                        writer.uint32(/* id 7, wireType 0 =*/56).sint64(message.sint64);
                    if (message.fixed32 != null && message.hasOwnProperty("fixed32"))
                        writer.uint32(/* id 8, wireType 5 =*/69).fixed32(message.fixed32);
                    if (message.fixed64 != null && message.hasOwnProperty("fixed64"))
                        writer.uint32(/* id 9, wireType 1 =*/73).fixed64(message.fixed64);
                    if (message.sfixed32 != null && message.hasOwnProperty("sfixed32"))
                        writer.uint32(/* id 10, wireType 5 =*/85).sfixed32(message.sfixed32);
                    if (message.sfixed64 != null && message.hasOwnProperty("sfixed64"))
                        writer.uint32(/* id 11, wireType 1 =*/89).sfixed64(message.sfixed64);
                    if (message.double != null && message.hasOwnProperty("double"))
                        writer.uint32(/* id 12, wireType 1 =*/97).double(message.double);
                    if (message.bool != null && message.hasOwnProperty("bool"))
                        writer.uint32(/* id 13, wireType 0 =*/104).bool(message.bool);
                    if (message.bytes != null && message.hasOwnProperty("bytes"))
                        writer.uint32(/* id 14, wireType 2 =*/114).bytes(message.bytes);
                    return writer;
                };
    
                /**
                 * Encodes the specified Base message, length delimited. Does not implicitly {@link sample.Sample.Base.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sample.Sample.Base
                 * @static
                 * @param {sample.Sample.IBase} message Base message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Base.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Base message from the specified reader or buffer.
                 * @function decode
                 * @memberof sample.Sample.Base
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sample.Sample.Base} Base
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Base.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sample.Sample.Base();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.str = reader.string();
                            break;
                        case 2:
                            message.int32 = reader.int32();
                            break;
                        case 3:
                            message.int64 = reader.int64();
                            break;
                        case 4:
                            message.uint32 = reader.uint32();
                            break;
                        case 5:
                            message.uint64 = reader.uint64();
                            break;
                        case 6:
                            message.sint32 = reader.sint32();
                            break;
                        case 7:
                            message.sint64 = reader.sint64();
                            break;
                        case 8:
                            message.fixed32 = reader.fixed32();
                            break;
                        case 9:
                            message.fixed64 = reader.fixed64();
                            break;
                        case 10:
                            message.sfixed32 = reader.sfixed32();
                            break;
                        case 11:
                            message.sfixed64 = reader.sfixed64();
                            break;
                        case 12:
                            message.double = reader.double();
                            break;
                        case 13:
                            message.bool = reader.bool();
                            break;
                        case 14:
                            message.bytes = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Base message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sample.Sample.Base
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sample.Sample.Base} Base
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Base.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Base message.
                 * @function verify
                 * @memberof sample.Sample.Base
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Base.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.str != null && message.hasOwnProperty("str"))
                        if (!$util.isString(message.str))
                            return "str: string expected";
                    if (message.int32 != null && message.hasOwnProperty("int32"))
                        if (!$util.isInteger(message.int32))
                            return "int32: integer expected";
                    if (message.int64 != null && message.hasOwnProperty("int64"))
                        if (!$util.isInteger(message.int64) && !(message.int64 && $util.isInteger(message.int64.low) && $util.isInteger(message.int64.high)))
                            return "int64: integer|Long expected";
                    if (message.uint32 != null && message.hasOwnProperty("uint32"))
                        if (!$util.isInteger(message.uint32))
                            return "uint32: integer expected";
                    if (message.uint64 != null && message.hasOwnProperty("uint64"))
                        if (!$util.isInteger(message.uint64) && !(message.uint64 && $util.isInteger(message.uint64.low) && $util.isInteger(message.uint64.high)))
                            return "uint64: integer|Long expected";
                    if (message.sint32 != null && message.hasOwnProperty("sint32"))
                        if (!$util.isInteger(message.sint32))
                            return "sint32: integer expected";
                    if (message.sint64 != null && message.hasOwnProperty("sint64"))
                        if (!$util.isInteger(message.sint64) && !(message.sint64 && $util.isInteger(message.sint64.low) && $util.isInteger(message.sint64.high)))
                            return "sint64: integer|Long expected";
                    if (message.fixed32 != null && message.hasOwnProperty("fixed32"))
                        if (!$util.isInteger(message.fixed32))
                            return "fixed32: integer expected";
                    if (message.fixed64 != null && message.hasOwnProperty("fixed64"))
                        if (!$util.isInteger(message.fixed64) && !(message.fixed64 && $util.isInteger(message.fixed64.low) && $util.isInteger(message.fixed64.high)))
                            return "fixed64: integer|Long expected";
                    if (message.sfixed32 != null && message.hasOwnProperty("sfixed32"))
                        if (!$util.isInteger(message.sfixed32))
                            return "sfixed32: integer expected";
                    if (message.sfixed64 != null && message.hasOwnProperty("sfixed64"))
                        if (!$util.isInteger(message.sfixed64) && !(message.sfixed64 && $util.isInteger(message.sfixed64.low) && $util.isInteger(message.sfixed64.high)))
                            return "sfixed64: integer|Long expected";
                    if (message.double != null && message.hasOwnProperty("double"))
                        if (typeof message.double !== "number")
                            return "double: number expected";
                    if (message.bool != null && message.hasOwnProperty("bool"))
                        if (typeof message.bool !== "boolean")
                            return "bool: boolean expected";
                    if (message.bytes != null && message.hasOwnProperty("bytes"))
                        if (!(message.bytes && typeof message.bytes.length === "number" || $util.isString(message.bytes)))
                            return "bytes: buffer expected";
                    return null;
                };
    
                /**
                 * Creates a Base message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sample.Sample.Base
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sample.Sample.Base} Base
                 */
                Base.fromObject = function fromObject(object) {
                    if (object instanceof $root.sample.Sample.Base)
                        return object;
                    var message = new $root.sample.Sample.Base();
                    if (object.str != null)
                        message.str = String(object.str);
                    if (object.int32 != null)
                        message.int32 = object.int32 | 0;
                    if (object.int64 != null)
                        if ($util.Long)
                            (message.int64 = $util.Long.fromValue(object.int64)).unsigned = false;
                        else if (typeof object.int64 === "string")
                            message.int64 = parseInt(object.int64, 10);
                        else if (typeof object.int64 === "number")
                            message.int64 = object.int64;
                        else if (typeof object.int64 === "object")
                            message.int64 = new $util.LongBits(object.int64.low >>> 0, object.int64.high >>> 0).toNumber();
                    if (object.uint32 != null)
                        message.uint32 = object.uint32 >>> 0;
                    if (object.uint64 != null)
                        if ($util.Long)
                            (message.uint64 = $util.Long.fromValue(object.uint64)).unsigned = true;
                        else if (typeof object.uint64 === "string")
                            message.uint64 = parseInt(object.uint64, 10);
                        else if (typeof object.uint64 === "number")
                            message.uint64 = object.uint64;
                        else if (typeof object.uint64 === "object")
                            message.uint64 = new $util.LongBits(object.uint64.low >>> 0, object.uint64.high >>> 0).toNumber(true);
                    if (object.sint32 != null)
                        message.sint32 = object.sint32 | 0;
                    if (object.sint64 != null)
                        if ($util.Long)
                            (message.sint64 = $util.Long.fromValue(object.sint64)).unsigned = false;
                        else if (typeof object.sint64 === "string")
                            message.sint64 = parseInt(object.sint64, 10);
                        else if (typeof object.sint64 === "number")
                            message.sint64 = object.sint64;
                        else if (typeof object.sint64 === "object")
                            message.sint64 = new $util.LongBits(object.sint64.low >>> 0, object.sint64.high >>> 0).toNumber();
                    if (object.fixed32 != null)
                        message.fixed32 = object.fixed32 >>> 0;
                    if (object.fixed64 != null)
                        if ($util.Long)
                            (message.fixed64 = $util.Long.fromValue(object.fixed64)).unsigned = false;
                        else if (typeof object.fixed64 === "string")
                            message.fixed64 = parseInt(object.fixed64, 10);
                        else if (typeof object.fixed64 === "number")
                            message.fixed64 = object.fixed64;
                        else if (typeof object.fixed64 === "object")
                            message.fixed64 = new $util.LongBits(object.fixed64.low >>> 0, object.fixed64.high >>> 0).toNumber();
                    if (object.sfixed32 != null)
                        message.sfixed32 = object.sfixed32 | 0;
                    if (object.sfixed64 != null)
                        if ($util.Long)
                            (message.sfixed64 = $util.Long.fromValue(object.sfixed64)).unsigned = false;
                        else if (typeof object.sfixed64 === "string")
                            message.sfixed64 = parseInt(object.sfixed64, 10);
                        else if (typeof object.sfixed64 === "number")
                            message.sfixed64 = object.sfixed64;
                        else if (typeof object.sfixed64 === "object")
                            message.sfixed64 = new $util.LongBits(object.sfixed64.low >>> 0, object.sfixed64.high >>> 0).toNumber();
                    if (object.double != null)
                        message.double = Number(object.double);
                    if (object.bool != null)
                        message.bool = Boolean(object.bool);
                    if (object.bytes != null)
                        if (typeof object.bytes === "string")
                            $util.base64.decode(object.bytes, message.bytes = $util.newBuffer($util.base64.length(object.bytes)), 0);
                        else if (object.bytes.length)
                            message.bytes = object.bytes;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Base message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sample.Sample.Base
                 * @static
                 * @param {sample.Sample.Base} message Base
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Base.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.str = "";
                        object.int32 = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.int64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.int64 = options.longs === String ? "0" : 0;
                        object.uint32 = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.uint64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.uint64 = options.longs === String ? "0" : 0;
                        object.sint32 = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.sint64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.sint64 = options.longs === String ? "0" : 0;
                        object.fixed32 = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.fixed64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.fixed64 = options.longs === String ? "0" : 0;
                        object.sfixed32 = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.sfixed64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.sfixed64 = options.longs === String ? "0" : 0;
                        object.double = 0;
                        object.bool = false;
                        if (options.bytes === String)
                            object.bytes = "";
                        else {
                            object.bytes = [];
                            if (options.bytes !== Array)
                                object.bytes = $util.newBuffer(object.bytes);
                        }
                    }
                    if (message.str != null && message.hasOwnProperty("str"))
                        object.str = message.str;
                    if (message.int32 != null && message.hasOwnProperty("int32"))
                        object.int32 = message.int32;
                    if (message.int64 != null && message.hasOwnProperty("int64"))
                        if (typeof message.int64 === "number")
                            object.int64 = options.longs === String ? String(message.int64) : message.int64;
                        else
                            object.int64 = options.longs === String ? $util.Long.prototype.toString.call(message.int64) : options.longs === Number ? new $util.LongBits(message.int64.low >>> 0, message.int64.high >>> 0).toNumber() : message.int64;
                    if (message.uint32 != null && message.hasOwnProperty("uint32"))
                        object.uint32 = message.uint32;
                    if (message.uint64 != null && message.hasOwnProperty("uint64"))
                        if (typeof message.uint64 === "number")
                            object.uint64 = options.longs === String ? String(message.uint64) : message.uint64;
                        else
                            object.uint64 = options.longs === String ? $util.Long.prototype.toString.call(message.uint64) : options.longs === Number ? new $util.LongBits(message.uint64.low >>> 0, message.uint64.high >>> 0).toNumber(true) : message.uint64;
                    if (message.sint32 != null && message.hasOwnProperty("sint32"))
                        object.sint32 = message.sint32;
                    if (message.sint64 != null && message.hasOwnProperty("sint64"))
                        if (typeof message.sint64 === "number")
                            object.sint64 = options.longs === String ? String(message.sint64) : message.sint64;
                        else
                            object.sint64 = options.longs === String ? $util.Long.prototype.toString.call(message.sint64) : options.longs === Number ? new $util.LongBits(message.sint64.low >>> 0, message.sint64.high >>> 0).toNumber() : message.sint64;
                    if (message.fixed32 != null && message.hasOwnProperty("fixed32"))
                        object.fixed32 = message.fixed32;
                    if (message.fixed64 != null && message.hasOwnProperty("fixed64"))
                        if (typeof message.fixed64 === "number")
                            object.fixed64 = options.longs === String ? String(message.fixed64) : message.fixed64;
                        else
                            object.fixed64 = options.longs === String ? $util.Long.prototype.toString.call(message.fixed64) : options.longs === Number ? new $util.LongBits(message.fixed64.low >>> 0, message.fixed64.high >>> 0).toNumber() : message.fixed64;
                    if (message.sfixed32 != null && message.hasOwnProperty("sfixed32"))
                        object.sfixed32 = message.sfixed32;
                    if (message.sfixed64 != null && message.hasOwnProperty("sfixed64"))
                        if (typeof message.sfixed64 === "number")
                            object.sfixed64 = options.longs === String ? String(message.sfixed64) : message.sfixed64;
                        else
                            object.sfixed64 = options.longs === String ? $util.Long.prototype.toString.call(message.sfixed64) : options.longs === Number ? new $util.LongBits(message.sfixed64.low >>> 0, message.sfixed64.high >>> 0).toNumber() : message.sfixed64;
                    if (message.double != null && message.hasOwnProperty("double"))
                        object.double = options.json && !isFinite(message.double) ? String(message.double) : message.double;
                    if (message.bool != null && message.hasOwnProperty("bool"))
                        object.bool = message.bool;
                    if (message.bytes != null && message.hasOwnProperty("bytes"))
                        object.bytes = options.bytes === String ? $util.base64.encode(message.bytes, 0, message.bytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytes) : message.bytes;
                    return object;
                };
    
                /**
                 * Converts this Base to JSON.
                 * @function toJSON
                 * @memberof sample.Sample.Base
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Base.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Base;
            })();
    
            Sample.Repeated = (function() {
    
                /**
                 * Properties of a Repeated.
                 * @memberof sample.Sample
                 * @interface IRepeated
                 * @property {Array.<string>|null} [str] Repeated str
                 * @property {Array.<number>|null} [int32] Repeated int32
                 * @property {Array.<number|Long>|null} [int64] Repeated int64
                 * @property {Array.<number>|null} [uint32] Repeated uint32
                 * @property {Array.<number|Long>|null} [uint64] Repeated uint64
                 * @property {Array.<number>|null} [sint32] Repeated sint32
                 * @property {Array.<number|Long>|null} [sint64] Repeated sint64
                 * @property {Array.<number>|null} [fixed32] Repeated fixed32
                 * @property {Array.<number|Long>|null} [fixed64] Repeated fixed64
                 * @property {Array.<number>|null} [sfixed32] Repeated sfixed32
                 * @property {Array.<number|Long>|null} [sfixed64] Repeated sfixed64
                 * @property {Array.<number>|null} [double] Repeated double
                 * @property {Array.<boolean>|null} [bool] Repeated bool
                 * @property {Array.<Uint8Array>|null} [bytes] Repeated bytes
                 * @property {Array.<sample.Sample.IBase>|null} [bases] Repeated bases
                 */
    
                /**
                 * Constructs a new Repeated.
                 * @memberof sample.Sample
                 * @classdesc Represents a Repeated.
                 * @implements IRepeated
                 * @constructor
                 * @param {sample.Sample.IRepeated=} [properties] Properties to set
                 */
                function Repeated(properties) {
                    this.str = [];
                    this.int32 = [];
                    this.int64 = [];
                    this.uint32 = [];
                    this.uint64 = [];
                    this.sint32 = [];
                    this.sint64 = [];
                    this.fixed32 = [];
                    this.fixed64 = [];
                    this.sfixed32 = [];
                    this.sfixed64 = [];
                    this.double = [];
                    this.bool = [];
                    this.bytes = [];
                    this.bases = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Repeated str.
                 * @member {Array.<string>} str
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.str = $util.emptyArray;
    
                /**
                 * Repeated int32.
                 * @member {Array.<number>} int32
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.int32 = $util.emptyArray;
    
                /**
                 * Repeated int64.
                 * @member {Array.<number|Long>} int64
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.int64 = $util.emptyArray;
    
                /**
                 * Repeated uint32.
                 * @member {Array.<number>} uint32
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.uint32 = $util.emptyArray;
    
                /**
                 * Repeated uint64.
                 * @member {Array.<number|Long>} uint64
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.uint64 = $util.emptyArray;
    
                /**
                 * Repeated sint32.
                 * @member {Array.<number>} sint32
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.sint32 = $util.emptyArray;
    
                /**
                 * Repeated sint64.
                 * @member {Array.<number|Long>} sint64
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.sint64 = $util.emptyArray;
    
                /**
                 * Repeated fixed32.
                 * @member {Array.<number>} fixed32
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.fixed32 = $util.emptyArray;
    
                /**
                 * Repeated fixed64.
                 * @member {Array.<number|Long>} fixed64
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.fixed64 = $util.emptyArray;
    
                /**
                 * Repeated sfixed32.
                 * @member {Array.<number>} sfixed32
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.sfixed32 = $util.emptyArray;
    
                /**
                 * Repeated sfixed64.
                 * @member {Array.<number|Long>} sfixed64
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.sfixed64 = $util.emptyArray;
    
                /**
                 * Repeated double.
                 * @member {Array.<number>} double
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.double = $util.emptyArray;
    
                /**
                 * Repeated bool.
                 * @member {Array.<boolean>} bool
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.bool = $util.emptyArray;
    
                /**
                 * Repeated bytes.
                 * @member {Array.<Uint8Array>} bytes
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.bytes = $util.emptyArray;
    
                /**
                 * Repeated bases.
                 * @member {Array.<sample.Sample.IBase>} bases
                 * @memberof sample.Sample.Repeated
                 * @instance
                 */
                Repeated.prototype.bases = $util.emptyArray;
    
                /**
                 * Creates a new Repeated instance using the specified properties.
                 * @function create
                 * @memberof sample.Sample.Repeated
                 * @static
                 * @param {sample.Sample.IRepeated=} [properties] Properties to set
                 * @returns {sample.Sample.Repeated} Repeated instance
                 */
                Repeated.create = function create(properties) {
                    return new Repeated(properties);
                };
    
                /**
                 * Encodes the specified Repeated message. Does not implicitly {@link sample.Sample.Repeated.verify|verify} messages.
                 * @function encode
                 * @memberof sample.Sample.Repeated
                 * @static
                 * @param {sample.Sample.IRepeated} message Repeated message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Repeated.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.str != null && message.str.length)
                        for (var i = 0; i < message.str.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.str[i]);
                    if (message.int32 != null && message.int32.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.int32.length; ++i)
                            writer.int32(message.int32[i]);
                        writer.ldelim();
                    }
                    if (message.int64 != null && message.int64.length) {
                        writer.uint32(/* id 3, wireType 2 =*/26).fork();
                        for (var i = 0; i < message.int64.length; ++i)
                            writer.int64(message.int64[i]);
                        writer.ldelim();
                    }
                    if (message.uint32 != null && message.uint32.length) {
                        writer.uint32(/* id 4, wireType 2 =*/34).fork();
                        for (var i = 0; i < message.uint32.length; ++i)
                            writer.uint32(message.uint32[i]);
                        writer.ldelim();
                    }
                    if (message.uint64 != null && message.uint64.length) {
                        writer.uint32(/* id 5, wireType 2 =*/42).fork();
                        for (var i = 0; i < message.uint64.length; ++i)
                            writer.uint64(message.uint64[i]);
                        writer.ldelim();
                    }
                    if (message.sint32 != null && message.sint32.length) {
                        writer.uint32(/* id 6, wireType 2 =*/50).fork();
                        for (var i = 0; i < message.sint32.length; ++i)
                            writer.sint32(message.sint32[i]);
                        writer.ldelim();
                    }
                    if (message.sint64 != null && message.sint64.length) {
                        writer.uint32(/* id 7, wireType 2 =*/58).fork();
                        for (var i = 0; i < message.sint64.length; ++i)
                            writer.sint64(message.sint64[i]);
                        writer.ldelim();
                    }
                    if (message.fixed32 != null && message.fixed32.length) {
                        writer.uint32(/* id 8, wireType 2 =*/66).fork();
                        for (var i = 0; i < message.fixed32.length; ++i)
                            writer.fixed32(message.fixed32[i]);
                        writer.ldelim();
                    }
                    if (message.fixed64 != null && message.fixed64.length) {
                        writer.uint32(/* id 9, wireType 2 =*/74).fork();
                        for (var i = 0; i < message.fixed64.length; ++i)
                            writer.fixed64(message.fixed64[i]);
                        writer.ldelim();
                    }
                    if (message.sfixed32 != null && message.sfixed32.length) {
                        writer.uint32(/* id 10, wireType 2 =*/82).fork();
                        for (var i = 0; i < message.sfixed32.length; ++i)
                            writer.sfixed32(message.sfixed32[i]);
                        writer.ldelim();
                    }
                    if (message.sfixed64 != null && message.sfixed64.length) {
                        writer.uint32(/* id 11, wireType 2 =*/90).fork();
                        for (var i = 0; i < message.sfixed64.length; ++i)
                            writer.sfixed64(message.sfixed64[i]);
                        writer.ldelim();
                    }
                    if (message.double != null && message.double.length) {
                        writer.uint32(/* id 12, wireType 2 =*/98).fork();
                        for (var i = 0; i < message.double.length; ++i)
                            writer.double(message.double[i]);
                        writer.ldelim();
                    }
                    if (message.bool != null && message.bool.length) {
                        writer.uint32(/* id 13, wireType 2 =*/106).fork();
                        for (var i = 0; i < message.bool.length; ++i)
                            writer.bool(message.bool[i]);
                        writer.ldelim();
                    }
                    if (message.bytes != null && message.bytes.length)
                        for (var i = 0; i < message.bytes.length; ++i)
                            writer.uint32(/* id 14, wireType 2 =*/114).bytes(message.bytes[i]);
                    if (message.bases != null && message.bases.length)
                        for (var i = 0; i < message.bases.length; ++i)
                            $root.sample.Sample.Base.encode(message.bases[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Repeated message, length delimited. Does not implicitly {@link sample.Sample.Repeated.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sample.Sample.Repeated
                 * @static
                 * @param {sample.Sample.IRepeated} message Repeated message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Repeated.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Repeated message from the specified reader or buffer.
                 * @function decode
                 * @memberof sample.Sample.Repeated
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sample.Sample.Repeated} Repeated
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Repeated.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sample.Sample.Repeated();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.str && message.str.length))
                                message.str = [];
                            message.str.push(reader.string());
                            break;
                        case 2:
                            if (!(message.int32 && message.int32.length))
                                message.int32 = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.int32.push(reader.int32());
                            } else
                                message.int32.push(reader.int32());
                            break;
                        case 3:
                            if (!(message.int64 && message.int64.length))
                                message.int64 = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.int64.push(reader.int64());
                            } else
                                message.int64.push(reader.int64());
                            break;
                        case 4:
                            if (!(message.uint32 && message.uint32.length))
                                message.uint32 = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.uint32.push(reader.uint32());
                            } else
                                message.uint32.push(reader.uint32());
                            break;
                        case 5:
                            if (!(message.uint64 && message.uint64.length))
                                message.uint64 = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.uint64.push(reader.uint64());
                            } else
                                message.uint64.push(reader.uint64());
                            break;
                        case 6:
                            if (!(message.sint32 && message.sint32.length))
                                message.sint32 = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.sint32.push(reader.sint32());
                            } else
                                message.sint32.push(reader.sint32());
                            break;
                        case 7:
                            if (!(message.sint64 && message.sint64.length))
                                message.sint64 = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.sint64.push(reader.sint64());
                            } else
                                message.sint64.push(reader.sint64());
                            break;
                        case 8:
                            if (!(message.fixed32 && message.fixed32.length))
                                message.fixed32 = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.fixed32.push(reader.fixed32());
                            } else
                                message.fixed32.push(reader.fixed32());
                            break;
                        case 9:
                            if (!(message.fixed64 && message.fixed64.length))
                                message.fixed64 = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.fixed64.push(reader.fixed64());
                            } else
                                message.fixed64.push(reader.fixed64());
                            break;
                        case 10:
                            if (!(message.sfixed32 && message.sfixed32.length))
                                message.sfixed32 = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.sfixed32.push(reader.sfixed32());
                            } else
                                message.sfixed32.push(reader.sfixed32());
                            break;
                        case 11:
                            if (!(message.sfixed64 && message.sfixed64.length))
                                message.sfixed64 = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.sfixed64.push(reader.sfixed64());
                            } else
                                message.sfixed64.push(reader.sfixed64());
                            break;
                        case 12:
                            if (!(message.double && message.double.length))
                                message.double = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.double.push(reader.double());
                            } else
                                message.double.push(reader.double());
                            break;
                        case 13:
                            if (!(message.bool && message.bool.length))
                                message.bool = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.bool.push(reader.bool());
                            } else
                                message.bool.push(reader.bool());
                            break;
                        case 14:
                            if (!(message.bytes && message.bytes.length))
                                message.bytes = [];
                            message.bytes.push(reader.bytes());
                            break;
                        case 15:
                            if (!(message.bases && message.bases.length))
                                message.bases = [];
                            message.bases.push($root.sample.Sample.Base.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Repeated message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sample.Sample.Repeated
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sample.Sample.Repeated} Repeated
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Repeated.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Repeated message.
                 * @function verify
                 * @memberof sample.Sample.Repeated
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Repeated.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.str != null && message.hasOwnProperty("str")) {
                        if (!Array.isArray(message.str))
                            return "str: array expected";
                        for (var i = 0; i < message.str.length; ++i)
                            if (!$util.isString(message.str[i]))
                                return "str: string[] expected";
                    }
                    if (message.int32 != null && message.hasOwnProperty("int32")) {
                        if (!Array.isArray(message.int32))
                            return "int32: array expected";
                        for (var i = 0; i < message.int32.length; ++i)
                            if (!$util.isInteger(message.int32[i]))
                                return "int32: integer[] expected";
                    }
                    if (message.int64 != null && message.hasOwnProperty("int64")) {
                        if (!Array.isArray(message.int64))
                            return "int64: array expected";
                        for (var i = 0; i < message.int64.length; ++i)
                            if (!$util.isInteger(message.int64[i]) && !(message.int64[i] && $util.isInteger(message.int64[i].low) && $util.isInteger(message.int64[i].high)))
                                return "int64: integer|Long[] expected";
                    }
                    if (message.uint32 != null && message.hasOwnProperty("uint32")) {
                        if (!Array.isArray(message.uint32))
                            return "uint32: array expected";
                        for (var i = 0; i < message.uint32.length; ++i)
                            if (!$util.isInteger(message.uint32[i]))
                                return "uint32: integer[] expected";
                    }
                    if (message.uint64 != null && message.hasOwnProperty("uint64")) {
                        if (!Array.isArray(message.uint64))
                            return "uint64: array expected";
                        for (var i = 0; i < message.uint64.length; ++i)
                            if (!$util.isInteger(message.uint64[i]) && !(message.uint64[i] && $util.isInteger(message.uint64[i].low) && $util.isInteger(message.uint64[i].high)))
                                return "uint64: integer|Long[] expected";
                    }
                    if (message.sint32 != null && message.hasOwnProperty("sint32")) {
                        if (!Array.isArray(message.sint32))
                            return "sint32: array expected";
                        for (var i = 0; i < message.sint32.length; ++i)
                            if (!$util.isInteger(message.sint32[i]))
                                return "sint32: integer[] expected";
                    }
                    if (message.sint64 != null && message.hasOwnProperty("sint64")) {
                        if (!Array.isArray(message.sint64))
                            return "sint64: array expected";
                        for (var i = 0; i < message.sint64.length; ++i)
                            if (!$util.isInteger(message.sint64[i]) && !(message.sint64[i] && $util.isInteger(message.sint64[i].low) && $util.isInteger(message.sint64[i].high)))
                                return "sint64: integer|Long[] expected";
                    }
                    if (message.fixed32 != null && message.hasOwnProperty("fixed32")) {
                        if (!Array.isArray(message.fixed32))
                            return "fixed32: array expected";
                        for (var i = 0; i < message.fixed32.length; ++i)
                            if (!$util.isInteger(message.fixed32[i]))
                                return "fixed32: integer[] expected";
                    }
                    if (message.fixed64 != null && message.hasOwnProperty("fixed64")) {
                        if (!Array.isArray(message.fixed64))
                            return "fixed64: array expected";
                        for (var i = 0; i < message.fixed64.length; ++i)
                            if (!$util.isInteger(message.fixed64[i]) && !(message.fixed64[i] && $util.isInteger(message.fixed64[i].low) && $util.isInteger(message.fixed64[i].high)))
                                return "fixed64: integer|Long[] expected";
                    }
                    if (message.sfixed32 != null && message.hasOwnProperty("sfixed32")) {
                        if (!Array.isArray(message.sfixed32))
                            return "sfixed32: array expected";
                        for (var i = 0; i < message.sfixed32.length; ++i)
                            if (!$util.isInteger(message.sfixed32[i]))
                                return "sfixed32: integer[] expected";
                    }
                    if (message.sfixed64 != null && message.hasOwnProperty("sfixed64")) {
                        if (!Array.isArray(message.sfixed64))
                            return "sfixed64: array expected";
                        for (var i = 0; i < message.sfixed64.length; ++i)
                            if (!$util.isInteger(message.sfixed64[i]) && !(message.sfixed64[i] && $util.isInteger(message.sfixed64[i].low) && $util.isInteger(message.sfixed64[i].high)))
                                return "sfixed64: integer|Long[] expected";
                    }
                    if (message.double != null && message.hasOwnProperty("double")) {
                        if (!Array.isArray(message.double))
                            return "double: array expected";
                        for (var i = 0; i < message.double.length; ++i)
                            if (typeof message.double[i] !== "number")
                                return "double: number[] expected";
                    }
                    if (message.bool != null && message.hasOwnProperty("bool")) {
                        if (!Array.isArray(message.bool))
                            return "bool: array expected";
                        for (var i = 0; i < message.bool.length; ++i)
                            if (typeof message.bool[i] !== "boolean")
                                return "bool: boolean[] expected";
                    }
                    if (message.bytes != null && message.hasOwnProperty("bytes")) {
                        if (!Array.isArray(message.bytes))
                            return "bytes: array expected";
                        for (var i = 0; i < message.bytes.length; ++i)
                            if (!(message.bytes[i] && typeof message.bytes[i].length === "number" || $util.isString(message.bytes[i])))
                                return "bytes: buffer[] expected";
                    }
                    if (message.bases != null && message.hasOwnProperty("bases")) {
                        if (!Array.isArray(message.bases))
                            return "bases: array expected";
                        for (var i = 0; i < message.bases.length; ++i) {
                            var error = $root.sample.Sample.Base.verify(message.bases[i]);
                            if (error)
                                return "bases." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a Repeated message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sample.Sample.Repeated
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sample.Sample.Repeated} Repeated
                 */
                Repeated.fromObject = function fromObject(object) {
                    if (object instanceof $root.sample.Sample.Repeated)
                        return object;
                    var message = new $root.sample.Sample.Repeated();
                    if (object.str) {
                        if (!Array.isArray(object.str))
                            throw TypeError(".sample.Sample.Repeated.str: array expected");
                        message.str = [];
                        for (var i = 0; i < object.str.length; ++i)
                            message.str[i] = String(object.str[i]);
                    }
                    if (object.int32) {
                        if (!Array.isArray(object.int32))
                            throw TypeError(".sample.Sample.Repeated.int32: array expected");
                        message.int32 = [];
                        for (var i = 0; i < object.int32.length; ++i)
                            message.int32[i] = object.int32[i] | 0;
                    }
                    if (object.int64) {
                        if (!Array.isArray(object.int64))
                            throw TypeError(".sample.Sample.Repeated.int64: array expected");
                        message.int64 = [];
                        for (var i = 0; i < object.int64.length; ++i)
                            if ($util.Long)
                                (message.int64[i] = $util.Long.fromValue(object.int64[i])).unsigned = false;
                            else if (typeof object.int64[i] === "string")
                                message.int64[i] = parseInt(object.int64[i], 10);
                            else if (typeof object.int64[i] === "number")
                                message.int64[i] = object.int64[i];
                            else if (typeof object.int64[i] === "object")
                                message.int64[i] = new $util.LongBits(object.int64[i].low >>> 0, object.int64[i].high >>> 0).toNumber();
                    }
                    if (object.uint32) {
                        if (!Array.isArray(object.uint32))
                            throw TypeError(".sample.Sample.Repeated.uint32: array expected");
                        message.uint32 = [];
                        for (var i = 0; i < object.uint32.length; ++i)
                            message.uint32[i] = object.uint32[i] >>> 0;
                    }
                    if (object.uint64) {
                        if (!Array.isArray(object.uint64))
                            throw TypeError(".sample.Sample.Repeated.uint64: array expected");
                        message.uint64 = [];
                        for (var i = 0; i < object.uint64.length; ++i)
                            if ($util.Long)
                                (message.uint64[i] = $util.Long.fromValue(object.uint64[i])).unsigned = true;
                            else if (typeof object.uint64[i] === "string")
                                message.uint64[i] = parseInt(object.uint64[i], 10);
                            else if (typeof object.uint64[i] === "number")
                                message.uint64[i] = object.uint64[i];
                            else if (typeof object.uint64[i] === "object")
                                message.uint64[i] = new $util.LongBits(object.uint64[i].low >>> 0, object.uint64[i].high >>> 0).toNumber(true);
                    }
                    if (object.sint32) {
                        if (!Array.isArray(object.sint32))
                            throw TypeError(".sample.Sample.Repeated.sint32: array expected");
                        message.sint32 = [];
                        for (var i = 0; i < object.sint32.length; ++i)
                            message.sint32[i] = object.sint32[i] | 0;
                    }
                    if (object.sint64) {
                        if (!Array.isArray(object.sint64))
                            throw TypeError(".sample.Sample.Repeated.sint64: array expected");
                        message.sint64 = [];
                        for (var i = 0; i < object.sint64.length; ++i)
                            if ($util.Long)
                                (message.sint64[i] = $util.Long.fromValue(object.sint64[i])).unsigned = false;
                            else if (typeof object.sint64[i] === "string")
                                message.sint64[i] = parseInt(object.sint64[i], 10);
                            else if (typeof object.sint64[i] === "number")
                                message.sint64[i] = object.sint64[i];
                            else if (typeof object.sint64[i] === "object")
                                message.sint64[i] = new $util.LongBits(object.sint64[i].low >>> 0, object.sint64[i].high >>> 0).toNumber();
                    }
                    if (object.fixed32) {
                        if (!Array.isArray(object.fixed32))
                            throw TypeError(".sample.Sample.Repeated.fixed32: array expected");
                        message.fixed32 = [];
                        for (var i = 0; i < object.fixed32.length; ++i)
                            message.fixed32[i] = object.fixed32[i] >>> 0;
                    }
                    if (object.fixed64) {
                        if (!Array.isArray(object.fixed64))
                            throw TypeError(".sample.Sample.Repeated.fixed64: array expected");
                        message.fixed64 = [];
                        for (var i = 0; i < object.fixed64.length; ++i)
                            if ($util.Long)
                                (message.fixed64[i] = $util.Long.fromValue(object.fixed64[i])).unsigned = false;
                            else if (typeof object.fixed64[i] === "string")
                                message.fixed64[i] = parseInt(object.fixed64[i], 10);
                            else if (typeof object.fixed64[i] === "number")
                                message.fixed64[i] = object.fixed64[i];
                            else if (typeof object.fixed64[i] === "object")
                                message.fixed64[i] = new $util.LongBits(object.fixed64[i].low >>> 0, object.fixed64[i].high >>> 0).toNumber();
                    }
                    if (object.sfixed32) {
                        if (!Array.isArray(object.sfixed32))
                            throw TypeError(".sample.Sample.Repeated.sfixed32: array expected");
                        message.sfixed32 = [];
                        for (var i = 0; i < object.sfixed32.length; ++i)
                            message.sfixed32[i] = object.sfixed32[i] | 0;
                    }
                    if (object.sfixed64) {
                        if (!Array.isArray(object.sfixed64))
                            throw TypeError(".sample.Sample.Repeated.sfixed64: array expected");
                        message.sfixed64 = [];
                        for (var i = 0; i < object.sfixed64.length; ++i)
                            if ($util.Long)
                                (message.sfixed64[i] = $util.Long.fromValue(object.sfixed64[i])).unsigned = false;
                            else if (typeof object.sfixed64[i] === "string")
                                message.sfixed64[i] = parseInt(object.sfixed64[i], 10);
                            else if (typeof object.sfixed64[i] === "number")
                                message.sfixed64[i] = object.sfixed64[i];
                            else if (typeof object.sfixed64[i] === "object")
                                message.sfixed64[i] = new $util.LongBits(object.sfixed64[i].low >>> 0, object.sfixed64[i].high >>> 0).toNumber();
                    }
                    if (object.double) {
                        if (!Array.isArray(object.double))
                            throw TypeError(".sample.Sample.Repeated.double: array expected");
                        message.double = [];
                        for (var i = 0; i < object.double.length; ++i)
                            message.double[i] = Number(object.double[i]);
                    }
                    if (object.bool) {
                        if (!Array.isArray(object.bool))
                            throw TypeError(".sample.Sample.Repeated.bool: array expected");
                        message.bool = [];
                        for (var i = 0; i < object.bool.length; ++i)
                            message.bool[i] = Boolean(object.bool[i]);
                    }
                    if (object.bytes) {
                        if (!Array.isArray(object.bytes))
                            throw TypeError(".sample.Sample.Repeated.bytes: array expected");
                        message.bytes = [];
                        for (var i = 0; i < object.bytes.length; ++i)
                            if (typeof object.bytes[i] === "string")
                                $util.base64.decode(object.bytes[i], message.bytes[i] = $util.newBuffer($util.base64.length(object.bytes[i])), 0);
                            else if (object.bytes[i].length)
                                message.bytes[i] = object.bytes[i];
                    }
                    if (object.bases) {
                        if (!Array.isArray(object.bases))
                            throw TypeError(".sample.Sample.Repeated.bases: array expected");
                        message.bases = [];
                        for (var i = 0; i < object.bases.length; ++i) {
                            if (typeof object.bases[i] !== "object")
                                throw TypeError(".sample.Sample.Repeated.bases: object expected");
                            message.bases[i] = $root.sample.Sample.Base.fromObject(object.bases[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Repeated message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sample.Sample.Repeated
                 * @static
                 * @param {sample.Sample.Repeated} message Repeated
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Repeated.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.str = [];
                        object.int32 = [];
                        object.int64 = [];
                        object.uint32 = [];
                        object.uint64 = [];
                        object.sint32 = [];
                        object.sint64 = [];
                        object.fixed32 = [];
                        object.fixed64 = [];
                        object.sfixed32 = [];
                        object.sfixed64 = [];
                        object.double = [];
                        object.bool = [];
                        object.bytes = [];
                        object.bases = [];
                    }
                    if (message.str && message.str.length) {
                        object.str = [];
                        for (var j = 0; j < message.str.length; ++j)
                            object.str[j] = message.str[j];
                    }
                    if (message.int32 && message.int32.length) {
                        object.int32 = [];
                        for (var j = 0; j < message.int32.length; ++j)
                            object.int32[j] = message.int32[j];
                    }
                    if (message.int64 && message.int64.length) {
                        object.int64 = [];
                        for (var j = 0; j < message.int64.length; ++j)
                            if (typeof message.int64[j] === "number")
                                object.int64[j] = options.longs === String ? String(message.int64[j]) : message.int64[j];
                            else
                                object.int64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.int64[j]) : options.longs === Number ? new $util.LongBits(message.int64[j].low >>> 0, message.int64[j].high >>> 0).toNumber() : message.int64[j];
                    }
                    if (message.uint32 && message.uint32.length) {
                        object.uint32 = [];
                        for (var j = 0; j < message.uint32.length; ++j)
                            object.uint32[j] = message.uint32[j];
                    }
                    if (message.uint64 && message.uint64.length) {
                        object.uint64 = [];
                        for (var j = 0; j < message.uint64.length; ++j)
                            if (typeof message.uint64[j] === "number")
                                object.uint64[j] = options.longs === String ? String(message.uint64[j]) : message.uint64[j];
                            else
                                object.uint64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.uint64[j]) : options.longs === Number ? new $util.LongBits(message.uint64[j].low >>> 0, message.uint64[j].high >>> 0).toNumber(true) : message.uint64[j];
                    }
                    if (message.sint32 && message.sint32.length) {
                        object.sint32 = [];
                        for (var j = 0; j < message.sint32.length; ++j)
                            object.sint32[j] = message.sint32[j];
                    }
                    if (message.sint64 && message.sint64.length) {
                        object.sint64 = [];
                        for (var j = 0; j < message.sint64.length; ++j)
                            if (typeof message.sint64[j] === "number")
                                object.sint64[j] = options.longs === String ? String(message.sint64[j]) : message.sint64[j];
                            else
                                object.sint64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.sint64[j]) : options.longs === Number ? new $util.LongBits(message.sint64[j].low >>> 0, message.sint64[j].high >>> 0).toNumber() : message.sint64[j];
                    }
                    if (message.fixed32 && message.fixed32.length) {
                        object.fixed32 = [];
                        for (var j = 0; j < message.fixed32.length; ++j)
                            object.fixed32[j] = message.fixed32[j];
                    }
                    if (message.fixed64 && message.fixed64.length) {
                        object.fixed64 = [];
                        for (var j = 0; j < message.fixed64.length; ++j)
                            if (typeof message.fixed64[j] === "number")
                                object.fixed64[j] = options.longs === String ? String(message.fixed64[j]) : message.fixed64[j];
                            else
                                object.fixed64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.fixed64[j]) : options.longs === Number ? new $util.LongBits(message.fixed64[j].low >>> 0, message.fixed64[j].high >>> 0).toNumber() : message.fixed64[j];
                    }
                    if (message.sfixed32 && message.sfixed32.length) {
                        object.sfixed32 = [];
                        for (var j = 0; j < message.sfixed32.length; ++j)
                            object.sfixed32[j] = message.sfixed32[j];
                    }
                    if (message.sfixed64 && message.sfixed64.length) {
                        object.sfixed64 = [];
                        for (var j = 0; j < message.sfixed64.length; ++j)
                            if (typeof message.sfixed64[j] === "number")
                                object.sfixed64[j] = options.longs === String ? String(message.sfixed64[j]) : message.sfixed64[j];
                            else
                                object.sfixed64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.sfixed64[j]) : options.longs === Number ? new $util.LongBits(message.sfixed64[j].low >>> 0, message.sfixed64[j].high >>> 0).toNumber() : message.sfixed64[j];
                    }
                    if (message.double && message.double.length) {
                        object.double = [];
                        for (var j = 0; j < message.double.length; ++j)
                            object.double[j] = options.json && !isFinite(message.double[j]) ? String(message.double[j]) : message.double[j];
                    }
                    if (message.bool && message.bool.length) {
                        object.bool = [];
                        for (var j = 0; j < message.bool.length; ++j)
                            object.bool[j] = message.bool[j];
                    }
                    if (message.bytes && message.bytes.length) {
                        object.bytes = [];
                        for (var j = 0; j < message.bytes.length; ++j)
                            object.bytes[j] = options.bytes === String ? $util.base64.encode(message.bytes[j], 0, message.bytes[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.bytes[j]) : message.bytes[j];
                    }
                    if (message.bases && message.bases.length) {
                        object.bases = [];
                        for (var j = 0; j < message.bases.length; ++j)
                            object.bases[j] = $root.sample.Sample.Base.toObject(message.bases[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this Repeated to JSON.
                 * @function toJSON
                 * @memberof sample.Sample.Repeated
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Repeated.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Repeated;
            })();
    
            return Sample;
        })();
    
        sample.EchoBase = (function() {
    
            /**
             * Constructs a new EchoBase service.
             * @memberof sample
             * @classdesc Represents an EchoBase
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function EchoBase(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }
    
            (EchoBase.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = EchoBase;
    
            /**
             * Creates new EchoBase service using the specified rpc implementation.
             * @function create
             * @memberof sample.EchoBase
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {EchoBase} RPC service. Useful where requests and/or responses are streamed.
             */
            EchoBase.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };
    
            /**
             * Callback as used by {@link sample.EchoBase#echoBase}.
             * @memberof sample.EchoBase
             * @typedef EchoBaseCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {sample.Sample.Base} [response] Base
             */
    
            /**
             * Calls EchoBase.
             * @function echoBase
             * @memberof sample.EchoBase
             * @instance
             * @param {sample.Sample.IBase} request Base message or plain object
             * @param {sample.EchoBase.EchoBaseCallback} callback Node-style callback called with the error, if any, and Base
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(EchoBase.prototype.echoBase = function echoBase(request, callback) {
                return this.rpcCall(echoBase, $root.sample.Sample.Base, $root.sample.Sample.Base, request, callback);
            }, "name", { value: "EchoBase" });
    
            /**
             * Calls EchoBase.
             * @function echoBase
             * @memberof sample.EchoBase
             * @instance
             * @param {sample.Sample.IBase} request Base message or plain object
             * @returns {Promise<sample.Sample.Base>} Promise
             * @variation 2
             */
    
            return EchoBase;
        })();
    
        sample.EchoRepeated = (function() {
    
            /**
             * Constructs a new EchoRepeated service.
             * @memberof sample
             * @classdesc Represents an EchoRepeated
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function EchoRepeated(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }
    
            (EchoRepeated.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = EchoRepeated;
    
            /**
             * Creates new EchoRepeated service using the specified rpc implementation.
             * @function create
             * @memberof sample.EchoRepeated
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {EchoRepeated} RPC service. Useful where requests and/or responses are streamed.
             */
            EchoRepeated.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };
    
            /**
             * Callback as used by {@link sample.EchoRepeated#echoRepeated}.
             * @memberof sample.EchoRepeated
             * @typedef EchoRepeatedCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {sample.Sample.Repeated} [response] Repeated
             */
    
            /**
             * Calls EchoRepeated.
             * @function echoRepeated
             * @memberof sample.EchoRepeated
             * @instance
             * @param {sample.Sample.IRepeated} request Repeated message or plain object
             * @param {sample.EchoRepeated.EchoRepeatedCallback} callback Node-style callback called with the error, if any, and Repeated
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(EchoRepeated.prototype.echoRepeated = function echoRepeated(request, callback) {
                return this.rpcCall(echoRepeated, $root.sample.Sample.Repeated, $root.sample.Sample.Repeated, request, callback);
            }, "name", { value: "EchoRepeated" });
    
            /**
             * Calls EchoRepeated.
             * @function echoRepeated
             * @memberof sample.EchoRepeated
             * @instance
             * @param {sample.Sample.IRepeated} request Repeated message or plain object
             * @returns {Promise<sample.Sample.Repeated>} Promise
             * @variation 2
             */
    
            return EchoRepeated;
        })();
    
        return sample;
    })();

    return $root;
});
