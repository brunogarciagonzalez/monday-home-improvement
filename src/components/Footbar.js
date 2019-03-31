import React from "react";
import { Segment, Grid } from "semantic-ui-react";

const Footbar = props => (
  <Segment basic>
    <hr />
    <Grid verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={3} />

        <Grid.Column width={10} className="footbar-center">
          <p>
            Monday Home Improvement, LLC.<br />
            MHIC #: 128038<br />
            Phone: <a href="tel:13013991094">(301) 399. 1094</a>
            <br />
            8830 Castlebury Court<br />
            Laurel, MD 20723<br />
            <a href="mailto:MondayHomeImprovement@hotmail.com">
              MondayHomeImprovement@hotmail.com
            </a>
            <br />
            &copy; 2019
          </p>
        </Grid.Column>

        <Grid.Column width={3} />
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Footbar;
