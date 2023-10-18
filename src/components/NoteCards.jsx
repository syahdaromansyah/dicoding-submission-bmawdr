import PropTypes from 'prop-types';
import { showFormattedDate } from '../lib/showFormattedDate.js';

export default function NoteCards({
  notes,
  handleDeleteNote,
  handleArchive,
  handleUnArchive,
}) {
  return (
    <div className="notes">
      {notes.map((data) => (
        <article key={data.id} className="notes__item-card">
          <div className="notes__item-content">
            <h2 className="notes__item-title">{data.title}</h2>
            <time className="notes__item-date" dateTime={data.createdAt}>
              {showFormattedDate(data.createdAt)}
            </time>
            <p className="notes__item-body">{data.body}</p>
          </div>

          <div className="notes__buttons-container">
            <button
              className=" notes__button notes__button--delete"
              type="button"
              onClick={() => handleDeleteNote(data.id)}
            >
              Delete
            </button>

            {data.archived ? (
              <button
                className="notes__button notes__button--unarchive"
                type="button"
                onClick={() => handleUnArchive(data.id)}
              >
                Unarchive
              </button>
            ) : (
              <button
                className="notes__button notes__button--archive"
                type="button"
                onClick={() => handleArchive(data.id)}
              >
                Archive
              </button>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

NoteCards.propTypes = {
  notes: PropTypes.array.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleUnArchive: PropTypes.func.isRequired,
};
