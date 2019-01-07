import { connect } from 'react-redux';
import Theme from './theme';
import React from 'react';
import {postTheme, readThemeById} from '../../actions/theme_actions';

const mapStateToProps = state => {    
    return {        
        theme: state.entities.themes.newTheme
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postTheme: data => dispatch(postTheme(data)),
        getThemeById: id => dispatch(readThemeById(id))
    };
};

class EditThemeForm extends React.Component {
  componentDidMount(){
    this.props.getThemeById(this.props.match.params.themeId);
  }

  render() {
    const { theme, postTheme } = this.props;
    console.log(">>>>>>>> Render", this.props);
    return theme ? (
      <Theme theme={theme} postTheme={postTheme} />
    ) : <div/>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditThemeForm);