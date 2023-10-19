import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import PageLayout from './components/PageLayout';
import { getInitialData } from './data/initialData.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      notes: getInitialData(),
      searchNote: '',
      isShowArcNote: false,
      isShowFormNote: false,
    };

    this.handleSearchNote = this.handleSearchNote.bind(this);
    this.handleShowArcNote = this.handleShowArcNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleUnArchive = this.handleUnArchive.bind(this);
    this.handleShowFormNote = this.handleShowFormNote.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleCloseFormNote = this.handleCloseFormNote.bind(this);
  }

  handleSearchNote(searchValue) {
    this.setState(() => ({
      searchNote: searchValue,
    }));
  }

  handleShowArcNote() {
    this.setState((prevValue) => {
      return {
        isShowArcNote: !prevValue.isShowArcNote,
      };
    });
  }

  handleDeleteNote(noteId) {
    this.setState((prevValue) => {
      return {
        notes: prevValue.notes.filter((note) => note.id !== noteId),
      };
    });
  }

  handleArchive(noteId) {
    this.setState((prevValue) => {
      return {
        notes: prevValue.notes.map((note) => {
          if (note.id === noteId) {
            return {
              ...note,
              archived: true,
            };
          }

          return note;
        }),
      };
    });
  }

  handleUnArchive(noteId) {
    this.setState((prevValue) => {
      return {
        notes: prevValue.notes.map((note) => {
          if (note.id === noteId) {
            return {
              ...note,
              archived: false,
            };
          }

          return note;
        }),
      };
    });
  }

  handleShowFormNote() {
    this.setState(() => {
      return {
        isShowFormNote: true,
      };
    });
  }

  handleAddNote(newNote) {
    this.setState((prevValue) => {
      return {
        notes: [...prevValue.notes, newNote],
      };
    });
  }

  handleCloseFormNote() {
    this.setState(() => {
      return {
        isShowFormNote: false,
      };
    });
  }

  render() {
    const filteredNotes = this.state.notes
      .filter((note) => note.archived === this.state.isShowArcNote)
      .filter((note) =>
        note.title
          .toLowerCase()
          .startsWith(this.state.searchNote.toLowerCase()),
      );

    return (
      <PageLayout>
        <Header
          searchNote={this.state.searchNote}
          isShowFormNote={this.state.isShowFormNote}
          handleSearchNote={this.handleSearchNote}
        />

        <MainContent
          notes={filteredNotes}
          searchNote={this.state.searchNote}
          isShowArcNote={this.state.isShowArcNote}
          isShowFormNote={this.state.isShowFormNote}
          handleShowArcNote={this.handleShowArcNote}
          handleDeleteNote={this.handleDeleteNote}
          handleArchive={this.handleArchive}
          handleUnArchive={this.handleUnArchive}
          handleShowFormNote={this.handleShowFormNote}
          handleAddNote={this.handleAddNote}
          handleCloseFormNote={this.handleCloseFormNote}
        />
      </PageLayout>
    );
  }
}

export default App;
