import React, { useState } from 'react';
import { Container, Grid, Fab, Toolbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import NoteCard from '../../components/note-card/note-card';
import NoteModal from '../../components/note-modal/note-modal';
// import Toolbar from '../../components/toolbar/toolbar'; // Assuming your custom toolbar

type Note = {
  id: number;
  title: string;
  content: string;
  color: string;
};

// 🎨 Available colors for notes
const noteColors = [
  '#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9',
  '#C5CAE9', '#B2DFDB', '#FFECB3', '#FFE0B2',
];

const getRandomColor = () =>
  noteColors[Math.floor(Math.random() * noteColors.length)];

const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddNote = (note: { title: string; content: string }) => {
    const newNote: Note = {
      id: Date.now(),
      title: note.title,
      content: note.content,
      color: getRandomColor(),
    };
    setNotes([newNote, ...notes]);
    setModalOpen(false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Toolbar/>

      <Grid container spacing={2} mt={2}>
        {notes.map((note) => (
          <Grid spacing={2} padding={2} key={note.id}>
            <NoteCard note={note} />
          </Grid>
        ))}
      </Grid>

      <NoteModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddNote}
      />

      <Fab
        color="primary"
        onClick={() => setModalOpen(true)}
        sx={{ position: 'fixed', bottom: 20, right: 20 }}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default NotesPage;
