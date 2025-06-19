const noteDao = require('../dao/noteDAO');

exports.createNote = (data) => noteDao.createNote(data);
exports.getAllNotes = (userId, search, sortBy, order) => noteDao.getAllNotes(userId,search, sortBy, order);
exports.getNoteById = (id) => noteDao.getNoteById(id);
exports.updateNote = (id, data) => noteDao.updateNote(id, data);
exports.deleteNote = (id) => noteDao.deleteNote(id);
