import React from 'react';
import { Segment, Header, Grid } from 'semantic-ui-react';

const Topbar = (props) => (
    <Segment basic>
        <Grid verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column width={3}>
                    <button style={{backgroundColor: "black", borderRadius: "10px"}} onClick={props.handlePaneOpen}><i class="big inverted bars icon" style={{margin: "0 0 0 0"}}></i></button>
                </Grid.Column>

                <Grid.Column width={10} className="x">
                        <Header as='h1'> <img src="./company_logo.png" alt="company logo"/>Monday Home Improvement, LLC.</Header>
                </Grid.Column>

                <Grid.Column width={3} />
            </Grid.Row>
        </Grid>
        <hr />

    </Segment>
)

export default Topbar;