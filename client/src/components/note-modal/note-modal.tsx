import { Modal, Box, TextField, Button, IconButton, Typography } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%', left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400, bgcolor: 'background.paper',
  p: 4, borderRadius: 2,
};

type NoteModalProps = {
  open: boolean;
  onClose: () => void;
  onSave: (note: { title: string; content: string }) => void;
}

const NoteModal = ({ open, onClose, onSave }: NoteModalProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const[copied, setCopied] = useState(false);

  const handleCopy = () => {
   navigator.clipboard.writeText(content);
   setCopied(true);
   setTimeout(() => setCopied(false),2000);
  };

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      onSave({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" mb={2}>Create Note</Typography>
        <TextField
          fullWidth label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Box display="flex">
          <TextField
            fullWidth multiline rows={4}
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <IconButton onClick={handleCopy}><ContentCopy />
          {copied && (
            <Typography variant="caption" color="green">Copied!</Typography>
          )}
          </IconButton>
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSave}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default NoteModal;
