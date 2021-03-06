// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Encodes a string in base64 format.
 * @param value - The string to encode
 */
export function encodeString(value: string): string {
  return btoa(value);
}

/**
 * Encodes a byte array in base64 format.
 * @param value - The Uint8Aray to encode
 */
export function encodeByteArray(value: Uint8Array): string {
  let str = "";
  for (let i = 0; i < value.length; i++) {
    str += String.fromCharCode(value[i]);
  }
  return btoa(str);
}

/**
 * Decodes a base64 string into a byte array.
 * @param value - The base64 string to decode
 */
export function decodeString(value: string): Uint8Array {
  const byteString = atob(value);
  const arr = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    arr[i] = byteString.charCodeAt(i);
  }
  return arr;
}
