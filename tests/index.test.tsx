import { expect, test } from "bun:test";
import randomstring from "randomstring";
import { decodeURIComponent as decode } from "../src/index";

const charset = "abcdef_ghilmn%opqrstu-vzxywjk%ABCDEF_HGILMN%OPQRSTU-VZXYWJK%0123456789.-_~%";

test("decodeURIComponent", () => {
  const uri = [
    "test",
    "a+b+c+d",
    "=a",
    "%25",
    "%%25%%",
    "st%C3%A5le",
    "st%C3%A5le%",
    "%st%C3%A5le%",
    "%%7Bst%C3%A5le%7D%",
    "%ab%C3%A5le%",
    "%C3%A5%able%",
    "%7B%ab%7C%de%7D",
    "%7B%ab%%7C%de%%7D",
    "%7 B%ab%%7C%de%%7 D",
    "%61+%4d%4D",
    "\uFEFFtest",
    "\uFEFF",
    "%EF%BB%BFtest",
    "%EF%BB%BF",
    "†",
    "%C2%B5",
    "%C2%B5%",
    "%%C2%B5%",
    "%ab",
    "%ab%ab%ab",
    "%",
    "%2",
    "%E0%A4%A",
    '/test/hel%"Flo',
    "/test/hel%2Flo",
  ];

  for (let i = 0; i < 20000; i++) {
    uri.push(randomstring.generate({ charset }));
  }

  for (let i = 0; i < uri.length; i++) {
    try {
      expect(decodeURIComponent(uri[i])).toBe(decode(uri[i]));
    } catch (e) {
      expect(decode(uri[i])).toBe(null);
    }
  }
});
