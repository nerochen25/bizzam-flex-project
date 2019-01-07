import { connect } from 'react-redux';
import Theme from './theme';
import {postTheme} from '../../actions/theme_actions';

const mapStateToProps = state => {    
    return {        
        theme: {name: '', description: '', themeItems: []}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postTheme: data => dispatch(postTheme(data))        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Theme);