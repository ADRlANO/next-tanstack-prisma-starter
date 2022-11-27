interface RequestData {
  title: string
  content: string
  id: string
}

export async function daleteNote(noteToDeleteId: string) {
  fetch(`api/note/${noteToDeleteId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE'
  })
}

export async function createNote(newNote: RequestData) {
  fetch('api/create', {
    body: JSON.stringify(newNote),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
}

export async function updateNote(note: RequestData) {
  fetch(`api/note/${note.id}`, {
    body: JSON.stringify(note),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT'
  })
}