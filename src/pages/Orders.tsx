import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(
    id: number,
    teamName: string,
    address: string,
    points: number,
) {
    return { id,teamName, address, points };
}

const rows = [
    createData(
        0,
        'Chelsea FC',
        'Stamford Bridge',
        0,
    ),
    createData(
        1,
        'Liverpool FC',
        'Anfield',
        0,
    ),
];

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function Orders() {
    return (
        <React.Fragment>
            <Title>Premier League Table</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Team Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell align="right">Points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.teamName}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell align="right">{`${row.points}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}