import { sample } from "./outputs/sample.pb";
import { createEchoBase, createEchoRepeated } from "./outputs/sample.twirp";
const { Sample } = sample;
const base = createEchoBase("http://localhost:8080");
const repeated = createEchoRepeated("http://localhost:8080");

base
  .echoBase(
    Sample.Base.fromObject({
      str: "aaaaa",
      int32: 1,
      int64: 2,
      uint32: 4,
      uint64: 5,
      sint32: 6,
      sint64: 7,
      fixed32: 8,
      fixed64: 9,
      sfixed32: 10,
      sfixed64: 11,
      double: 1.124,
      bool: true,
      bytes: Buffer.from("it's byte data.")
    })
  )
  .then(resp => {
    console.log("JSON:");
    console.log(resp.toJSON());

    console.log("int64: ", (resp.int64 as Long).low);
    console.log("bytes: ", Buffer.from(resp.bytes).toString());
  })
  .catch(err => {
    console.log(err);
  });

repeated
  .echoRepeated({
    int32: [1, 2],
    int64: [10, 20, 30],
    bases: [{ int32: 1, int64: 1 }, { int32: 2 }, { int32: 3 }]
  })
  .then(resp => {
    const converted = Sample.Repeated.toObject(resp, { longs: Number });
    console.log(converted);
  });
