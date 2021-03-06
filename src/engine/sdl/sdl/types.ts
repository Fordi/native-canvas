import * as ref from 'ref';
import * as ArrayType from 'ref-array';

// const ref = require('ref');
export const voit = ref.types.void;
export const int32 = ref.types.int32;
export const uint32 =  ref.types.uint32;
export const char = ref.types.char;
export const Sint8 = char;
export const uchar = ref.types.uchar;
export const Uint8 = uchar;
export const short = ref.types.short;
export const Sint16 = short;
export const ushort = ref.types.ushort;
export const ulong = ref.types.ulong;
export const size_t = ulong;
export const string = ref.types.CString;
export const wchar_t = int32;
export const wchar_t_ptr = ref.refType(wchar_t);
export const long = ref.types.long;
export const double = ref.types.double;
export const string_ptr = ref.refType(string);
export const Uint16 = ushort;
export const Sint32 = int32;
export const Uint32 = uint32;
export const longlong = ref.types.longlong;
export const Sint64 = longlong;
export const ulonglong = ref.types.ulonglong;
export const Uint64 = ulonglong;
export const c_SDL_stdinc_h_T_SDL_dummy_uint8_arr = ArrayType(int32, 1);
export const SDL_dummy_uint8 = c_SDL_stdinc_h_T_SDL_dummy_uint8_arr;
export const c_SDL_stdinc_h_T_SDL_dummy_sint8_arr = ArrayType(int32, 1);
export const SDL_dummy_sint8 = c_SDL_stdinc_h_T_SDL_dummy_sint8_arr;
export const c_SDL_stdinc_h_T_SDL_dummy_uint16_arr = ArrayType(int32, 1);
export const SDL_dummy_uint16 = c_SDL_stdinc_h_T_SDL_dummy_uint16_arr;
export const c_SDL_stdinc_h_T_SDL_dummy_sint16_arr = ArrayType(int32, 1);
export const SDL_dummy_sint16 = c_SDL_stdinc_h_T_SDL_dummy_sint16_arr;
export const c_SDL_stdinc_h_T_SDL_dummy_uint32_arr = ArrayType(int32, 1);
export const SDL_dummy_uint32 = c_SDL_stdinc_h_T_SDL_dummy_uint32_arr;
export const c_SDL_stdinc_h_T_SDL_dummy_sint32_arr = ArrayType(int32, 1);
export const SDL_dummy_sint32 = c_SDL_stdinc_h_T_SDL_dummy_sint32_arr;
export const c_SDL_stdinc_h_T_SDL_dummy_uint64_arr = ArrayType(int32, 1);
export const SDL_dummy_uint64 = c_SDL_stdinc_h_T_SDL_dummy_uint64_arr;
export const c_SDL_stdinc_h_T_SDL_dummy_sint64_arr = ArrayType(int32, 1);
export const SDL_dummy_sint64 = c_SDL_stdinc_h_T_SDL_dummy_sint64_arr;
export const c_SDL_stdinc_h_T_SDL_dummy_enum_arr = ArrayType(int32, 1);
export const SDL_dummy_enum = c_SDL_stdinc_h_T_SDL_dummy_enum_arr;
export const voit_ptr = ref.refType(voit);
export const float = ref.types.float;
export const float_ptr = ref.refType(float);
export const int32_ptr = ref.refType(int32);
export const Uint16_ptr = ref.refType(Uint16);
export const Uint32_ptr = ref.refType(Uint32);
export const Uint8_ptr = ref.refType(Uint8);
export const SDL_FALSE = 0;
export const SDL_TRUE = 0;
export const voit_ptr_ptr = ref.refType(voit_ptr);
export const uint32_ptr = ref.refType(uint32);
export const bool = ref.types.bool;
