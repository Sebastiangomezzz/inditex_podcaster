import { Link } from "react-router-dom";
//material-ui components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//utils
import {
  dateFormat,
  millisToHoursMinutesSeconds,
} from "../../../../utils/tableDataFormat";

export const PodcastDetailEpisodesList = ({ tracksData }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "1rem", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)" }}
    >
      <Table sx={{ minWidth: 650 }} size="large" aria-label="tracks-list">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Title</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Date</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Duration</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracksData?.results?.map((row, i) => {
            if (i === 0) return null;
            return (
              <TableRow
                key={row.trackId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link
                    to={`/podcast/${row.collectionId}/episode/${row.trackId}`}
                  >
                    {row.trackName}
                  </Link>
                </TableCell>
                <TableCell align="right">
                  {dateFormat(row.releaseDate)}
                </TableCell>
                <TableCell align="right">
                  {millisToHoursMinutesSeconds(row.trackTimeMillis)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
