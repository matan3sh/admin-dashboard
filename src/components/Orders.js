import React from 'react';
import Moment from 'react-moment';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';

import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders({ leads, updateLead, callers }) {
  const classes = useStyles();

  const handleChange = (event, lead) => {
    const updatedLead = {
      ...lead,
      wasCalled: event.target.checked,
    };
    updateLead(updatedLead);
  };

  const onChange = (event, lead) => {
    const findCaller = lead.callers.filter(
      (caller) => event.target.value == caller.id
    );
    let currCallers = lead.callers;
    currCallers.unshift({ name: findCaller[0].name, id: findCaller[0].id });
    const updatedLead = {
      ...lead,
      callers: [...currCallers],
    };
    updateLead(updatedLead);
  };

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Was Called</TableCell>
            <TableCell align='right'>Caller</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>
                <Moment format='LL'>{lead.inboundDate}</Moment>
              </TableCell>
              <TableCell>
                {lead.fname} {lead.lname}
              </TableCell>
              <TableCell>{lead.email}</TableCell>
              <TableCell>{lead.phone}</TableCell>
              <TableCell>{lead.words}</TableCell>
              <TableCell>
                <Checkbox
                  checked={lead.wasCalled ? true : false}
                  onChange={(e) => handleChange(e, lead)}
                  inputProps={{
                    'aria-label': 'primary checkbox',
                  }}
                />
              </TableCell>
              <TableCell>
                <Select
                  native
                  value={lead.callers[0]}
                  onChange={(e) => onChange(e, lead)}
                  inputProps={{
                    name: 'age',
                    id: 'filled-age-native-simple',
                  }}
                >
                  {lead.callers.map((caller, index) => (
                    <option value={caller.id} key={index}>
                      {caller.name}
                    </option>
                  ))}
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color='primary' href='#' onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
