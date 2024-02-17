import { atom } from "jotai";

import { Project } from "./types/types";

export const draggedItemAtom = atom<React.ReactNode | null>(null);
export const currentProjectAtom = atom<Project | null>(null);
export const modalListAtom = atom<React.ReactNode[]>([]);
