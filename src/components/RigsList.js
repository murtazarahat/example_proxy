import * as React from 'react';
import { Datagrid, DateField, List, TextField } from 'react-admin';

import { ListActions } from './RigsActions';

// const postFilters = [<TextInput source="q" label="Search" alwaysOn />];

export const RigsList = (props) => {
  return (
    <List {...props} actions={<ListActions />} title="Admin Panel">
      <Datagrid rowClick="edit">
        <TextField source="rig_name" label="Rig" />
        {/* <TextField source="well_name" label="Well" />
        <TextField source="forman" label="Forman" /> */}
        <TextField source="summary_of_system" label="System" />
        <TextField source="engineer" label="Engineer" />
        <DateField source="actual_date" label="Date" />
      </Datagrid>
    </List>
  );
};
