import { Box, Button } from '@material-ui/core';
import ContentFilter from '@material-ui/icons/FilterList';
import * as React from 'react';
import { ExportButton, TopToolbar, useListContext } from 'react-admin';

import { RigsFilterForm } from './RigsFilterForm';

const RigsFilterButton = () => {
  const { showFilter } = useListContext();
  return (
    <Button
      size="small"
      color="primary"
      onClick={() => showFilter('main')}
      startIcon={<ContentFilter />}
    >
      Filter
    </Button>
  );
};

export const ListActions = (props) => {
  return (
    <Box width="100%">
      <TopToolbar>
        {/* <RigsFilterButton /> */}
        {/* <ExportButton /> */}
      </TopToolbar>
      <RigsFilterForm />
    </Box>
  );
};
