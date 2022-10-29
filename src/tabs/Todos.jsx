import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  render() {
    return (
      <>
        <SearchForm />
        <Grid>
          <GridItem>
            <Todo id={1} text={'some text'} />
          </GridItem>
        </Grid>
      </>
    );
  }
}
