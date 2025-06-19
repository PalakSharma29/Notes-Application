const Note = require('../models/note');

exports.createNote = (noteData) => Note.create(noteData);
// exports.getAllNotes = (userId) => Note.find({ user: userId }).sort({ createdAt: -1 });
exports.getAllNotes = async (userId, search, sortBy = 'createdAt', order = 'desc') => {
  const query = { user: userId };

  // Search filter
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { content: { $regex: search, $options: 'i' } }
    ];
  }

  // Sorting
  const sortCondition = {};
  sortCondition[sortBy] = order === 'desc' ? -1 : 1;

  return await Note.find(query).sort(sortCondition);
};
exports.getNoteById = (id) => Note.findById(id);
exports.updateNote = (id, data) => Note.findByIdAndUpdate(id, data, { new: true });
exports.deleteNote = (id) => Note.findByIdAndDelete(id);
