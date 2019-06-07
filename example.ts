import "./outputs/sample.pb.d";
import { sample } from "./outputs/sample.pb.d";
import { DeepNonNullable } from "utility-types";

interface Example {
  name: string | null | undefined;
  arr?: Example[] | null;
}

type Unwrap<T> = T extends { [K: string]: infer U }
  ? U
  : T extends Array<infer V>
  ? V
  : T;

type isPrimitive<T> = T extends Unwrap<T> ? T : never;

type Diff<T, U> = T extends U ? never : T;

type SafeExample = DeepNonNullable<Example>;
type SafeRepeated = DeepNonNullable<sample.Sample.IRepeated>;

type node = SafeRepeated["str"];
