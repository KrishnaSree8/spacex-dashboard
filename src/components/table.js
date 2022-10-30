import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import _ from 'lodash';


export default function DataTable(props) {

  return (
    <TableContainer>
      <Table size={props.size}>
        <TableHead>
          <TableRow>
            {
                _.map(props.headers, (header) => {
                    return <TableCell padding={header.padding}  align={header.align}>{header.label}</TableCell>
                })
            }
          </TableRow>
        </TableHead>
        <TableBody>
            {
                props.rows.map((row, index) => <TableRow key={index}>
                    {
                        _.map(props.headers, (header) => {
                            const cell = _.find(row, ({ column: header.label }));
                            return cell && (
                                <TableCell align={header.align} padding={header.padding} >
                                    {cell.render ? cell.render() : cell.value}
                                </TableCell>
                                
                            )
                        })
                    }
                </TableRow>)
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
