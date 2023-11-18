import { SpanPagination, WrapperPaginate } from './Pagination.styled';

const Pagination = ({ exePerPage, totalExe, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalExe / exePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <WrapperPaginate>
        {pageNumbers.map((number) => (
          <div key={number}>
            <SpanPagination href="#" onClick={() => paginate(number)} />
          </div>
        ))}
      </WrapperPaginate>
    </div>
  );
};

export default Pagination;
