import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class FormNote extends React.Component {
  constructor() {
    super();

    this.state = {
      titleNote: '',
      bodyNote: '',
    };

    this.handleTitleNote = this.handleTitleNote.bind(this);
    this.handleBodyNote = this.handleBodyNote.bind(this);
    this.handleSubmitNote = this.handleSubmitNote.bind(this);
  }

  handleTitleNote(ev) {
    const titleValue = ev.target.value;

    if (titleValue.length > 50) return;

    this.setState(() => ({
      titleNote: titleValue,
    }));
  }

  handleBodyNote(ev) {
    const bodyValue = ev.target.value;
    this.setState(() => ({
      bodyNote: bodyValue,
    }));
  }

  handleSubmitNote() {
    if (
      this.state.titleNote.split(' ').join('') === '' ||
      this.state.bodyNote.split(' ').join('') === ''
    )
      return;

    this.props.handleAddNote({
      id: Date.now(),
      title: this.state.titleNote,
      body: this.state.bodyNote,
      createdAt: new Date().toISOString(),
      archived: false,
    });

    this.setState(() => ({
      titleNote: '',
      bodyNote: '',
    }));

    this.props.handleCloseFormNote();
  }

  render() {
    const { isShowFormNote, handleCloseFormNote } = this.props;
    return (
      <form
        className="form-note"
        hidden={!isShowFormNote}
        aria-hidden={!isShowFormNote}
      >
        <div className="form-note__overlay">
          <div className="form-note__form-container">
            <h1 className="form-note__form-title">Create Note</h1>

            <p
              className={cn(
                'form-note__char-limiter-text',
                {
                  'form-note__char-limiter-text--green':
                    this.state.titleNote.length <= 30,
                },
                {
                  'form-note__char-limiter-text--yellow':
                    this.state.titleNote.length > 30 &&
                    this.state.titleNote.length <= 40,
                },
                {
                  'form-note__char-limiter-text--rose':
                    this.state.titleNote.length > 40,
                },
              )}
            >
              Character left: {50 - this.state.titleNote.length}
            </p>

            <div className="form-note__note-input">
              <label className="form-note__label-input" htmlFor="title-note">
                <input
                  className="form-note__title-input"
                  id="title-note"
                  type="text"
                  placeholder="Title note"
                  value={this.state.titleNote}
                  onChange={this.handleTitleNote}
                />
              </label>

              <label className="form-note__label-input" htmlFor="content-note">
                <textarea
                  className="form-note__content-input"
                  id="content-note"
                  placeholder="Write note here"
                  value={this.state.bodyNote}
                  onChange={this.handleBodyNote}
                />
              </label>
            </div>

            <div className="form-note__buttons-container">
              <button
                className="form-note__button form-note__button--create"
                type="button"
                onClick={this.handleSubmitNote}
              >
                Create Note
              </button>

              <button
                className="form-note__button form-note__button--cancel"
                type="button"
                onClick={handleCloseFormNote}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default FormNote;

FormNote.propTypes = {
  isShowFormNote: PropTypes.bool.isRequired,
  handleAddNote: PropTypes.func.isRequired,
  handleCloseFormNote: PropTypes.func.isRequired,
};
