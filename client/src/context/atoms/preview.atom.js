import { atom } from "recoil";

export const previewAtom = atom({
    key: 'preview',
    default: { preview: false, lecture: {} }
})