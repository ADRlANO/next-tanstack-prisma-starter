
import { useMutation } from "@tanstack/react-query";

import { createNote, daleteNote, updateNote } from "./functions";

export function useAddNote() {
  return useMutation({
    mutationFn: createNote
  })
}

export function useUpdateNote() {
  return useMutation({
    mutationFn: updateNote
  })
}

export function useDeleteNote() {
  return useMutation({
    mutationFn: daleteNote
  })
}