import PropTypes from 'prop-types';

export default function ArchiveNotesToggler({
  isShowArcNote,
  isShowFormNote,
  handleShowArcNote,
}) {
  return (
    <div className="archive-notes">
      <label
        className="archive-notes__label"
        htmlFor="show-archive-notes-toggler"
      >
        <input
          className="archive-notes__toggler"
          id="show-archive-notes-toggler"
          type="checkbox"
          checked={isShowArcNote}
          onChange={handleShowArcNote}
          tabIndex={isShowFormNote ? -1 : 0}
        />
        <span className="archive-notes__toggler-text">Show Archived Notes</span>
      </label>
    </div>
  );
}

ArchiveNotesToggler.propTypes = {
  isShowArcNote: PropTypes.bool.isRequired,
  isShowFormNote: PropTypes.bool.isRequired,
  handleShowArcNote: PropTypes.func.isRequired,
};
