import { atom } from "jotai";

import { Container, Project } from "./types/types";

export const draggedItemAtom = atom<React.ReactNode | null>(null);
export const currentProjectAtom = atom<Project | null>(null);
export const modalListAtom = atom<React.ReactNode[]>([]);
export const focusedContainerAtom = atom<Container | null>(null);
export const overlayedContainerIdAtom = atom<number | null>(null);
