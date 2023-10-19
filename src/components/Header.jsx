import PropTypes from 'prop-types';

export default function Header({
  searchNote,
  isShowFormNote,
  handleSearchNote,
}) {
  return (
    <header className="header-app">
      <nav className="nav-app">
        <div className="nav-app__container">
          <div className="nav-app__container-inner">
            <span className="nav-app__logo">Notes</span>
            <input
              className="nav-app__search-notes"
              type="text"
              placeholder="Search notes"
              value={searchNote}
              onChange={(ev) => handleSearchNote(ev.target.value)}
              tabIndex={isShowFormNote ? -1 : 0}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  searchNote: PropTypes.string.isRequired,
  isShowFormNote: PropTypes.bool.isRequired,
  handleSearchNote: PropTypes.func.isRequired,
};
