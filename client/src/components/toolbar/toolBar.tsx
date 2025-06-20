import { Box, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const Toolbar = () => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <TextField label="Search Notes" variant="outlined" size="small" sx={{ width: '60%' }} />
    <FormControl variant="outlined" size="small" sx={{ width: '35%' }}>
      <InputLabel>Sort By</InputLabel>
      <Select label="Sort By">
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="createdAt">Date</MenuItem>
      </Select>
    </FormControl>
  </Box>
);

export default Toolbar;
