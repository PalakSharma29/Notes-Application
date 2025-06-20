import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { Edit, Delete, ContentCopy, PushPin, Archive } from '@mui/icons-material';

type Note = {
  id: number;
  title: string;
  content: string;
  color : string;
};

const NoteCard = ({ note }: { note: Note }) => (
  <Card sx={{backgroundColor:note.color, minHeight:150}}>
    <CardContent>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">{note.title}</Typography>
        <IconButton><PushPin /></IconButton>
      </Box>
      <Typography variant="body2" mt={1}>{note.content}</Typography>
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <IconButton><ContentCopy /></IconButton>
        <IconButton><Edit /></IconButton>
        <IconButton><Archive /></IconButton>
        <IconButton><Delete /></IconButton>
      </Box>
    </CardContent>
  </Card>
);

export default NoteCard;
