import React from 'react';
import { withRouter } from 'react-router-dom';
import './theme.css';

class Theme extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        <div>
            <HashRouter>
                <Switch>
                    <Route
                        path='/board/index'
                        component={() => <BoardIndex
                            boards={this.props.boards}
                            selectBoard={this.selectBoard}
                        />}

                    />
                    <Route
                        path='/board/play'
                        component={() => <BoardShowContainer
                            id={this.state.board_id}
                        />}
                    />
                </Switch>
            </HashRouter>
        </div>
    }