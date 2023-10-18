import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import ArchiveNotesToggler from './ArchiveNotesToggler';
import FormNote from './FormNote.jsx';
import NoteCards from './NoteCards.jsx';

export default function MainContent({
  notes,
  isShowArcNote,
  isShowFormNote,
  handleShowArcNote,
  handleDeleteNote,
  handleArchive,
  handleUnArchive,
  handleShowFormNote,
  handleAddNote,
  handleCloseFormNote,
}) {
  return (
    <main>
      <div className="main-content__container">
        <div className="note-panel">
          <ArchiveNotesToggler
            isShowArcNote={isShowArcNote}
            handleShowArcNote={handleShowArcNote}
          />
          <button
            className="note-panel__add-note"
            type="button"
            onClick={handleShowFormNote}
          >
            <FaPlus /> <span>Add Note</span>
          </button>
        </div>

        {notes.length === 0 ? (
          <div className="empty-notes">
            <p className="empty-notes__text">Notes is empty</p>
          </div>
        ) : (
          <NoteCards
            notes={notes}
            handleDeleteNote={handleDeleteNote}
            handleArchive={handleArchive}
            handleUnArchive={handleUnArchive}
          />
        )}

        <FormNote
          isShowFormNote={isShowFormNote}
          handleAddNote={handleAddNote}
          handleCloseFormNote={handleCloseFormNote}
        />
      </div>
    </main>
  );
}

MainContent.propTypes = {
  notes: PropTypes.array.isRequired,
  isShowArcNote: PropTypes.bool.isRequired,
  isShowFormNote: PropTypes.bool.isRequired,
  handleShowArcNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleUnArchive: PropTypes.func.isRequired,
  handleShowFormNote: PropTypes.func.isRequired,
  handleAddNote: PropTypes.func.isRequired,
  handleCloseFormNote: PropTypes.func.isRequired,
};
