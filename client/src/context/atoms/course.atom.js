import { dummyCourses } from "../../assets/assets";
import { atom } from "recoil";

export const courseAtom = atom({
    key: 'courses',
    default: dummyCourses
})