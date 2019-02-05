import { sample } from "./outputs/sample.pb";
const { Sample } = sample;
console.log(sample);

console.log(
  Sample.Base.fromObject({
    str: "aaaaa",
    int32: 1
  })
);

console.log(
  Sample.Repeated.fromObject({
    bases: [
      {
        str: "a"
      },
      {
        str: "b"
      }
    ]
  }).toJSON()
);
