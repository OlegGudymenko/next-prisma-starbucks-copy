import { useRouter } from 'next/navigation';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import Button from '@/components/Button'

const BlogsTable = ({
  data
}) => {
  const { push } = useRouter();

  const handleSelect = (postId) => {
    push(`/admin/post/${postId}`)
  }

  return (
    <div className='container mx-auto'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Button Text</TableCell>              
              <TableCell>Image position</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                onClick={() => handleSelect(row.id)}
                key={row.id}
                hover
                className='cursor-pointer'
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell >
                  {row.title}
                </TableCell>
                <TableCell>{row.content.slice(0, 15)}</TableCell>
                <TableCell>{row.buttonText}</TableCell>
                <TableCell>{row.imagePosition}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default BlogsTable;