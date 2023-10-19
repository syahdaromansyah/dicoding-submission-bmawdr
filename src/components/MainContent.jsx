import PropTypes from 'prop-types';
import EmptyNotesInfo from './EmptyNotesInfo';
import FormNote from './FormNote.jsx';
import NoteCards from './NoteCards.jsx';
import NotePanel from './NotePanel.jsx';

export default function MainContent({
  notes,
  searchNote,
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
        <NotePanel
          isShowArcNote={isShowArcNote}
          isShowFormNote={isShowFormNote}
          handleShowArcNote={handleShowArcNote}
          handleShowFormNote={handleShowFormNote}
        />

        {notes.length === 0 ? (
          <EmptyNotesInfo
            isShowArcNote={isShowArcNote}
            searchNote={searchNote}
          />
        ) : (
          <NoteCards
            notes={notes}
            isShowFormNote={isShowFormNote}
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
  searchNote: PropTypes.string.isRequired,
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
