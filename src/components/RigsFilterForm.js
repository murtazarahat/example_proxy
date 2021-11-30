import { Box, Button, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import * as React from 'react';
import { DateInput, TextInput, useListContext } from 'react-admin';
import { Form } from 'react-final-form';

export const RigsFilterForm = () => {
  const { displayedFilters, filterValues, setFilters, hideFilter } =
    useListContext();

  const onSubmit = (values) => {
    if (Object.keys(values).length > 0) {
      setFilters(values);
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit} initialValues={filterValues}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box display="flex" alignItems="flex-end" mb={1}>
              <Box component="span" mb={-2.5} mr={2}>
                <TextInput source="words" label="Words" />
              </Box>
              <Box component="span" mr={2}>
                <DateInput
                  resettable
                  helperText={false}
                  source="from"
                  label="From Date"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <SearchIcon color="disabled" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box component="span" mr={2}>
                {/* Commentable filter */}
                <DateInput
                  resettable
                  helperText={false}
                  source="to"
                  label="To Date"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <SearchIcon color="disabled" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box component="span" mr={2} mb={1.5}>
                <Button variant="outlined" color="primary" type="submit">
                  Filter
                </Button>
              </Box>
              {/* <Box component="span" mb={1.5}>
                <Button variant="outlined" onClick={resetFilter}>
                  Close
                </Button>
              </Box> */}
            </Box>
          </form>
        )}
      </Form>
    </div>
  );
};
