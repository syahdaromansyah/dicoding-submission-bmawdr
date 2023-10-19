import PropTypes from 'prop-types';

export default function EmptyNotesInfo({ isShowArcNote, searchNote }) {
  const renderEmptyNotesInfo = () => {
    const searchNoteIsEmpty = searchNote.split(' ').join('') === '';
    if (!isShowArcNote) {
      return searchNoteIsEmpty ? (
        <p className="empty-notes__text">Notes is empty</p>
      ) : (
        <p className="empty-notes__text">
          Title note with &lsquo;{searchNote}&rsquo; is not found
        </p>
      );
    } else {
      return searchNoteIsEmpty ? (
        <p className="empty-notes__text">Archived notes is empty</p>
      ) : (
        <p className="empty-notes__text">
          Archived title note with &lsquo;{searchNote}&rsquo; is not found
        </p>
      );
    }
  };

  return <div className="empty-notes">{renderEmptyNotesInfo()}</div>;
}

EmptyNotesInfo.propTypes = {
  isShowArcNote: PropTypes.bool.isRequired,
  searchNote: PropTypes.string.isRequired,
};
