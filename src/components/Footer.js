import React from 'react';
import {Segment, Grid} from 'semantic-ui-react';

export default function Footer(props) {
  return (
    <Segment style={{marginTop: '0.5em'}} inverted vertical>
        <Grid inverted>
          <Grid.Row>
            <Grid.Column floated='right' width={6}>
              Copyleft 2020
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Segment>
  )
}
