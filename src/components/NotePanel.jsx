import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import ArchiveNotesToggler from './ArchiveNotesToggler';

export default function NotePanel({
  isShowArcNote,
  isShowFormNote,
  handleShowFormNote,
  handleShowArcNote,
}) {
  return (
    <div className="note-panel">
      <ArchiveNotesToggler
        isShowArcNote={isShowArcNote}
        isShowFormNote={isShowFormNote}
        handleShowArcNote={handleShowArcNote}
      />

      <button
        className="note-panel__add-note"
        type="button"
        onClick={handleShowFormNote}
        tabIndex={isShowFormNote ? -1 : 0}
      >
        <FaPlus /> <span>Add Note</span>
      </button>
    </div>
  );
}

NotePanel.propTypes = {
  isShowArcNote: PropTypes.bool.isRequired,
  handleShowArcNote: PropTypes.func.isRequired,
  isShowFormNote: PropTypes.bool.isRequired,
  handleShowFormNote: PropTypes.func.isRequired,
};
