import { connect } from 'react-redux';
import Theme from './theme';
import React from 'react';
import {postTheme, readThemeById} from '../../actions/theme_actions';

const mapStateToProps = state => {    
    return {        
        theme: state.entities.themes.newTheme,
        formType: 'Edit'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postTheme: data => dispatch(postTheme(data)),
        getThemeById: id => dispatch(readThemeById(id))
    };
};

class EditThemeForm extends React.Component {
  componentDidMount() {
    this.props.getThemeById(this.props.match.params.themeId);
  }

  render() {
    const { theme, postTheme, formType } = this.props;    
    return theme && theme._id === this.props.match.params.themeId ? (
      <Theme theme={theme} postTheme={postTheme} formType={formType} />
    ) : <div/>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditThemeForm);