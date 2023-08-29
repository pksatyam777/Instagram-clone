"use client"
import { atom } from 'recoil'
export const ModalState = atom({
    key: 'ModalState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });