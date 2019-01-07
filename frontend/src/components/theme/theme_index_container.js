import { connect } from 'react-redux';
import ThemeIndex from './theme_index';
import {getThemes} from '../../actions/theme_actions';


const mapStateToProps = state => {
    
    return {
        themes: Object.values(state.entities.themes.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getThemes: () => dispatch(getThemes())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeIndex);